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

// import PWeye from '../public/PWeye.svg';
// import PWeyeSlash from '../public/PWeyeSlash.svg';
import PWEyeFunc from '../assets/PWEyeFunc';
import PWEyeSlashFunc from '../assets/PWEyeSlashFunc';
import UploadIcon from '../assets/UploadIcon';
import PersonAdd from '../assets/PersonAdd';
import PersonMinus from '../assets/PersonMinus';
import PersonIcon from '../assets/PersonIcon';



export const auth = getAuth();
// export const user = auth.currentUser;


export default function Login ({adminStateProp, handleToggleAdminModeProp}) {

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
          className={adminStateProp ? 'neonButtonActive' : 'neonButton'}
          onClick={handleToggleAdminModeProp} >
           {adminStateProp ? <p className='buttonTextAdmin'> <UploadIcon/> </p> : <p className='buttonTextAdmin'> <UploadIcon/> </p> }
        </button>
      </>
    )};





return (
  <div className='divPWEmailPost'>
    
    <div className='divPWEmail'>
      <>
        <input 
          ref={emailRef} 
          type={"email"} 
          placeholder='Email'
        />
      </>
    
      <>
        <input
          ref={passwordRef} 
          type={passwordVisible ? '' : 'password'} 
          placeholder='Password'
        />
      </>
    </div>


    <div className='divPost'>
    <>
        { 
          passwordVisible ? 
            <button 
              className='neonButton'
              onClick={togglePasswordVisible}> 
              <p className='buttonTextAdmin'>
                <PWEyeFunc/>
              </p>
            </button> 
          : 
            <button 
              className='neonButton'
              onClick={togglePasswordVisible}> 
                <p className='buttonTextAdmin'>
                  <PWEyeSlashFunc/>
                </p>
            </button>
        }
        </>
        
        <>
          <button 
            className={ loading || currentUser != null ? 'neonButtonDisabled' : 'neonButton'} 
            disabled={loading || currentUser != null } 
            onClick={handleLogin} >
            <p className='buttonTextAdmin'>
            <PersonAdd/> 
            </p>
          </button>
        </>
      
        <>
          <button 
            className={ loading || !currentUser ? 'neonButtonDisabled' : 'neonButton'} 
            disabled={loading || !currentUser } 
            onClick={handleLogout} > 
            <p className='buttonTextAdmin'>
            <PersonMinus/> 
            </p>
          </button>
        </>
        
        {/* Currently Logged In As: { currentUser?.email } */}

        <>
          {currentUser?.email ? <p className='neonBoxActive'> <PersonIcon/> </p> : <p className='neonBox'> <PersonIcon/> </p>}
        </>
        
        <>
          {currentUser?.email ? <ButtonToggleAdminMode /> : null}
        </>
        
    </div>
  </div>
)
}
