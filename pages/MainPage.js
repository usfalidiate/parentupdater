import 'bootstrap/dist/css/bootstrap.min.css'
import { useState, useEffect, useRef } from 'react';
import { app, db } from '../Components/Firebase';


import LITable from '../Components/LITable';
import Login from '../Components/Login';
import { teacherArrays } from '../Components/TeacherArrays';

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

  function TeacherChoiceReturn(){
    return (
      
      <div className='divTeacherChoice'>
        <ButtonTeacherChoice activeTeacherTitle={'Koglin'} activeTeacher={'koglin'} />
        <ButtonTeacherChoice activeTeacherTitle={'Crnogorcevic'} activeTeacher={'crnogorcevic'} />
        <ButtonTeacherChoice activeTeacherTitle={'Ralston-Bryce'} activeTeacher={'ralstonBryce'} />
      </div>
    )
  };












  // HOME BUTTON

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










  // SUBJECT CHOICE
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

  function SubjectChoiceReturn() {
    return (
      <div className='divChoice'>

      <ButtonSubjectChoice activeSubject={'BIO'} buttonSubjectTitleProp={'BIOLOGY'} />
      <ButtonSubjectChoice activeSubject={'CHE'} buttonSubjectTitleProp={'CHEMISTRY'} />
      <ButtonSubjectChoice activeSubject={'EES'} buttonSubjectTitleProp={'EARTH AND ENVIRONMENTAL SCIENCE'} />
      <ButtonSubjectChoice activeSubject={'INVSCI'} buttonSubjectTitleProp={'INVESTIGATING SCIENCE'} />
      <ButtonSubjectChoice activeSubject={'PHY'} buttonSubjectTitleProp={'PHYSICS'} />
<br/>
      <ButtonSubjectChoice activeSubject={'SCI'} buttonSubjectTitleProp={'SCIENCE'}/>
<br/>
      <ButtonSubjectChoice activeSubject={'STEM'} buttonSubjectTitleProp={'STEM'} />
      <ButtonSubjectChoice activeSubject={'PYY'} buttonSubjectTitleProp={'PSYCHOLOGY'} />
      <ButtonSubjectChoice activeSubject={'MST'} buttonSubjectTitleProp={'MARINE STUDIES'} />

    </div>
    )
  }





  // CLASS CHOICE

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


  function ClassChoiceReturnSci() {
    return(
      <div className='divChoice'>
        <ButtonClassChoice activeYearGroup={'10'} activeClass={'10SCIASP'} buttonClassTitleProp={'Year 10 Science (ASP)'}/>
        <ButtonClassChoice activeYearGroup={'10'} activeClass={'10SCI'} buttonClassTitleProp={'Year 10 Science'}/>
        <ButtonClassChoice activeYearGroup={'9'} activeClass={'9SCI'} buttonClassTitleProp={'Year 9 Science'}/>
        <ButtonClassChoice activeYearGroup={'8'} activeClass={'8SCI'} buttonClassTitleProp={'Year 8 Science'}/>
        <ButtonClassChoice activeYearGroup={'7'} activeClass={'7SCI'} buttonClassTitleProp={'Year 7 Science'}/>
      </div>
    )
  };


  function ClassChoiceReturnSTEM() {
    return (
      <div className='divChoice'>
        <ButtonClassChoice activeYearGroup={'10'} activeClass={'10STEM200Hour'} buttonClassTitleProp={'Year 10 STEM (200 Hour)'}/>
        <ButtonClassChoice activeYearGroup={'10'} activeClass={'10STEM100Hour'} buttonClassTitleProp={'Year 10 STEM (100 Hour)'}/>
        <ButtonClassChoice activeYearGroup={'9'} activeClass={'9STEM200Hour'} buttonClassTitleProp={'Year 9 STEM (200 Hour)'}/>
        <ButtonClassChoice activeYearGroup={'9'} activeClass={'9STEM100Hour'} buttonClassTitleProp={'Year 9 STEM (100 Hour)'}/>
        <ButtonClassChoice activeYearGroup={'8'} activeClass={'8STEMSem1'} buttonClassTitleProp={'Year 8 STEM (Sem 1)'}/>
        <ButtonClassChoice activeYearGroup={'8'} activeClass={'8STEMSem2'} buttonClassTitleProp={'Year 8 STEM (Sem 2'}/>
      </div>
    )
  };

  function ClassChoiceReturnPHY() {
    return (
      <div className='divChoice'>
        <ButtonClassChoice activeYearGroup={'12'} activeClass={'12PHY'} buttonClassTitleProp={'Year 12 Physics'}/>
        <ButtonClassChoice activeYearGroup={'11'} activeClass={'11PHY'} buttonClassTitleProp={'Year 11 Physics'}/>
      </div>
    )
  };

  function ClassChoiceReturnInvSci() {
    return (
      <div className='divChoice'>
        <ButtonClassChoice activeYearGroup={'12'} activeClass={'12INVSCI'} buttonClassTitleProp={'Year 12 Investigating Science'}/>
        <ButtonClassChoice activeYearGroup={'11'} activeClass={'11INVSCI'} buttonClassTitleProp={'Year 11 Investigating Science'}/>
      </div>
    )
  };

  function ClassChoiceReturnChe() {
    return (
      <div className='divChoice'>
        <ButtonClassChoice activeYearGroup={'12'} activeClass={'12CHE'} buttonClassTitleProp={'Year 12 Chemistry'}/>
        <ButtonClassChoice activeYearGroup={'11'} activeClass={'11CHE'} buttonClassTitleProp={'Year 11 Chemistry'}/>
      </div>
    )
  };

  function ClassChoiceReturnPYY() {
    return (
      <div className='divChoice'>
        <ButtonClassChoice activeYearGroup={'10'} activeClass={'10PYY'} buttonClassTitleProp={'Year 10 Psychology'}/>
        <ButtonClassChoice activeYearGroup={'9'} activeClass={'9PYY'} buttonClassTitleProp={'Year 9 Psychology'}/>
      </div>
    )
  };









  // CONTENT CHOICE
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

  function ContentChoiceReturn() {
    return (
      <div className='divChoice'>
        <ButtonContentChoice contentChoiceProp={'LITable'} buttonContentTitleProp={'Learning Intention Checklist'}/>
        <ButtonContentChoice contentChoiceProp={'AssTable'} buttonContentTitleProp={'Assessment Information'}/>
        <ButtonContentChoice contentChoiceProp={'SubjectInfoTable'} buttonContentTitleProp={'Subject Information'}/>
    </div>
    )
  };











  // LITABLE FUNCTIONS


  // STAGE 6 SCIENCE

  // BIOLOGY
  function Year12BIOLITables() {
    return (
      <>
      <LITable tnp={ Number(1) } activeTeacher={teacherChoice} activeSubject={'BIO'} activeYearGroup={'12'} activeClass={'12BIO'} adminCheck={adminState} />
      <LITable tnp={ Number(2) } activeTeacher={teacherChoice} activeSubject={'BIO'} activeYearGroup={'12'} activeClass={'12BIO'} adminCheck={adminState} />
      <LITable tnp={ Number(3) } activeTeacher={teacherChoice} activeSubject={'BIO'} activeYearGroup={'12'} activeClass={'12BIO'} adminCheck={adminState} />
      <LITable tnp={ Number(4) } activeTeacher={teacherChoice} activeSubject={'BIO'} activeYearGroup={'12'} activeClass={'12BIO'} adminCheck={adminState} />
  
  
      </>
    )
  };
  
  function Year11BIOLITables() {
    return (
      <>
      <LITable tnp={ Number(1) } activeTeacher={teacherChoice} activeSubject={'BIO'} activeYearGroup={'11'} activeClass={'11BIO'} adminCheck={adminState} />
      <LITable tnp={ Number(2) } activeTeacher={teacherChoice} activeSubject={'BIO'} activeYearGroup={'11'} activeClass={'11BIO'} adminCheck={adminState} />
      <LITable tnp={ Number(3) } activeTeacher={teacherChoice} activeSubject={'BIO'} activeYearGroup={'11'} activeClass={'11BIO'} adminCheck={adminState} />
      <LITable tnp={ Number(4) } activeTeacher={teacherChoice} activeSubject={'BIO'} activeYearGroup={'11'} activeClass={'11BIO'} adminCheck={adminState} />
  
  
      </>
    )
  };


// CHEMISTRY  
function Year12CHELITables() {
  return (
    <>
    <LITable tnp={ Number(1) } activeTeacher={teacherChoice} activeSubject={'CHE'} activeYearGroup={'12'} activeClass={'12CHE'} adminCheck={adminState} />
    <LITable tnp={ Number(2) } activeTeacher={teacherChoice} activeSubject={'CHE'} activeYearGroup={'12'} activeClass={'12CHE'} adminCheck={adminState} />
    <LITable tnp={ Number(3) } activeTeacher={teacherChoice} activeSubject={'CHE'} activeYearGroup={'12'} activeClass={'12CHE'} adminCheck={adminState} />
    <LITable tnp={ Number(4) } activeTeacher={teacherChoice} activeSubject={'CHE'} activeYearGroup={'12'} activeClass={'12CHE'} adminCheck={adminState} />


    </>
  )
};

function Year11CHELITables() {
  return (
    <>
    <LITable tnp={ Number(1) } activeTeacher={teacherChoice} activeSubject={'CHE'} activeYearGroup={'11'} activeClass={'11CHE'} adminCheck={adminState} />
    <LITable tnp={ Number(2) } activeTeacher={teacherChoice} activeSubject={'CHE'} activeYearGroup={'11'} activeClass={'11CHE'} adminCheck={adminState} />
    <LITable tnp={ Number(3) } activeTeacher={teacherChoice} activeSubject={'CHE'} activeYearGroup={'11'} activeClass={'11CHE'} adminCheck={adminState} />
    <LITable tnp={ Number(4) } activeTeacher={teacherChoice} activeSubject={'CHE'} activeYearGroup={'11'} activeClass={'11CHE'} adminCheck={adminState} />


    </>
  )
};

// EARTH AND ENVIRONMENTAL SCIENCE
function Year12EESLITables() {
  return (
    <>
    <LITable tnp={ Number(1) } activeTeacher={teacherChoice} activeSubject={'EES'} activeYearGroup={'12'} activeClass={'12EES'} adminCheck={adminState} />
    <LITable tnp={ Number(2) } activeTeacher={teacherChoice} activeSubject={'EES'} activeYearGroup={'12'} activeClass={'12EES'} adminCheck={adminState} />
    <LITable tnp={ Number(3) } activeTeacher={teacherChoice} activeSubject={'EES'} activeYearGroup={'12'} activeClass={'12EES'} adminCheck={adminState} />
    <LITable tnp={ Number(4) } activeTeacher={teacherChoice} activeSubject={'EES'} activeYearGroup={'12'} activeClass={'12EES'} adminCheck={adminState} />


    </>
  )
};

function Year11EESLITables() {
  return (
    <>
    <LITable tnp={ Number(1) } activeTeacher={teacherChoice} activeSubject={'EES'} activeYearGroup={'11'} activeClass={'11EES'} adminCheck={adminState} />
    <LITable tnp={ Number(2) } activeTeacher={teacherChoice} activeSubject={'EES'} activeYearGroup={'11'} activeClass={'11EES'} adminCheck={adminState} />
    <LITable tnp={ Number(3) } activeTeacher={teacherChoice} activeSubject={'EES'} activeYearGroup={'11'} activeClass={'11EES'} adminCheck={adminState} />
    <LITable tnp={ Number(4) } activeTeacher={teacherChoice} activeSubject={'EES'} activeYearGroup={'11'} activeClass={'11EES'} adminCheck={adminState} />


    </>
  )
};

  // INVESTIGATING SCIENCE
  function Year12INVSCILITables() {
    return (
      <>
      <LITable tnp={ Number(5) } activeTeacher={teacherChoice} activeSubject={'INVSCI'} activeYearGroup={'12'} activeClass={'12INVSCI'} adminCheck={adminState} />
      <LITable tnp={ Number(6) } activeTeacher={teacherChoice} activeSubject={'INVSCI'} activeYearGroup={'12'} activeClass={'12INVSCI'} adminCheck={adminState} />
      <LITable tnp={ Number(7) } activeTeacher={teacherChoice} activeSubject={'INVSCI'} activeYearGroup={'12'} activeClass={'12INVSCI'} adminCheck={adminState} />
      <LITable tnp={ Number(8) } activeTeacher={teacherChoice} activeSubject={'INVSCI'} activeYearGroup={'12'} activeClass={'12INVSCI'} adminCheck={adminState} />


      </>
    )
  };
  function Year11INVSCILITables() {
    return (
      <>
      <LITable tnp={ Number(1) } activeTeacher={teacherChoice} activeSubject={'INVSCI'} activeYearGroup={'11'} activeClass={'11INVSCI'} adminCheck={adminState} />
      <LITable tnp={ Number(2) } activeTeacher={teacherChoice} activeSubject={'INVSCI'} activeYearGroup={'11'} activeClass={'11INVSCI'} adminCheck={adminState} />
      <LITable tnp={ Number(3) } activeTeacher={teacherChoice} activeSubject={'INVSCI'} activeYearGroup={'11'} activeClass={'11INVSCI'} adminCheck={adminState} />
      <LITable tnp={ Number(4) } activeTeacher={teacherChoice} activeSubject={'INVSCI'} activeYearGroup={'11'} activeClass={'11INVSCI'} adminCheck={adminState} />


      </>
    )
  };

  // PHYSICS
  function Year12PHYLITables() {
    return (
      <>
      <LITable tnp={ Number(5) } activeTeacher={teacherChoice} activeSubject={'PHY'} activeYearGroup={'12'} activeClass={'12PHY'} sentralClass={'12PHY01'} adminCheck={adminState} />
      <LITable tnp={ Number(6) } activeTeacher={teacherChoice} activeSubject={'PHY'} activeYearGroup={'12'} activeClass={'12PHY'} sentralClass={'12PHY01'} adminCheck={adminState} />
      <LITable tnp={ Number(7) } activeTeacher={teacherChoice} activeSubject={'PHY'} activeYearGroup={'12'} activeClass={'12PHY'} sentralClass={'12PHY01'} adminCheck={adminState} />
      <LITable tnp={ Number(8) } activeTeacher={teacherChoice} activeSubject={'PHY'} activeYearGroup={'12'} activeClass={'12PHY'} sentralClass={'12PHY01'} adminCheck={adminState} />


      </>
    )
  };
  function Year11PHYLITables() {
    return (
      <>
      <LITable tnp={ Number(1) } activeTeacher={teacherChoice} activeSubject={'PHY'} activeYearGroup={'11'} activeClass={'11PHY'} sentralClass={'11PHY01'} adminCheck={adminState} />
      <LITable tnp={ Number(2) } activeTeacher={teacherChoice} activeSubject={'PHY'} activeYearGroup={'11'} activeClass={'11PHY'} sentralClass={'11PHY01'} adminCheck={adminState} />
      <LITable tnp={ Number(3) } activeTeacher={teacherChoice} activeSubject={'PHY'} activeYearGroup={'11'} activeClass={'11PHY'} sentralClass={'11PHY01'} adminCheck={adminState} />
      <LITable tnp={ Number(4) } activeTeacher={teacherChoice} activeSubject={'PHY'} activeYearGroup={'11'} activeClass={'11PHY'} sentralClass={'11PHY01'} adminCheck={adminState} />


      </>
    )
  };
 




  // SCIENCE
  function Year10SCIASPLITables(){
    return (
      <>
      <LITable tnp={ Number(1) } activeTeacher={teacherChoice} activeSubject={'SCI'} activeYearGroup={'10'} activeClass={'10SCIASP'} adminCheck={adminState} />
      <LITable tnp={ Number(2) } activeTeacher={teacherChoice} activeSubject={'SCI'} activeYearGroup={'10'} activeClass={'10SCIASP'} adminCheck={adminState} />
      <LITable tnp={ Number(3) } activeTeacher={teacherChoice} activeSubject={'SCI'} activeYearGroup={'10'} activeClass={'10SCIASP'} adminCheck={adminState} />
      <LITable tnp={ Number(4) } activeTeacher={teacherChoice} activeSubject={'SCI'} activeYearGroup={'10'} activeClass={'10SCIASP'} adminCheck={adminState} />
      <LITable tnp={ Number(5) } activeTeacher={teacherChoice} activeSubject={'SCI'} activeYearGroup={'10'} activeClass={'10SCIASP'} adminCheck={adminState} />
      <LITable tnp={ Number(6) } activeTeacher={teacherChoice} activeSubject={'SCI'} activeYearGroup={'10'} activeClass={'10SCIASP'} adminCheck={adminState} />

    </>
    )
  };
    function Year10SCILITables(){
    return (
      <>
      <LITable tnp={ Number(1) } activeTeacher={teacherChoice} activeSubject={'SCI'} activeYearGroup={'10'} activeClass={'10SCI'} adminCheck={adminState} />
      <LITable tnp={ Number(2) } activeTeacher={teacherChoice} activeSubject={'SCI'} activeYearGroup={'10'} activeClass={'10SCI'} adminCheck={adminState} />
      <LITable tnp={ Number(3) } activeTeacher={teacherChoice} activeSubject={'SCI'} activeYearGroup={'10'} activeClass={'10SCI'} adminCheck={adminState} />
      <LITable tnp={ Number(4) } activeTeacher={teacherChoice} activeSubject={'SCI'} activeYearGroup={'10'} activeClass={'10SCI'} adminCheck={adminState} />
      <LITable tnp={ Number(5) } activeTeacher={teacherChoice} activeSubject={'SCI'} activeYearGroup={'10'} activeClass={'10SCI'} adminCheck={adminState} />
      <LITable tnp={ Number(6) } activeTeacher={teacherChoice} activeSubject={'SCI'} activeYearGroup={'10'} activeClass={'10SCI'} adminCheck={adminState} />

    </>
    )
  };
  function Year9SCILITables(){
    return (
      <>
      <LITable tnp={ Number(1) } activeTeacher={teacherChoice} activeSubject={'SCI'} activeYearGroup={'9'} activeClass={'9SCI'} adminCheck={adminState} />
      <LITable tnp={ Number(2) } activeTeacher={teacherChoice} activeSubject={'SCI'} activeYearGroup={'9'} activeClass={'9SCI'} adminCheck={adminState} />
    </>
    )
  };
  function Year8SCILITables(){
    return (
      <>
      <LITable tnp={ Number(1) } activeTeacher={teacherChoice} activeSubject={'SCI'} activeYearGroup={'8'} activeClass={'8SCI'} adminCheck={adminState} />
      <LITable tnp={ Number(2) } activeTeacher={teacherChoice} activeSubject={'SCI'} activeYearGroup={'8'} activeClass={'8SCI'} adminCheck={adminState} />
    </>
    )
  };
  function Year7SCILITables(){
    return (
      <>
      <LITable tnp={ Number(1) } activeTeacher={teacherChoice} activeSubject={'SCI'} activeYearGroup={'7'} activeClass={'7SCI'} adminCheck={adminState} />
      <LITable tnp={ Number(2) } activeTeacher={teacherChoice} activeSubject={'SCI'} activeYearGroup={'7'} activeClass={'7SCI'} adminCheck={adminState} />
    </>
    )
  };

  // functions for LI Tables 
  // STEM  
  function Year10STEM100HourLITables() {
    return (
      <>
      <LITable tnp={ Number(1) } activeTeacher={teacherChoice} activeSubject={'STEM'} activeYearGroup={'10'} activeClass={'10STEM100Hour'}   adminCheck={adminState} />
      <LITable tnp={ Number(2) } activeTeacher={teacherChoice} activeSubject={'STEM'} activeYearGroup={'10'} activeClass={'10STEM100Hour'}   adminCheck={adminState} />
      <LITable tnp={ Number(3) } activeTeacher={teacherChoice} activeSubject={'STEM'} activeYearGroup={'10'} activeClass={'10STEM100Hour'}   adminCheck={adminState} />
      <LITable tnp={ Number(4) } activeTeacher={teacherChoice} activeSubject={'STEM'} activeYearGroup={'10'} activeClass={'10STEM100Hour'}   adminCheck={adminState} />

      </>
    )
  };
  function Year10STEM200HourLITables() {
    return (
      <>
      <LITable tnp={ Number(1) } activeTeacher={teacherChoice} activeSubject={'STEM'} activeYearGroup={'10'} activeClass={'10STEM200Hour'}   adminCheck={adminState} />
      <LITable tnp={ Number(2) } activeTeacher={teacherChoice} activeSubject={'STEM'} activeYearGroup={'10'} activeClass={'10STEM200Hour'}   adminCheck={adminState} />
      <LITable tnp={ Number(3) } activeTeacher={teacherChoice} activeSubject={'STEM'} activeYearGroup={'10'} activeClass={'10STEM200Hour'}   adminCheck={adminState} />
      <LITable tnp={ Number(4) } activeTeacher={teacherChoice} activeSubject={'STEM'} activeYearGroup={'10'} activeClass={'10STEM200Hour'}   adminCheck={adminState} />

      </>
    )
  };
  function Year9STEM200HourLITables() {
    return (
      <>
      <LITable tnp={ Number(1) } activeTeacher={teacherChoice} activeSubject={'STEM'} activeYearGroup={'9'} activeClass={'9STEM200Hour'}   adminCheck={adminState} />
      <LITable tnp={ Number(2) } activeTeacher={teacherChoice} activeSubject={'STEM'} activeYearGroup={'9'} activeClass={'9STEM200Hour'}   adminCheck={adminState} />
      <LITable tnp={ Number(3) } activeTeacher={teacherChoice} activeSubject={'STEM'} activeYearGroup={'9'} activeClass={'9STEM200Hour'}   adminCheck={adminState} />
      <LITable tnp={ Number(4) } activeTeacher={teacherChoice} activeSubject={'STEM'} activeYearGroup={'9'} activeClass={'9STEM200Hour'}   adminCheck={adminState} />

      </>
    )
  };
  function Year9STEM100HourLITables() {
    return (
      <>
      <LITable tnp={ Number(1) } activeTeacher={teacherChoice} activeSubject={'STEM'} activeYearGroup={'9'} activeClass={'9STEM100Hour'}   adminCheck={adminState} />
      <LITable tnp={ Number(2) } activeTeacher={teacherChoice} activeSubject={'STEM'} activeYearGroup={'9'} activeClass={'9STEM100Hour'}   adminCheck={adminState} />
      <LITable tnp={ Number(3) } activeTeacher={teacherChoice} activeSubject={'STEM'} activeYearGroup={'9'} activeClass={'9STEM100Hour'}   adminCheck={adminState} />
      <LITable tnp={ Number(4) } activeTeacher={teacherChoice} activeSubject={'STEM'} activeYearGroup={'9'} activeClass={'9STEM100Hour'}   adminCheck={adminState} />

      </>
    )
  };
  function Year8STEMSem1LITables() {
    return (
      <>
      <LITable tnp={ Number(1) } activeTeacher={teacherChoice} activeSubject={'STEM'} activeYearGroup={'8'} activeClass={'8STEMSem1'}   adminCheck={adminState} />
      <LITable tnp={ Number(2) } activeTeacher={teacherChoice} activeSubject={'STEM'} activeYearGroup={'8'} activeClass={'8STEMSem1'}   adminCheck={adminState} />
      <LITable tnp={ Number(3) } activeTeacher={teacherChoice} activeSubject={'STEM'} activeYearGroup={'8'} activeClass={'8STEMSem1'}   adminCheck={adminState} />
      <LITable tnp={ Number(4) } activeTeacher={teacherChoice} activeSubject={'STEM'} activeYearGroup={'8'} activeClass={'8STEMSem1'}   adminCheck={adminState} />

      </>
    )
  };
  function Year8STEMSem2LITables() {
    return (
      <>
      <LITable tnp={ Number(1) } activeTeacher={teacherChoice} activeSubject={'STEM'} activeYearGroup={'8'} activeClass={'8STEMSem2'}   adminCheck={adminState} />
      <LITable tnp={ Number(2) } activeTeacher={teacherChoice} activeSubject={'STEM'} activeYearGroup={'8'} activeClass={'8STEMSem2'}   adminCheck={adminState} />
      <LITable tnp={ Number(3) } activeTeacher={teacherChoice} activeSubject={'STEM'} activeYearGroup={'8'} activeClass={'8STEMSem2'}   adminCheck={adminState} />
      <LITable tnp={ Number(4) } activeTeacher={teacherChoice} activeSubject={'STEM'} activeYearGroup={'8'} activeClass={'8STEMSem2'}   adminCheck={adminState} />

      </>
    )
  };

  



  // PSYCHOLOGY
  function Year10PYYLITables() {
    return (
      <>
      <LITable tnp={ Number(1) } activeTeacher={teacherChoice} activeSubject={'PYY'} activeYearGroup={'10'} activeClass={'10PYY'} adminCheck={adminState} />
      <LITable tnp={ Number(2) } activeTeacher={teacherChoice} activeSubject={'PYY'} activeYearGroup={'10'} activeClass={'10PYY'} adminCheck={adminState} />
      <LITable tnp={ Number(3) } activeTeacher={teacherChoice} activeSubject={'PYY'} activeYearGroup={'10'} activeClass={'10PYY'} adminCheck={adminState} />
      <LITable tnp={ Number(4) } activeTeacher={teacherChoice} activeSubject={'PYY'} activeYearGroup={'10'} activeClass={'10PYY'} adminCheck={adminState} />


      </>
    )
  };

  function Year9PYYLITables() {
    return (
      <>
      <LITable tnp={ Number(1) } activeTeacher={teacherChoice} activeSubject={'PYY'} activeYearGroup={'9'} activeClass={'9PYY'} adminCheck={adminState} />
      <LITable tnp={ Number(2) } activeTeacher={teacherChoice} activeSubject={'PYY'} activeYearGroup={'9'} activeClass={'9PYY'} adminCheck={adminState} />
      <LITable tnp={ Number(3) } activeTeacher={teacherChoice} activeSubject={'PYY'} activeYearGroup={'9'} activeClass={'9PYY'} adminCheck={adminState} />
      <LITable tnp={ Number(4) } activeTeacher={teacherChoice} activeSubject={'PYY'} activeYearGroup={'9'} activeClass={'9PYY'} adminCheck={adminState} />


      </>
    )
  };

  





  // ASSESSMENT TABLE FUNCTIONS


  // SUBJECT INFO FUNCTIONS












  // export default function return
  return (
    <>
    <div className='divTopBar'>
               
      { displayTeacherChoice ? null :     
        <>
          <ButtonHome/>
      
          {displaySubjectChoice ? <BackToTeacherButton/> : null}
          {displayClassChoice ? <BackToSubjectButton/> : null}
          {displayContentChoice ? <BackToClassButton/> : null}
          {subjectChoice != null && classChoice != null && contentChoice != null ? <BackToContentButton/> : null }

          <ButtonToggleDisplayLoginAdmin/>
        </> 
      } 
      
      { displayLoginAdmin ? <Login  handleToggleAdminMode={handleToggleAdminMode} adminState={adminState} /> : null}
  
    </div>


    {displayTeacherChoice ?  <TeacherChoiceReturn /> : null  }
    
    { displaySubjectChoice || displayClassChoice || displayContentChoice  ?
      <div className='divMain'>
        { displaySubjectChoice  ?  <SubjectChoiceReturn/>  : null   }
          
        { displayClassChoice ? 
          <>
            { subjectChoice == 'SCI' ? <ClassChoiceReturnSci/> : null }
            { subjectChoice == 'STEM' ? <ClassChoiceReturnSTEM/> : null }
            { subjectChoice == 'PHY' ? <ClassChoiceReturnPHY/> : null }
            { subjectChoice == 'INVSCI' ? <ClassChoiceReturnInvSci/> : null }
            { subjectChoice == 'PYY' ? <ClassChoiceReturnPYY/> : null  }
            { subjectChoice == 'CHE' ? <ClassChoiceReturnChe/> : null  }
          </>
        : null
        }

        { displayContentChoice ? <ContentChoiceReturn/> : null }

        </div> : null
  }



{ subjectChoice == 'SCI' && classChoice == '10SCIASP' && contentChoice == 'LITable' ? 
  <div className='divLITable'> < Year10SCIASPLITables /> </div> : null
}

{ subjectChoice == 'SCI' && classChoice == '10SCI' && contentChoice == 'LITable' ? 
  <div className='divLITable'> <Year10SCILITables/> </div> : null
}

{ subjectChoice == 'SCI' && classChoice == '9SCI' && contentChoice == 'LITable' ? 
  <div className='divLITable'> <Year9SCILITables/> </div> : null
}

{ subjectChoice == 'SCI' && classChoice == '8SCI' && contentChoice == 'LITable' ? 
  <div className='divLITable'> <Year8SCILITables/> </div> : null
}

{ subjectChoice == 'SCI' && classChoice == '7SCI' && contentChoice == 'LITable' ? 
  <div className='divLITable'> <Year7SCILITables/> </div> : null
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





{ subjectChoice == 'PHY' && classChoice == '12PHY' && contentChoice == 'LITable' ? 
  <div className='divLITable' > <Year12PHYLITables/> </div> : null
}

{ subjectChoice == 'PHY' && classChoice == '11PHY' && contentChoice == 'LITable' ? 
  <div className='divLITable' > <Year11PHYLITables/> </div> : null
}






{ subjectChoice == 'INVSCI' && classChoice == '12INVSCI' && contentChoice == 'LITable' ? 
  <div className='divLITable' > <Year12INVSCILITables/> </div> : null
}

{ subjectChoice == 'INVSCI' && classChoice == '11INVSCI' && contentChoice == 'LITable' ? 
  <div className='divLITable' > <Year11INVSCILITables/> </div> : null
}




{ subjectChoice == 'CHE' && classChoice == '12CHE' && contentChoice == 'LITable' ? 
  <div className='divLITable' > <Year12CHELITables/> </div> : null
}

{ subjectChoice == 'CHE' && classChoice == '11Che' && contentChoice == 'LITable' ? 
  <div className='divLITable' > <Year11CHELITables/> </div> : null
}




{ subjectChoice == 'PYY' && classChoice == '10PYY' && contentChoice == 'LITable' ? 
  <div className='divLITable' > <Year10PYYLITables/> </div> : null
}

{ subjectChoice == 'PYY' && classChoice == '9PYY' && contentChoice == 'LITable' ? 
  <div className='divLITable' > <Year9PYYLITables/> </div> : null
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
