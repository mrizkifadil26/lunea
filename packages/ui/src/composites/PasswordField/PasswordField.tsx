import type { ComponentPropsWithoutRef } from 'react';

import {
  Field,
  FieldAction,
  FieldIcon,
} from '@/components/Field';
import { Input } from '@/components/Input';
import { usePasswordVisibility } from '@/hooks/usePasswordVisibility';
import { EyeClosedIcon, EyeIcon, LockIcon } from '@/icons';

import styles from './PasswordField.module.css';

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
      <Field.Control
        leading={
          <FieldIcon>
            <LockIcon />
          </FieldIcon>
        }
        trailing={
          <FieldAction
            className={styles.toggle}
            aria-label={
              password.visible
                ? 'Hide password'
                : 'Show password'
            }
            onClick={password.toggle}
          >
            {password.visible ? (
              //   <EyeOffIcon />
              <EyeClosedIcon size={24} />
            ) : (
              <EyeIcon />
            )}
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
      </Field.Control>
    </Field>
  );
}
