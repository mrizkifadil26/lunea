import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from 'react';

import { cx } from '@/utils/cx';

import { Button } from '../Button';
import styles from './IconButton.module.css';

export interface IconButtonProps extends Omit<
  ComponentPropsWithoutRef<typeof Button>,
  'children' | 'leadingIcon' | 'trailingIcon'
> {
  children: ReactNode;
}

export const IconButton = forwardRef<
  HTMLButtonElement,
  IconButtonProps
>(({ className, children, ...props }, ref) => {
  return (
    <Button
      {...props}
      ref={ref}
      className={cx(styles.button, className)}
    >
      <span className={styles.icon} aria-hidden="true">
        {children}
      </span>
    </Button>
  );
});

IconButton.displayName = 'IconButton';

export namespace IconButton {
  export type Props = IconButtonProps;
}
