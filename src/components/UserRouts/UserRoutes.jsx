import { Route, Routes } from 'react-router-dom';

import AuthPage from 'pages/AuthPage/AuthPage';
import HomePage from 'pages/HomePage/HomePage';
import ReportsPage from 'pages/ReportsPage/ReportsPage';
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';

const UserRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AuthPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/reports" element={<ReportsPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default UserRoutes;
