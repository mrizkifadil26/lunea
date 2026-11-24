import type { HTMLAttributes } from 'react';

import { cx } from '@/utils/cx';

import styles from './ButtonGroup.module.css';

export interface ButtonGroupProps extends HTMLAttributes<HTMLDivElement> {
  orientation?: 'horizontal' | 'vertical';
  gap?: 'sm' | 'md' | 'lg';
}

export function ButtonGroup({
  orientation = 'horizontal',
  gap = 'md',
  className,
  ...props
}: ButtonGroupProps) {
  return (
    <div
      {...props}
      className={cx(styles.group, className)}
      data-gap={gap}
      data-orientation={orientation}
    />
  );
}

ButtonGroup.displayName = 'ButtonGroup';

export namespace ButtonGroup {
  export type Props = ButtonGroupProps;
}
