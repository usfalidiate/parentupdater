import ProgressBar from 'react-bootstrap/ProgressBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { app, db, auth } from './Firebase';
import { useState, useEffect, useRef } from 'react';
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  onSnapshot,
  updateDoc,
  getDoc,
  setDoc,
  child,
  query,
  fieldPath,
  where,
  documentId,
  querySnapshot,
} from 'firebase/firestore';

import { 
  LIArray10SCIASP, LIArray10SCI, LIArray9SCI, LIArray8SCI, LIArray7SCI, 
  LIArray10STX, LIArray10STY, LIArray9STX, LIArray9STY, LIArray8STM, 
  LIArray12MST, 
  IQArray12BIO, IQArray11BIO,
  IQArray12CHE, IQArray11CHE,
  IQArray12EES, IQArray11EES,
  IQArray12INV, IQArray11INV, IQArrayINV,
  IQArray12PHY, IQArray11PHY, IQArrayPHY,
  LIArray10PYX, LIArray9PYX,
  LIArray10PYY, LIArray9PYY,
  LIArray10BHX, LIArray9BHX,
  LIArray10BHY, LIArray9BHY
} from './LIArrays';

export default function LIReturn ({
  activeTeacherProp, activeSentralClassProp, tnp, adminStateProp,
  activeYearGroup, activeClass, sentralClass
}) {

  const docRef = doc(db, '2023', activeTeacherProp, activeSentralClassProp, `${tnp}`);
  const setDocRef = doc(db, '2023', activeTeacherProp, activeSentralClassProp, `${tnp}`);

  let activeClassArray;
  let tableColLIHeading;
  let topicModuleOrProject;
  let activeSubject;
  let LITableHeading;
  let showLI;
  let miniTableColLIHeading;


  switch (activeClass) {
    case '10SCIASP':
      activeClassArray= LIArray10SCIASP
      topicModuleOrProject = 'Topic'
      LITableHeading= 'Year 10 Science (ASP)'
      tableColLIHeading = 'Learning Intention'
      activeSubject = 'sci'
      miniTableColLIHeading = 'LI'
      break;
    case '10SCI':
      activeClassArray= LIArray10SCI
      topicModuleOrProject = 'Topic'
      LITableHeading= 'Year 10 Science'
      tableColLIHeading = 'Learning Intention'
      activeSubject = 'sci'
      miniTableColLIHeading = 'LI'

      break;
    case '9SCI':
      activeClassArray= LIArray9SCI
      topicModuleOrProject = 'Topic'
      LITableHeading= 'Year 9 Science'
      tableColLIHeading = 'Learning Intention'
      activeSubject = 'sci'
      miniTableColLIHeading = 'LI'

      break;
    case '8SCI':
      activeClassArray= LIArray8SCI
      topicModuleOrProject = 'Topic'
      LITableHeading= 'Year 8 Science'
      tableColLIHeading = 'Learning Intention'
      miniTableColLIHeading = 'LI'

      activeSubject = 'sci'
      break;
    case '7SCI':
      activeClassArray= LIArray7SCI
      topicModuleOrProject = 'Topic'
      LITableHeading= 'Year 7 Science'
      tableColLIHeading = 'Learning Intention'
      miniTableColLIHeading = 'LI'

      activeSubject = 'sci'
      break;
    
    case '10STX':
      activeClassArray= LIArray10STX
      topicModuleOrProject = 'Project'
      LITableHeading= 'Year 10 STEM (200 Hour)'
      tableColLIHeading = 'Learning Intention'
      miniTableColLIHeading = 'LI'

      activeSubject = 'STEM'
      break;
    case '10STY':
      activeClassArray= LIArray10STY
      topicModuleOrProject = 'Project'
      LITableHeading= 'Year 10 STEM (100 Hour)'
      tableColLIHeading = 'Learning Intention'
      miniTableColLIHeading = 'LI'

      activeSubject = 'STEM'
      break;
    case '9STX':
      activeClassArray= LIArray9STX
      topicModuleOrProject = 'Project'
      LITableHeading= 'Year 9 STEM (200 Hour)'
      tableColLIHeading = 'Learning Intention'
      activeSubject = 'STEM'
      break;
    case '9STY':
      activeClassArray= LIArray9STY
      topicModuleOrProject = 'Project'
      LITableHeading= 'Year 9 STEM (100 Hour)'
      tableColLIHeading = 'Learning Intention'
      activeSubject = 'STEM'
      break;
    case '8STM':
      activeClassArray= LIArray8STM
      topicModuleOrProject = 'Project'
      LITableHeading= 'Year 8 STEM'
      tableColLIHeading = 'Learning Intention'
      activeSubject = 'STEM'
      break;
  

    case '12BIO':
      activeClassArray= IQArray12BIO
      topicModuleOrProject = 'Module'
      tableColLIHeading = 'Inquiry Question'
      miniTableColLIHeading = 'IQ'

      LITableHeading= 'Year 12 Biology'
      activeSubject = 'BIO'
      break;
    case '11BIO':
      activeClassArray= IQArray11BIO
      topicModuleOrProject = 'Module'
      tableColLIHeading = 'Inquiry Question'
      miniTableColLIHeading = 'IQ'

      LITableHeading= 'Year 11 Biology'
      activeSubject = 'BIO'

      break;     
    case '12CHE':
      activeClassArray= IQArray12CHE
      topicModuleOrProject = 'Module'
      tableColLIHeading = 'Inquiry Question'
      miniTableColLIHeading = 'IQ'

      LITableHeading= 'Year 12 Chemistry'
      activeSubject = 'CHE'
      break;
    case '11CHE':
      activeClassArray= IQArray11CHE
      topicModuleOrProject = 'Module'
      tableColLIHeading = 'Inquiry Question'
      miniTableColLIHeading = 'IQ'

      LITableHeading= 'Year 11 Chemistry'
      activeSubject = 'CHE'
      break;

    case '12EES':
      activeClassArray= IQArray12EES
      topicModuleOrProject = 'Module'
      tableColLIHeading = 'Inquiry Question'
      LITableHeading= 'Year 12 Earth and Environmental Science'
      activeSubject = 'EES'
      break;
    case '11EES':
      activeClassArray= IQArray11EES
      topicModuleOrProject = 'Module'
      tableColLIHeading = 'Inquiry Question'
      LITableHeading= 'Year 11 Earth and Environmental Science'
      activeSubject = 'EES'
      break;    

    case '12INV':
      activeClassArray= IQArray12INV
      topicModuleOrProject = 'Module'
      tableColLIHeading = 'Inquiry Question'
      miniTableColLIHeading = 'IQ'

      LITableHeading= 'Year 12 Investigating Science'
      activeSubject = 'INV'
      break;
    case '11INV':
      activeClassArray= IQArray11INV
      topicModuleOrProject = 'Module'
      tableColLIHeading = 'Inquiry Question'
      miniTableColLIHeading = 'IQ'

      LITableHeading= 'Year 11 Investigating Science'
      activeSubject = 'INV'
      break;

    case '12PHY':
      activeClassArray= IQArray12PHY
      topicModuleOrProject = 'Module'
      tableColLIHeading = 'Inquiry Question'  
      miniTableColLIHeading = 'IQ'

      LITableHeading= 'Year 12 Physics'
      activeSubject = 'PHY'
      break;
    case '11PHY':
      activeClassArray= IQArray11PHY
      topicModuleOrProject = 'Module'
      tableColLIHeading = 'Inquiry Question'
      miniTableColLIHeading = 'IQ'

      LITableHeading= 'Year 11 Physics'
      activeSubject = 'PHY'
      break;    
  
    case '10PYX':
      activeClassArray= LIArray10PYX
      topicModuleOrProject = 'Topic'
      tableColLIHeading = 'Learning Intention'
      LITableHeading= 'Year 10 Psychology (200 Hour)'
      activeSubject = 'PY'
      break;
    case '10PYY':
      activeClassArray= LIArray10PYY
      topicModuleOrProject = 'Topic'
      tableColLIHeading = 'Learning Intention'
      LITableHeading= 'Year 10 Psychology (100 Hour)'
      activeSubject = 'PY'
      break;
    case '9PYX':
      activeClassArray= LIArray10PYX
      topicModuleOrProject = 'Topic'
      tableColLIHeading = 'Learning Intention'
      LITableHeading= 'Year 9 Psychology (200 Hour)'
      activeSubject = 'PY'
      break;
    case '9PYY':
      activeClassArray= LIArray9PYY
      topicModuleOrProject = 'Topic'
      tableColLIHeading = 'Learning Intention'
      LITableHeading= 'Year 9 Psychology (100 Hour)'
      activeSubject = 'PY'
      break;

    case '10BHX':
      activeClassArray= LIArray10BHX
      topicModuleOrProject = 'Topic'
      tableColLIHeading = 'Learning Intention'
      LITableHeading= 'Year 10 Big History (200 Hour)'
      activeSubject = 'BH'
      break;
    case '10BHY':
      activeClassArray= LIArray10BHY
      topicModuleOrProject = 'Topic'
      tableColLIHeading = 'Learning Intention'
      LITableHeading= 'Year 10 Big History (100 Hour)'
      activeSubject = 'BH'
      break;
    case '9BHX':
      activeClassArray= LIArray10BHX
      topicModuleOrProject = 'Topic'
      tableColLIHeading = 'Learning Intention'
      LITableHeading= 'Year 9 Big History (200 Hour)'
      activeSubject = 'BH'
      break;
    case '9BHY':
      activeClassArray= LIArray9BHY
      topicModuleOrProject = 'Topic'
      tableColLIHeading = 'Learning Intention'
      LITableHeading= 'Year 9 Big History (100 Hour)'
      activeSubject = 'BH'
      break;  
    default:
      break;
  };





  
  // pulling from Topic All array using filter
  const createInitFalseArray = () => {
    const initFalseArray = 
    activeClassArray?.filter(topic => topic.topic === tnp).map(item => {
    return ({
      buttonState: item.completed,
      fullID: item.fullID,
    })
  });
    let poop = {id: tnp, [`${activeTeacherProp}`]: initFalseArray};

    return ( 
      poop 
      )
  };

  const createTopicName = () => {
    const topicNameArray = 
    activeClassArray?.filter(topic => topic.topic === tnp).map(item => {
      return(
        item.topicName
      )
    });

    try { 
      return (
        topicNameArray[0]
      )
    } catch {
      return ( <> Learning Intentions Not Found </>)
    }
  };

  // creates state for buttons and inserts falses from main array
  const [buttonState, setButtonState] = useState( 
    createInitFalseArray()
  );


  // initial load from firestore
  useEffect(() => {
    const loadDoc = async () => {
      let initList = []
      try {
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const cloudState = docSnap.data();
          cloudState.id = docSnap.id;
          initList.push(cloudState);

          setButtonState( cloudState );
        }
        console.log('loadDoc ran');

      } catch {
        setButtonState(createInitFalseArray());
      }
    };
    loadDoc();
  },[]);


  // function for handling click when button it clicked; changes state of the ith position of the buttonState array
  const handleClick = (i, x) => {

    setButtonState(prevButtonState => {
      const newTeacher = {...prevButtonState[`${activeTeacherProp}`], [i]: {... prevButtonState[`${activeTeacherProp}`][i], buttonState: !prevButtonState[`${activeTeacherProp}`][i].buttonState }};

      return {
        ...prevButtonState, [`${activeTeacherProp}`]: newTeacher }
    })
  };


  // creates a button that shows the state of ith position in buttonState array
  function ButtonCompleted( {i, x} ) {
    try {
      return (
        <div>
          <button
          onClick={ () => handleClick(i, x) }
          className={ buttonState[`${activeTeacherProp}`][i]?.buttonState ? 'buttonCompleted' : 'buttonUncompleted' }
          > { buttonState[`${activeTeacherProp}`][i]?.buttonState ? 'Status: Completed' : 'Status: Not Completed' } </button>
        </div>
    )
    } catch {
      console.log('error in ButtonCompleted')
      return (
        <div>
          <button
          onClick={ () => handleClick(i, x) }
          className={ 'buttonUncompleted' } > Error </button>
        </div>
    )
    }
  };


  //creates button that is used to upload to firestore
  function ButtonUploadToCloud() {
    const uploadToCloud = async () => {
      try {
        await updateDoc(docRef, 
          buttonState
        );
        alert('Upload To Cloud Successful');
      } catch {
          await setDoc(setDocRef, buttonState );
        alert('Upload Failed and setDoc was run - PLEASE PRESS UPLOAD TO CLOUD BUTTON AGAIN');
      };
    };

    return (
      <>
        <button className='uploadButton' onClick={()=>uploadToCloud()}> <b> Save {topicModuleOrProject} { tnp } to Cloud </b> </button>
      </>
    )
  };


  //function that calculates the % of progress for each topic
  const ProgressBarBasic = () => {
    try {
      const array = Object.entries(buttonState?.[`${activeTeacherProp}`]).map(item => {
        return (
          item[1].buttonState
        )
      });

      const completed = 
      array.filter(truth => truth === true ).map(item => {
        return (
          item
        )
      });
    const total = 
      array.map (item => {
        return (
          item
        )
      });  
    
      const calc = Number(completed.length / total.length * 100) 
    
    return (
      <ProgressBar now={calc} />
    )

    } catch {
      console.log('error in progress bar')
      return (
        <ProgressBar now = {0} />
      )
    }


  };



  function RowStatus ({i})  {
    try {
      return ( 
      <div 
      className={ buttonState[`${activeTeacherProp}`][i]?.buttonState ? 'buttonCompleted' : 'buttonUncompleted' } 
      > {buttonState[`${activeTeacherProp}`][i]?.buttonState ? 'Status: Completed' : 'Status: Not Completed'} </div> )
    } catch {
      console.log('error in RowStatus')
      return ( <div className={'buttonUncompleted'}> Status Error </div>)
    }
  };



  const ArrayLIDiv = () => {
    return (
      <>
      <div className='divButtonUploadToCloud'> { adminStateProp ? ButtonUploadToCloud() : null } </div>
      <div className="pageHeading2" >  {topicModuleOrProject} { tnp }: { createTopicName() } </div>
      <div className='divLIGrid'>

          {activeClassArray?.filter(topic => topic.topic === tnp).map(item => {
            return (
              <div className='divLIGridChild' key = { item.id }>
                <> { adminStateProp ? <> <ButtonCompleted i={ Number(item.id) } x={ item.fullID } /> </>  : <div className='divLIStatus'> <RowStatus i={ Number(item.id)} /> </div> } </>
                <div className='divLIString'> <b> {miniTableColLIHeading}: </b>{ activeSubject === 'sci' || 'STEM' ? item.LINumber : item.fullID } <br/> { item.LIString } </div>
              </div>
            )
          })}
      </div>
      </>
    )
  };


  return (
    <>
      <ArrayLIDiv />
      <br/><br/>
    </>
  )
};


