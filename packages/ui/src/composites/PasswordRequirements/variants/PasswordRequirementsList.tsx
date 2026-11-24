import { CheckIcon, CircleIcon } from 'lucide-react';

import type { PasswordRequirementResult } from '../PasswordRequirements.types';

import styles from './PasswordRequirementsList.module.css';

type PasswordRequirementsListProps = {
  results: PasswordRequirementResult[];
};

export function PasswordRequirementsList({
  results,
}: PasswordRequirementsListProps) {
  return (
    <ul className={styles.requirements}>
      {results.map(({ id, label, valid }) => (
        <li
          key={id}
          className={styles.requirement}
          data-valid={valid || undefined}
        >
          <span className={styles.icon} aria-hidden="true">
            {valid ? (
              <CheckIcon size={16} />
            ) : (
              <CircleIcon size={12} />
            )}
          </span>

          <span>{label}</span>
        </li>
      ))}
    </ul>
  );
}
