import { Fragment } from 'react';
import styles from './BrandPanel.module.css';

export interface BrandContent {
  eyebrow: string;
  headline: string[];
  description: string;
}

export const defaultBrandContent: BrandContent = {
  eyebrow: 'Welcome back',
  headline: ['Build.', 'Collect.', 'Grow.'],
  description:
    'Everything you need to build and grow your product in one place.',
};

interface BrandPanelProps {
  brand?: Partial<BrandContent>;
}

export function BrandPanel({ brand }: BrandPanelProps) {
  const content = {
    ...defaultBrandContent,
    ...brand,
  };

  return (
    <aside className={styles.panel}>
      <a href="/" className={styles.identity}>
        <img src="/assets/brand/logo.svg" alt="Lunea" />

        <span>Lunea</span>
      </a>

      <div className={styles.message}>
        <span>{content.eyebrow}</span>

        <h1>
          {content.headline.map((line, index) => (
            <Fragment key={line}>
              {index > 0 && <br />}
              {line}
            </Fragment>
          ))}
        </h1>

        <p>{content.description}</p>
      </div>

      <div className={styles.decoration} aria-hidden="true">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </aside>
  );
}
