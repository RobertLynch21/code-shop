import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import WelcomeScreen from './WelcomeScreen';
import Login from './Login';
import RegistrationForm from './RegistrationForm';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={WelcomeScreen} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={RegistrationForm} />
      </Switch>
    </Router>
  );
}

export default App;
