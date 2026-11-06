import type { ButtonHTMLAttributes } from 'react';
import styles from './Button.module.css';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
}

export const Button = ({
  variant = 'primary',
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      data-variant={variant}
      className={[styles.button, , className]
        .filter(Boolean)
        .join(' ')}
    />
  );
};

export namespace Button {
  export type Props = ButtonProps;
}
