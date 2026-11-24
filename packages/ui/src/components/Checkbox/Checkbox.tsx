import { Check, Minus } from 'lucide-react';
import {
  forwardRef,
  useCallback,
  useId,
  useMemo,
  type ChangeEvent,
  type InputHTMLAttributes,
  type ReactNode,
} from 'react';

import { cx } from '@/utils/cx';

import styles from './Checkbox.module.css';

export interface CheckboxProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'size'
> {
  label?: ReactNode;
  description?: ReactNode;
  error?: ReactNode;

  invalid?: boolean;
  indeterminate?: boolean;
}

export const Checkbox = forwardRef<
  HTMLInputElement,
  CheckboxProps
>(
  (
    {
      id: idProp,
      label,
      description,
      error,
      invalid = false,
      indeterminate = false,
      disabled = false,
      required = false,
      className,
      'aria-describedby': ariaDescribedBy,
      'aria-invalid': ariaInvalid,
      onChange,
      ...inputProps
    },
    forwardedRef,
  ) => {
    const generatedId = useId();
    const id = idProp ?? generatedId;

    const descriptionId = description
      ? `${id}-description`
      : undefined;

    const errorId = error ? `${id}-error` : undefined;

    const describedBy = useMemo(() => {
      return cx(ariaDescribedBy, descriptionId, errorId);
    }, [ariaDescribedBy, descriptionId, errorId]);

    const handleChange = (
      event: ChangeEvent<HTMLInputElement>,
    ) => {
      onChange?.(event);
    };

    const setRef = useCallback(
      (element: HTMLInputElement | null) => {
        if (element) {
          element.indeterminate = indeterminate;
        }

        if (typeof forwardedRef === 'function') {
          forwardedRef(element);
        } else if (forwardedRef) {
          forwardedRef.current = element;
        }
      },
      [indeterminate, forwardedRef],
    );

    return (
      <div
        className={cx(styles.checkbox, className)}
        data-disabled={disabled || undefined}
        data-invalid={invalid || undefined}
      >
        <label className={styles.label} htmlFor={id}>
          <span className={styles.control}>
            <input
              {...inputProps}
              ref={setRef}
              id={id}
              type="checkbox"
              disabled={disabled}
              required={required}
              aria-invalid={
                ariaInvalid ?? (invalid ? true : undefined)
              }
              aria-checked={
                indeterminate ? 'mixed' : undefined
              }
              aria-describedby={describedBy}
              data-invalid={invalid || undefined}
              data-indeterminate={
                indeterminate || undefined
              }
              onChange={handleChange}
            />

            <span
              className={styles.indicator}
              aria-hidden="true"
            >
              <Check
                strokeWidth={3}
                className={styles.checkmark}
              />
              <Minus
                strokeWidth={3}
                className={styles.mixed}
              />
            </span>
          </span>

          {(label || description) && (
            <span className={styles.content}>
              {label && (
                <span className={styles.text}>
                  {label}
                  {required && (
                    <span
                      className={styles.required}
                      aria-hidden="true"
                    >
                      *
                    </span>
                  )}
                </span>
              )}

              {description && (
                <span
                  id={descriptionId}
                  className={styles.description}
                >
                  {description}
                </span>
              )}
            </span>
          )}
        </label>

        {error && (
          <span
            id={errorId}
            className={styles.error}
            role="alert"
          >
            {error}
          </span>
        )}
      </div>
    );
  },
);

Checkbox.displayName = 'Checkbox';
