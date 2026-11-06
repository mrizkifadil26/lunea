import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';

import RegisterPage from '@/features/registration/pages/RegisterPage';
import RegisterPageLegacy from '@/features/registration/pages/RegisterPageLegacy';

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/register"
          element={<RegisterPage />}
        />
        <Route
          path="/register-legacy"
          element={<RegisterPageLegacy />}
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
