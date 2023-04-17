import { 
    sciSyllabusOutcomesArray, 
    subjectInfoArray, 
    phySyllabusOutcomesArray, 
    invSyllabusOutcomesArray, 
    STEMSyllabusOutcomesArray, 
    PSYSyllabusOutcomesArray, 
    CHESyllabusOutcomesArray, 
    MSTSyllabusOutcomesArray,
     
} from "./SubjectInfoArrays";

import { 
    IQArray11INV, 
    IQArray12INV, 
    IQArray11PHY, 
    IQArray12PHY, 
    LIArray10STY, 
    LIArray10SCI, 
    LIArray10PYY, 
    LIArray9PYY, 
    IQArray12CHE, 
    IQArray11CHE,
    LIArray12MST,
    LIArray11MST,
    LIArray8MST,

} from "./LIArrays";

// import Image from 'next/image'
// import STEM from '../assets/STEM.jpg'

export default function SubjectInfoReturn({activeClass}) {

    let ActiveSubjectInfoTable;
    let activeClassTitle;
    let activeSubjectInfoArray;
    let activeSubjectSyllabusOutcomesArray;
    let activeIQorLIArray;
    switch (activeClass) {
        case '10SCIASP' : 
            // ActiveSubjectInfoTable = SciSubjectInfoTable
            activeClassTitle = 'Year 10 Science (ASP)'
            activeSubjectSyllabusOutcomesArray = sciSyllabusOutcomesArray
            activeIQorLIArray = LIArray10SCI
            break;

        case '12PHY' : 
            // ActiveSubjectInfoTable = ST6SubjectInfoTable
            activeClassTitle = "Physics"
            activeSubjectSyllabusOutcomesArray = phySyllabusOutcomesArray
            activeIQorLIArray = IQArray12PHY
            break;

        case '11PHY' :
            // ActiveSubjectInfoTable = ST6SubjectInfoTable
            activeClassTitle = "Physics"
            activeSubjectSyllabusOutcomesArray = phySyllabusOutcomesArray
            activeIQorLIArray = IQArray11PHY
            break;

            
        case '12CHE' : 
            // ActiveSubjectInfoTable = ST6SubjectInfoTable
            activeClassTitle = "Chemistry"
            activeSubjectSyllabusOutcomesArray = CHESyllabusOutcomesArray
            activeIQorLIArray = IQArray12CHE
            break;

        case '11CHE' :
            // ActiveSubjectInfoTable = ST6SubjectInfoTable
            activeClassTitle = "Chemistry"
            activeSubjectSyllabusOutcomesArray = CHESyllabusOutcomesArray
            activeIQorLIArray = IQArray11CHE
            break;


        case '12INV' : 
            // ActiveSubjectInfoTable = ST6SubjectInfoTable
            activeClassTitle = "Investigating Science"
            activeSubjectSyllabusOutcomesArray = invSyllabusOutcomesArray
            activeIQorLIArray = IQArray12INV
            break;

        case '11INV' :
            // ActiveSubjectInfoTable = ST6SubjectInfoTable
            activeClassTitle = "Investigating Science"
            activeSubjectSyllabusOutcomesArray = invSyllabusOutcomesArray
            activeIQorLIArray = IQArray11INV
            break;

        case '10STY' : 
            // ActiveSubjectInfoTable = STEMSubjectInfoTable
            activeClassTitle = "Year 10 STEM (100-Hour)"
            activeSubjectSyllabusOutcomesArray = STEMSyllabusOutcomesArray
            activeIQorLIArray = LIArray10STY
            break;
        
        case '10PYY' : 
            // ActiveSubjectInfoTable = STEMSubjectInfoTable
            activeClassTitle = "Year 10 Psychology (100-Hour)"
            activeSubjectSyllabusOutcomesArray = PSYSyllabusOutcomesArray
            activeIQorLIArray = LIArray10PYY
            break;  

        case '9PYY' : 
            // ActiveSubjectInfoTable = STEMSubjectInfoTable
            activeClassTitle = "Year 9 Psychology (100-Hour)"
            activeSubjectSyllabusOutcomesArray = PSYSyllabusOutcomesArray
            activeIQorLIArray = LIArray9PYY
            break; 

            case '12MST' : 
            // ActiveSubjectInfoTable = STEMSubjectInfoTable
            activeClassTitle = "Year 9 Psychology (100-Hour)"
            activeSubjectSyllabusOutcomesArray = MSTSyllabusOutcomesArray
            activeIQorLIArray = LIArray12MST
            break; 

            case '11MST' : 
            // ActiveSubjectInfoTable = STEMSubjectInfoTable
            activeClassTitle = "Year 9 Psychology (100-Hour)"
            activeSubjectSyllabusOutcomesArray = MSTSyllabusOutcomesArray
            activeIQorLIArray = LIArray11MST
            break; 

            case '8MST' : 
            // ActiveSubjectInfoTable = STEMSubjectInfoTable
            activeClassTitle = "Year 9 Psychology (100-Hour)"
            activeSubjectSyllabusOutcomesArray = MSTSyllabusOutcomesArray
            activeIQorLIArray = LIArray8MST
            break; 

    };

    // function SciSubjectInfoTable(){
    //     const sciDIV = subjectInfoArray.filter(item => item.activeClass == activeClass).map(element => {
    //         return (
    //             element.topic.map(result => {
    //                 return (
    //                     <>
    //                         <div key={result.topicNumber} className="grid-container-subject-sci">
    //                             <div> <h3> Topic {result.topicNumber}: {result.topicName} </h3> </div>
    //                             <div> <b> Duration: </b> {result.topicDuration} </div> 
    //                             <div> <b> Topic Description</b> <br/> {result.topicDescription} </div> 

    //                             <div>
    //                                 <b> Topic Outcomes</b>
    //                                 <br/>
    //                                 {
    //                                     result.topicOutcomes.map(row => {
    //                                     let des = sciSyllabusOutcomesArray.find((poop) => poop.outcome == row)
    //                                     return (<div key = {des.outcome} >  <b> {des.outcome}: </b> {des.description} <br/> </div>)                                            
    //                                     })
    //                                 } 
    //                             </div>

    //                             <div>
    //                                 <b> Topic Content </b>
    //                                 <br/>
    //                             {
    //                                 result.topicContent.map(row => {
    //                                 let des = sciSyllabusOutcomesArray.find((poop) => poop.outcome == row)
    //                                 return (<div key = {des.outcome} > <b> {des.outcome}: </b> {des.description} <br/> </div>)                                                 
    //                                 })
    //                             } 
    //                             </div>
    //                         </div>
    //                     <br/>
    //                     </>
    //                 )
    //             })
    //         )
    //     });

    //         return (
    //         <> 
    //             <div className="pageHeading" > {activeClassTitle}: Subject Information </div> 
    //             {sciDIV}
    //         </>
    //     )  
    // };

    // function ST6SubjectInfoTable(){
    //     const ST6Div = subjectInfoArray.filter(item => item.activeClass == activeClass).map(element => {
    //         return (
    //             <div key={element.topic}>
    //             {element.topic.map(result => {
    //                 return (
    //                     <>
    //                     <div key={result.topicNumber} className="grid-container-subject-ST6">
    //                         <div> <h2> Topic {result.topicNumber}: {result.topicName} </h2> </div> {/* Child 1 */}
    //                         <div> <b> Duration: </b> Approximately {result.topicDuration}.  </div> {/* Child 2 */}
    //                         <div> <b> Outcomes </b> <br/> {                                  
    //                             result.topicOutcomes.map(row => {
    //                             let out = activeSubjectSyllabusOutcomesArray.find((poop) => poop.outcome == row)
    //                             return (<div key = {out.outcome}><b>{out.outcome}: &nbsp; </b> {out.description} </div> )                                            
    //                             })
    //                         } </div> {/* Child 3 */}
    //                         <div> <b> Topic Description </b> <br/> {result.topicDescription} </div> {/* Child 4 */}
    //                         <div> <b> Inquiry Questions </b> <br/> {
    //                             result.topicContent.map(row => {
    //                             let out = activeIQorLIArray.find((IQ) => IQ.fullID == row)
    //                             return (<div key = {out.outcome} > <b> {out.fullID}: &nbsp; </b> {out.LIString} <br/> </div>)                                                 
    //                             })
    //                         } </div> {/* Child 5 */}
    //                     </div>
    //                     <br/><br/><br/><br/>
    //                     </>
    //                 )
    //             })}
    //             <br/>
    //         </div>
    //         )
    //     });

    //         return (
    //         <> 
    //             <div className="pageHeading" > {activeClassTitle}: Subject Information </div> 
    //             <> {ST6Div} </>
    //         </>
    //     )  
    // };

    // function STEMSubjectInfoTable(){
    //     const STEMdiv = subjectInfoArray.filter(item => item.activeClass == activeClass).map(element => {
    //         return (
    //             element.topic.map(result => {
    //                 return (
    //                     <>
    //                     <div key={result.topicNumber} className="grid-container-subject-STEM">
    //                         <div> <h2> Project {result.topicNumber}: {result.topicName} </h2> </div> 
    //                         <div> <b> Duration: </b>{result.topicDuration} </div> 
    //                         <div> <b> Project Description</b> <br/> {result.topicDescription} </div> 
                            
    //                         <div> 
    //                             {
    //                                 result.topicOutcomes.map(row => {
    //                                 let des = STEMSyllabusOutcomesArray.find((poop) => poop.outcome == row)
    //                                 return (<div key = {des.outcome} > <b> {des.outcome}: </b> {des.description} <br/></div> )                                            
    //                                 })
    //                             } 
    //                         </div>

    //                         {/* <div> 
    //                             {
    //                                 result.topicContent.map(row => {
    //                                 let des = STEMSyllabusOutcomesArray.find((poop) => poop.outcome == row)
    //                                 return (<> {des.outcome}: {des.description} <br/><br/> </>)                                                 
    //                                 })
    //                             } 
    //                         </div> */}
    //                     </div>
    //                     <br/>

    //                     </>
    //                 )
    //             })
    //         )
    //     });

    // return (
    //         <> 
    //             <div className="divImage"> <Image src={STEM} width={900} height={100} alt="Heading for STEM Page" /> </div>
    //             <div className="pageHeading" > {activeClassTitle}: Subject Information </div> 
    //             {STEMdiv}

    //         </>
    //     )    
    // };

    function SubjDiv(){
        const END = subjectInfoArray.filter(item => item.activeClass == activeClass).map(element => {
            return (
                <div className="divSubj" key={element.topic}>
                {element.topic.map(result => {
                    return (
                        <>
                        <div className="divSubjTopic" key={result.topicNumber} >
                            <div className="pageHeading2"> Topic {result.topicNumber}: </div>
                            <div className="pageHeading3">  {result.topicName} </div>

                            <div className="divSubjTopicInfo">
                                
                            <div> <b> Duration: </b>  </div> 
                            <div> {result.topicDuration} approx.  </div> 
                            <br/>

                            <div> <b> Topic Description </b> </div>
                            <div> {result.topicDescription} </div>
                            <br/>

                            <div> <b> Outcomes </b> <br/> {                                  
                                result.topicOutcomes.map(row => {
                                let out = activeSubjectSyllabusOutcomesArray.find((poop) => poop.outcome == row)
                                return (<div key = {out.outcome}> <b>{out.outcome} </b> <br/> {out.description} </div> )                                            
                                })
                            } </div> {/* Child 3 */}
                            {/* <div> <b> Inquiry Questions </b> <br/> {
                                result.topicContent.map(row => {
                                let out = activeIQorLIArray.find((IQ) => IQ.fullID == row)
                                return (<div key = {out.outcome} > <b> {out.fullID}: &nbsp; </b> {out.LIString} <br/> </div>)                                                 
                                })
                            } </div> Child 5 */}
                            </div>
                        </div>
                        <br/><br/>
                        </>
                    )
                })}
                <br/>
            </div>
            )
        });

            return (
            <> 
                <div className="pageHeading" > Subject Information <br/> {activeClassTitle} </div> 
                <> {END} </>
                <br/>
            </>
        )  
    };

    return (
        <div className="divContent">
            <SubjDiv/>
            <br/>
        </div>
    )
};