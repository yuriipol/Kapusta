
import { useEffect } from 'react';
import { useDispatch } from '../../node_modules/react-redux/es/exports';

import UserRoutes from './UserRouts/UserRoutes';
import { userInfoOperation } from 'redux/user/user-operations';

export const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(userInfoOperation())
  }, [dispatch])
  return (
    <div>

      <UserRoutes />
    </div>
  );
};
