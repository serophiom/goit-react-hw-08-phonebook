// import { Route } from 'react-router';
import { Switch, Route } from 'react-router-dom';
import AppBar from './AppBar/AppBar';
import HomeView from './views/HomeView/HomeView';
import RegisterView from './views/RegisterView/RegisterView';
import LoginView from './views/LoginView/LoginView';
import ContactsView from './views/ContactsView/ContactsView';

const App = () => {
  return (
    <>
    <AppBar />

    <Switch>
      <Route exact path="/" component={HomeView} />
      <Route path="/register" component={RegisterView} />
      <Route path="/login" component={LoginView} />
      <Route path="/contacts" component={ContactsView} />
    </Switch>
  
      {/* <Phonebook /> */}
    </>
  );
};

export default App;
