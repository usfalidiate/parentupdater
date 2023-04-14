// import { gridStringOrNumberComparator } from "@mui/x-data-grid";
import { sciSyllabusOutcomesArray, subjectInfoArray, phySyllabusOutcomesArray, invSyllabusOutcomesArray, STEMSyllabusOutcomesArray } from "./SubjectInfoArrays";
import { IQArray11INV, IQArray12INV, IQArray11PHY, IQArray12PHY } from "./LIArrays";

import Image from 'next/image'
import STEM from '../assets/STEM.jpg'

export default function SubjectInfoReturn({activeClass}) {

    let ActiveSubjectInfoTable;
    let activeClassTitle;
    let activeSubjectInfoArray;
    let activeSubjectSyllabusOutcomesArray;
    let activeIQArray;
    switch (activeClass) {
        case '10SCIASP' : 
            ActiveSubjectInfoTable = SciSubjectInfoTable
            activeClassTitle = 'Year 10 Science (ASP)'
            break;

        case '12PHY' : 
            ActiveSubjectInfoTable = ST6SubjectInfoTable
            activeClassTitle = "Physics"
            activeSubjectSyllabusOutcomesArray = phySyllabusOutcomesArray
            activeIQArray = IQArray12PHY
            break;

        case '11PHY' :
            ActiveSubjectInfoTable = ST6SubjectInfoTable
            activeClassTitle = "Physics"
            activeSubjectSyllabusOutcomesArray = phySyllabusOutcomesArray
            activeIQArray = IQArray11PHY
            break;

        case '12INV' : 
            ActiveSubjectInfoTable = ST6SubjectInfoTable
            activeClassTitle = "Investigating Science"
            activeSubjectSyllabusOutcomesArray = invSyllabusOutcomesArray
            activeIQArray = IQArray12INV
            break;

        case '11INV' :
            ActiveSubjectInfoTable = ST6SubjectInfoTable
            activeClassTitle = "Investigating Science"
            activeSubjectSyllabusOutcomesArray = invSyllabusOutcomesArray
            activeIQArray = IQArray11INV
            break;

        case '10STY' : 
            ActiveSubjectInfoTable = STEMSubjectInfoTable
            activeClassTitle = "Year 10 STEM (100-Hour)"
            break;
    };

    function SciSubjectInfoTable(){
        const sciDIV = subjectInfoArray.filter(item => item.activeClass == activeClass).map(element => {
            return (
                element.topic.map(result => {
                    return (
                        <>
                            <div key={result.topicNumber} className="grid-container-subject-sci">
                                <div> <h3> Topic {result.topicNumber}: {result.topicName} </h3> </div>
                                <div> <b> Duration: </b> {result.topicDuration} </div> 
                                <div> <b> Topic Description</b> <br/> {result.topicDescription} </div> 

                                <div>
                                    <b> Topic Outcomes</b>
                                    <br/>
                                    {
                                        result.topicOutcomes.map(row => {
                                        let des = sciSyllabusOutcomesArray.find((poop) => poop.outcome == row)
                                        return (<div key = {des.outcome} >  <b> {des.outcome}: </b> {des.description} <br/> </div>)                                            
                                        })
                                    } 
                                </div>

                                <div>
                                    <b> Topic Content </b>
                                    <br/>
                                {
                                    result.topicContent.map(row => {
                                    let des = sciSyllabusOutcomesArray.find((poop) => poop.outcome == row)
                                    return (<div key = {des.outcome} > <b> {des.outcome}: </b> {des.description} <br/> </div>)                                                 
                                    })
                                } 
                                </div>
                            </div>
                        <br/>
                        </>
                    )
                })
            )
        });

            return (
            <> 
                <div className="pageHeading" > {activeClassTitle}: Subject Information </div> 
                {sciDIV}
            </>
        )  
    };

    function ST6SubjectInfoTable(){
        const ST6Div = subjectInfoArray.filter(item => item.activeClass == activeClass).map(element => {
            return (
                <div key={element.topic}>
                {element.topic.map(result => {
                    return (
                        <>
                        <div key={result.topicNumber} className="grid-container-subject-ST6">
                            <div> <h2> Topic {result.topicNumber}: {result.topicName} </h2> </div> {/* Child 1 */}
                            <div> <b> Duration: </b> Approximately {result.topicDuration}.  </div> {/* Child 2 */}
                            <div> <b> Outcomes </b> <br/> {                                  
                                result.topicOutcomes.map(row => {
                                let out = activeSubjectSyllabusOutcomesArray.find((poop) => poop.outcome == row)
                                return (<div key = {out.outcome}><b>{out.outcome}: &nbsp; </b> {out.description} </div> )                                            
                                })
                            } </div> {/* Child 3 */}
                            <div> <b> Topic Description </b> <br/> {result.topicDescription} </div> {/* Child 4 */}
                            <div> <b> Inquiry Questions </b> <br/> {
                                result.topicContent.map(row => {
                                let out = activeIQArray.find((IQ) => IQ.fullID == row)
                                return (<div key = {out.outcome} > <b> {out.fullID}: &nbsp; </b> {out.LIString} <br/> </div>)                                                 
                                })
                            } </div> {/* Child 5 */}
                        </div>
                        <br/><br/><br/><br/>
                        </>
                    )
                })}
                <br/>
            </div>
            )
        });

            return (
            <> 
                <div className="pageHeading" > {activeClassTitle}: Subject Information </div> 
                <> {ST6Div} </>
            </>
        )  
    };

    function STEMSubjectInfoTable(){
        const STEMdiv = subjectInfoArray.filter(item => item.activeClass == activeClass).map(element => {
            return (
                element.topic.map(result => {
                    return (
                        <>
                        <div key={result.topicNumber} className="grid-container-subject-STEM">
                            <div> <h2> Project {result.topicNumber}: {result.topicName} </h2> </div> 
                            <div> <b> Duration: </b>{result.topicDuration} </div> 
                            <div> <b> Project Description</b> <br/> {result.topicDescription} </div> 
                            
                            <div> 
                                {
                                    result.topicOutcomes.map(row => {
                                    let des = STEMSyllabusOutcomesArray.find((poop) => poop.outcome == row)
                                    return (<div key = {des.outcome} > <b> {des.outcome}: </b> {des.description} <br/></div> )                                            
                                    })
                                } 
                            </div>

                            {/* <div> 
                                {
                                    result.topicContent.map(row => {
                                    let des = STEMSyllabusOutcomesArray.find((poop) => poop.outcome == row)
                                    return (<> {des.outcome}: {des.description} <br/><br/> </>)                                                 
                                    })
                                } 
                            </div> */}
                        </div>
                        <br/>

                        </>
                    )
                })
            )
        });

    return (
            <> 
                <div className="divImage"> <Image src={STEM} width={900} height={100} alt="Heading for STEM Page" /> </div>
                <div className="pageHeading" > {activeClassTitle}: Subject Information </div> 
                {STEMdiv}

            </>
        )    
    };

   
    return (
        <div className="divSubjectInfoContent">
            <ActiveSubjectInfoTable/>
            <br/>
        </div>
    )
};