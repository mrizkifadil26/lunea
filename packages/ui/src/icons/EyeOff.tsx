import type { IconProps } from './types';

export function EyeOffIcon({ size = 18, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M3 3L21 21"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M10.6 6.7C11.05 6.57 11.52 6.5 12 6.5C16.4 6.5 19.8 8.7 21.5 12C20.78 13.4 19.72 14.65 18.43 15.55"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M6.15 8.1C4.55 9.02 3.3 10.35 2.5 12C4.2 15.3 7.6 17.5 12 17.5C13.05 17.5 14.05 17.37 14.98 17.13"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}
