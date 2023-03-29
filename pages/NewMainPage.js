import 'bootstrap/dist/css/bootstrap.min.css'
import { useState, useEffect, useRef } from 'react';

import LITable from '../Components/LITable';
import NewLITable from '../Components/NewLITable';
import Login from '../Components/Login';
import { teacherArrays } from '../Components/TeacherArrays';
import { contentArrays } from '../Components/TeacherArrays';
import { subjectInfoArray } from '../Components/SubjectInfoArrays';
import { textAlign } from '@mui/system';

export default function NewMainPage() {

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
    const wenis = teacherArrays.map(item=> {
        let activeTeacherProp=item.id
        return (
            <div 
            key={item.id}
            className='divGlowButton'>
            <button 
                className='glow-on-hover' 
                onClick={ () => handleTeacherChoiceButtonClick({activeTeacherProp}) } 
            > 
                <p className={'buttonText'}> { item.lastName } </p>
            </button> 
        </div>
        )
    });
    return (
        <div className='divTeacherChoice'>
            {wenis}
        </div>
    )
};







// CLASS CHOICE


const handleClassChoice = ({activesentralclassprop}) => {
    setActiveSentralClass(activesentralclassprop);
    setDisplaySentralClassChoice(false);
    setDisplayContentChoice(true);
};

function ButtonClassChoice({activesentralclassprop}) {
    return (
        <div 
        key={activesentralclassprop}
        className='divGlowButton'>
            <button 
                key={activesentralclassprop}
                onClick={() => handleClassChoice({activesentralclassprop})}
                className='glow-on-hover'> 
                <p className='buttonText'> {activesentralclassprop} 
                </p> 
            </button>
        </div>                    
    )
};

function ClassChoiceReturn() {
    const classesFromArray = teacherArrays.filter(name => name.id == activeTeacher).map(group => {
        return (
            group.sentralClass.map(item=> {
                return (
                    <div 
                    key={item.id}
                    className='divChoice'>
                    < ButtonClassChoice activesentralclassprop={ item } />
                    </div>
                )                
            })
        )
    });

    return (
        <>
        {classesFromArray}
        </>
    )
};








// CONTENT CHOICE

const handleContentChoice = ({activecontentprop}) => {
    setActiveContent(activecontentprop);
    setDisplaySentralClassChoice(false);
    setDisplayContentChoice(false);

};

function ButtonContentChoice({buttonContentTitleProp, activecontentprop}) {
    return (
    <div className='divRoundButton'> 
      <button className='glow-on-hover' 
        onClick={()=>handleContentChoice({activecontentprop})} 
      > 
      <p className={'buttonText'}>  {buttonContentTitleProp} </p>
      </button> 
    </div>)
  };

  function ContentChoiceReturn() {
    return (
      <div className='divChoice'>
        <ButtonContentChoice activecontentprop={'LITable'} buttonContentTitleProp={'Learning Intention Checklist'}/>
        <ButtonContentChoice activecontentprop={'AssTable'} buttonContentTitleProp={'Assessment Information'}/>
        <ButtonContentChoice activecontentprop={'SubjectInfoTable'} buttonContentTitleProp={'Subject Information'}/>
    </div>
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
    return (<> <button className='neonButton' onClick={()=> handleHome()}> <p className='buttonTextAdmin'> Home </p> </button> </> )
  };












// DISPLAY LOGINADMIN


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
      <button className='neonButton' onClick={()=>backToTeacher()}> <p className='buttonTextAdmin'> Back </p> </button>
    )
  };

  function BackToClassButton () {
    return (
      <button className='neonButton' onClick={()=>backToClass()}> <p className='buttonTextAdmin'> Back </p> </button>
    )
  };
  function BackToContentButton () {
    return (
      <button className='neonButton' onClick={()=>backToContent()}> <p className='buttonTextAdmin'> Back </p> </button>
    )
  };






// SWITCHES
let activeClass;
let pageHeading;
switch (activeSentralClass) {
        case '10SCIASPA' || '10SCIASPB' :
        activeClass = '10SCIASP'
        pageHeading = 'Year 10 Science (ASP)'
        break;
        case '10SCIA1' || '10SCIA2' || '10SCIA3' || '10SCIA4' || '10SCIA5' || '10SCIB1' || '10SCIB2' || '10SCIB3' || '10SCIB4' || '10SCIB5' :
        activeClass = '10SCI'
        pageHeading = 'Year 10 Science'
        break;   
        case '9SCIA1' || '9SCIA2' || '9SCIA3' || '9SCIA4' || '9SCIA5' || '9SCIB1' || '9SCIB2' || '9SCIB3' || '9SCIB4' || '9SCIB5' :
        activeClass = '9SCI'
        pageHeading = 'Year 9 Science'
        break; 
        case '8SCI1' || '8SCI2' || '8SCI3' || '8SCI4' || '8SCI5' || '8SCI6' || '8SCI7' || '8SCI8' || '8SCI9' || '8SCI10' :
        activeClass = '8SCI'
        pageHeading = 'Year 8 Science'
        break;
        case '7SCI1' || '7SCI2' || '7SCI3' || '7SCI4' || '7SCI5' || '7SCI6' || '7SCI7' || '7SCI7' || '7SCI9' || '7SCI10' :
        activeClass = '7SCI'
        pageHeading = 'Year 7 Science'
        break;

        case '12BIO01' || '12BIO02' || '12BIO03' || '12BIO04' :
        activeClass = '12BIO'
        pageHeading = 'Biology'
        break;
        case '11BIO01' || '11BIO02' || '11BIO03' || '11BIO04' :
        activeClass = '11BIO'
        pageHeading = 'Biology'
        break;
    
        case '12CHE01' || '12CHE02' || '12CHE03' || '12CHE04' :
        activeClass = '12CHE'
        pageHeading = 'Chemistry'
        break;
        case '11CHE01' || '11CHE02' || '11CHE03' || '11CHE04' :
        activeClass = '11CHE'
        pageHeading = 'Chemistry'
        break;
     
        case '12EES01' || '12EES02' || '12EES03' || '12EES04' :
        activeClass = '12EES'
        pageHeading = 'Earth and Environmental Science'
        break;
        case '11EES01' || '11EES03' || '11EES03' || '11EES04' :
        activeClass = '11EES'
        pageHeading = 'Earth and Environmental Science'
        break;
    
        case '12INV01' || '12INV02' || '12INV03' || '12INV04' :
        activeClass = '12INV'
        pageHeading = 'Investigating Science'
        break;
        case '11INV01' || '11INV02' || '11INV03' || '11INV04' :
        activeClass = '11INV'
        pageHeading = 'Investigating Science'
        break;

        case '12PHY01' || '12PHY02' || '12PHY03' || '12PHY04' :
        activeClass = '12PHY'
        pageHeading = 'Physics'
        break;
        case '11PHY01' || '11PHY02' || '11PHY03' || '11PHY04' :
        activeClass = '11PHY'
        pageHeading = 'Physics'
        break;
        
        case '10STX01' || '10STX02' :
        activeClass = '10STX'
        pageHeading = 'Year 10 STEM (200 Hour)'
        break;
        case '10STY01' || '10STY02' :
        activeClass = '10STY'
        pageHeading = 'Year 10 STEM (100 Hour)'
        break;
        case '9STX01' || '9STX02' :
        activeClass = '9STX'
        pageHeading = 'Year 9 STEM (200 Hour)'
        break;
        case '9STY01' || '9STY02' :
        activeClass = '9STY'
        pageHeading = 'Year 9 STEM (100 Hour)'
        break;     
        case '8STM01' || '8STM02' || '8STM03' || '8STM04' :
        activeClass = '8STM'
        pageHeading = 'Year 8 STEM'
        break;

        case '12MST01' || '12MST02' || '12MST03' || '12MST04' :
        activeClass = '12MST'
        pageHeading = 'Marine Studies'
        break;
        case '11MST01' || '11MST02' || '11MST03' || '11MST04' :
        activeClass = '11MST'
        pageHeading = 'Marine Studies'
        break;
        case '8MST01' || '8MST02' || '8MST03' || '8MST04' :
        activeClass = '8MST'
        pageHeading = 'Year 8 Marine Studies'
        break;         

        case '10PYX01' || '10PYX02' :
        activeClass = '10PYX'
        pageHeading = 'Year 10 Psychology (200 Hour)'
        break;
        case '10PYY01' || '10PYY02' :
        activeClass = '10PYY'
        pageHeading = 'Year 10 Psychology (100 Hour)'
        break;
        case '9PYX01' || '9PYX02' :
        activeClass = '9PYX'
        pageHeading = 'Year 9 Psychology (200 Hour)'
        break;
        case '9PYY01' || '9PYY02' :
        activeClass = '9PYY'
        pageHeading = 'Year 9 Psychology (100 Hour)'
        break; 

        case '10BHX01' || '10BHX02' :
        activeClass = '10BHX'
        pageHeading = 'Year 10 Big History (200 Hour)'
        break;
        case '10BHY01' || '10BHY02' :
        activeClass = '10BHY'
        pageHeading = 'Year 10 Big History (100 Hour)'
        break;
        case '9BHX01' || '9BHX02' :
        activeClass = '9BHX'
        pageHeading = 'Year 9 Big History (200 Hour)'
        break;
        case '9BHY01' || '9BHY02' :
        activeClass = '9BHY'
        pageHeading = 'Year 9 Big History (100 Hour)'
        break; 
    };




// LITABLE RETURN

function LITableReturn(){
    // map function to extract the number of topics from the LIArray array
    // subjectInfoArray.activeSubjects.SCI.activeClasses.10SCIASP.numberOfTopics
    // to access the relevant LIArray, activeSentralClass can be used to create activeSubject, via switch
    const numberOfTopics = subjectInfoArray.filter(item => item.activeClass == activeClass).map(topic => {
        return (topic.numberOfTopics)
    });

    let poop =[];
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
            poop.push(i);
        };

    const penis = 
        poop.map(item => {
            return (
                <div key ={item.id}>
                < NewLITable tnp={ item } activeTeacherProp={activeTeacher} activeSentralClassProp={activeSentralClass} activeClass={activeClass} adminStateProp={adminState} />
                </div>
            )
        });

    return ( penis )
};









return (
    <>    
        {displayTeacherChoice ?
        <div className='divTopBarHome'>
            <button className='neonButton'> Warilla High School Science </button>
        </div> 
        : 
        <div className='divTopBar'>
            <ButtonHome/>
                { displaySentralClassChoice ? <BackToTeacherButton/> : null }
                { displayContentChoice ? <BackToClassButton/> : null }
                { activeSentralClass != null && activeContent != null ? <BackToContentButton/> : null }
            <ButtonToggleDisplayLoginAdmin/>
                { displayLoginAdmin ? <Login handleToggleAdminModeProp={ handleToggleAdminMode } adminStateProp={ adminState } /> : null } 
        </div>}
        

        <>
            { displayTeacherChoice ? <div className='divMain'>  <TeacherChoiceReturn/> </div> : null }
            { displaySentralClassChoice ? <div className='divMain'> <ClassChoiceReturn/> </div> : null }
            { displayContentChoice ? <div className='divMain'> <ContentChoiceReturn/> </div> : null }
        </>


        <>
            { activeContent == 'LITable' ? <div className='divLITable'> 
            <h1> {pageHeading} </h1>
            <LITableReturn/> 
            </div> : null}
        </>
    </>
)
};