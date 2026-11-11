import {
  forwardRef,
  type ComponentPropsWithoutRef,
} from 'react';

import styles from './Input.module.css';

export type InputProps =
  ComponentPropsWithoutRef<'input'> & {
    invalid?: boolean;
  };

export const Input = forwardRef<
  HTMLInputElement,
  InputProps
>(function Input(
  {
    className,
    invalid,
    'aria-invalid': ariaInvalid,
    ...props
  },
  ref,
) {
  return (
    <input
      ref={ref}
      {...props}
      className={[styles.input, className]
        .filter(Boolean)
        .join(' ')}
      aria-invalid={
        invalid !== undefined ? invalid : ariaInvalid
      }
    />
  );
});
