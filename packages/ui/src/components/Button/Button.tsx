import {
  forwardRef,
  type ButtonHTMLAttributes,
} from 'react';

import { cx } from '@/utils/cx';

import styles from './Button.module.css';
import {
  ButtonIcon,
  type ButtonIconProps,
} from './ButtonIcon';

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'outline'
  | 'ghost'
  | 'destructive'
  | 'link';

export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
}

function Spinner() {
  return (
    <span className={styles.spinner} aria-hidden="true" />
  );
}

const ButtonRoot = forwardRef<
  HTMLButtonElement,
  ButtonProps
>(
  (
    {
      children,
      className,
      variant = 'primary',
      size = 'md',
      loading = false,
      disabled,
      type = 'button',
      ...props
    },
    ref,
  ) => {
    const isDisabled = disabled || loading;

    return (
      <button
        {...props}
        ref={ref}
        type={type}
        disabled={isDisabled}
        className={cx(styles.button, className)}
        data-variant={variant}
        data-size={size}
        data-loading={loading ? '' : undefined}
      >
        {loading ? <Spinner /> : children}
      </button>
    );
  },
);

export const Button = Object.assign(ButtonRoot, {
  Icon: ButtonIcon,
});

Button.displayName = 'Button';

export namespace Button {
  export type Props = ButtonProps;
  export type IconProps = ButtonIconProps;
}
