import type { CSSProperties } from 'react';

import type { PasswordRequirementResult } from '../PasswordRequirements.types';

import styles from './PasswordRequirementsMeter.module.css';

type PasswordRequirementsMeterProps = {
  results: PasswordRequirementResult[];
};

const strengthLabels = [
  'Very weak',
  'Weak',
  'Fair',
  'Strong',
] as const;

export function PasswordRequirementsMeter({
  results,
}: PasswordRequirementsMeterProps) {
  const validCount = results.filter(
    ({ valid }) => valid,
  ).length;

  const total = results.length;

  const strength =
    total === 0
      ? 0
      : Math.min(
          Math.ceil(
            (validCount / total) * strengthLabels.length,
          ),
          strengthLabels.length,
        );

  const label =
    strength === 0
      ? 'Very weak'
      : strengthLabels[strength - 1];

  return (
    <div
      className={styles.container}
      data-strength={strength}
      style={
        {
          '--meter-count': strengthLabels.length,
        } as CSSProperties
      }
    >
      <div className={styles.header}>
        <span className={styles.label}>
          Password strength
        </span>

        <span className={styles.value} aria-hidden="true">
          {label}
        </span>
      </div>

      <div
        className={styles.meter}
        role="meter"
        aria-label="Password strength"
        aria-valuemin={0}
        aria-valuemax={strengthLabels.length}
        aria-valuenow={strength}
        aria-valuetext={label}
      >
        {strengthLabels.map((_, index) => {
          const segment = index + 1;

          return (
            <span
              key={segment}
              className={styles.segment}
              data-filled={segment <= strength || undefined}
              aria-hidden="true"
            />
          );
        })}
      </div>
    </div>
  );
}
