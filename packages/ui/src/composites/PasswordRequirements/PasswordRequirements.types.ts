export type PasswordRequirement = {
  id: string;
  label: string;
  check: (password: string) => boolean;
};

export type PasswordRequirementResult =
  PasswordRequirement & {
    valid: boolean;
  };

export type PasswordStrength =
  | 'empty'
  | 'forbidden'
  | 'weak'
  | 'good'
  | 'strong';

export type PasswordCompromiseStatus =
  | 'unknown'
  | 'safe'
  | 'compromised';

export type PasswordRequirementsVariant =
  | 'list'
  | 'progress'
  | 'meter';

export type PasswordRequirementsProps = {
  password: string;
  requirements?: PasswordRequirement[];
  variant?: PasswordRequirementsVariant;
  visible?: boolean;
  validated?: boolean;
  compromiseStatus?: PasswordCompromiseStatus;
};
