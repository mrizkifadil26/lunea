import type { ReactNode } from 'react';

import styles from './ButtonIcon.module.css';

export interface ButtonIconProps {
  children: ReactNode;
}

export function ButtonIcon({ children }: ButtonIconProps) {
  return (
    <span className={styles.icon} aria-hidden="true">
      {children}
    </span>
  );
}
