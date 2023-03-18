import 'bootstrap/dist/css/bootstrap.min.css';10
import { useState, useEffect, useRef } from 'react';
import { app, db, auth } from '../Components/Firebase';


import LITable from './LITable';

export default function MainPage() {


  // ADMIN
  const [adminState, setAdminState] = useState(false);

  const handleToggleAdmin = () => {
    setAdminState(prev=>!prev);
  };

  function ButtonToggleAdmin() {
    return ( 
      <> 
        
        <button 
          className='neonButton'
          onClick={handleToggleAdmin} >
          {adminState ? <p className='buttonTextAdmin'> Admin Mode: ON </p> : <p className='buttonTextAdmin'> Admin Mode: OFF </p>}
        </button>
        
      </>
    )};

    
      

  // setStates 
  const [subjectChoice, setSubjectChoice] = useState();
  const [classChoice, setClassChoice] = useState();
  const [contentChoice, setContentChoice] = useState();

  const [displaySubjectChoice, setDisplaySubjectChoice] = useState(true);
  const [displayClassChoice, setDisplayClassChoice] = useState(false);
  const [displayContentChoice, setDisplayContentChoice] = useState(false);



  // HOME

  const handleHome = () => {
    setDisplaySubjectChoice(true);
    setDisplayClassChoice(false);
    setDisplayContentChoice(false);
    setSubjectChoice();
    setClassChoice();
    setContentChoice();
  };


  function ButtonHome() {
    return (<> <button className='neonButton' onClick={()=> handleHome()}> <p className='buttonTextHome'> Home </p> </button> </> )
  };


  // SUBJECT
  const handleSubjectChoice = ({activeSubject}) => {
    setSubjectChoice(activeSubject);
    setDisplaySubjectChoice(false);
    setDisplayClassChoice(true);
  };

  function ButtonSubjectChoice ({buttonSubjectTitleProp, activeSubject}) {
    return (
      <div className={'divButtonSubjectChoice'}> 
        <button className='glow-on-hover' 
          onClick={()=>handleSubjectChoice({activeSubject})} 
        > 
        <p className={'buttonText'}>  {buttonSubjectTitleProp}  </p> 
        </button> 
      </div>) 
  };

  // CLASS

  const handleClassChoice = ({activeClass}) => {
    setClassChoice(activeClass);
    setDisplayClassChoice(false);
    setDisplayContentChoice(true);

  };


  function ButtonClassChoice({buttonClassTitleProp, activeClass}) {
    return (
      <div> 
        <button className='glow-on-hover' 
          onClick={()=>handleClassChoice({activeClass})} 
        > 
        <p className={'buttonText'} >  {buttonClassTitleProp}   </p>
        </button> 
      </div>)
  };



  // CONTENT
  const handleContentChoice = ({contentChoiceProp}) => {
    setContentChoice(contentChoiceProp);
    setDisplayContentChoice(false);
  };

  function ButtonContentChoice({buttonContentTitleProp, contentChoiceProp}) {
    return (
    <div> 
      <button className='glow-on-hover' 
        onClick={()=>handleContentChoice({contentChoiceProp})} 
      > 
      <p className={'buttonText'}>  {buttonContentTitleProp} </p>
      </button> 
    </div>)
  };

  // LITABLE FUNCTIONS
  // Science
  function Year10SciASPLITables(){
    return (
      <>
      <LITable tnp={ Number(1) } activeSubject={'Sci'} activeYearGroup={'10'} activeClass={'10SciASP'} adminCheck={adminState} />
      <LITable tnp={ Number(2) } activeSubject={'Sci'} activeYearGroup={'10'} activeClass={'10SciASP'} adminCheck={adminState} />
      <LITable tnp={ Number(3) } activeSubject={'Sci'} activeYearGroup={'10'} activeClass={'10SciASP'} adminCheck={adminState} />
      <LITable tnp={ Number(4) } activeSubject={'Sci'} activeYearGroup={'10'} activeClass={'10SciASP'} adminCheck={adminState} />
      <LITable tnp={ Number(5) } activeSubject={'Sci'} activeYearGroup={'10'} activeClass={'10SciASP'} adminCheck={adminState} />
      <LITable tnp={ Number(6) } activeSubject={'Sci'} activeYearGroup={'10'} activeClass={'10SciASP'} adminCheck={adminState} />

    </>
    )
  };
    function Year10SciLITables(){
    return (
      <>
      <LITable tnp={ Number(1) } activeSubject={'Sci'} activeYearGroup={'10'} activeClass={'10Sci'} adminCheck={adminState} />
      <LITable tnp={ Number(2) } activeSubject={'Sci'} activeYearGroup={'10'} activeClass={'10Sci'} adminCheck={adminState} />
      <LITable tnp={ Number(3) } activeSubject={'Sci'} activeYearGroup={'10'} activeClass={'10Sci'} adminCheck={adminState} />
      <LITable tnp={ Number(4) } activeSubject={'Sci'} activeYearGroup={'10'} activeClass={'10Sci'} adminCheck={adminState} />
      <LITable tnp={ Number(5) } activeSubject={'Sci'} activeYearGroup={'10'} activeClass={'10Sci'} adminCheck={adminState} />
      <LITable tnp={ Number(6) } activeSubject={'Sci'} activeYearGroup={'10'} activeClass={'10Sci'} adminCheck={adminState} />

    </>
    )
  };
  function Year9SciLITables(){
    return (
      <>
      <LITable tnp={ Number(1) } activeSubject={'Sci'} activeYearGroup={'9'} activeClass={'9Sci'} adminCheck={adminState} />
      <LITable tnp={ Number(2) } activeSubject={'Sci'} activeYearGroup={'9'} activeClass={'9Sci'} adminCheck={adminState} />
    </>
    )
  };
  function Year8SciLITables(){
    return (
      <>
      <LITable tnp={ Number(1) } activeSubject={'Sci'} activeYearGroup={'8'} activeClass={'8Sci'} adminCheck={adminState} />
      <LITable tnp={ Number(2) } activeSubject={'Sci'} activeYearGroup={'8'} activeClass={'8Sci'} adminCheck={adminState} />
    </>
    )
  };
  function Year7SciLITables(){
    return (
      <>
      <LITable tnp={ Number(1) } activeSubject={'Sci'} activeYearGroup={'7'} activeClass={'7Sci'} adminCheck={adminState} />
      <LITable tnp={ Number(2) } activeSubject={'Sci'} activeYearGroup={'7'} activeClass={'7Sci'} adminCheck={adminState} />
    </>
    )
  };

  // functions for LI Tables 
  // STEM  
  function Year10STEM100HourLITables() {
    return (
      <>
      <LITable tnp={ Number(1) } activeSubject={'STEM'} activeYearGroup={'10'} activeClass={'10STEM100Hour'}   adminCheck={adminState} />

      </>
    )
  };
  function Year10STEM200HourLITables() {
    return (
      <>
      <LITable tnp={ Number(1) } activeSubject={'STEM'} activeYearGroup={'10'} activeClass={'10STEM200Hour'}   adminCheck={adminState} />

      </>
    )
  };
  function Year9STEMLITables() {
    return (
      <>
      <LITable tnp={ Number(1) } activeSubject={'STEM'} activeYearGroup={'9'} activeClass={'9STEM'}   adminCheck={adminState} />

      </>
    )
  };
  function Year8STEMSem1LITables() {
    return (
      <>
      <LITable tnp={ Number(1) } activeSubject={'STEM'} activeYearGroup={'8'} activeClass={'8STEMSem1'}   adminCheck={adminState} />

      </>
    )
  };
  function Year8STEMSem2LITables() {
    return (
      <>
      <LITable tnp={ Number(1) } activeSubject={'STEM'} activeYearGroup={'8'} activeClass={'8STEMSem2'}   adminCheck={adminState} />

      </>
    )
  };

  // functions for LI Tables 
  // Phy
  function Year12PhyLITables() {
    return (
      <>
      <LITable tnp={ Number(5) } activeSubject={'Phy'} activeYearGroup={'12'} activeClass={'12Phy'} adminCheck={adminState} />
      <LITable tnp={ Number(6) } activeSubject={'Phy'} activeYearGroup={'12'} activeClass={'12Phy'} adminCheck={adminState} />
      <LITable tnp={ Number(7) } activeSubject={'Phy'} activeYearGroup={'12'} activeClass={'12Phy'} adminCheck={adminState} />
      <LITable tnp={ Number(8) } activeSubject={'Phy'} activeYearGroup={'12'} activeClass={'12Phy'} adminCheck={adminState} />


      </>
    )
  };
  function Year11PhyLITables() {
    return (
      <>
      <LITable tnp={ Number(1) } activeSubject={'Phy'} activeYearGroup={'11'} activeClass={'11Phy'} adminCheck={adminState} />
      <LITable tnp={ Number(2) } activeSubject={'Phy'} activeYearGroup={'11'} activeClass={'11Phy'} adminCheck={adminState} />
      <LITable tnp={ Number(3) } activeSubject={'Phy'} activeYearGroup={'11'} activeClass={'11Phy'} adminCheck={adminState} />
      <LITable tnp={ Number(4) } activeSubject={'Phy'} activeYearGroup={'11'} activeClass={'11Phy'} adminCheck={adminState} />


      </>
    )
  };
 
  // functions for LI Tables 
  // Inv Sci
  function Year12InvSciLITables() {
    return (
      <>
      <LITable tnp={ Number(5) } activeSubject={'InvSci'} activeYearGroup={'12'} activeClass={'12InvSci'} adminCheck={adminState} />
      <LITable tnp={ Number(6) } activeSubject={'InvSci'} activeYearGroup={'12'} activeClass={'12InvSci'} adminCheck={adminState} />
      <LITable tnp={ Number(7) } activeSubject={'InvSci'} activeYearGroup={'12'} activeClass={'12InvSci'} adminCheck={adminState} />
      <LITable tnp={ Number(8) } activeSubject={'InvSci'} activeYearGroup={'12'} activeClass={'12InvSci'} adminCheck={adminState} />


      </>
    )
  };
  function Year11InvSciLITables() {
    return (
      <>
      <LITable tnp={ Number(1) } activeSubject={'InvSci'} activeYearGroup={'11'} activeClass={'11InvSci'} adminCheck={adminState} />
      <LITable tnp={ Number(2) } activeSubject={'InvSci'} activeYearGroup={'11'} activeClass={'11InvSci'} adminCheck={adminState} />
      <LITable tnp={ Number(3) } activeSubject={'InvSci'} activeYearGroup={'11'} activeClass={'11InvSci'} adminCheck={adminState} />
      <LITable tnp={ Number(4) } activeSubject={'InvSci'} activeYearGroup={'11'} activeClass={'11InvSci'} adminCheck={adminState} />


      </>
    )
  };



  return (
    <>

    <div className='divHome'>
      <ButtonToggleAdmin />
      <ButtonHome/>
    </div>    

    
    { contentChoice == null ?
      <div className='divMain'>


    { displaySubjectChoice ?
      <div className='divSubjectChoice'>
      <ButtonSubjectChoice activeSubject={'Sci'} buttonSubjectTitleProp={'SCIENCE'}/>
      <ButtonSubjectChoice activeSubject={'STEM'} buttonSubjectTitleProp={'STEM'} />
      <ButtonSubjectChoice activeSubject={'Phy'} buttonSubjectTitleProp={'PHYSICS'} />
      <ButtonSubjectChoice activeSubject={'InvSci'} buttonSubjectTitleProp={'INVESTIGATING SCIENCE'} />
    </div>
    : null 
    }
    
    



  { displayClassChoice ? 
    <div className='divClassChoice'>
    { subjectChoice == 'Sci' ? 
      <div className='divClassChoiceSci'>
    <ButtonClassChoice activeYearGroup={'10'} activeClass={'10SciASP'} buttonClassTitleProp={'Year 10 Science (ASP)'}/>
    <ButtonClassChoice activeYearGroup={'10'} activeClass={'10Sci'} buttonClassTitleProp={'Year 10 Science'}/>
    <ButtonClassChoice activeYearGroup={'9'} activeClass={'9Sci'} buttonClassTitleProp={'Year 9 Science'}/>
    <ButtonClassChoice activeYearGroup={'8'} activeClass={'8Sci'} buttonClassTitleProp={'Year 8 Science'}/>
    <ButtonClassChoice activeYearGroup={'7'} activeClass={'7Sci'} buttonClassTitleProp={'Year 7 Science'}/>
    </div> : null
    }

    { subjectChoice == 'STEM' ?
      <div className='divClassChoiceSTEM'>
    <ButtonClassChoice activeYearGroup={'10'} activeClass={'10STEM200Hour'} buttonClassTitleProp={'Year 10 STEM (200 Hour)'}/>
    <ButtonClassChoice activeYearGroup={'10'} activeClass={'10STEM100Hour'} buttonClassTitleProp={'Year 10 STEM (100 Hour)'}/>
    <ButtonClassChoice activeYearGroup={'9'} activeClass={'9STEM'} buttonClassTitleProp={'Year 9 STEM'}/>
    <ButtonClassChoice activeYearGroup={'8'} activeClass={'8STEMSem1'} buttonClassTitleProp={'Year 8 STEM (Sem 1)'}/>
    <ButtonClassChoice activeYearGroup={'8'} activeClass={'8STEMSem2'} buttonClassTitleProp={'Year 8 STEM (Sem 2'}/>
    </div> : null
    }

    { subjectChoice == 'Phy' ?
      <div className='divClassChoicePhy'>
    <ButtonClassChoice activeYearGroup={'12'} activeClass={'12Phy'} buttonClassTitleProp={'Year 12 Physics'}/>
    <ButtonClassChoice activeYearGroup={'11'} activeClass={'11Phy'} buttonClassTitleProp={'Year 11 Physics'}/>
    </div> : null
    }

    { subjectChoice == 'InvSci' ?
      <div className='divClassChoiceInvSci'>
    <ButtonClassChoice activeYearGroup={'12'} activeClass={'12InvSci'} buttonClassTitleProp={'Year 12 Investigating Science'}/>
    <ButtonClassChoice activeYearGroup={'11'} activeClass={'11InvSci'} buttonClassTitleProp={'Year 11 Investigating Science'}/>
    </div> : null
    }
  </div>
  : null
  }







    { displayContentChoice ?
      <div className='divContentChoice'>
    <ButtonContentChoice contentChoiceProp={'LITable'} buttonContentTitleProp={'Learning Intention Checklist'}/>
    <ButtonContentChoice contentChoiceProp={'AssTable'} buttonContentTitleProp={'Assessment Information'}/>
    <ButtonContentChoice contentChoiceProp={'SubjectInfoTable'} buttonContentTitleProp={'Subject Information'}/>
    </div> : null
    }

</div> : null}






{ subjectChoice == 'Sci' && classChoice == '10SciASP' && contentChoice == 'LITable' ? 
  <div className='divLITable'> < Year10SciASPLITables /> </div> : null
}

{ subjectChoice == 'Sci' && classChoice == '10Sci' && contentChoice == 'LITable' ? 
  <div className='divLITable'> <Year10SciLITables/> </div> : null
}

{ subjectChoice == 'Sci' && classChoice == '9Sci' && contentChoice == 'LITable' ? 
  <div className='divLITable'> <Year9SciLITables/> </div> : null
}

{ subjectChoice == 'Sci' && classChoice == '8Sci' && contentChoice == 'LITable' ? 
  <div className='divLITable'> <Year8SciLITables/> </div> : null
}

{ subjectChoice == 'Sci' && classChoice == '7Sci' && contentChoice == 'LITable' ? 
  <div className='divLITable'> <Year7SciLITables/> </div> : null
}





{ subjectChoice == 'STEM' && classChoice == '10STEM200Hour' && contentChoice == 'LITable' ? 
  <div> <Year10STEM200HourLITables/> </div> : null
}

{ subjectChoice == 'STEM' && classChoice == '10STEM100Hour' && contentChoice == 'LITable' ? 
  <div> <Year10STEM100HourLITables/> </div> : null
}

{ subjectChoice == 'STEM' && classChoice == '9STEM' && contentChoice == 'LITable' ? 
  <div> <Year9STEMLITables/> </div> : null
}

{ subjectChoice == 'STEM' && classChoice == '8STEMSem2' && contentChoice == 'LITable' ? 
  <div> <Year8STEMSem1LITables/> </div> : null
}

{ subjectChoice == 'STEM' && classChoice == '8STEMSem1' && contentChoice == 'LITable' ? 
  <div> <Year8STEMSem2LITables/> </div> : null
}





{ subjectChoice == 'Phy' && classChoice == '11Phy' && contentChoice == 'LITable' ? 
  <div> <Year12PhyLITables/> </div> : null
}

{ subjectChoice == 'Phy' && classChoice == '12Phy' && contentChoice == 'LITable' ? 
  <div> <Year11PhyLITables/> </div> : null
}






{ subjectChoice == 'InvSci' && classChoice == '12InvSci' && contentChoice == 'LITable' ? 
  <div> <Year12InvSciLITables/> </div> : null
}

{ subjectChoice == 'InvSci' && classChoice == '11InvSci' && contentChoice == 'LITable' ? 
  <div> <Year11InvSciLITables/> </div> : null
}








<div>
  {/* Sci Ass Tables */}
</div>


<div>
  {/* STEM Ass Tables */}
</div>


<div>
  {/* Phy Ass Tables */}
</div>


<div>
  {/* InvSci Ass Tables */}
</div>









<div>
  {/* Sci SubjectInfo Tables */}
</div>


<div>
  {/* STEM SubjectInfo Tables */}
</div>


<div>
  {/* Phy SubjectInfo Tables */}
</div>


<div>
  {/* InvSci SubjectInfo Tables */}
</div>










</>
)
};
