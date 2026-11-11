import {
  forwardRef,
  type HTMLAttributes,
  type LabelHTMLAttributes,
  type ReactNode,
} from 'react';

import { cx } from '@/utils/cx';
import styles from './Field.module.css';
import {
  FieldAdornment,
  type FieldAdornmentProps,
} from './FieldAdornment';
import {
  FieldControl,
  type FieldControlProps,
} from './FieldControl';
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

type FieldProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  label?: ReactNode;
  labelProps?: Omit<FieldLabelProps, 'children'>;
  description?: ReactNode;
  error?: ReactNode;
  htmlFor?: string;
  required?: boolean;
};

type FieldLabelProps =
  LabelHTMLAttributes<HTMLLabelElement> & {
    children: ReactNode;
    required?: boolean;
  };

type FieldDescriptionProps =
  HTMLAttributes<HTMLSpanElement> & {
    children: ReactNode;
  };

const FieldBase = forwardRef<HTMLDivElement, FieldProps>(
  function FieldBase(
    {
      children,
      label,
      description,
      error,
      htmlFor,
      required = false,
      className,
      ...props
    },
    ref,
  ) {
    return (
      <div
        {...props}
        ref={ref}
        className={cx(styles.field, className)}
        data-invalid={error ? 'true' : undefined}
      >
        {label && (
          <FieldLabel htmlFor={htmlFor} required={required}>
            {label}
          </FieldLabel>
        )}

        {children}

        {error ? (
          <FieldError>{error}</FieldError>
        ) : (
          description && (
            <FieldDescription>
              {description}
            </FieldDescription>
          )
        )}
      </div>
    );
  },
);

export function FieldLabel({
  children,
  required = false,
  className,
  ...props
}: FieldLabelProps) {
  return (
    <label
      className={cx(styles.label, className)}
      {...props}
    >
      {children}

      {required && (
        <span
          className={styles.required}
          aria-hidden="true"
        >
          {' '}
          *
        </span>
      )}
    </label>
  );
}

export function FieldDescription({
  children,
  className,
  ...props
}: FieldDescriptionProps) {
  return (
    <span
      className={cx(styles.description, className)}
      {...props}
    >
      {children}
    </span>
  );
}

export const Field = Object.assign(FieldBase, {
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
});

export namespace Field {
  export type Props = FieldProps;
  export type LabelProps = FieldLabelProps;
  export type DescriptionProps = FieldDescriptionProps;
  export type MessageProps = FieldMessageProps;
  export type ControlProps = FieldControlProps;
  export type AdornmentProps = FieldAdornmentProps;
  export type InputProps = FieldInputProps;
}
