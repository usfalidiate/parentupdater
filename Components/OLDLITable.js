import Head from 'next/head';
import ProgressBar from 'react-bootstrap/ProgressBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { app, db, auth } from './Firebase';
import { useState, useEffect, useRef } from 'react';
// import { Login } from './Login';
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
  yearArray10SCIASP, yearArray10SCI, yearArray9SCI, yearArray8SCI, yearArray7SCI, 
  yearArray10STEM100Hour, yearArray10STEM200Hour, yearArray9STEM200Hour, yearArray9STEM100Hour, yearArray8STEM, 
  yearArrayIQs12PHY, yearArrayIQs11PHY,
  yearArrayIQs12INVSCI, yearArrayIQs11INVSCI,
  yearArrayIQs12CHE, yearArrayIQs11CHE,
  yearArray10PYY, yearArray9PYY
} from './LIArrays';

export default function LITable ({tnp, activeTeacher, activeSubject, activeYearGroup, activeClass, adminCheck, sentralClass}) {






  const docRef = doc(db, '2023', 'subject', activeSubject, activeClass, 'topic', `${tnp}`, activeTeacher, sentralClass);
  const setDocRef = doc(db, '2023', 'subject', activeSubject, activeClass, 'topic', `${tnp}`, activeTeacher, sentralClass );

  let activeYearArray;

  switch (activeClass) {
    case '10SCIASPA':
      activeYearArray= yearArray10SCIASP
      break;
    case '10SCIASPB':
      activeYearArray= yearArray10SCIASP
      break;
    case '10SCI':
      activeYearArray= yearArray10SCI
      break;
    case '9SCI':
      activeYearArray= yearArray9SCI
      break;
    case '8SCI':
      activeYearArray= yearArray8SCI
      break;
    case '7SCI':
      activeYearArray= yearArray7SCI
      break;
    case '10STEM100Hour':
      activeYearArray= yearArray10STEM100Hour
      break;
    case '10STEM200Hour':
      activeYearArray= yearArray10STEM200Hour
      break;
    case '9STEM200Hour':
      activeYearArray= yearArray9STEM200Hour
      break;
    case '9STEM100Hour':
      activeYearArray= yearArray9STEM100Hour
      break;
    case '8STEMSem1':
      activeYearArray= yearArray8STEM
      break;
    case '8STEMSem2':
      activeYearArray= yearArray8STEM
      break;
    case '12PHY':
      activeYearArray= yearArrayIQs12PHY
      break;
    case '11PHY':
      activeYearArray= yearArrayIQs11PHY
      break;
    case '12INVSCI':
      activeYearArray= yearArrayIQs12INVSCI
      break;
    case '11INVSCI':
      activeYearArray= yearArrayIQs11INVSCI
      break;
    case '12CHE':
      activeYearArray= yearArrayIQs12CHE
      break;
    case '11CHE':
      activeYearArray= yearArrayIQs11CHE
      break;
    case '10PYY':
      activeYearArray= yearArray10PYY
      break;
    case '9PYY':
      activeYearArray= yearArray9PYY
      break;  
    default:
      break;
  };


  let LITableHeading;
  switch (activeClass) {
    case '10SCIASP':
      LITableHeading= 'Year 10 Science (ASP)'
      break;
    case '10SCI':
      LITableHeading= 'Year 10 Science'
      break;
    case '9SCI':
      LITableHeading= 'Year 9 Science'
      break;
    case '8SCI':
      LITableHeading= 'Year 8 Science'
      break;
    case '7SCI':
      LITableHeading= 'Year 7 Science'
      break;
    case '10STEM100Hour':
      LITableHeading= 'Year 10 STEM (100 Hour)'
      break;
    case '10STEM200Hour':
      LITableHeading= 'Year 10 STEM (200 Hour)'
      break;
    case '9STEM100Hour':
      LITableHeading= 'Year 9 STEM (100 Hour)'
      break;
    case '9STEM200Hour':
      LITableHeading= 'Year 9 STEM (200 Hour)'
      break;
    case '8STEMSem1':
      LITableHeading= 'Year 8 STEM (Semester 1)'
      break;
    case '8STEMSem2':
      LITableHeading= 'Year 8 STEM (Semester 2)'
      break;
    case '12PHY':
      LITableHeading= 'Year 12 Physics'
      break;
    case '11PHY':
      LITableHeading= 'Year 11 Physics'
      break;
    case '12INVSCI':
      LITableHeading= 'Year 12 Investigating Science'
      break;
    case '11INVSCI':
      LITableHeading= 'Year 11 Investigating Science'
      break;
    case '12CHE':
      LITableHeading= 'Year 12 Chemistry'
      break;
    case '11CHE':
      LITableHeading= 'Year 11 Chemistry'
      break;
    case '10PYY':
      LITableHeading= 'Year 10 Psychology'
      break;
    case '9PYY':
      LITableHeading= 'Year 9 Psychology'
      break;       
    default:
      break;
  };



  
  // pulling from Topic All array using filter
  const createInitFalseArray = () => {
    const initFalseArray = 
    activeYearArray?.filter(topic => topic.topic === tnp).map(item => {
    return ({
      buttonState: item.completed,
      fullID: item.fullID,
    })
  });
    let poop = {id: tnp, [`${activeTeacher}`]: initFalseArray};

    return ( 
      poop 
      )
  };

  const createTopicName = () => {
    const topicNameArray = 
    activeYearArray?.filter(topic => topic.topic === tnp).map(item => {
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
      const newTeacher = {...prevButtonState[`${activeTeacher}`], [i]: {... prevButtonState[`${activeTeacher}`][i], buttonState: !prevButtonState[`${activeTeacher}`][i].buttonState }};

      return {
        ...prevButtonState, [`${activeTeacher}`]: newTeacher }
    })
  };


  // creates a button that shows the state of ith position in buttonState array
  function ButtonCompleted( {i, x} ) {
    try {
      return (
        <div>
          <button
          onClick={ () => handleClick(i, x) }
          className={ buttonState[`${activeTeacher}`][i]?.buttonState ? 'buttonCompleted' : 'buttonUncompleted' }
          > Click </button>
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
        alert('Upload Failed - setDoc was run');
      };
    };

    return (
      <div>
        <button onClick={()=>uploadToCloud()}> Upload To Cloud </button>
      </div>
    )
  };


  //function that calculates the % of progress for each topic
  const ProgressBarBasic = () => {
    try {
      const array = Object.entries(buttonState?.[`${activeTeacher}`]).map(item => {
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
      className={ buttonState[`${activeTeacher}`][i]?.buttonState ? 'buttonCompleted' : 'buttonUncompleted' } 
      > {buttonState[`${activeTeacher}`][i]?.buttonState ? 'Done' : 'Not Done'} </div> )
    } catch {
      console.log('error in RowStatus')
      return ( <div className={'buttonUncompleted'}> Status Error </div>)
    }
  };


  let tableColLIHeading;
  switch (activeSubject) {
    case 'SCI':
      tableColLIHeading = 'Learning Intention'
      break;
    case 'STEM':
      tableColLIHeading = 'Project Outcome'
      break; 
    case 'PHY':
      tableColLIHeading = 'Inquiry Question'
      break;
    case 'INVSCI':
      tableColLIHeading = 'Inquiry Question'
      break;   
  };

  let topicModuleOrProject;
  switch (activeSubject) {
    case 'SCI':
      topicModuleOrProject = 'Topic'
      break;
    case 'STEM':
      topicModuleOrProject = 'Project'
      break; 
    case 'PHY':
      topicModuleOrProject = 'Module'
      break;
    case 'INVSCI':
      topicModuleOrProject = 'Module'
      break; 
  };




  // creates table from the main array, plus a button which shows state and changes state onClick
  const YearTopicTableAdmin = () => {
    return (
    <>
 
      { adminCheck ? ButtonUploadToCloud() : null }

      { ProgressBarBasic() }

      <h1> { LITableHeading }: {topicModuleOrProject} { tnp } - { createTopicName() }</h1>
      <div>
        <table className='mainTable'>
          <thead>
            <tr>
              <th> Completed </th>
              <th> # </th>
              <th> { tableColLIHeading } </th>
            </tr>          
          </thead>
          <tbody>
            {activeYearArray.filter(topic => topic.topic === tnp).map(item => {
              return (
                <tr key = { item.id }>
                  {adminCheck ? <td className='tdCheckbox'> 
                    <ButtonCompleted 
                      i={ Number(item.id) }
                      x={ item.fullID }
                    /> </td> 
                    : 
                    <td className='tdCheckbox'>   
                  <RowStatus
                    i={ Number(item.id)} 
                  /> </td>
                  }
                  <td className='tdLINumber'> { activeSubject === 'Sci' ? item.LINumber : item.fullID  }</td>
                  <td className='tdLIString'> { item.LIString }</td>
                </tr>
              )
            })}
          </tbody>
        </table>   
      </div>
    </>
    )
  };


  return (
    <>
      <YearTopicTableAdmin />
    </>
  )


};


