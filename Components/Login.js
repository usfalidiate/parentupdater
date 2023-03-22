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

import PWeye from '../public/PWeye.svg';
import PWeyeSlash from '../public/PWeyeSlash.svg';
import PWEyeFunc from './PWEyeFunc';
import PWEyeSlashFunc from './PWEyeSlashFunc';



export const auth = getAuth();
// export const user = auth.currentUser;


export default function Login ({adminState, handleToggleAdminMode}) {

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
 

 
  
  
  
  

  function ButtonToggleAdminMode() {
    return ( 
      <>       
        <button 
          className={adminState ? 'neonButtonActive' : 'neonButton'}
          onClick={handleToggleAdminMode} >
           {adminState ? <p className='buttonTextAdmin'> Admin Mode: ON </p> : <p className='buttonTextAdmin'> Admin Mode: OFF </p> }
        </button>
      </>
    )};





return (

  <>
 
        <>
          <input 
            ref={emailRef} 
            type={"email"} 
            placeholder='Email'
          />
        
        <div className='inputAndPWButton'>
          <input
            ref={passwordRef} 
            type={passwordVisible ? '' : 'password'} 
            placeholder='Password'
          />
          { 
            passwordVisible ? 
              <button 
                className='PWButton'
                onClick={togglePasswordVisible}> 
                <PWEyeFunc/> 
              </button> 
            : 
              <button 
                className='PWButton'
                onClick={togglePasswordVisible}> 
                <PWEyeSlashFunc/> 
              </button>
          }
        </div>



    

          
        
        <button 
        className={ loading || currentUser != null ? 'neonButtonDisabled' : 'neonButton'} 
        disabled={loading || currentUser != null } 
        onClick={handleLogin} 
        > 
        <p className='buttonTextAdmin' >Log In </p> 
        </button>
        
        <button 
        className={ loading || !currentUser ? 'neonButtonDisabled' : 'neonButton'} 
        disabled={loading || !currentUser } 
        onClick={handleLogout}
        > 
        <p className='buttonTextAdmin' >Log Out </p> </button>
        
        {/* Currently Logged In As: { currentUser?.email } */}

        {currentUser?.email ? <p className='neonBoxActive'>Logged In</p> : <p className='neonBox'>Not Logged In</p>}

        {currentUser?.email ? <ButtonToggleAdminMode /> : null}

      </> 


    </>
)
}
