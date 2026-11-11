import {
  Children,
  cloneElement,
  createContext,
  isValidElement,
  useCallback,
  useContext,
  useRef,
  type ComponentPropsWithoutRef,
  type HTMLAttributes,
  type ReactElement,
  type ReactNode,
  type RefObject,
} from 'react';

import { cx } from '@/utils/cx';

import {
  FIELD_COMPONENT,
  type FieldComponentMarker,
  type FieldComponentType,
} from './field-internal';

import type { FieldAdornmentProps } from './FieldAdornment';
import styles from './FieldControl.module.css';

export type FieldControlProps =
  HTMLAttributes<HTMLDivElement> & {
    children: ReactNode;
  };

interface FieldControlMetadata {
  readonly hasStartAdornment: boolean;
  readonly hasEndAdornment: boolean;
}

function analyzeFieldControlChildren(
  children: readonly ReactNode[],
): FieldControlMetadata {
  let hasStartAdornment = false;
  let hasEndAdornment = false;
  let controlCount = 0;

  for (const child of children) {
    if (!isValidElement(child)) {
      continue;
    }

    const componentType = getFieldComponentType(child);

    if (isFieldAdornmentElement(child)) {
      const { placement } = child.props;

      if (placement === 'start') {
        if (hasStartAdornment) {
          throw new Error(
            'Field.Control allows only one start adornment.',
          );
        }

        hasStartAdornment = true;
      }

      if (placement === 'end') {
        if (hasEndAdornment) {
          throw new Error(
            'Field.Control allows only one end adornment.',
          );
        }

        hasEndAdornment = true;
      }

      continue;
    }

    if (componentType === 'input') {
      controlCount += 1;

      if (controlCount > 1) {
        throw new Error(
          'Field.Control allows only one form control.',
        );
      }

      continue;
    }

    if (componentType === 'control') {
      throw new Error(
        'Field.Control cannot contain another Field.Control.',
      );
    }

    if (controlCount === 0) {
      throw new Error(
        'Field.Control requires exactly one form control.',
      );
    }
  }

  return {
    hasStartAdornment,
    hasEndAdornment,
  };
}

// const FIELD_CONTROL_CONTEXT_VALUES = {
//   none: {
//     hasStartAdornment: false,
//     hasEndAdornment: false,
//   },
//   start: {
//     hasStartAdornment: true,
//     hasEndAdornment: false,
//   },
//   end: {
//     hasStartAdornment: false,
//     hasEndAdornment: true,
//   },
//   both: {
//     hasStartAdornment: true,
//     hasEndAdornment: true,
//   },
// } as const;

// interface FieldControlContextValue {
//   readonly hasStartAdornment: boolean;
//   readonly hasEndAdornment: boolean;
// }

// export const FieldControlContext =
//   createContext<FieldControlContextValue | null>(null);

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

export function FieldControlProvider({
  value,
  children,
}: {
  value: FieldControlContextValue;
  children: React.ReactNode;
}) {
  return (
    <FieldControlContext.Provider value={value}>
      {children}
    </FieldControlContext.Provider>
  );
}

export function FieldControl({
  children,
  className,
  ...props
}: FieldControlProps) {
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

  const contextValue: FieldControlContextValue = {
    inputRef,
    registerInput,
    focusInput,
  };

  const childArray = Children.toArray(children);

  const metadata = analyzeFieldControlChildren(childArray);

  const classes = cx(styles.control, className);

  return (
    <FieldControlProvider value={contextValue}>
      <div
        className={classes}
        data-field-control=""
        data-has-start-adornment={
          metadata.hasStartAdornment || undefined
        }
        data-has-end-adornment={
          metadata.hasEndAdornment || undefined
        }
        {...props}
      >
        {childArray.map((child, index) => {
          if (!isValidElement(child)) {
            return child;
          }

          return addControlMetadata(child, metadata, index);
        })}
      </div>
    </FieldControlProvider>
  );
}

Object.assign(FieldControl, {
  [FIELD_COMPONENT]: 'control' satisfies FieldComponentType,
});

function getFieldComponentType(
  element: ReactElement,
): FieldComponentType | undefined {
  const type =
    element.type as Partial<FieldComponentMarker>;

  return type[FIELD_COMPONENT];
}

// function getAdornmentPlacement(
//   element: ReactElement<FieldAdornmentProps>,
// ): FieldAdornmentPlacement | undefined {
//   return element.props.placement;
// }

function addControlMetadata(
  element: ReactElement,
  metadata: FieldControlMetadata,
  index: number,
) {
  const componentType = getFieldComponentType(element);

  if (componentType !== 'input') {
    return element;
  }

  return cloneElement(element, {
    'data-field-control-input': '',
    'data-has-start-adornment':
      metadata.hasStartAdornment || undefined,
    'data-has-end-adornment':
      metadata.hasEndAdornment || undefined,
  } as ComponentPropsWithoutRef<'input'>);
}

function isFieldAdornmentElement(
  element: ReactElement,
): element is ReactElement<FieldAdornmentProps> {
  return getFieldComponentType(element) === 'adornment';
}

// function getFieldControlContextValue(
//   hasStartAdornment: boolean,
//   hasEndAdornment: boolean,
// ): FieldControlContextValue {
//   if (hasStartAdornment && hasEndAdornment) {
//     return FIELD_CONTROL_CONTEXT_VALUES.both;
//   }

//   if (hasStartAdornment) {
//     return FIELD_CONTROL_CONTEXT_VALUES.start;
//   }

//   if (hasEndAdornment) {
//     return FIELD_CONTROL_CONTEXT_VALUES.end;
//   }

//   return FIELD_CONTROL_CONTEXT_VALUES.none;
// }

// /* -------------------------------------------------------------------------- */
// /* Namespace                                                                  */
// /* -------------------------------------------------------------------------- */

// export const Field = {
//   Control: FieldControl,
//   Adornment: FieldAdornment,
// };
