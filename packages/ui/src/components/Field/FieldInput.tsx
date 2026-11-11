import {
  forwardRef,
  useCallback,
  type InputHTMLAttributes,
  type Ref,
} from 'react';

import { cx } from '@/utils/cx';
import {
  FIELD_COMPONENT,
  type FieldComponentType,
} from './field-internal';

import { useFieldControlContext } from './FieldControl';
import styles from './FieldInput.module.css';

export type FieldInputProps =
  InputHTMLAttributes<HTMLInputElement>;

export const FieldInput = forwardRef<
  HTMLInputElement,
  FieldInputProps
>(function FieldInput(
  { className, ...props },
  forwardedRef: Ref<HTMLInputElement>,
) {
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

  return (
    <input
      {...props}
      ref={setRef}
      className={cx(styles.input, className)}
    />
  );
});

Object.assign(FieldInput, {
  [FIELD_COMPONENT]: 'input' satisfies FieldComponentType,
});
