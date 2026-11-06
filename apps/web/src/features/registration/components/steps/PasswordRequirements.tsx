type PasswordRequirementsProps = {
  password: string;
};

const requirements = [
  {
    label: 'At least 8 characters',
    check: (value: string) => value.length >= 8,
  },
  {
    label: 'One uppercase letter',
    check: (value: string) => /[A-Z]/.test(value),
  },
  {
    label: 'One lowercase letter',
    check: (value: string) => /[a-z]/.test(value),
  },
  {
    label: 'One number',
    check: (value: string) => /\d/.test(value),
  },
];

export function PasswordRequirements({
  password,
}: PasswordRequirementsProps) {
  return (
    <ul className="password-requirements">
      {requirements.map(({ label, check }) => {
        const valid = check(password);

        return (
          <li
            key={label}
            className={`password-requirement${valid ? ' is-valid' : ''}`}
          >
            <span
              className="requirement-icon"
              aria-hidden="true"
            >
              {valid ? '✓' : '○'}
            </span>

            <span>{label}</span>
          </li>
        );
      })}
    </ul>
  );
}
