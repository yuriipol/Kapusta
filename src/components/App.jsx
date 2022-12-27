
import { useEffect } from 'react';
import { useDispatch } from '../../node_modules/react-redux/es/exports';
// import HomePage from 'pages/HomePage/HomePage';
// import ReportsPage from '../pages/ReportsPage/ReportsPage';
// import AuthPage from '../pages/AuthPage/AuthPage';
// import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import UserRoutes from './UserRouts/UserRoutes';
import { userInfoOperation } from 'redux/user/user-operations';
// import Header from './Header/Header';
export const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(userInfoOperation())
  }, [dispatch])
  return (
    <div>
      {/* <HomePage /> */}
      {/* <ReportsPage /> */}
      {/* <AuthPage /> */}
      {/* <NotFoundPage /> */}
      {/* <Header /> */}
      <UserRoutes />
    </div>
  );
};
