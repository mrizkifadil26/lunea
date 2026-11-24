import type { AnchorHTMLAttributes } from 'react';

import styles from './LinkButton.module.css';

export interface LinkButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {}

export const LinkButton = ({
  className,
  ...props
}: LinkButtonProps) => {
  return (
    <a
      {...props}
      className={[styles.link, className]
        .filter(Boolean)
        .join(' ')}
    />
  );
};

export namespace LinkButton {
  export type Props = LinkButtonProps;
}
