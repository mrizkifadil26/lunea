import {
  forwardRef,
  type ForwardRefExoticComponent,
  type HTMLAttributes,
  type MouseEvent,
  type ReactNode,
  type RefAttributes,
} from 'react';

import { cx } from '@/utils/cx';

import {
  FIELD_COMPONENT,
  type FieldComponentType,
} from './field-internal';
import styles from './FieldAdornment.module.css';
import { useFieldControlContext } from './FieldControl';

export type FieldAdornmentPlacement = 'start' | 'end';

export type FieldAdornmentProps = Omit<
  HTMLAttributes<HTMLDivElement>,
  'children'
> & {
  placement: FieldAdornmentPlacement;
  children: ReactNode;
};

const FieldAdornmentImpl = forwardRef<
  HTMLDivElement,
  FieldAdornmentProps
>(function FieldAdornment(
  { children, placement, className, onClick, ...props },
  ref,
) {
  const control = useFieldControlContext();

  const handleClick = (
    event: MouseEvent<HTMLDivElement>,
  ) => {
    onClick?.(event);

    if (event.defaultPrevented) {
      return;
    }

    if (event.target !== event.currentTarget) {
      return;
    }

    control?.focusInput();
  };

  return (
    <div
      {...props}
      ref={ref}
      className={cx(styles.adornment, className)}
      data-field-adornment=""
      data-placement={placement}
      onClick={handleClick}
    >
      {children}
    </div>
  );
});

export const FieldAdornmentMarked = Object.assign(
  FieldAdornmentImpl,
  {
    [FIELD_COMPONENT]:
      'adornment' satisfies FieldComponentType,
  },
);

export const FieldAdornment: ForwardRefExoticComponent<
  FieldAdornmentProps & RefAttributes<HTMLDivElement>
> = FieldAdornmentMarked;
