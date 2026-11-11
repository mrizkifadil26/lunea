import type {
  ButtonHTMLAttributes,
  ReactNode,
} from 'react';

import { cx } from '@/utils/cx';
import styles from './Button.module.css';

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'outline'
  | 'ghost'
  | 'destructive'
  | 'link';

export type ButtonSize = 'sm' | 'md' | 'lg';

export type ButtonProps =
  ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: ButtonVariant;
    size?: ButtonSize;

    loading?: boolean;

    leadingIcon?: ReactNode;
    trailingIcon?: ReactNode;
  };

function Spinner() {
  return (
    <span className={styles.spinner} aria-hidden="true" />
  );
}

export const Button = ({
  children,
  className,
  variant = 'primary',
  size = 'md',
  loading = false,
  leadingIcon,
  trailingIcon,
  disabled,
  type = 'button',
  ...props
}: ButtonProps) => {
  const isDisabled = disabled || loading;

  return (
    <button
      {...props}
      type={type}
      disabled={isDisabled}
      className={cx(styles.button, className)}
      data-variant={variant}
      data-size={size}
      data-loading={loading ? '' : undefined}
    >
      {loading ? (
        <Spinner />
      ) : (
        leadingIcon && (
          <span className={styles.icon} aria-hidden="true">
            {leadingIcon}
          </span>
        )
      )}

      <span className={styles.content}>{children}</span>

      {!loading && trailingIcon && (
        <span className={styles.icon} aria-hidden="true">
          {trailingIcon}
        </span>
      )}
    </button>
  );
};

export namespace Button {
  export type Props = ButtonProps;
}
