import { lazy, Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as authOperations from '../redux/auth/auth-operations';
import * as authSelectors from '../redux/auth/auth-selectors';
import { Switch } from 'react-router-dom';
import PrivateRoute from './Routes/PrivetRoute';
import PublicRoute from './Routes/PublicRoute';
import LoaderSpinner from './LoaderSpinner/LoaderSpinner';
import 'react-toastify/dist/ReactToastify.css';
import AppBar from './AppBar/AppBar';

const HomeView = lazy(() =>
  import('../views/HomeView/HomeView' /* webpackChunkName: "home-view" */),
);
const RegisterView = lazy(() =>
  import('../views/RegisterView/RegisterView' /* webpackChunkName: "register-view" */),
);

const LoginView = lazy(() =>
  import('../views/LoginView/LoginView' /* webpackChunkName: "login-view" */),
);
const ContactsView = lazy(() =>
  import('../views/ContactsView/ContactsView' /* webpackChunkName: "contacts-view" */),
);

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(authSelectors.getLoading);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    !isLoading && (
    <div className="main-container">
    <AppBar />

    <Suspense fallback={<LoaderSpinner />}>
      <Switch>
        <PublicRoute path="/" exact>
          <HomeView />
        </PublicRoute>
        
        <PublicRoute path="/register" redirectTo="/contacts" restricted>
          <RegisterView />
        </PublicRoute>
        
        <PublicRoute path="/login" redirectTo="/contacts" restricted>
          <LoginView />
        </PublicRoute>
        
        <PrivateRoute path="/contacts" redirectTo="/login">
          <ContactsView />
        </PrivateRoute>
      </Switch>
    </Suspense>

    </div>
    )
  );
};

export default App;
