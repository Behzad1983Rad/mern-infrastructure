import { useState } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm.jsx';

export default function AuthPage({ setUser }) {
  const [showLoginFrom, setShowLoginForm] = useState(true)
  function toggleForm () {
    setShowLoginForm((toggle) => !toggle)
  }
  return (
    <main>
      <h1>AuthPage</h1>
      <p onClick={toggleForm}>
        {
          showLoginFrom
          ?
          'Click Here to Sign Up'
          :
          'Click Here to Log In'
        }
      </p>
      {showLoginFrom
      ?
      <SignUpForm setUser={setUser} />
      :
      <LoginForm setUser={setUser}/>
      }
    </main>
  );
}