import { Eye, EyeOff } from 'lucide-react';
import {
  useState,
  type ComponentPropsWithoutRef,
} from 'react';

import { IconButton } from '../IconButton/IconButton';
import { FieldAdornment } from './FieldAdornment';
import { FieldControl } from './FieldControl';
import { FieldInput } from './FieldInput';

export interface FieldPasswordInputProps extends Omit<
  ComponentPropsWithoutRef<typeof FieldInput>,
  'type'
> {}

export function FieldPasswordInput({
  autoComplete = 'current-password',
  ...props
}: FieldPasswordInputProps) {
  const [visible, setVisible] = useState(false);

  return (
    <FieldControl>
      <FieldInput
        {...props}
        type={visible ? 'text' : 'password'}
        autoComplete={autoComplete}
      />

      <FieldAdornment placement="end">
        <IconButton
          aria-label={
            visible ? 'Hide password' : 'Show password'
          }
          variant="ghost"
          aria-pressed={visible}
          onClick={() => setVisible((value) => !value)}
        >
          {visible ? <EyeOff /> : <Eye />}
        </IconButton>
      </FieldAdornment>
    </FieldControl>
  );
}
