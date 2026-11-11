import type { ButtonHTMLAttributes } from 'react';

import styles from './TextButton.module.css';

export interface TextButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const TextButton = ({
  className,
  ...props
}: TextButtonProps) => {
  return (
    <button
      {...props}
      className={[styles.button, className]
        .filter(Boolean)
        .join(' ')}
    />
  );
};

export namespace TextButton {
  export type Props = TextButtonProps;
}
