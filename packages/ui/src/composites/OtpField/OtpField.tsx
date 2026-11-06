import { Field } from '@/components/Field';
import { OtpInput } from '@/components/OtpInput';
import type { ComponentPropsWithoutRef } from 'react';

type OtpFieldProps = Omit<ComponentPropsWithoutRef<typeof OtpInput>, 'id'> & {
  id: string;
  label?: string;
  description?: string;
  error?: string;
  required?: boolean;
};

export function OtpField({
  id,
  label = 'Verification code',
  description,
  error,
  required = false,
  ...props
}: OtpFieldProps) {
  return (
    <Field
      htmlFor={id}
      label={label}
      description={description}
      error={error}
      required={required}
    >
      <OtpInput {...props} id={id} aria-invalid={Boolean(error)} />
    </Field>
  );
}
