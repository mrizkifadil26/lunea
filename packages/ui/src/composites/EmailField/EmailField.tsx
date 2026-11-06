import { Field, FieldControl, FieldIcon } from '@/components/Field';
import { Input } from '@/components/Input';
import { MailIcon } from '@/icons';
import type { ComponentPropsWithoutRef } from 'react';

type EmailFieldProps = Omit<
  ComponentPropsWithoutRef<typeof Input>,
  'type' | 'id'
> & {
  id: string;
  label?: string;
  description?: string;
  error?: string;
  required?: boolean;
};

export function EmailField({
  id,
  label = 'Email',
  description,
  error,
  required = false,
  ...props
}: EmailFieldProps) {
  return (
    <Field
      htmlFor={id}
      label={label}
      description={description}
      error={error}
      required={required}
    >
      <FieldControl
        leading={
          <FieldIcon>
            <MailIcon />
          </FieldIcon>
        }
      >
        <Input
          {...props}
          id={id}
          type="email"
          autoComplete="email"
          aria-invalid={Boolean(error)}
        />
      </FieldControl>
    </Field>
  );
}
