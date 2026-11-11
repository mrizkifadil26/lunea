import type {
  ButtonHTMLAttributes,
  ReactNode,
} from 'react';

import { cx } from '@/utils/cx';
import styles from './ButtonIcon.module.css';

export type ButtonIconVariant =
  | 'primary'
  | 'secondary'
  | 'outline'
  | 'ghost'
  | 'destructive';

export type ButtonIconSize = 'sm' | 'md' | 'lg';

export type ButtonIconProps =
  ButtonHTMLAttributes<HTMLButtonElement> & {
    icon: ReactNode;
    variant?: ButtonIconVariant;
    size?: ButtonIconSize;
    loading?: boolean;
  };

function Spinner() {
  return (
    <span className={styles.spinner} aria-hidden="true" />
  );
}

export function ButtonIcon({
  icon,
  variant = 'ghost',
  size = 'md',
  loading = false,
  disabled,
  className,
  type = 'button',
  ...props
}: ButtonIconProps) {
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
        <span className={styles.icon} aria-hidden="true">
          {icon}
        </span>
      )}
    </button>
  );
}

export namespace ButtonIcon {
  export type Props = ButtonIconProps;
}
