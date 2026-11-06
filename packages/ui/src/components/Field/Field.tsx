import type { ReactNode } from 'react';
import './field.css';

type FieldProps = {
  children: ReactNode;
  label?: ReactNode;
  description?: ReactNode;
  error?: string;
  htmlFor?: string;
  required?: boolean;
};

export function Field({
  children,
  label,
  description,
  error,
  htmlFor,
  required = false,
}: FieldProps) {
  return (
    <div className="ui-field">
      {label && (
        <FieldLabel htmlFor={htmlFor!} required={required}>
          {label}
        </FieldLabel>
      )}
      {children}

      {description && <FieldDescription>{description}</FieldDescription>}
      {error && <FieldError>{error}</FieldError>}
    </div>
  );
}

type FieldLabelProps = {
  htmlFor: string;
  children: ReactNode;
  required?: boolean;
};

export function FieldLabel({
  htmlFor,
  children,
  required = false,
}: FieldLabelProps) {
  return (
    <label className="ui-field-label" htmlFor={htmlFor}>
      {children}

      {required && (
        <span className="ui-field-required" aria-hidden="true">
          {' '}
          *
        </span>
      )}
    </label>
  );
}

type FieldDescriptionProps = {
  children: ReactNode;
};

export function FieldDescription({ children }: FieldDescriptionProps) {
  return <span className="ui-field-description">{children}</span>;
}

type FieldErrorProps = {
  children: ReactNode;
};

export function FieldError({ children }: FieldErrorProps) {
  return (
    <span className="ui-field-error" role="alert">
      {children}
    </span>
  );
}

type FieldControlProps = {
  children: ReactNode;
  leading?: ReactNode;
  trailing?: ReactNode;
};

export function FieldControl({
  children,
  leading,
  trailing,
}: FieldControlProps) {
  return (
    <div className="ui-field-control">
      {leading && <span className="ui-field-leading">{leading}</span>}

      {children}

      {trailing && <span className="ui-field-trailing">{trailing}</span>}
    </div>
  );
}

type FieldIconProps = {
  children: ReactNode;
};

export function FieldIcon({ children }: FieldIconProps) {
  return (
    <span className="ui-field-icon" aria-hidden="true">
      {children}
    </span>
  );
}

type FieldActionProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export function FieldAction({ className, ...props }: FieldActionProps) {
  return (
    <button
      type="button"
      className={`ui-field-action ${className ?? ''}`}
      {...props}
    />
  );
}
