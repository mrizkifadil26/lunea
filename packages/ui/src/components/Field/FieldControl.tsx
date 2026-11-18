import {
  Children,
  cloneElement,
  createContext,
  isValidElement,
  useCallback,
  useContext,
  useMemo,
  useRef,
  type ComponentPropsWithoutRef,
  type HTMLAttributes,
  type ReactElement,
  type ReactNode,
  type RefObject,
} from 'react';

import { cx } from '@/utils/cx';

import type { FieldInputProps } from './FieldInput';

import { useFieldContext } from './Field';
import {
  FIELD_COMPONENT,
  type FieldComponentMarker,
  type FieldComponentType,
} from './field-internal';
import { type FieldAdornmentProps } from './FieldAdornment';
import styles from './FieldControl.module.css';

export interface FieldControlContextValue {
  inputRef: RefObject<HTMLInputElement | null>;

  registerInput: (element: HTMLInputElement | null) => void;
  focusInput: () => void;
}

const FieldControlContext =
  createContext<FieldControlContextValue | null>(null);

export function useFieldControlContext() {
  return useContext(FieldControlContext);
}

type FieldControlChild =
  | ReactElement<FieldInputProps>
  | ReactElement<FieldAdornmentProps>;

export type FieldControlProps = Omit<
  HTMLAttributes<HTMLDivElement>,
  'children'
> & {
  children: FieldControlChild | FieldControlChild[];
};

interface FieldControlMetadata {
  readonly hasStartAdornment: boolean;
  readonly hasEndAdornment: boolean;
}

function getFieldComponentType(
  element: ReactElement,
): FieldComponentType | undefined {
  const type =
    element.type as Partial<FieldComponentMarker>;

  return type[FIELD_COMPONENT];
}

function getElementName(element: ReactElement): string {
  return typeof element.type === 'string'
    ? `<${element.type} />`
    : 'an unsupported component';
}

function reportFieldControlError(message: string): void {
  //   if (process.env.NODE_ENV !== 'production') {
  //     console.error(`[Field.Control] ${message}`);
  //   }
  throw new Error(`[Field.Control] ${message}`);
}

function analyzeFieldControlChildren(
  children: readonly ReactNode[],
): FieldControlMetadata {
  let hasStartAdornment = false;
  let hasEndAdornment = false;
  let controlCount = 0;

  for (const child of children) {
    if (!isValidElement(child)) {
      reportFieldControlError(
        'Only <Field.Input /> and <Field.Adornment /> are allowed as direct children.',
      );

      continue;
    }

    const componentType = getFieldComponentType(child);

    switch (componentType) {
      case 'input': {
        controlCount += 1;

        if (controlCount > 1) {
          reportFieldControlError(
            'Only one <Field.Input /> is allowed inside <Field.Control>.',
          );
        }

        break;
      }

      case 'adornment': {
        const { placement } =
          child.props as FieldAdornmentProps;

        if (placement === 'start') {
          if (hasStartAdornment) {
            reportFieldControlError(
              'Only one start <Field.Adornment /> is allowed inside <Field.Control>.',
            );
          }

          hasStartAdornment = true;
        }

        if (placement === 'end') {
          if (hasEndAdornment) {
            reportFieldControlError(
              'Only one end <Field.Adornment /> is allowed inside <Field.Control>.',
            );
          }

          hasEndAdornment = true;
        }

        break;
      }

      case 'control': {
        reportFieldControlError(
          '<Field.Control> cannot contain another <Field.Control>.',
        );

        break;
      }

      default: {
        reportFieldControlError(
          [
            'Unsupported child in <Field.Control>.',
            '',
            'Expected:',
            '  <Field.Input />',
            '  <Field.Adornment />',
            '',
            `Received: ${getElementName(child)}`,
          ].join('\n'),
        );

        break;
      }
    }
  }

  if (controlCount !== 1) {
    reportFieldControlError(
      'Field.Control requires exactly one form control.',
    );
  }

  return {
    hasStartAdornment,
    hasEndAdornment,
  };
}

function addControlMetadata(element: ReactElement) {
  if (getFieldComponentType(element) !== 'input') {
    return element;
  }

  return cloneElement(element, {
    'data-field-control-input': '',
  } as ComponentPropsWithoutRef<'input'>);
}

export function FieldControl({
  children,
  className,
  ...props
}: FieldControlProps) {
  const field = useFieldContext();
  const inputRef = useRef<HTMLInputElement>(null);

  const registerInput = useCallback(
    (element: HTMLInputElement | null) => {
      inputRef.current = element;
    },
    [],
  );

  const focusInput = useCallback(() => {
    inputRef.current?.focus({
      preventScroll: true,
    });
  }, []);

  const contextValue = useMemo<FieldControlContextValue>(
    () => ({
      inputRef,
      registerInput,
      focusInput,
    }),
    [registerInput, focusInput],
  );

  const childArray = Children.toArray(children);
  const metadata = analyzeFieldControlChildren(childArray);

  return (
    <FieldControlContext.Provider value={contextValue}>
      <div
        {...props}
        className={cx(styles.control, className)}
        data-field-control=""
        data-has-start-adornment={
          metadata.hasStartAdornment || undefined
        }
        data-has-end-adornment={
          metadata.hasEndAdornment || undefined
        }
        data-disabled={field.disabled || undefined}
      >
        {childArray.map((child) => {
          if (!isValidElement(child)) {
            return child;
          }

          return addControlMetadata(child);
        })}
      </div>
    </FieldControlContext.Provider>
  );
}

Object.assign(FieldControl, {
  [FIELD_COMPONENT]: 'control' satisfies FieldComponentType,
});
