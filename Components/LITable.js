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
  yearArraySci10ASP, yearArraySci10, yearArraySci9, yearArraySci8, yearArraySci7, 
  yearArray100HourSTEM10, yearArray200HourSTEM10, yearArraySTEM9, yearArraySTEM8, 
  yearArrayIQsPhy12, yearArrayIQsPhy11,
  yearArrayIQsInvSci12, yearArrayIQsInvSci11,
  yearArrayIQsChe12, yearArrayIQsChe11,
  yearArrayPyy10, yearArrayPyy9
} from './LIArrays';

export default function LITable ({tnp, activeTeacher, activeSubject, activeYearGroup, activeClass, adminCheck}) {






  const docRef = doc(db, '2023', 'subject', activeSubject, activeClass, 'topic', `${tnp}`);
  const setDocRef = doc(db, '2023', 'subject', activeSubject, activeClass, 'topic', `${tnp}` );

  let activeYearArray;

  switch (activeClass) {
    case '10SciASP':
      activeYearArray= yearArraySci10ASP
      break;
    case '10Sci':
      activeYearArray= yearArraySci10
      break;
    case '9Sci':
      activeYearArray= yearArraySci9
      break;
    case '8Sci':
      activeYearArray= yearArraySci8
      break;
    case '7Sci':
      activeYearArray= yearArraySci7
      break;
    case '10STEM100Hour':
      activeYearArray= yearArray100HourSTEM10
      break;
    case '10STEM200Hour':
      activeYearArray= yearArray200HourSTEM10
      break;
    case '9STEM':
      activeYearArray= yearArraySTEM9
      break;
    case '8STEMSem1':
      activeYearArray= yearArraySTEM8
      break;
    case '8STEMSem2':
      activeYearArray= yearArraySTEM8
      break;
    case '12Phy':
      activeYearArray= yearArrayIQsPhy12
      break;
    case '11Phy':
      activeYearArray= yearArrayIQsPhy11
      break;
    case '12InvSci':
      activeYearArray= yearArrayIQsInvSci12
      break;
    case '11InvSci':
      activeYearArray= yearArrayIQsInvSci11
      break;
    case '12Che':
      activeYearArray= yearArrayIQsChe12
      break;
    case '11Che':
      activeYearArray= yearArrayIQsChe11
      break;
    case '10Pyy':
      activeYearArray= yearArrayPyy10
      break;
    case '9Pyy':
      activeYearArray= yearArrayPyy9
      break;  
    default:
      break;
  };


  let LITableHeading;
  switch (activeClass) {
    case '10SciASP':
      LITableHeading= 'Year 10 Science (ASP)'
      break;
    case '10Sci':
      LITableHeading= 'Year 10 Science'
      break;
    case '9Sci':
      LITableHeading= 'Year 9 Science'
      break;
    case '8Sci':
      LITableHeading= 'Year 8 Science'
      break;
    case '7Sci':
      LITableHeading= 'Year 7 Science'
      break;
    case '10STEM100Hour':
      LITableHeading= 'Year 10 STEM (100 Hour)'
      break;
    case '10STEM200Hour':
      LITableHeading= 'Year 10 STEM (200 Hour)'
      break;
    case '9STEM':
      LITableHeading= 'Year 9 STEM'
      break;
    case '8STEMSem1':
      LITableHeading= 'Year 8 STEM (Semester 1)'
      break;
    case '8STEMSem2':
      LITableHeading= 'Year 8 STEM (Semester 2)'
      break;
    case '12Phy':
      LITableHeading= 'Year 12 Physics'
      break;
    case '11Phy':
      LITableHeading= 'Year 11 Physics'
      break;
    case '12InvSci':
      LITableHeading= 'Year 12 Investigating Science'
      break;
    case '11InvSci':
      LITableHeading= 'Year 11 Investigating Science'
      break;
    case '12Che':
      LITableHeading= 'Year 12 Chemistry'
      break;
    case '11Che':
      LITableHeading= 'Year 11 Chemistry'
      break;
    case '10Pyy':
      LITableHeading= 'Year 10 Psychology'
      break;
    case '9Pyy':
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
    case 'Sci':
      tableColLIHeading = 'Learning Intention'
      break;
    case 'STEM':
      tableColLIHeading = 'Project Outcome'
      break; 
    case 'Phy':
      tableColLIHeading = 'Inquiry Question'
      break;
    case 'InvSci':
      tableColLIHeading = 'Inquiry Question'
      break;   
  };

  let topicModuleOrProject;
  switch (activeSubject) {
    case 'Sci':
      topicModuleOrProject = 'Topic'
      break;
    case 'STEM':
      topicModuleOrProject = 'Project'
      break; 
    case 'Phy':
      topicModuleOrProject = 'Module'
      break;
    case 'InvSci':
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


