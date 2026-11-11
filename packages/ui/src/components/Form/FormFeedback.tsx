import type { HTMLAttributes, ReactNode } from 'react';

import { cx } from '@/utils/cx';
import styles from './FormFeedback.module.css';

type FeedbackIntent =
  | 'error'
  | 'info'
  | 'warning'
  | 'success';

export type FormFeedbackProps =
  HTMLAttributes<HTMLDivElement> & {
    children?: ReactNode;
    intent: FeedbackIntent;
    icon?: ReactNode;
  };

const defaultRoles: Record<
  FeedbackIntent,
  'alert' | 'status'
> = {
  error: 'alert',
  warning: 'alert',
  info: 'status',
  success: 'status',
};

export function FormFeedback({
  children,
  className,
  intent,
  icon,
  role,
  ...props
}: FormFeedbackProps) {
  return (
    <div
      className={cx(styles.feedback, className)}
      data-intent={intent}
      role={role ?? defaultRoles[intent]}
      {...props}
    >
      {icon && (
        <span className={styles.icon} aria-hidden="true">
          {icon}
        </span>
      )}

      <div className={styles.content}>{children}</div>
    </div>
  );
}

export type FormFeedbackVariantProps = Omit<
  FormFeedbackProps,
  'intent'
>;

export function FormFeedbackError(
  props: FormFeedbackVariantProps,
) {
  return <FormFeedback {...props} intent="error" />;
}

export function FormFeedbackWarning(
  props: FormFeedbackVariantProps,
) {
  return <FormFeedback {...props} intent="warning" />;
}

export function FormFeedbackInfo(
  props: FormFeedbackVariantProps,
) {
  return <FormFeedback {...props} intent="info" />;
}

export function FormFeedbackSuccess(
  props: FormFeedbackVariantProps,
) {
  return <FormFeedback {...props} intent="success" />;
}
