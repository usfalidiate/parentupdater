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


export default function Login () {

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
 



  // BUTTONS
  // function ButtonClassChoice() {
  //   return (
  //     <div> 
  //       <button className='glow-on-hover' > 
  //       <p className={'buttonText'} >  {}   </p>
  //       </button> 
  //     </div>)
  // };


  // function ButtonDisplayAdminLogin () {
  //   return (
  //     <div className='divLoginHidden'>
  //       <button className='mini-glow-on-hover'> <p className='mini-buttonText'> Admin </p> </button>
  //     </div>
  //   )
  // }


return (

  <>

    
        {/* <button onClick={()=>check()}> check user </button> */}

        <input ref={emailRef} type={"email"} placeholder='Email'/>
        <input ref={passwordRef} type={passwordVisible ? '' : 'password'} placeholder='Password'/>
        {/* <button className={'buttonLogin'} disabled={loading || currentUser != null } onClick={handleSignup} > Sign Up </button> */}
        <button className={'neonButton'} disabled={loading || currentUser != null } onClick={handleLogin} > <p className='buttonTextAdmin' >Log In</p> </button>
        <button className={'neonButton'} disabled={loading || !currentUser } onClick={handleLogout}> <p className='buttonTextAdmin' >Log Out</p> </button>
        <button className={'neonButton'} onClick={ togglePasswordVisible }> <p className='buttonTextAdmin' >Show or Hide PW</p> </button>
        {/* Currently Logged In As: { currentUser?.email } */}
    
    </>
)
}
