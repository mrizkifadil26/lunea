import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';

import { AuthPageExample } from '@/features/auth/examples/AuthPageExample';
import { LoginPage } from '@/features/auth/pages/LoginPage';
import { ApiAccessExample } from '@/features/dashboard/examples/ApiAccessExample';
import { DashboardExample } from '@/features/dashboard/examples/DashboardExample';
import DataProductsExample from '@/features/dashboard/examples/DataProductsExample';
import { PlanBillingPageExample } from '@/features/dashboard/examples/PlanBillingPageExample';
import { PlaygroundExample } from '@/features/dashboard/examples/PlaygroundExample';
import { ProfilePageExample } from '@/features/dashboard/examples/ProfilePageExample';
import { SettingsPageExample } from '@/features/dashboard/examples/SettingsPageExample';
import UsagePageExample from '@/features/dashboard/examples/UsagePageExample';
import { RegisterPageExampleDirect } from '@/features/registration/examples/RegisterPageExampleDirect';
import { RegisterPageExampleMultistep } from '@/features/registration/examples/RegisterPageExampleMultistep';
import RegisterPage from '@/features/registration/pages/RegisterPage';
import { RegisterPageLegacy } from '@/features/registration/pages/RegisterPageLegacy';
import { AuthLayout } from '@/layouts/AuthLayout';

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <AuthLayout
              brand={{
                eyebrow: 'Get started',
                headline: ['Discover.', 'Enrich.', 'Grow.'],
                description:
                  'Find the data you need to build better products and reach the right people.',
              }}
            />
          }
        >
          <Route
            path="/register"
            element={<RegisterPage />}
          />
        </Route>

        <Route
          element={
            <AuthLayout
              brand={{
                eyebrow: 'Welcome back',
                headline: ['Build.', 'Collect.', 'Grow.'],
                description:
                  'Everything you need to build and grow your product in one place.',
              }}
            />
          }
        >
          <Route path="/login" element={<LoginPage />} />
        </Route>

        <Route
          path="/login-example"
          element={<AuthPageExample />}
        />
        <Route
          path="/register-legacy"
          element={<RegisterPageLegacy />}
        />
        <Route
          path="/register-example-direct"
          element={<RegisterPageExampleDirect />}
        />
        <Route
          path="/register-example-multistep"
          element={<RegisterPageExampleMultistep />}
        />

        <Route
          path="/dashboard-example"
          element={<DashboardExample />}
        />
        <Route
          path="/playground-example"
          element={<PlaygroundExample />}
        />
        <Route
          path="/products-example"
          element={<DataProductsExample />}
        />
        <Route
          path="/access-example"
          element={<ApiAccessExample />}
        />
        <Route
          path="/usage-example"
          element={<UsagePageExample />}
        />
        <Route
          path="/billing-example"
          element={<PlanBillingPageExample />}
        />
        <Route
          path="/profile-example"
          element={<ProfilePageExample />}
        />
        <Route
          path="/settings-example"
          element={<SettingsPageExample />}
        />

        <Route
          path="/"
          element={<Navigate to="/register" replace />}
        />

        <Route
          path="*"
          element={<Navigate to="/register" replace />}
        />
      </Routes>
    </BrowserRouter>
  );
}
