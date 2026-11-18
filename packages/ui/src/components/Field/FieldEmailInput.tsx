import type { ComponentPropsWithoutRef } from 'react';

import { FieldControl } from './FieldControl';
import { FieldInput } from './FieldInput';

export interface FieldEmailInputProps extends Omit<
  ComponentPropsWithoutRef<typeof FieldInput>,
  'type'
> {}

export function FieldEmailInput({
  autoComplete = 'email',
  ...props
}: FieldEmailInputProps) {
  return (
    <FieldControl>
      <FieldInput
        {...props}
        type="email"
        autoComplete={autoComplete}
      />
    </FieldControl>
  );
}
