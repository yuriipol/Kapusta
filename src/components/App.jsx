// import HomePage from 'pages/HomePage/HomePage';
// import ReportsPage from '../pages/ReportsPage/ReportsPage';
// import AuthPage from '../pages/AuthPage/AuthPage';
// import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import UserRoutes from './UserRouts/UserRoutes';
import Header from './Header/Header';
export const App = () => {
  return (
    <div>
      {/* <HomePage /> */}
      {/* <ReportsPage /> */}
      {/* <AuthPage /> */}
      {/* <NotFoundPage /> */}
      <Header />
      <UserRoutes />
    </div>
  );
};
