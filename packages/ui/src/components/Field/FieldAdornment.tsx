import {
  forwardRef,
  type HTMLAttributes,
  type MouseEvent,
  type ReactNode,
} from 'react';
import { FIELD_COMPONENT } from './field-internal';

import { cx } from '@/utils/cx';
import styles from './FieldAdornment.module.css';
import { useFieldControlContext } from './FieldControl';

export type FieldAdornmentPlacement = 'start' | 'end';

export type FieldAdornmentProps =
  HTMLAttributes<HTMLSpanElement> & {
    placement: FieldAdornmentPlacement;
    interactive?: boolean;
    children: ReactNode;
  };

export type FieldAdornmentElementProps =
  FieldAdornmentProps & {
    [FIELD_COMPONENT]: 'adornment';
  };

export const FieldAdornment = forwardRef<
  HTMLDivElement,
  FieldAdornmentProps
>(function FieldAdornment(
  {
    children,
    placement,
    interactive = false,
    className,
    onMouseDown,
    ...props
  },
  ref,
) {
  const control = useFieldControlContext();

  const handleMouseDown = (
    event: MouseEvent<HTMLDivElement>,
  ) => {
    /*
     * Only interactive adornments participate
     * in input focus management.
     */
    if (interactive && control) {
      /*
       * Prevent the browser from moving focus
       * from the input to the adornment/button.
       */
      event.preventDefault();

      control.focusInput();
    }

    onMouseDown?.(event);
  };

  const classes = cx(
    styles.adornment,
    placement === 'start' ? styles.start : styles.end,
    className,
  );

  return (
    <span
      {...props}
      ref={ref}
      className={classes}
      data-field-adornment=""
      data-placement={placement}
      data-interactive={interactive || undefined}
      onMouseDown={handleMouseDown}
    >
      {children}
    </span>
  );
});

(
  FieldAdornment as typeof FieldAdornment & {
    [FIELD_COMPONENT]: 'adornment';
  }
)[FIELD_COMPONENT] = 'adornment';
