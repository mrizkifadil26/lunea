import {
  createContext,
  forwardRef,
  useContext,
  useId,
  useMemo,
  type HTMLAttributes,
  type LabelHTMLAttributes,
  type ReactNode,
} from 'react';

import { cx } from '@/utils/cx';

import { Checkbox as FieldCheckbox } from '../Checkbox/Checkbox';
import styles from './Field.module.css';
import {
  FieldAdornment,
  type FieldAdornmentProps,
} from './FieldAdornment';
import {
  FieldControl,
  type FieldControlProps,
} from './FieldControl';
import { FieldEmailInput } from './FieldEmailInput';
import {
  FieldInput,
  type FieldInputProps,
} from './FieldInput';
import {
  FieldError,
  FieldInfo,
  FieldMessage,
  FieldSuccess,
  FieldWarning,
  type FieldMessageProps,
} from './FieldMessage';
import { FieldOtpInput } from './FieldOtpInput';
import { FieldPasswordInput } from './FieldPasswordInput';

type FieldContextValue = {
  inputId: string;
  labelId: string;
  descriptionId: string;
  errorId: string;

  required: boolean;

  invalid: boolean;
  disabled: boolean;
};

const FieldContext =
  createContext<FieldContextValue | null>(null);

export function useFieldContext() {
  const context = useContext(FieldContext);

  if (!context) {
    throw new Error(
      'Field components must be used inside a <Field> component.',
    );
  }

  return context;
}

type FieldProps = HTMLAttributes<HTMLDivElement> & {
  children?: ReactNode;
  spacing?: 'none' | 'sm' | 'md' | 'lg';
  required?: boolean;
  invalid?: boolean;
  disabled?: boolean;
};

type FieldLabelProps =
  LabelHTMLAttributes<HTMLLabelElement> & {
    children: ReactNode;
  };

type FieldDescriptionProps =
  HTMLAttributes<HTMLSpanElement> & {
    children: ReactNode;
  };

const FieldLabel = forwardRef<
  HTMLLabelElement,
  FieldLabelProps
>(function FieldLabel(
  { children, className, ...props },
  ref,
) {
  const { inputId, labelId, required } = useFieldContext();

  return (
    <label
      {...props}
      ref={ref}
      id={props.id ?? labelId}
      htmlFor={inputId}
      className={cx(styles.label, className)}
    >
      {children}

      {required && (
        <span
          className={styles.required}
          aria-hidden="true"
        >
          *
        </span>
      )}
    </label>
  );
});

const FieldDescription = forwardRef<
  HTMLParagraphElement,
  FieldDescriptionProps
>(function FieldDescription(
  { children, className, ...props },
  ref,
) {
  const { descriptionId } = useFieldContext();

  return (
    <p
      {...props}
      ref={ref}
      id={props.id ?? descriptionId}
      className={cx(styles.description, className)}
    >
      {children}
    </p>
  );
});

const FieldRoot = forwardRef<HTMLDivElement, FieldProps>(
  function Field(
    {
      children,
      required = false,
      invalid = false,
      disabled = false,
      spacing = 'none',
      className,
      ...props
    },
    ref,
  ) {
    const generatedId = useId();

    const inputId = `field-${generatedId}`;
    const labelId = `field-${generatedId}-label`;
    const descriptionId = `field-${generatedId}-description`;
    const errorId = `field-${generatedId}-error`;

    const context = useMemo<FieldContextValue>(
      () => ({
        inputId,
        labelId,
        descriptionId,
        errorId,
        required,
        invalid,
        disabled,
      }),
      [
        inputId,
        labelId,
        descriptionId,
        errorId,
        required,
        invalid,
        disabled,
      ],
    );

    return (
      <FieldContext.Provider value={context}>
        <div
          {...props}
          ref={ref}
          className={cx(styles.field, className)}
          data-spacing={spacing}
        >
          {children}
        </div>
      </FieldContext.Provider>
    );
  },
);

export const Field = Object.assign(FieldRoot, {
  Label: FieldLabel,
  Description: FieldDescription,
  Message: FieldMessage,
  Error: FieldError,
  Warning: FieldWarning,
  Info: FieldInfo,
  Success: FieldSuccess,
  Control: FieldControl,
  Adornment: FieldAdornment,
  Input: FieldInput,
  Checkbox: FieldCheckbox,
  Password: FieldPasswordInput,
  Email: FieldEmailInput,
  OTP: FieldOtpInput,
});

Field.displayName = 'Field';

export namespace Field {
  export type Props = FieldProps;
  export type LabelProps = FieldLabelProps;
  export type DescriptionProps = FieldDescriptionProps;
  export type MessageProps = FieldMessageProps;
  export type ControlProps = FieldControlProps;
  export type AdornmentProps = FieldAdornmentProps;
  export type InputProps = FieldInputProps;
}
