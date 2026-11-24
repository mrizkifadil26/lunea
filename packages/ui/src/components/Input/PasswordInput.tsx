import { Eye, EyeOff } from 'lucide-react';
import {
  useState,
  type ComponentPropsWithoutRef,
} from 'react';

import { Field } from '@/components/Field/Field';
import { FieldAdornment } from '@/components/Field/FieldAdornment';
import { FieldControl } from '@/components/Field/FieldControl';
import { FieldInput } from '@/components/Field/FieldInput';
import { IconButton } from '@/components/IconButton';

export interface PasswordInputProps extends Omit<
  ComponentPropsWithoutRef<typeof Field.Input>,
  'type'
> {}

export function PasswordInput({
  ...props
}: PasswordInputProps) {
  const [visible, setVisible] = useState(false);

  return (
    <FieldControl>
      <FieldInput
        {...props}
        type={visible ? 'text' : 'password'}
        autoComplete="current-password"
      />

      <FieldAdornment placement="end">
        <IconButton
          variant="ghost"
          size="sm"
          aria-label={
            visible ? 'Hide password' : 'Show password'
          }
          aria-pressed={visible}
          onClick={() => setVisible((value) => !value)}
        >
          {visible ? <EyeOff /> : <Eye />}
        </IconButton>
      </FieldAdornment>
    </FieldControl>
  );
}
