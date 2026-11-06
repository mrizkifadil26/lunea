import type { ComponentPropsWithoutRef } from 'react';

import {
  Field,
  FieldAction,
  FieldControl,
  FieldIcon,
} from '@/components/Field';
import { Input } from '@/components/Input';
import { usePasswordVisibility } from '@/hooks/usePasswordVisibility';
import { EyeIcon, EyeOffIcon, LockIcon } from '@/icons';

type PasswordFieldProps = Omit<
  ComponentPropsWithoutRef<typeof Input>,
  'type' | 'id'
> & {
  id: string;
  label?: string;
  description?: string;
  error?: string;
  required?: boolean;
};

export function PasswordField({
  id,
  label = 'Password',
  description,
  error,
  required = false,
  ...props
}: PasswordFieldProps) {
  const password = usePasswordVisibility();

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
            <LockIcon />
          </FieldIcon>
        }
        trailing={
          <FieldAction
            aria-label={password.visible ? 'Hide password' : 'Show password'}
            onClick={password.toggle}
          >
            {password.visible ? <EyeOffIcon /> : <EyeIcon />}
          </FieldAction>
        }
      >
        <Input
          {...props}
          id={id}
          type={password.inputType}
          autoComplete="new-password"
          aria-invalid={Boolean(error)}
        />
      </FieldControl>
    </Field>
  );
}
