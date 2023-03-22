import 'bootstrap/dist/css/bootstrap.min.css'
import { useState, useEffect, useRef } from 'react';
import { app, db } from '../Components/Firebase';


import LITable from '../Components/LITable';
import Login from '../Components/Login';

export default function MainPage() {







  // DISPLAY LOGIN

  const [displayLoginAdmin, setDisplayLoginAdmin] = useState(false);

  const handleToggleLoginAdmin = () => {
    setDisplayLoginAdmin(prev=>!prev);
  };

  function ButtonToggleDisplayLoginAdmin() {
    return (
      <button onClick={handleToggleLoginAdmin}
      className={ adminState ? 'neonButtonActive' : 'neonButton'}>
        <p className='buttonTextAdmin'> Admin</p>
      </button>
    )
  };
 








  // TOGGLE ADMIN MODE
  const [adminState, setAdminState] = useState(false);

  const handleToggleAdminMode = () => {
    setAdminState(prev=>!prev);
  };


      










  // setStates 
  const [subjectChoice, setSubjectChoice] = useState();
  const [classChoice, setClassChoice] = useState();
  const [contentChoice, setContentChoice] = useState();

  const [displaySubjectChoice, setDisplaySubjectChoice] = useState(false);
  const [displayClassChoice, setDisplayClassChoice] = useState(false);
  const [displayContentChoice, setDisplayContentChoice] = useState(false);

  const [teacherChoice, setTeacherChoice] = useState();
  const [displayTeacherChoice, setDisplayTeacherChoice] = useState(true);






  // BACK TO 

  const backToTeacher = () => {
    setDisplayTeacherChoice(true);
    setDisplaySubjectChoice(false);
    setDisplayClassChoice(false);
    setDisplayContentChoice(false);
    setDisplayLoginAdmin(false);
    setTeacherChoice();
    setSubjectChoice();
    setClassChoice();
    setContentChoice();
  };

  const backToSubject = () => {
    setDisplayTeacherChoice(false);
    setDisplaySubjectChoice(true);
    setDisplayClassChoice(false);
    setDisplayContentChoice(false);
    setDisplayLoginAdmin(false);
    // setTeacherChoice();
    setSubjectChoice();
    setClassChoice();
    setContentChoice();
  };

  const backToClass = () => {
    setDisplayTeacherChoice(false);
    setDisplaySubjectChoice(false);
    setDisplayClassChoice(true);
    setDisplayContentChoice(false);
    setDisplayLoginAdmin(false);
    // setTeacherChoice();
    // setSubjectChoice();
    setClassChoice();
    setContentChoice();
  };

  const backToContent = () => {
    setDisplayTeacherChoice(false);
    setDisplaySubjectChoice(false);
    setDisplayClassChoice(false);
    setDisplayContentChoice(true);
    setDisplayLoginAdmin(false);
    // setTeacherChoice();
    // setSubjectChoice();
    // setClassChoice();
    setContentChoice();
  };

  function BackToTeacherButton () {
    return (
      <button className='neonButton' onClick={backToTeacher}> <p className='buttonTextAdmin'> Back </p> </button>
    )
  };

  function BackToSubjectButton () {
    return (
      <button className='neonButton' onClick={backToSubject}> <p className='buttonTextAdmin'> Back </p> </button>
    )
  };
  function BackToClassButton () {
    return (
      <button className='neonButton' onClick={backToClass}> <p className='buttonTextAdmin'> Back </p> </button>
    )
  };
  function BackToContentButton () {
    return (
      <button className='neonButton' onClick={backToContent}> <p className='buttonTextAdmin'> Back </p> </button>
    )
  };



  // TEACHER CHOICE
  const handleTeacherChoice = ({activeTeacher}) => {

    setTeacherChoice(activeTeacher);
    setDisplaySubjectChoice(true);
    setDisplayTeacherChoice(false);
  };

  function ButtonTeacherChoice({activeTeacher, activeTeacherTitle}) {
    return (
      <div className='divRoundButton'>
        <button className='glow-on-hover' 
          onClick={()=>handleTeacherChoice({activeTeacher})} 
        > 
        <p className={'buttonText'}> {activeTeacherTitle} </p>
      </button> 
      </div>
    )
  };

  function TeacherChoice(){
    return (
      <>
      <ButtonTeacherChoice activeTeacherTitle={'Koglin'} activeTeacher={'koglin'} />
      <ButtonTeacherChoice activeTeacherTitle={'Crnogorcevic'} activeTeacher={'crnogorcevic'} />
      {/* <ButtonTeacherChoice activeTeacherTitle={'Mr Ralston-Bryce'} activeTeacher={'ralstonBryce'} /> */}
      {/* <ButtonTeacherChoice activeTeacherTitle={'Teacher Admin'} activeTeacher={'admin'} /> */}

      </>
    )
  };












  // HOME

  const handleHome = () => {
    setDisplayTeacherChoice(true);
    setDisplaySubjectChoice(false);
    setDisplayClassChoice(false);
    setDisplayContentChoice(false);
    setDisplayLoginAdmin(false);
    setSubjectChoice();
    setClassChoice();
    setContentChoice();
    setTeacherChoice();
  };


  function ButtonHome() {
    return (<> <button className='neonButton' onClick={()=> handleHome()}> <p className='buttonTextAdmin'> Home </p> </button> </> )
  };










  // SUBJECT
  const handleSubjectChoice = ({activeSubject}) => {
    setSubjectChoice(activeSubject);
    setDisplaySubjectChoice(false);
    setDisplayClassChoice(true);
  };

  function ButtonSubjectChoice ({buttonSubjectTitleProp, activeSubject}) {
    return (
      <div className='divRoundButton'> 
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
      <div className='divRoundButton'> 
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
    <div className='divRoundButton'> 
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
      <LITable tnp={ Number(1) } activeTeacher={teacherChoice} activeSubject={'Sci'} activeYearGroup={'10'} activeClass={'10SciASP'} adminCheck={adminState} />
      <LITable tnp={ Number(2) } activeTeacher={teacherChoice} activeSubject={'Sci'} activeYearGroup={'10'} activeClass={'10SciASP'} adminCheck={adminState} />
      <LITable tnp={ Number(3) } activeTeacher={teacherChoice} activeSubject={'Sci'} activeYearGroup={'10'} activeClass={'10SciASP'} adminCheck={adminState} />
      <LITable tnp={ Number(4) } activeTeacher={teacherChoice} activeSubject={'Sci'} activeYearGroup={'10'} activeClass={'10SciASP'} adminCheck={adminState} />
      <LITable tnp={ Number(5) } activeTeacher={teacherChoice} activeSubject={'Sci'} activeYearGroup={'10'} activeClass={'10SciASP'} adminCheck={adminState} />
      <LITable tnp={ Number(6) } activeTeacher={teacherChoice} activeSubject={'Sci'} activeYearGroup={'10'} activeClass={'10SciASP'} adminCheck={adminState} />

    </>
    )
  };
    function Year10SciLITables(){
    return (
      <>
      <LITable tnp={ Number(1) } activeTeacher={teacherChoice} activeSubject={'Sci'} activeYearGroup={'10'} activeClass={'10Sci'} adminCheck={adminState} />
      <LITable tnp={ Number(2) } activeTeacher={teacherChoice} activeSubject={'Sci'} activeYearGroup={'10'} activeClass={'10Sci'} adminCheck={adminState} />
      <LITable tnp={ Number(3) } activeTeacher={teacherChoice} activeSubject={'Sci'} activeYearGroup={'10'} activeClass={'10Sci'} adminCheck={adminState} />
      <LITable tnp={ Number(4) } activeTeacher={teacherChoice} activeSubject={'Sci'} activeYearGroup={'10'} activeClass={'10Sci'} adminCheck={adminState} />
      <LITable tnp={ Number(5) } activeTeacher={teacherChoice} activeSubject={'Sci'} activeYearGroup={'10'} activeClass={'10Sci'} adminCheck={adminState} />
      <LITable tnp={ Number(6) } activeTeacher={teacherChoice} activeSubject={'Sci'} activeYearGroup={'10'} activeClass={'10Sci'} adminCheck={adminState} />

    </>
    )
  };
  function Year9SciLITables(){
    return (
      <>
      <LITable tnp={ Number(1) } activeTeacher={teacherChoice} activeSubject={'Sci'} activeYearGroup={'9'} activeClass={'9Sci'} adminCheck={adminState} />
      <LITable tnp={ Number(2) } activeTeacher={teacherChoice} activeSubject={'Sci'} activeYearGroup={'9'} activeClass={'9Sci'} adminCheck={adminState} />
    </>
    )
  };
  function Year8SciLITables(){
    return (
      <>
      <LITable tnp={ Number(1) } activeTeacher={teacherChoice} activeSubject={'Sci'} activeYearGroup={'8'} activeClass={'8Sci'} adminCheck={adminState} />
      <LITable tnp={ Number(2) } activeTeacher={teacherChoice} activeSubject={'Sci'} activeYearGroup={'8'} activeClass={'8Sci'} adminCheck={adminState} />
    </>
    )
  };
  function Year7SciLITables(){
    return (
      <>
      <LITable tnp={ Number(1) } activeTeacher={teacherChoice} activeSubject={'Sci'} activeYearGroup={'7'} activeClass={'7Sci'} adminCheck={adminState} />
      <LITable tnp={ Number(2) } activeTeacher={teacherChoice} activeSubject={'Sci'} activeYearGroup={'7'} activeClass={'7Sci'} adminCheck={adminState} />
    </>
    )
  };

  // functions for LI Tables 
  // STEM  
  function Year10STEM100HourLITables() {
    return (
      <>
      <LITable tnp={ Number(1) } activeTeacher={teacherChoice} activeSubject={'STEM'} activeYearGroup={'10'} activeClass={'10STEM100Hour'}   adminCheck={adminState} />

      </>
    )
  };
  function Year10STEM200HourLITables() {
    return (
      <>
      <LITable tnp={ Number(1) } activeTeacher={teacherChoice} activeSubject={'STEM'} activeYearGroup={'10'} activeClass={'10STEM200Hour'}   adminCheck={adminState} />

      </>
    )
  };
  function Year9STEMLITables() {
    return (
      <>
      <LITable tnp={ Number(1) } activeTeacher={teacherChoice} activeSubject={'STEM'} activeYearGroup={'9'} activeClass={'9STEM'}   adminCheck={adminState} />

      </>
    )
  };
  function Year8STEMSem1LITables() {
    return (
      <>
      <LITable tnp={ Number(1) } activeTeacher={teacherChoice} activeSubject={'STEM'} activeYearGroup={'8'} activeClass={'8STEMSem1'}   adminCheck={adminState} />

      </>
    )
  };
  function Year8STEMSem2LITables() {
    return (
      <>
      <LITable tnp={ Number(1) } activeTeacher={teacherChoice} activeSubject={'STEM'} activeYearGroup={'8'} activeClass={'8STEMSem2'}   adminCheck={adminState} />

      </>
    )
  };

  // functions for LI Tables 
  // Phy
  function Year12PhyLITables() {
    return (
      <>
      <LITable tnp={ Number(5) } activeTeacher={teacherChoice} activeSubject={'Phy'} activeYearGroup={'12'} activeClass={'12Phy'} adminCheck={adminState} />
      <LITable tnp={ Number(6) } activeTeacher={teacherChoice} activeSubject={'Phy'} activeYearGroup={'12'} activeClass={'12Phy'} adminCheck={adminState} />
      <LITable tnp={ Number(7) } activeTeacher={teacherChoice} activeSubject={'Phy'} activeYearGroup={'12'} activeClass={'12Phy'} adminCheck={adminState} />
      <LITable tnp={ Number(8) } activeTeacher={teacherChoice} activeSubject={'Phy'} activeYearGroup={'12'} activeClass={'12Phy'} adminCheck={adminState} />


      </>
    )
  };
  function Year11PhyLITables() {
    return (
      <>
      <LITable tnp={ Number(1) } activeTeacher={teacherChoice} activeSubject={'Phy'} activeYearGroup={'11'} activeClass={'11Phy'} adminCheck={adminState} />
      <LITable tnp={ Number(2) } activeTeacher={teacherChoice} activeSubject={'Phy'} activeYearGroup={'11'} activeClass={'11Phy'} adminCheck={adminState} />
      <LITable tnp={ Number(3) } activeTeacher={teacherChoice} activeSubject={'Phy'} activeYearGroup={'11'} activeClass={'11Phy'} adminCheck={adminState} />
      <LITable tnp={ Number(4) } activeTeacher={teacherChoice} activeSubject={'Phy'} activeYearGroup={'11'} activeClass={'11Phy'} adminCheck={adminState} />


      </>
    )
  };
 
  // functions for LI Tables 
  // Inv Sci
  function Year12InvSciLITables() {
    return (
      <>
      <LITable tnp={ Number(5) } activeTeacher={teacherChoice} activeSubject={'InvSci'} activeYearGroup={'12'} activeClass={'12InvSci'} adminCheck={adminState} />
      <LITable tnp={ Number(6) } activeTeacher={teacherChoice} activeSubject={'InvSci'} activeYearGroup={'12'} activeClass={'12InvSci'} adminCheck={adminState} />
      <LITable tnp={ Number(7) } activeTeacher={teacherChoice} activeSubject={'InvSci'} activeYearGroup={'12'} activeClass={'12InvSci'} adminCheck={adminState} />
      <LITable tnp={ Number(8) } activeTeacher={teacherChoice} activeSubject={'InvSci'} activeYearGroup={'12'} activeClass={'12InvSci'} adminCheck={adminState} />


      </>
    )
  };
  function Year11InvSciLITables() {
    return (
      <>
      <LITable tnp={ Number(1) } activeTeacher={teacherChoice} activeSubject={'InvSci'} activeYearGroup={'11'} activeClass={'11InvSci'} adminCheck={adminState} />
      <LITable tnp={ Number(2) } activeTeacher={teacherChoice} activeSubject={'InvSci'} activeYearGroup={'11'} activeClass={'11InvSci'} adminCheck={adminState} />
      <LITable tnp={ Number(3) } activeTeacher={teacherChoice} activeSubject={'InvSci'} activeYearGroup={'11'} activeClass={'11InvSci'} adminCheck={adminState} />
      <LITable tnp={ Number(4) } activeTeacher={teacherChoice} activeSubject={'InvSci'} activeYearGroup={'11'} activeClass={'11InvSci'} adminCheck={adminState} />


      </>
    )
  };



  // PSYCHOLOGY
  function Year10PyyLITables() {
    return (
      <>
      <LITable tnp={ Number(1) } activeTeacher={teacherChoice} activeSubject={'Pyy'} activeYearGroup={'10'} activeClass={'10Pyy'} adminCheck={adminState} />
      <LITable tnp={ Number(2) } activeTeacher={teacherChoice} activeSubject={'Pyy'} activeYearGroup={'10'} activeClass={'10Pyy'} adminCheck={adminState} />
      <LITable tnp={ Number(3) } activeTeacher={teacherChoice} activeSubject={'Pyy'} activeYearGroup={'10'} activeClass={'10Pyy'} adminCheck={adminState} />
      <LITable tnp={ Number(4) } activeTeacher={teacherChoice} activeSubject={'Pyy'} activeYearGroup={'10'} activeClass={'10Pyy'} adminCheck={adminState} />


      </>
    )
  };

  function Year9PyyLITables() {
    return (
      <>
      <LITable tnp={ Number(1) } activeTeacher={teacherChoice} activeSubject={'Pyy'} activeYearGroup={'9'} activeClass={'9Pyy'} adminCheck={adminState} />
      <LITable tnp={ Number(2) } activeTeacher={teacherChoice} activeSubject={'Pyy'} activeYearGroup={'9'} activeClass={'9Pyy'} adminCheck={adminState} />
      <LITable tnp={ Number(3) } activeTeacher={teacherChoice} activeSubject={'Pyy'} activeYearGroup={'9'} activeClass={'9Pyy'} adminCheck={adminState} />
      <LITable tnp={ Number(4) } activeTeacher={teacherChoice} activeSubject={'Pyy'} activeYearGroup={'9'} activeClass={'9Pyy'} adminCheck={adminState} />


      </>
    )
  };

  function Year12CheLITables() {
    return (
      <>
      <LITable tnp={ Number(1) } activeTeacher={teacherChoice} activeSubject={'Che'} activeYearGroup={'12'} activeClass={'12Che'} adminCheck={adminState} />
      <LITable tnp={ Number(2) } activeTeacher={teacherChoice} activeSubject={'Che'} activeYearGroup={'12'} activeClass={'12Che'} adminCheck={adminState} />
      <LITable tnp={ Number(3) } activeTeacher={teacherChoice} activeSubject={'Che'} activeYearGroup={'12'} activeClass={'12Che'} adminCheck={adminState} />
      <LITable tnp={ Number(4) } activeTeacher={teacherChoice} activeSubject={'Che'} activeYearGroup={'12'} activeClass={'12Che'} adminCheck={adminState} />


      </>
    )
  };

  function Year11CheLITables() {
    return (
      <>
      <LITable tnp={ Number(1) } activeTeacher={teacherChoice} activeSubject={'Che'} activeYearGroup={'11'} activeClass={'11Che'} adminCheck={adminState} />
      <LITable tnp={ Number(2) } activeTeacher={teacherChoice} activeSubject={'Che'} activeYearGroup={'11'} activeClass={'11Che'} adminCheck={adminState} />
      <LITable tnp={ Number(3) } activeTeacher={teacherChoice} activeSubject={'Che'} activeYearGroup={'11'} activeClass={'11Che'} adminCheck={adminState} />
      <LITable tnp={ Number(4) } activeTeacher={teacherChoice} activeSubject={'Che'} activeYearGroup={'11'} activeClass={'11Che'} adminCheck={adminState} />


      </>
    )
  };

  // OTHER SUBJECT LITABLES






  // ASSESSMENT TABLE FUNCTIONS


  // SUBJECT INFO FUNCTIONS








  // export default function return
  return (
    <>



    <div className='divTopBar'>
               
      { displayTeacherChoice ? null :     
        <>
          <div className='divTopBar'>
            <ButtonHome/>
          </div>      
        
          <div className='divTopBar'>
            {displaySubjectChoice ? <BackToTeacherButton/> : null}
            {displayClassChoice ? <BackToSubjectButton/> : null}
            {displayContentChoice ? <BackToClassButton/> : null}
            {subjectChoice != null && classChoice != null && contentChoice != null ? <BackToContentButton/> : null }
          </div>

          <div className='divTopBar'>
            <ButtonToggleDisplayLoginAdmin/>
          </div>

        </> 
      } 
      
      { displayLoginAdmin ? 
      <div className='divTopBar'>
        <Login 
        handleToggleAdminMode={handleToggleAdminMode}
        adminState={adminState}
        />
      </div> : null}
  
    </div>


    {displayTeacherChoice ? 
      <div className='divTeacherChoice'>
        <TeacherChoice />
      </div> : null
    }
    
    { displaySubjectChoice || displayClassChoice || displayContentChoice  ?
      <div className='divMain'>


    { displaySubjectChoice  ?
      <div className='divChoice'>
        <ButtonSubjectChoice activeSubject={'Sci'} buttonSubjectTitleProp={'SCIENCE'}/>
        <ButtonSubjectChoice activeSubject={'STEM'} buttonSubjectTitleProp={'STEM'} />
        <ButtonSubjectChoice activeSubject={'Phy'} buttonSubjectTitleProp={'PHYSICS'} />
        <ButtonSubjectChoice activeSubject={'InvSci'} buttonSubjectTitleProp={'INVESTIGATING SCIENCE'} />
        <ButtonSubjectChoice activeSubject={'Che'} buttonSubjectTitleProp={'CHEMISTRY'} />
        <ButtonSubjectChoice activeSubject={'Pyy'} buttonSubjectTitleProp={'PSYCHOLOGY'} />
      </div>
    : null 
    }
      
      



      { displayClassChoice ? 
        <div className='divChoice'>
          { subjectChoice == 'Sci' ? 
            <div className='divChoice'>
              <ButtonClassChoice activeYearGroup={'10'} activeClass={'10SciASP'} buttonClassTitleProp={'Year 10 Science (ASP)'}/>
              {/* <ButtonClassChoice activeYearGroup={'10'} activeClass={'10Sci'} buttonClassTitleProp={'Year 10 Science'}/> */}
              {/* <ButtonClassChoice activeYearGroup={'9'} activeClass={'9Sci'} buttonClassTitleProp={'Year 9 Science'}/> */}
              {/* <ButtonClassChoice activeYearGroup={'8'} activeClass={'8Sci'} buttonClassTitleProp={'Year 8 Science'}/> */}
              <ButtonClassChoice activeYearGroup={'7'} activeClass={'7Sci'} buttonClassTitleProp={'Year 7 Science'}/>
            </div> : null
          }

          { subjectChoice == 'STEM' ?
            <div className='divChoice'>
          <ButtonClassChoice activeYearGroup={'10'} activeClass={'10STEM200Hour'} buttonClassTitleProp={'Year 10 STEM (200 Hour)'}/>
          {/* <ButtonClassChoice activeYearGroup={'10'} activeClass={'10STEM100Hour'} buttonClassTitleProp={'Year 10 STEM (100 Hour)'}/> */}
          {/* <ButtonClassChoice activeYearGroup={'9'} activeClass={'9STEM'} buttonClassTitleProp={'Year 9 STEM'}/> */}
          {/* <ButtonClassChoice activeYearGroup={'8'} activeClass={'8STEMSem1'} buttonClassTitleProp={'Year 8 STEM (Sem 1)'}/> */}
          {/* <ButtonClassChoice activeYearGroup={'8'} activeClass={'8STEMSem2'} buttonClassTitleProp={'Year 8 STEM (Sem 2'}/> */}
          </div> : null
          }

          { subjectChoice == 'Phy' ?
            <div className='divChoice'>
          <ButtonClassChoice activeYearGroup={'12'} activeClass={'12Phy'} buttonClassTitleProp={'Year 12 Physics'}/>
          <ButtonClassChoice activeYearGroup={'11'} activeClass={'11Phy'} buttonClassTitleProp={'Year 11 Physics'}/>
          </div> : null
          }

          { subjectChoice == 'InvSci' ?
            <div className='divChoice'>
          <ButtonClassChoice activeYearGroup={'12'} activeClass={'12InvSci'} buttonClassTitleProp={'Year 12 Investigating Science'}/>
          {/* <ButtonClassChoice activeYearGroup={'11'} activeClass={'11InvSci'} buttonClassTitleProp={'Year 11 Investigating Science'}/> */}
          </div> : null
          }

          { subjectChoice == 'Pyy' ?
            <div className='divChoice'>
          <ButtonClassChoice activeYearGroup={'10'} activeClass={'10Pyy'} buttonClassTitleProp={'Year 10 Psychology'}/>
          <ButtonClassChoice activeYearGroup={'9'} activeClass={'9Pyy'} buttonClassTitleProp={'Year 9 Psychology'}/>
          </div> : null
          }

          { subjectChoice == 'Che' ?
            <div className='divChoice'>
          <ButtonClassChoice activeYearGroup={'12'} activeClass={'12Che'} buttonClassTitleProp={'Year 12 Chemistry'}/>
          <ButtonClassChoice activeYearGroup={'11'} activeClass={'11Che'} buttonClassTitleProp={'Year 11 Chemistry'}/>

          </div> : null
          }


        </div>
      : null
      }




      { displayContentChoice ?
        <div className='divChoice'>
          <ButtonContentChoice contentChoiceProp={'LITable'} buttonContentTitleProp={'Learning Intention Checklist'}/>
          <ButtonContentChoice contentChoiceProp={'AssTable'} buttonContentTitleProp={'Assessment Information'}/>
          <ButtonContentChoice contentChoiceProp={'SubjectInfoTable'} buttonContentTitleProp={'Subject Information'}/>
        </div> : null
      }

    </div> : null
  }






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
  <div className='divLITable' > <Year10STEM200HourLITables/> </div> : null
}

{ subjectChoice == 'STEM' && classChoice == '10STEM100Hour' && contentChoice == 'LITable' ? 
  <div className='divLITable' > <Year10STEM100HourLITables/> </div> : null
}

{ subjectChoice == 'STEM' && classChoice == '9STEM' && contentChoice == 'LITable' ? 
  <div className='divLITable' > <Year9STEMLITables/> </div> : null
}

{ subjectChoice == 'STEM' && classChoice == '8STEMSem2' && contentChoice == 'LITable' ? 
  <div className='divLITable' > <Year8STEMSem1LITables/> </div> : null
}

{ subjectChoice == 'STEM' && classChoice == '8STEMSem1' && contentChoice == 'LITable' ? 
  <div className='divLITable' > <Year8STEMSem2LITables/> </div> : null
}





{ subjectChoice == 'Phy' && classChoice == '12Phy' && contentChoice == 'LITable' ? 
  <div className='divLITable' > <Year12PhyLITables/> </div> : null
}

{ subjectChoice == 'Phy' && classChoice == '11Phy' && contentChoice == 'LITable' ? 
  <div className='divLITable' > <Year11PhyLITables/> </div> : null
}






{ subjectChoice == 'InvSci' && classChoice == '12InvSci' && contentChoice == 'LITable' ? 
  <div className='divLITable' > <Year12InvSciLITables/> </div> : null
}

{ subjectChoice == 'InvSci' && classChoice == '11InvSci' && contentChoice == 'LITable' ? 
  <div className='divLITable' > <Year11InvSciLITables/> </div> : null
}




{ subjectChoice == 'Che' && classChoice == '12Che' && contentChoice == 'LITable' ? 
  <div className='divLITable' > <Year12CheLITables/> </div> : null
}

{ subjectChoice == 'Che' && classChoice == '11Che' && contentChoice == 'LITable' ? 
  <div className='divLITable' > <Year11CheLITables/> </div> : null
}




{ subjectChoice == 'Pyy' && classChoice == '10Pyy' && contentChoice == 'LITable' ? 
  <div className='divLITable' > <Year10PyyLITables/> </div> : null
}

{ subjectChoice == 'Pyy' && classChoice == '9Pyy' && contentChoice == 'LITable' ? 
  <div className='divLITable' > <Year9PyyLITables/> </div> : null
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
