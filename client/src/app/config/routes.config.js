import Login from 'app/auth/login/Login.config';
import Logout from 'app/auth/logout/Logout.config';
import modules from 'app/modules';

export const HomeRoutes = {
  // Default home routes by role are defined as
  // Role: 'route.id'
  // or Role: 'route.path'
  Staff: 'staff.list',
  Authenticated: 'staff.registration',
  Anonymous: '/login'
};

export const RoutableComponents = [...modules, Login, Logout];
