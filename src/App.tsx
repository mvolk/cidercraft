import React from 'react';
import logo from './logo.svg';
import './App.css';
import { AmplifyAuthenticator, AmplifySignUp, AmplifySignIn } from '@aws-amplify/ui-react';
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

const signUpFormFields = [
  {
    type: 'name',
    label: 'Name *',
    placeholder: 'Enter your name',
    required: true,
  },
  {
    type: 'email',
    label: 'Email *',
    required: true,
  },
  {
    type: 'password',
    label: 'Password *',
    required: true,
  },
];

const AuthStateApp = () => {
  const [authState, setAuthState] = React.useState<AuthState | undefined>();
  const [user, setUser] = React.useState<any>();

  React.useEffect(() => {
      return onAuthUIStateChange((nextAuthState: AuthState, authData) => {
          setAuthState(nextAuthState);
          setUser(authData)
      });
  }, []);

return authState === AuthState.SignedIn && user ? (
    <App />
  ) : (
    <AmplifyAuthenticator
      initialAuthState={AuthState.SignUp}
      usernameAlias="email"
    >
      <AmplifySignUp
        slot="sign-up"
        headerText="Create a free account"
        usernameAlias="email"
        formFields={signUpFormFields}
      />
      <AmplifySignIn slot="sign-in" usernameAlias="email" />
    </AmplifyAuthenticator>
);
}

export default AuthStateApp;