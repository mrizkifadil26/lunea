import type { ComponentType, SVGProps } from 'react';

import GithubLogo from '@/assets/brands/github_light.svg?react';
import GoogleLogo from '@/assets/brands/google.svg?react';
import MicrosoftLogo from '@/assets/brands/microsoft.svg?react';

import { Button, type ButtonProps } from './Button';
import styles from './OAuthButton.module.css';

type OAuthProvider = 'google' | 'microsoft' | 'github';

interface OAuthButtonProps extends Omit<
  ButtonProps,
  'children'
> {
  provider: OAuthProvider;
  children?: React.ReactNode;
}

const providerLabels = {
  google: 'Continue with Google',
  microsoft: 'Continue with Microsoft',
  github: 'Continue with GitHub',
} satisfies Record<OAuthProvider, string>;

const providerIcons = {
  google: GoogleLogo,
  microsoft: MicrosoftLogo,
  github: GithubLogo,
} satisfies Record<
  OAuthProvider,
  ComponentType<SVGProps<SVGSVGElement>>
>;

export const OAuthButton = ({
  provider,
  children,
  variant = 'outline',
  size = 'md',
  ...props
}: OAuthButtonProps) => {
  const ProviderIcon = providerIcons[provider];

  return (
    <Button {...props} variant={variant} size={size}>
      <Button.Icon>
        <ProviderIcon className={styles.icon} />
      </Button.Icon>

      {children ?? providerLabels[provider]}
    </Button>
  );
};
