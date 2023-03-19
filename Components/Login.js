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
// export const user = auth.currentUser;


export const Login = () => {

  //////   LOGIN AND AUTH   //////
  const [loading, setLoading] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();
  const currentUser = useAuth();
  const [UID, setUID] = useState();
  
  
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
      alert('Error')
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
      console.log('login worked')
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
    console.log('logout worked')
  } catch {
    alert('error');
  }
    setLoading(false);
  };
  
  const [passwordVisible, setPasswordVisible] = useState(false);
  
  function togglePasswordVisible() {
    setPasswordVisible(!passwordVisible);
  };
 

  // CHECK IF LOGGED IN OR NOT
// const check = () => {
//   console.log('user', user);
//   if (user !== null) {
//     // User is signed in, see docs for a list of available properties
//     // https://firebase.google.com/docs/reference/js/firebase.User
//     // ...
//     console.log('user logged in')

//   } else {
//     // No user is signed in.
//     console.log('no user logged in')
//   };
// };

// const check = () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      setUID(uid);
      console.log('uid', uid, 'user exists');
      console.log('UID', UID)
    } else {
      console.log('no user is logged in')
    }
  });
// };




  // BUTTONS
  function ButtonClassChoice() {
    return (
      <div> 
        <button className='glow-on-hover' > 
        <p className={'buttonText'} >  {}   </p>
        </button> 
      </div>)
  };


return (
 
    <div className={'divLogin'}>
        {/* <button onClick={()=>check()}> check user </button> */}

        <input ref={emailRef} type={"email"} placeholder='Email'/>
        <input ref={passwordRef} type={passwordVisible ? '' : 'password'} placeholder='Password'/>
        {/* <button className={'buttonLogin'} disabled={loading || currentUser != null } onClick={handleSignup} > Sign Up </button> */}
        <button className={'buttonLogin'} disabled={loading || currentUser != null } onClick={handleLogin} > Log In </button>
        <button className={'buttonLogin'} disabled={loading || !currentUser } onClick={handleLogout}> Log Out </button>
        <button className={'buttonLogin'} onClick={ togglePasswordVisible }> Show or Hide PW </button>
        {/* Currently Logged In As: { currentUser?.email } */}
    </div>
)
}
