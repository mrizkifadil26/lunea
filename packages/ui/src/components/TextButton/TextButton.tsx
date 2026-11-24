import type { ButtonHTMLAttributes } from 'react';

import { cx } from '@/utils/cx';

import styles from './TextButton.module.css';

export interface TextButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const TextButton = ({
  className,
  ...props
}: TextButtonProps) => {
  return (
    <button
      {...props}
      className={cx(styles.button, className)}
    />
  );
};

export namespace TextButton {
  export type Props = TextButtonProps;
}
