import { Outlet } from 'react-router-dom';
import styles from './AuthLayout.module.css';
import {
  BrandPanel,
  type BrandContent,
} from './components/BrandPanel';

interface AuthLayoutProps {
  brand?: Partial<BrandContent>;
}

export function AuthLayout({ brand }: AuthLayoutProps) {
  return (
    <div className={styles.layout}>
      {/* Brand Panel */}
      <BrandPanel brand={brand} />

      {/* Auth Panel */}
      <main className={styles.panel}>
        <div className={styles.content}>
          <Outlet />
        </div>
      </main>
    </div>
  );
}
