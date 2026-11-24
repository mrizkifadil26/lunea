import { type InputHTMLAttributes, useRef } from 'react';

import { useOtpInput } from '@/hooks/useOtpInput';

import styles from './OtpInput.module.css';

type OtpInputSlotProps = {
  value?: string;
  active?: boolean;
};

type OtpInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'type' | 'value' | 'onChange'
> & {
  length?: number;
  value?: string;
  onChange?: (value: string) => void;
  onComplete?: (value: string) => void;
};

export function OtpInputSlot({
  value,
  active = false,
}: OtpInputSlotProps) {
  return (
    <span
      className={styles.slot}
      data-active={active || undefined}
    >
      {value}
    </span>
  );
}

export function OtpInput({
  length = 6,
  value,
  onChange,
  onComplete,
  id,
  disabled,
  'aria-label': ariaLabel,
  ...props
}: OtpInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const otp = useOtpInput({
    length,
    value,
    onChange,
    onComplete,
  });

  const handleSlotClick = () => {
    inputRef.current?.focus();
  };

  return (
    <div
      className={styles.root}
      data-disabled={disabled || undefined}
      onClick={handleSlotClick}
    >
      <input
        {...props}
        ref={inputRef}
        id={id}
        className={styles.nativeInput}
        type="text"
        inputMode="numeric"
        autoComplete="one-time-code"
        pattern="[0-9]*"
        maxLength={length}
        value={otp.value}
        onChange={otp.handleChange}
        onPaste={otp.handlePaste}
        onKeyDown={otp.handleKeyDown}
        disabled={disabled}
        aria-label={ariaLabel ?? 'Verification code'}
      />

      <div
        className={styles.slots}
        aria-hidden="true"
        style={
          {
            '--otp-length': length,
          } as React.CSSProperties
        }
      >
        {Array.from({ length }, (_, index) => (
          <OtpInputSlot
            key={index}
            value={otp.value[index]}
            active={!disabled && index === otp.value.length}
          />
        ))}
      </div>
    </div>
  );
}
