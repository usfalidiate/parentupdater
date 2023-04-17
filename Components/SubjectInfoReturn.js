import {     
    subjectInfoArray, 
    SCISyllabusOutcomesArray, 
    //bio
    CHESyllabusOutcomesArray, 
    //ees
    INVSyllabusOutcomesArray, 
    PHYSyllabusOutcomesArray, 
    STEMSyllabusOutcomesArray, 
    PSYSyllabusOutcomesArray, 
    //bh
    MSTSyllabusOutcomesArray,

} from "./SubjectInfoArrays";

import {
    LIArray10SCI, 
    LIArray9SI,
    LIArray8SI,
    LIArray7SI,
    IQArray12BIO,
    IQArray11BIO,
    IQArray12CHE, 
    IQArray11CHE,
    IQArray12EES,
    IQArray11EES,
    IQArray12INV, 
    IQArray11INV, 
    IQArray12PHY, 
    IQArray11PHY, 
    LIArray10STY, 
    LIArray10STX, 
    LIArray9STY, 
    LIArraySTX, 
    LIArray10PYY, 
    LIArray9PYY, 
    LIArray10BHX,
    LIArray10BHY,
    LIArray12MST,
    LIArray11MST,
    LIArray8MST,

} from "./LIArrays";

// import Image from 'next/image'
// import STEM from '../assets/STEM.jpg'

export default function SubjectInfoReturn({activeClass}) {

    let activeClassTitle;
    let activeSubjectSyllabusOutcomesArray;
    let activeIQorLIArray;
    switch (activeClass) {
        case '10SCIASP' : 
            activeClassTitle = 'Year 10 Science (ASP)'
            activeSubjectSyllabusOutcomesArray = SCISyllabusOutcomesArray
            activeIQorLIArray = LIArray10SCI
            break;

        //10SCI
        //9SCI
        //8SCI
        //7SCI

        case '10STY' : 
            activeClassTitle = "Year 10 STEM (100-Hour)"
            activeSubjectSyllabusOutcomesArray = STEMSyllabusOutcomesArray
            activeIQorLIArray = LIArray10STY
            break;
 
            
        //10STX
        //9STY
        //9STX
        //8STM      
        
        
        //12BIO
        //11BIO

        case '12CHE' : 
            activeClassTitle = "Chemistry"
            activeSubjectSyllabusOutcomesArray = CHESyllabusOutcomesArray
            activeIQorLIArray = IQArray12CHE
            break;

        case '11CHE' :
            activeClassTitle = "Chemistry"
            activeSubjectSyllabusOutcomesArray = CHESyllabusOutcomesArray
            activeIQorLIArray = IQArray11CHE
            break;

        //12EES
        //11EES   

        case '12INV' : 
            activeClassTitle = "Investigating Science"
            activeSubjectSyllabusOutcomesArray = INVSyllabusOutcomesArray
            activeIQorLIArray = IQArray12INV
            break;

        case '11INV' :
            activeClassTitle = "Investigating Science"
            activeSubjectSyllabusOutcomesArray = INVSyllabusOutcomesArray
            activeIQorLIArray = IQArray11INV
            break;

        case '12PHY' : 
            activeClassTitle = "Physics"
            activeSubjectSyllabusOutcomesArray = PHYSyllabusOutcomesArray
            activeIQorLIArray = IQArray12PHY
            break;

        case '11PHY' :
            activeClassTitle = "Physics"
            activeSubjectSyllabusOutcomesArray = PHYSyllabusOutcomesArray
            activeIQorLIArray = IQArray11PHY
            break;


        
        //10PYX
        case '10PYY' : 
            activeClassTitle = "Year 10 Psychology (100-Hour)"
            activeSubjectSyllabusOutcomesArray = PSYSyllabusOutcomesArray
            activeIQorLIArray = LIArray10PYY
            break;  

        //9PYX

        case '9PYY' : 
            activeClassTitle = "Year 9 Psychology (100-Hour)"
            activeSubjectSyllabusOutcomesArray = PSYSyllabusOutcomesArray
            activeIQorLIArray = LIArray9PYY
            break; 


        //10BHX
        //10BHY

        case '12MST' : 
            activeClassTitle = "Year 12 Marine Studies"
            activeSubjectSyllabusOutcomesArray = MSTSyllabusOutcomesArray
            activeIQorLIArray = LIArray12MST
            break; 

        case '11MST' : 
            activeClassTitle = "Year 11 Marine Studies"
            activeSubjectSyllabusOutcomesArray = MSTSyllabusOutcomesArray
            activeIQorLIArray = LIArray11MST
            break; 

        case '8MST' : 
            activeClassTitle = "Year 8 Marine Studies"
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