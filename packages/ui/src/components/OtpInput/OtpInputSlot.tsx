import './otp-input.css';

type OtpInputSlotProps = {
  value?: string;
  active?: boolean;
};

export function OtpInputSlot({
  value,
  active = false,
}: OtpInputSlotProps) {
  return (
    <span
      className={[
        'ui-otp-input-slot',
        active && 'ui-otp-input-slot-active',
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {value}
    </span>
  );
}
