import { cx } from '@/utils/cx';
import type { HTMLAttributes, ReactNode } from 'react';

import styles from './FieldMessage.module.css';

type FieldMessageIntent =
  | 'error'
  | 'warning'
  | 'success'
  | 'info';

export type FieldMessageProps =
  HTMLAttributes<HTMLSpanElement> & {
    intent?: FieldMessageIntent;
    children: ReactNode;
  };

export function FieldMessage({
  children,
  className,
  intent = 'info',
  role,
  ...props
}: FieldMessageProps) {
  return (
    <span
      className={cx(styles.message, className)}
      data-intent={intent}
      role={role}
      {...props}
    >
      {children}
    </span>
  );
}

export function FieldError(props: FieldMessageProps) {
  return (
    <FieldMessage {...props} intent="error" role="alert" />
  );
}

export function FieldWarning(props: FieldMessageProps) {
  return <FieldMessage {...props} intent="warning" />;
}

export function FieldSuccess(props: FieldMessageProps) {
  return <FieldMessage {...props} intent="success" />;
}

export function FieldInfo(props: FieldMessageProps) {
  return <FieldMessage {...props} intent="info" />;
}
