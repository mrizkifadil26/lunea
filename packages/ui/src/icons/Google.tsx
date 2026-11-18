import type { IconProps } from './types';

export function GoogleIcon({
  size = 18,
  ...props
}: IconProps) {
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
        fill="currentColor"
        d="M21.35 12.27c0-.71-.06-1.39-.18-2.04H12v3.86h5.23a4.47 4.47 0 0 1-1.94 2.93v2.43h3.14c1.84-1.69 2.92-4.18 2.92-7.18Z"
      />
      <path
        fill="currentColor"
        d="M12 21.5c2.63 0 4.84-.87 6.45-2.35l-3.14-2.43c-.87.58-1.98.93-3.31.93-2.54 0-4.69-1.72-5.46-4.03H3.29v2.51A9.74 9.74 0 0 0 12 21.5Z"
      />
      <path
        fill="currentColor"
        d="M6.54 13.62a5.86 5.86 0 0 1 0-3.24V7.87H3.29a9.75 9.75 0 0 0 0 8.26l3.25-2.51Z"
      />
      <path
        fill="currentColor"
        d="M12 6.35c1.43 0 2.71.49 3.72 1.46l2.79-2.79C16.84 3.46 14.63 2.5 12 2.5a9.74 9.74 0 0 0-8.71 5.37l3.25 2.51C7.31 8.07 9.46 6.35 12 6.35Z"
      />
    </svg>
  );
}
