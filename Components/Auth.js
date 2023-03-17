import { useState, useEffect, useRef } from 'react';
import { 
    getAuth, 
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    login,
    signup,
    signOut,
    signInWithEmailAndPassword
  } from 'firebase/auth';

export const auth = getAuth();

export const Login = () => {

  //////   LOGIN AND AUTH   //////
  const [loading, setLoading] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();
  const currentUser = useAuth();
  
  
  function useAuth() {
    const [currentUser, setCurrentUser] = useState();
    useEffect(() => {
      const unsub = onAuthStateChanged(auth, user =>  setCurrentUser(user));
      return unsub;
    }, [])
  
    return currentUser;
  };
  
  function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  
  async function handleSignup() {
    setLoading(true);
    try {
      await signup(emailRef.current.value, passwordRef.current.value);
    } catch {
      alert('that user already exists, your PW was less than 6 characters, or something else went wrong')
    }
    setLoading(false);
  };
  
  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  };
  
  async function handleLogin() {
    setLoading(true);
    try {
      await login(emailRef.current.value, passwordRef.current.value);
    } catch {
      alert('the email and/or password was incorrect (or something else went wrong')
    }
    setLoading(false);
  };
  
  function logout() {
    return signOut(auth);
  };
  
  async function handleLogout() {
    setLoading(true);
    try {
    await logout();
  } catch {
    alert('error');
  }
    setLoading(false);
  };
  
  const [passwordVisible, setPasswordVisible] = useState(false);
  
  function togglePasswordVisible() {
    setPasswordVisible(!passwordVisible);
  };
 
return (
    <div>
        <input ref={emailRef} placeholder='Email'/>
        <input ref={passwordRef} type={passwordVisible ? '' : 'password'} placeholder='Password'/>
        <button disabled={loading || currentUser != null } onClick={handleSignup} > Sign Up </button>
        <button disabled={loading || currentUser != null } onClick={handleLogin} > Log In </button>
        <button disabled={loading || !currentUser } onClick={handleLogout}> Log Out </button>
        <button onClick={ togglePasswordVisible }> Show or Hide PW </button>
        Currently Logged In As: { currentUser?.email }
    </div>
)
}
