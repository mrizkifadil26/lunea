import { type InputHTMLAttributes, useRef } from 'react';

import { OtpInputSlot } from '@/components/OtpInput/OtpInputSlot';
import { useOtpInput } from '@/hooks/useOtpInput';

import './otp-input.css';

type OtpInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'type' | 'value' | 'onChange'
> & {
  length?: number;
  value?: string;
  onChange?: (value: string) => void;
  onComplete?: (value: string) => void;
};

export function OtpInput({
  length = 6,
  value,
  onChange,
  onComplete,
  id,
  disabled,
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
    <div className="ui-otp-input" onClick={handleSlotClick}>
      <input
        {...props}
        ref={inputRef}
        id={id}
        className="ui-otp-input-native"
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
        aria-label={
          props['aria-label'] ?? 'Verification code'
        }
      />

      <div
        className="ui-otp-input-slots"
        aria-hidden="true"
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
