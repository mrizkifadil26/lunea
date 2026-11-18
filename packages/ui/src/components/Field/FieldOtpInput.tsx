import type { ComponentPropsWithoutRef } from 'react';

import { OtpInput } from '@/components/OtpInput/OtpInput';

import { useFieldContext } from './Field';

export type FieldOtpInputProps = Omit<
  ComponentPropsWithoutRef<typeof OtpInput>,
  'id'
>;

export function FieldOtpInput({
  ...props
}: FieldOtpInputProps) {
  const field = useFieldContext();
  return <OtpInput {...props} id={field.inputId} />;
}
