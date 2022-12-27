// import { useSelector } from 'react-redux';
// import { Navigate, Outlet } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
// import { userIsLogIn } from '../../redux/user/user-selectors';

const PrivateRoute = () => {
  // const LogInUser = useSelector(userIsLogIn);

  // if (LogInUser) {
  return <Outlet />;
  // }
  // return <Navigate to="/home" />;
};

export default PrivateRoute;
