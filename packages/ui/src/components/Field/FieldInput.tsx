import {
  forwardRef,
  useCallback,
  type ForwardRefExoticComponent,
  type InputHTMLAttributes,
  type RefAttributes,
} from 'react';

import { cx } from '@/utils/cx';

import { Input } from '../Input';
import { useFieldContext } from './Field';
import {
  FIELD_COMPONENT,
  type FieldComponentType,
} from './field-internal';
import { useFieldControlContext } from './FieldControl';

export type FieldInputProps =
  InputHTMLAttributes<HTMLInputElement>;

export const FieldInputImpl = forwardRef<
  HTMLInputElement,
  FieldInputProps
>(function FieldInput(
  {
    id,
    disabled,
    required,
    'aria-describedby': ariaDescribedBy,
    'aria-invalid': ariaInvalid,
    ...props
  },
  forwardedRef,
) {
  const field = useFieldContext();
  const control = useFieldControlContext();

  const setRef = useCallback(
    (element: HTMLInputElement | null) => {
      // Register with Field.Control if one exists.
      control?.registerInput(element);

      // Preserve consumer ref.
      if (typeof forwardedRef === 'function') {
        forwardedRef(element);
      } else if (forwardedRef) {
        forwardedRef.current = element;
      }
    },
    [control, forwardedRef],
  );

  const describedBy = cx(
    ariaDescribedBy,
    field.descriptionId,
    field.invalid ? field.errorId : undefined,
  );

  return (
    <Input
      {...props}
      ref={setRef}
      id={id ?? field.inputId}
      disabled={disabled ?? field.disabled}
      required={required ?? field.required}
      aria-invalid={
        ariaInvalid ?? (field.invalid || undefined)
      }
      aria-describedby={describedBy || undefined}
      aria-labelledby={field.labelId}
    />
  );
});

export const FieldInputMarked = Object.assign(
  FieldInputImpl,
  {
    [FIELD_COMPONENT]: 'input' satisfies FieldComponentType,
  },
);

export const FieldInput: ForwardRefExoticComponent<
  FieldInputProps & RefAttributes<HTMLInputElement>
> = FieldInputMarked;

FieldInput.displayName = 'Field.Input';
