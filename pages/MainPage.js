import 'bootstrap/dist/css/bootstrap.min.css'
import { useState, useEffect, useRef } from 'react';
import LIReturn from '../Components/LIReturn';
import Login from '../Components/Login';
import { teacherArrays } from '../Components/TeacherArrays';
import { subjectInfoArray } from '../Components/SubjectInfoArrays';
import SubjectInfoReturn  from '../Components/SubjectInfoReturn';
import AssReturn from '../Components/AssReturn';
import HomeIcon from '../assets/HomeIcon';
import BackIcon from '../assets/BackIcon';
import CloseIcon from '../assets/CloseIcon';
import BriefcaseIcon from '../assets/BriefcaseIcon';

export default function MainPage() {

// SET STATES
const [activeTeacher, setActiveTeacher] = useState();
const [activeSentralClass, setActiveSentralClass] = useState();
// const [activeSubject, setActiveSubject] = useState();
const [activeContent, setActiveContent] = useState();

const [displayTeacherChoice, setDisplayTeacherChoice] = useState(true);
const [displaySentralClassChoice, setDisplaySentralClassChoice] = useState(false);
const [displayContentChoice, setDisplayContentChoice] = useState(false);

const [displayLoginAdmin, setDisplayLoginAdmin] = useState(false);
const [adminState, setAdminState] = useState(false);




// TEACHER CHOICE


const handleTeacherChoiceButtonClick = ({activeTeacherProp}) => {
    setActiveTeacher(activeTeacherProp);
    setDisplayTeacherChoice(false);
    setDisplaySentralClassChoice(true);
};


function TeacherChoiceReturn() {
    const sortedTeacherArray = [...teacherArrays].sort((a,b) => 
    a.id > b.id ? 1 : -1,
    );
    const wenis = sortedTeacherArray
    .filter(active => active.active === true)
    .map(item=> {
        let activeTeacherProp=item.id
        return (
            <div 
            key={item.id}
            className='divGlowButton'>
            <button 
                className='glowButton' 
                onClick={ () => handleTeacherChoiceButtonClick({activeTeacherProp}) } 
            > 
                <p className={'glowButtonText'}> { item.lastName } </p>
            </button> 
        </div>
        )
    });
    return (<> { wenis } </>)
};







// CLASS CHOICE


const handleClassChoice = ({activesentralclassprop}) => {
    setActiveSentralClass(activesentralclassprop);
    setDisplaySentralClassChoice(false);
    setDisplayContentChoice(true);
};

function ButtonClassChoice({activesentralclassprop}) {
    return (
        <>
            <button 
                key={activesentralclassprop}
                onClick={() => handleClassChoice({activesentralclassprop})}
                className='glowButton'> 
                <p className='glowButtonText'> {activesentralclassprop} 
                </p> 
            </button>
        </>                    
    )
};

function ClassChoiceReturn() {
    const classesFromArray = teacherArrays
    .filter(checkName => checkName.id == activeTeacher)
    .map(group => group.sentralClass.sort((a,b)=>a-b)
    .map(item=> {
        return (
            <div className='divGlowButton' key={item} >
            < ButtonClassChoice key={item} activesentralclassprop={ item } />
            </div>
        )                
    }));

    return (<> { classesFromArray } </>)
};








// CONTENT CHOICE

const handleContentChoice = ({activecontentprop}) => {
    setActiveContent(activecontentprop);
    setDisplaySentralClassChoice(false);
    setDisplayContentChoice(false);

};

function ButtonContentChoice({buttonContentTitleProp, activecontentprop}) {
    return (
    <div className='divGlowButton'> 
      <button className='glowButton' 
        onClick={()=>handleContentChoice({activecontentprop})} 
      > 
      <p className={'glowButtonText'}>  {buttonContentTitleProp} </p>
      </button> 
    </div>)
  };

  function ContentChoiceReturn() {
    return (
      <>
        <ButtonContentChoice activecontentprop={'LITable'} buttonContentTitleProp={'Learning Intention Checklist'}/>
        <ButtonContentChoice activecontentprop={'AssTable'} buttonContentTitleProp={'Assessment Tasks'}/>
        <ButtonContentChoice activecontentprop={'SubjectInfoTable'} buttonContentTitleProp={'Subject Overview'}/>
    </>
    )
  };








// HOME BUTTON


const handleHome = () => {
    setDisplayTeacherChoice(true);
    setDisplaySentralClassChoice(false);
    setDisplayContentChoice(false);
    setActiveTeacher();
    setActiveSentralClass();
    setActiveContent();
};

function ButtonHome() {
    return (<> <button className='neonButton' onClick={()=> handleHome()}>  <HomeIcon/>  </button> </> )
  };












// DISPLAY LOGINADMIN


const handleToggleLoginAdmin = () => {
setDisplayLoginAdmin(prev=>!prev);
};

function ButtonToggleDisplayLoginAdmin() {
return (
    < >
    <button onClick={handleToggleLoginAdmin}
    className={ adminState ? 'neonButtonActive' : 'neonButton'}>
    <p className='buttonTextAdmin'> <BriefcaseIcon/> </p>
    </button>
    </>
)
};






// TOGGLE ADMIN MODE

const handleToggleAdminMode = () => {
setAdminState(prev=>!prev);
};




// BACK TO 
const backToTeacher = () => {
    setDisplayTeacherChoice(true);
    setDisplaySentralClassChoice(false);
    setDisplayContentChoice(false);
    setDisplayLoginAdmin(false);
    setActiveTeacher();
    setActiveSentralClass();
    setActiveContent();
  };

  const backToClass = () => {
    setDisplayTeacherChoice(false);
    setDisplaySentralClassChoice(true);
    setDisplayContentChoice(false);
    setDisplayLoginAdmin(false);
    setActiveSentralClass();
    setActiveContent();
  };

  const backToContent = () => {
    setDisplayTeacherChoice(false);
    setDisplaySentralClassChoice(false);
    setDisplayContentChoice(true);
    setDisplayLoginAdmin(false);
    setActiveContent();
  };

  function BackToTeacherButton () {
    return (
      <button className='neonButton' onClick={()=>backToTeacher()}> <p className='buttonTextAdmin'> <BackIcon/> </p> </button>
    )
  };

  function BackToClassButton () {
    return (
      <button className='neonButton' onClick={()=>backToClass()}> <p className='buttonTextAdmin'> <BackIcon/> </p> </button>
    )
  };
  function BackToContentButton () {
    return (
      <button className='neonButton' onClick={()=>backToContent()}> <p className='buttonTextAdmin'> <BackIcon/> </p> </button>
    )
  };






// SWITCHES
let activeClass;
let pageHeading;
switch (activeSentralClass) {
        case '10SCIASPA' : case '10SCIASPB' :
        activeClass = '10SCIASP'
        pageHeading = 'Year 10 Science (ASP)'
        break;
        case '10SCIA1': case '10SCIA2' : case '10SCIA3' : case '10SCIA4' : case '10SCIA5' : case '10SCIB1' : case '10SCIB2' : case '10SCIB3' : case '10SCIB4' : case '10SCIB5' :
        activeClass = '10SCI'
        pageHeading = 'Year 10 Science'
        break;   
        case '9SCIA1' : case '9SCIA2' : case '9SCIA3' : case '9SCIA4' : case '9SCIA5' : case '9SCIB1' : case '9SCIB2' : case '9SCIB3' : case '9SCIB4' : case '9SCIB5' :
        activeClass = '9SCI'
        pageHeading = 'Year 9 Science'
        break; 
        case '8SCI1' : case '8SCI2' : case '8SCI3' : case '8SCI4' : case '8SCI5' : case '8SCI6' : case '8SCI7' : case '8SCI8' : case '8SCI9' : case '8SCI10' :
        activeClass = '8SCI'
        pageHeading = 'Year 8 Science'
        break;
        case '7SCI1' : case '7SCI2' : case '7SCI3' : case '7SCI4' : case '7SCI5' : case '7SCI6' : case '7SCI7' : case '7SCI7' : case '7SCI9' : case '7SCI10' :
        activeClass = '7SCI'
        pageHeading = 'Year 7 Science'
        break;

        case '12BIO01' : case '12BIO02' : case '12BIO03' : case '12BIO04' :
        activeClass = '12BIO'
        pageHeading = 'Biology'
        break;
        case '11BIO01' : case '11BIO02' : case '11BIO03' : case '11BIO04' :
        activeClass = '11BIO'
        pageHeading = 'Biology'
        break;
    
        case '12CHE01' : case '12CHE02' : case '12CHE03' : case '12CHE04' :
        activeClass = '12CHE'
        pageHeading = 'Chemistry'
        break;
        case '11CHE01' : case '11CHE02' : case '11CHE03' : case '11CHE04' :
        activeClass = '11CHE'
        pageHeading = 'Chemistry'
        break;
     
        case '12EES01' : case '12EES02' : case '12EES03' : case '12EES04' :
        activeClass = '12EES'
        pageHeading = 'Earth and Environmental Science'
        break;
        case '11EES01' : case '11EES03' : case '11EES03' : case '11EES04' :
        activeClass = '11EES'
        pageHeading = 'Earth and Environmental Science'
        break;
    
        case '12INV01' : case '12INV02' : case '12INV03' : case '12INV04' :
        activeClass = '12INV'
        pageHeading = 'Investigating Science'
        break;
        case '11INV01' : case '11INV02' : case '11INV03' : case '11INV04' :
        activeClass = '11INV'
        pageHeading = 'Investigating Science'
        break;

        case '12PHY01' : case '12PHY02' : case '12PHY03' : case '12PHY04' :
        activeClass = '12PHY'
        pageHeading = 'Physics'
        break;
        case '11PHY01' : case '11PHY02' : case '11PHY03' : case '11PHY04' :
        activeClass = '11PHY'
        pageHeading = 'Physics'
        break;
        
        case '10STX01' : case '10STX02' :
        activeClass = '10STX'
        pageHeading = 'Year 10 STEM (200 Hour)'
        break;
        case '10STY01' : case '10STY02' :
        activeClass = '10STY'
        pageHeading = 'Year 10 STEM (100 Hour)'
        break;
        case '9STX01' : case '9STX02' :
        activeClass = '9STX'
        pageHeading = 'Year 9 STEM (200 Hour)'
        break;
        case '9STY01' : case '9STY02' :
        activeClass = '9STY'
        pageHeading = 'Year 9 STEM (100 Hour)'
        break;     
        case '8STM01' : case '8STM02' : case '8STM03' : case '8STM04' :
        activeClass = '8STM'
        pageHeading = 'Year 8 STEM'
        break;

        case '12MST01' : case '12MST02' : case '12MST03' : case '12MST04' :
        activeClass = '12MST'
        pageHeading = 'Marine Studies'
        break;
        case '11MST01' : case '11MST02' : case '11MST03' : case '11MST04' :
        activeClass = '11MST'
        pageHeading = 'Marine Studies'
        break;
        case '8MST01' : case '8MST02' : case '8MST03' : case '8MST04' :
        activeClass = '8MST'
        pageHeading = 'Year 8 Marine Studies'
        break;         

        case '10PYX01' : case '10PYX02' :
        activeClass = '10PYX'
        pageHeading = 'Year 10 Psychology (200 Hour)'
        break;
        case '10PYY01' : case '10PYY02' :
        activeClass = '10PYY'
        pageHeading = 'Year 10 Psychology (100 Hour)'
        break;
        case '9PYX01' : case '9PYX02' :
        activeClass = '9PYX'
        pageHeading = 'Year 9 Psychology (200 Hour)'
        break;
        case '9PYY01' : case '9PYY02' :
        activeClass = '9PYY'
        pageHeading = 'Year 9 Psychology (100 Hour)'
        break; 

        case '10BHX01' : case '10BHX02' :
        activeClass = '10BHX'
        pageHeading = 'Year 10 Big History (200 Hour)'
        break;
        case '10BHY01' : case '10BHY02' :
        activeClass = '10BHY'
        pageHeading = 'Year 10 Big History (100 Hour)'
        break;
        case '9BHX01' : case '9BHX02' :
        activeClass = '9BHX'
        pageHeading = 'Year 9 Big History (200 Hour)'
        break;
        case '9BHY01' : case '9BHY02' :
        activeClass = '9BHY'
        pageHeading = 'Year 9 Big History (100 Hour)'
        break; 
    };




// LITABLE RETURN

function LIReturnEachTopic(){
    // map function to extract the number of topics from the LIArray array
    // subjectInfoArray.activeSubjects.SCI.activeClasses.10SCIASP.numberOfTopics
    // to access the relevant LIArray, activeSentralClass can be used to create activeSubject, via switch
    const numberOfTopics = subjectInfoArray.filter(item => item.activeClass == activeClass).map(topic => {
        return (topic.numberOfTopics)
    });

    let arr =[];
    let startNumber;
    let endNumber;
    switch (activeClass) {
        case '12BIO' :
        startNumber = 5
        endNumber = 8
        break;
        case '12CHE' :
        startNumber = 5
        endNumber = 8
        break;
        case '12ESS' :
        startNumber = 5
        endNumber = 8
        break;
        case '12INV' :
        startNumber = 5
        endNumber = 8
        break;
        case '12PHY' :
        startNumber = 5
        endNumber = 8
        break;
        default:
        startNumber = 1
        endNumber = numberOfTopics.toString()
        break;
    }

    for (let i = startNumber; i <= endNumber; i++) {
        arr.push(i);
    };

    const topicLI = 
        arr.map(item => {
            return (
                <div className='divLITopicArea' key ={item}>
                < LIReturn tnp={ item } activeTeacherProp={activeTeacher} activeSentralClassProp={activeSentralClass} activeClass={activeClass} adminStateProp={adminState} />
                </div>
            )
        });

    return ( <> {topicLI} </> )
};



function LoginClose () {
    return (
        <div className='divLoginClose'>
            <button className='neonButtonClose' onClick={()=>handleToggleLoginAdmin()}> <CloseIcon /> </button>
        </div>
    )
};




return (
    <div className='divBG'>  
        <>
            {
                displayTeacherChoice ?
                <div className='divTopBarHome'>
                    <button className='homeNeonButton'> <p className='homeNeonButtonText'> Warilla High School Science: <br/> Choose Your Teacher </p> </button>
                </div> 
                : 
                <div className='divTopBar'>

                    <div className='divTopBarToggleLoginAdmin'>             
                        <ButtonToggleDisplayLoginAdmin/>
                    </div>

                    <div className='divTopBarBack'>
                        { displaySentralClassChoice ? <BackToTeacherButton/> : null }
                        { displayContentChoice ? <BackToClassButton/> : null }
                        { activeSentralClass != null && activeContent != null ? <BackToContentButton/> : null }
                    </div> 

                    <div className='divTopBarHomeButton' > 
                        <ButtonHome/> 
                    </div>


                </div>
            }

            { 
                displayLoginAdmin ?  <div className='divLoginAdmin'> 
                <Login handleToggleAdminModeProp={ handleToggleAdminMode } adminStateProp={ adminState } /> 
                <LoginClose />
                </div> : null  
            } 

        </>
    
        <>
            { displayTeacherChoice ? <div className='divTeacherChoice'> <TeacherChoiceReturn/> </div> : null }
            { displaySentralClassChoice ? <div className='divChoice'> <ClassChoiceReturn/> </div> : null }
            { displayContentChoice ? <div className='divChoiceContent'> <ContentChoiceReturn/> </div> : null }
        </>

        <>
            { activeContent == 'LITable' ? 
            <div className='divContent'> 
                <div className="pageHeadingLI" >  Learning Intentions </div>  <div className='pageSubHeadingLI'> ({activeClass}) </div>
                <LIReturnEachTopic activeTeacherProp={activeTeacher} activeSentralClassProp={activeSentralClass} activeClass={activeClass} adminStateProp={adminState}/> 
            </div> : null}
        </>

        <>
            {activeContent == 'SubjectInfoTable' ? <> <SubjectInfoReturn activeClass={activeClass}/> </> : null}
        </>

        <>
            {activeContent == 'AssTable' ? <> <AssReturn activeClass={activeClass}/> </> : null}
        </>


    </div>
)
};