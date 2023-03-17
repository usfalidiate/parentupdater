import { display } from '@mui/system';
import 'bootstrap/dist/css/bootstrap.min.css';10
import { useState, useEffect, useRef } from 'react';

import LITable from './LITable';

export default function MainPage() {

  const [adminState, setAdminState] = useState(false);

  const [displaySci, setDisplaySci] = useState(false);
  const [displaySTEM, setDisplaySTEM] = useState(false);
  const [displayPhy, setDisplayPhy] = useState(false);
  const [displayInvSci, setDisplayInvSci] = useState(false);


  const [displayYearSci7, setDisplayYearSci7] = useState(false);
  const [displayYearSci8, setDisplayYearSci8] = useState(false);
  const [displayYearSci9, setDisplayYearSci9] = useState(false);
  const [displayYearSci10ASP, setDisplayYearSci10ASP] = useState(false);
  const [displayYearSci10, setDisplayYearSci10] = useState(false);

  
  const [displayYearSTEM8, setDisplayYearSTEM8] = useState(false);
  const [displayYearSTEM9, setDisplayYearSTEM9] = useState(false);
  const [displayYear100HourSTEM10, setDisplayYear100HourSTEM10] = useState(false);
  const [displayYear200HourSTEM10, setDisplayYear200HourSTEM10] = useState(false);


  const [displayYearInvSci11, setDisplayYearInvSci11] = useState(false);
  const [displayYearInvSci12, setDisplayYearInvSci12] = useState(false);

  const [displayYearPhy11, setDisplayYearPhy11] = useState(false);
  const [displayYearPhy12, setDisplayYearPhy12] = useState(false);

  const [displayAssessment, setDisplayAssessment] = useState(false);
  const [displayLITables, setDisplayLITables] = useState(false);
  const [displaySubjectInfo, setDisplaySubjectInfo] = useState(false);

  const handleClickDisplayAssessment = () => {
    setDisplayAssessment(prev=>!prev);
      setDisplayLITables(false);
      setDisplaySubjectInfo(false);
  };

  const handleClickDisplayLITables = () => {
    setDisplayLITables(prev=>!prev);
      setDisplaySubjectInfo(false);
      setDisplayAssessment(false);
  };

  const handleClickDisplaySubjectInfo = () => {
    setDisplaySubjectInfo(prev=>!prev);
      setDisplayLITables(false);
      setDisplayAssessment(false);
  };
 
  // handle clicks for main subject display

  const handleToggleAdmin = () => {
    setAdminState(prev=>!prev);
  };

  const handleClickDisplaySci = () => {
    setDisplaySci(prev => !prev);
      setDisplaySTEM(false);
      setDisplayPhy(false);
      setDisplayInvSci(false);
      // setDisplayLITables(false);
      // setDisplayAssessment(false);
      // setDisplaySubjectInfo(false);

  };

  const handleClickDisplaySTEM = () => {
    setDisplaySTEM(prev=>!prev);
      setDisplaySci(false);
      setDisplayPhy(false);
      setDisplayInvSci(false);
      // setDisplayLITables(false);
      // setDisplayAssessment(false);
      // setDisplaySubjectInfo(false);
  };

  const handleClickDisplayPhy = () => {
    setDisplayPhy(prev=>!prev);
      setDisplaySTEM(false);
      setDisplaySci(false);
      setDisplayInvSci(false);
  //     setDisplayLITables(false);
  //     setDisplayAssessment(false);
  //     setDisplaySubjectInfo(false);
  };

  const handleClickDisplayInvSci = () => {
    setDisplayInvSci(prev=>!prev);
      setDisplaySci(false);
      setDisplayPhy(false);
      setDisplaySTEM(false);
      // setDisplayLITables(false);
      // setDisplayAssessment(false);
      // setDisplaySubjectInfo(false);
  };



  // handle clicks for year groups within each subject
  // Science
  const handleClickSci10ASP = () => {
    setDisplayYearSci10ASP(prev => !prev);
      setDisplayYearSci10(false);
      setDisplayYearSci7(false);
      setDisplayYearSci8(false);
      setDisplayYearSci9(false);
      setDisplaySTEM(false);
  };

  const handleClickSci10 = () => {
    setDisplayYearSci10(prev => !prev);
      setDisplayYearSci7(false);
      setDisplayYearSci8(false);
      setDisplayYearSci9(false);
      setDisplaySTEM(false);
      setDisplayYearSci10ASP(false);

  };

  const handleClickSci9 = () => {
    setDisplayYearSci9(prev => !prev);
      setDisplayYearSci7(false);
      setDisplayYearSci8(false);
      setDisplayYearSci10(false);
      setDisplaySTEM(false);
      setDisplayYearSci10ASP(false);


  };

  const handleClickSci8 = () => {
    setDisplayYearSci8(prev => !prev);
      setDisplayYearSci7(false);
      setDisplayYearSci9(false);
      setDisplayYearSci10(false);
      setDisplaySTEM(false);
      setDisplayYearSci10ASP(false);


  };

  const handleClickSci7 = () => {
    setDisplayYearSci7(prev => !prev);
      setDisplayYearSci8(false);
      setDisplayYearSci9(false);
      setDisplayYearSci10(false);
      setDisplaySTEM(false);
      setDisplayYearSci10ASP(false);


  };


  // STEM
  const handleClick100HourSTEM10 = () => {
    setDisplayYear100HourSTEM10(prev => !prev);
      setDisplayYearSTEM8(false);
      setDisplayYearSTEM9(false);
      setDisplaySci(false);
      setDisplayYear200HourSTEM10(false);
  };

  const handleClick200HourSTEM10 = () => {
    setDisplayYear200HourSTEM10(prev => !prev);
      setDisplayYearSTEM8(false);
      setDisplayYearSTEM9(false);
      setDisplaySci(false);
      setDisplayYear100HourSTEM10(false);

  };

  const handleClickSTEM9 = () => {
    setDisplayYearSTEM9(prev => !prev);
      setDisplayYearSTEM8(false);
      setDisplayYear100HourSTEM10(false);
      setDisplayYear200HourSTEM10(false);
      setDisplaySci(false);

  };

  const handleClickSTEM8 = () => {
    setDisplayYearSTEM8(prev => !prev);
      setDisplayYearSTEM9(false);
      setDisplayYear100HourSTEM10(false);
      setDisplayYear200HourSTEM10(false);
      setDisplaySci(false);

  };

  // Phy
  const handleClickPhy11 = () => {
    setDisplayYearPhy11(prev=>!prev);
      setDisplayYearPhy12(false);
  };

  const handleClickPhy12 = () => {
    setDisplayYearPhy12(prev=>!prev);
      setDisplayYearPhy11(false);
  }

  // Inv Sci
  const handleClickInvSci11 = () => {
    setDisplayYearInvSci11(prev=>!prev);
      setDisplayYearInvSci12(false);
  };

  const handleClickInvSci12 = () => {
    setDisplayYearInvSci12(prev=>!prev);
      setDisplayYearInvSci11(false);
  };

  // assessment, subject info or LI table buttons
  function ButtonToggleDisplayAssessment() {
    return (<> <button onClick={handleClickDisplayAssessment}> Assessment </button></>)
  };

  function ButtonToggleDisplayLITables() {
    return (<> <button onClick={handleClickDisplayLITables}> Learning Intentions Progress </button></>)
  };

  function ButtonToggleDisplaySubjectInfo() {
    return (<> <button onClick={handleClickDisplaySubjectInfo}> Subject Information </button></>)
  };

  // admin button
  function ButtonToggleAdmin() {
    return ( <> <button onClick={handleToggleAdmin}> {adminState ? 'Admin Mode: ON' : 'Admin Mode: OFF'} </button></>) }

  // Button functions fir displaying main subjects
  function ButtonDisplaySci () {
    return ( <> <button onClick={handleClickDisplaySci}> Science </button> </>  ) };

  function ButtonDisplaySTEM () {
    return ( <> <button onClick={handleClickDisplaySTEM}> STEM </button> </> ) };
  
  function ButtonDisplayPhy () {
    return ( <> <button onClick={handleClickDisplayPhy}> Physics </button> </> ) };

    function ButtonDisplayInvSci () {
    return ( <> <button onClick={handleClickDisplayInvSci}> Investigating Science </button> </> ) };


  // button functions for displaying year groups within each main subject
  // sci
  function ButtonSci10ASP () {
    return ( <> <button onClick={handleClickSci10ASP}> Year 10 Science (ASP) </button> </> ) };

  function ButtonSci10 () {
    return ( <> <button onClick={handleClickSci10}> Year 10 Science </button> </> ) };

  function ButtonSci9 () {
    return ( <> <button onClick={handleClickSci9}> Year 9 Science </button> </> ) };

  function ButtonSci8 () {
    return ( <> <button onClick={handleClickSci8}> Year 8 Science </button> </> ) };

  function ButtonSci7 () {
    return ( <> <button onClick={handleClickSci7}> Year 7 Science </button> </> ) };

  
  
  // STEM
  function Button200HourSTEM10 () {
    return ( <> <button onClick={handleClick200HourSTEM10}> Year 10 STEM (200 Hour) </button> </> ) };

  function Button100HourSTEM10 () {
    return ( <> <button onClick={handleClick100HourSTEM10}> Year 10 STEM (100 Hour) </button> </> ) };

  function ButtonSTEM9 () {
    return ( <> <button onClick={handleClickSTEM9}> Year 9 STEM </button> </> ) };

  function ButtonSTEM8 () {
    return ( <> <button onClick={handleClickSTEM8}> Year 8 STEM </button> </> ) };


  // Phy
  function ButtonPhy12 () {
    return ( <> <button onClick={handleClickPhy12}> Year 12 Physics </button> </> ) };

  function ButtonPhy11 () {
    return ( <> <button onClick={handleClickPhy11}> Year 11 Physics </button> </> ) };

  // Inv Sci
  function ButtonInvSci12 () {
    return ( <> <button onClick={handleClickInvSci12}> Year 12 Inv Sci </button> </> ) };

  function ButtonInvSci11 () {
    return ( <> <button onClick={handleClickInvSci11}> Year 11 Inv Sci </button> </> ) };



  // functions for LI Tables 
  // Science
  function Year10ASPLITables(){
    return (
      <>
      <LITable tnp={ Number(1) } activeClass={'sci10ASP'} activeYearGroup={10} activeSubject={'SciASP'} adminCheck={adminState} />
      <LITable tnp={ Number(2) } activeClass={'sci10ASP'} activeYearGroup={10} activeSubject={'SciASP'} adminCheck={adminState} />
      <LITable tnp={ Number(3) } activeClass={'sci10ASP'} activeYearGroup={10} activeSubject={'SciASP'} adminCheck={adminState} />
      <LITable tnp={ Number(4) } activeClass={'sci10ASP'} activeYearGroup={10} activeSubject={'SciASP'} adminCheck={adminState} />
      <LITable tnp={ Number(5) } activeClass={'sci10ASP'} activeYearGroup={10} activeSubject={'SciASP'} adminCheck={adminState} />
      <LITable tnp={ Number(6) } activeClass={'sci10ASP'} activeYearGroup={10} activeSubject={'SciASP'} adminCheck={adminState} />

    </>
    )
  };

  function Year10LITables(){
    return (
      <>
      <LITable tnp={ Number(1) } activeClass={'sci10'} activeYearGroup={10} activeSubject={'Sci'} adminCheck={adminState} />
      <LITable tnp={ Number(2) } activeClass={'sci10'} activeYearGroup={10} activeSubject={'Sci'} adminCheck={adminState} />
      <LITable tnp={ Number(3) } activeClass={'sci10'} activeYearGroup={10} activeSubject={'Sci'} adminCheck={adminState} />
      <LITable tnp={ Number(4) } activeClass={'sci10'} activeYearGroup={10} activeSubject={'Sci'} adminCheck={adminState} />
      <LITable tnp={ Number(5) } activeClass={'sci10'} activeYearGroup={10} activeSubject={'Sci'} adminCheck={adminState} />
      <LITable tnp={ Number(6) } activeClass={'sci10'} activeYearGroup={10} activeSubject={'Sci'} adminCheck={adminState} />

    </>
    )
  };

  function Year9LITables(){
    return (
      <>
      <LITable tnp={ Number(1) } activeClass={'sci9'} activeYearGroup={9} activeSubject={'Sci'} adminCheck={adminState} />
      <LITable tnp={ Number(2) } activeClass={'sci9'} activeYearGroup={9} activeSubject={'Sci'} adminCheck={adminState} />
    </>
    )
  };

  function Year8LITables(){
    return (
      <>
      <LITable tnp={ Number(1) } activeClass={'sci8'} activeYearGroup={8} activeSubject={'Sci'} adminCheck={adminState} />
      <LITable tnp={ Number(2) } activeClass={'sci8'} activeYearGroup={8} activeSubject={'Sci'} adminCheck={adminState} />
    </>
    )
  };

  function Year7LITables(){
    return (
      <>
      <LITable tnp={ Number(1) } activeClass={'sci7'} activeYearGroup={7} activeSubject={'Sci'} adminCheck={adminState} />
      <LITable tnp={ Number(2) } activeClass={'sci7'} activeYearGroup={7} activeSubject={'Sci'} adminCheck={adminState} />
    </>
    )
  };

  // functions for LI Tables 
  // STEM  

  function Year100Hour10STEMLITables() {
    return (
      <>
      <LITable tnp={ Number(1) } activeClass={'100HourSTEM10'} activeYearGroup={10} activeSubject={'STEM'} adminCheck={adminState} />

      </>
    )
  };

  function Year200Hour10STEMLITables() {
    return (
      <>
      <LITable tnp={ Number(1) } activeClass={'200HourSTEM10'} activeYearGroup={10} activeSubject={'STEM'} adminCheck={adminState} />

      </>
    )
  };

  function Year9STEMLITables() {
    return (
      <>
      <LITable tnp={ Number(1) } activeClass={'STEM9'} activeYearGroup={9} activeSubject={'STEM'} adminCheck={adminState} />

      </>
    )
  };

  function Year8STEMLITables() {
    return (
      <>
      <LITable tnp={ Number(1) } activeClass={'STEM8'} activeYearGroup={8} activeSubject={'STEM'} adminCheck={adminState} />

      </>
    )
  };







  // functions for LI Tables 
  // Phy

  function Year12PhyLITables() {
    return (
      <>
      <LITable tnp={ Number(5) } activeClass={'Phy12'} activeYearGroup={12} activeSubject={'Phy'} adminCheck={adminState} />
      <LITable tnp={ Number(6) } activeClass={'Phy12'} activeYearGroup={12} activeSubject={'Phy'} adminCheck={adminState} />
      <LITable tnp={ Number(7) } activeClass={'Phy12'} activeYearGroup={12} activeSubject={'Phy'} adminCheck={adminState} />
      <LITable tnp={ Number(8) } activeClass={'Phy12'} activeYearGroup={12} activeSubject={'Phy'} adminCheck={adminState} />


      </>
    )
  };


  function Year11PhyLITables() {
    return (
      <>
      <LITable tnp={ Number(1) } activeClass={'Phy11'} activeYearGroup={11} activeSubject={'Phy'} adminCheck={adminState} />
      <LITable tnp={ Number(2) } activeClass={'Phy11'} activeYearGroup={11} activeSubject={'Phy'} adminCheck={adminState} />
      <LITable tnp={ Number(3) } activeClass={'Phy11'} activeYearGroup={11} activeSubject={'Phy'} adminCheck={adminState} />
      <LITable tnp={ Number(4) } activeClass={'Phy11'} activeYearGroup={11} activeSubject={'Phy'} adminCheck={adminState} />


      </>
    )
  };



  
  // functions for LI Tables 
  // Inv Sci

  function Year12InvSciLITables() {
    return (
      <>
      <LITable tnp={ Number(5) } activeClass={'InvSci12'} activeYearGroup={12} activeSubject={'InvSci'} adminCheck={adminState} />
      <LITable tnp={ Number(6) } activeClass={'InvSci12'} activeYearGroup={12} activeSubject={'InvSci'} adminCheck={adminState} />
      <LITable tnp={ Number(7) } activeClass={'InvSci12'} activeYearGroup={12} activeSubject={'InvSci'} adminCheck={adminState} />
      <LITable tnp={ Number(8) } activeClass={'InvSci12'} activeYearGroup={12} activeSubject={'InvSci'} adminCheck={adminState} />


      </>
    )
  };


  function Year11InvSciLITables() {
    return (
      <>
      <LITable tnp={ Number(1) } activeClass={'InvSci11'} activeYearGroup={11} activeSubject={'InvSci'} adminCheck={adminState} />
      <LITable tnp={ Number(2) } activeClass={'InvSci11'} activeYearGroup={11} activeSubject={'InvSci'} adminCheck={adminState} />
      <LITable tnp={ Number(3) } activeClass={'InvSci11'} activeYearGroup={11} activeSubject={'InvSci'} adminCheck={adminState} />
      <LITable tnp={ Number(4) } activeClass={'InvSci11'} activeYearGroup={11} activeSubject={'InvSci'} adminCheck={adminState} />


      </>
    )
  };


  // functions for assessment tables

  // functions for subject info tables

  return (
    <>
    <div>
      <ButtonToggleAdmin />
    </div>

    <div>
      <ButtonDisplaySci />
      <ButtonDisplaySTEM />
      <ButtonDisplayPhy />
      <ButtonDisplayInvSci />
    </div>

    {displaySci ?     
      <div>
        <ButtonSci10ASP />
        <ButtonSci10 />
        <ButtonSci9 />
        <ButtonSci8 />
        <ButtonSci7 />
      </div> : null
    }

    {displaySTEM ?     
      <div>
        <Button200HourSTEM10 />
        <Button100HourSTEM10 />
        <ButtonSTEM9 />
        <ButtonSTEM8 />
      </div> : null
    }

    {displayPhy ? 
      <div>
        <ButtonPhy12 />
        <ButtonPhy11 />
      </div> : null
    }

    {displayInvSci ?
      <div>
        <ButtonInvSci12 />
        <ButtonInvSci11 />
      </div> : null
    }

    {
     
    displayYearSci10ASP || displayYearSci10 || displayYearSci10 || displayYearSci9 || displayYearSci8 || displayYearSci7 ||
    displayYear200HourSTEM10 || displayYear100HourSTEM10 || displayYearSTEM9 || displayYearSTEM8 ||
    displayYearPhy12 || displayYearPhy11 || displayYearInvSci12 || displayYearInvSci11 ? 
    <ButtonToggleDisplayLITables/> : null
    }

    {
    displayYearSci10ASP || displayYearSci10 || displayYearSci10 || displayYearSci9 || displayYearSci8 || displayYearSci7 ||
    displayYear200HourSTEM10 || displayYear100HourSTEM10 || displayYearSTEM9 || displayYearSTEM8 ||
    displayYearPhy12 || displayYearPhy11 || displayYearInvSci12 || displayYearInvSci11 ? 
    <ButtonToggleDisplayAssessment/> : null
    }


    {
    displayYearSci10ASP || displayYearSci10 || displayYearSci10 || displayYearSci9 || displayYearSci8 || displayYearSci7 ||
    displayYear200HourSTEM10 || displayYear100HourSTEM10 || displayYearSTEM9 || displayYearSTEM8 ||
    displayYearPhy12 || displayYearPhy11 || displayYearInvSci12 || displayYearInvSci11 ? 
    <ButtonToggleDisplaySubjectInfo/> : null
    }


    <div>
      {displaySci && displayLITables && displayYearSci10ASP ? < Year10ASPLITables /> : null}
      {displaySci && displayLITables && displayYearSci10 ? < Year10LITables /> : null}
      {displaySci && displayLITables && displayYearSci9 ? < Year9LITables /> : null}
      {displaySci && displayLITables && displayYearSci8 ? < Year8LITables /> : null}
      {displaySci && displayLITables && displayYearSci7 ? < Year7LITables /> : null}
    </div>

    <div>
      {displaySTEM && displayLITables && displayYear200HourSTEM10 ? <Year200Hour10STEMLITables/> : null}
      {displaySTEM && displayLITables && displayYear100HourSTEM10 ? <Year100Hour10STEMLITables/> : null}
      {displaySTEM && displayLITables && displayYearSTEM9 ? <Year9STEMLITables/> : null}
      {displaySTEM && displayLITables && displayYearSTEM8 ? <Year8STEMLITables/> : null}
    </div>

    <div>
      {displayPhy && displayLITables && displayYearPhy12 ? <Year12PhyLITables/> : null}
      {displayPhy && displayLITables && displayYearPhy11 ? <Year11PhyLITables/> : null}
    </div>

    <div>
      {displayInvSci && displayLITables && displayYearInvSci12 ? <Year12InvSciLITables/> : null}
      {displayInvSci && displayLITables && displayYearInvSci11 ? <Year11InvSciLITables/> : null}
    </div>

    </>
  )
};
