import {
  forwardRef,
  type ComponentPropsWithoutRef,
} from 'react';

import { cx } from '@/utils/cx';

import styles from './Input.module.css';

export type InputProps = ComponentPropsWithoutRef<'input'>;

export const Input = forwardRef<
  HTMLInputElement,
  InputProps
>(function Input({ className, ...props }, ref) {
  return (
    <input
      ref={ref}
      {...props}
      className={cx(styles.input, className)}
    />
  );
});
