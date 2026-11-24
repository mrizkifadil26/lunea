import type { HTMLAttributes, ReactNode } from 'react';

import { cx } from '@/utils/cx';

import styles from './Divider.module.css';

export interface DividerProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

export function Divider({
  children,
  className,
  ...props
}: DividerProps) {
  return (
    <div
      {...props}
      className={cx(styles.divider, className)}
      role={children ? undefined : 'separator'}
    >
      {children && (
        <>
          <span className={styles.line} />
          <span className={styles.label}>{children}</span>
          <span className={styles.line} />
        </>
      )}

      {!children && <span className={styles.line} />}
    </div>
  );
}
