import {     
    subjectInfoArray, 
    SCISyllabusOutcomesArray, 
    BIOSyllabusOutcomesArray,
    CHESyllabusOutcomesArray, 
    EESSyllabusOutcomesArray,
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
        

        case '12BIO' : 
            activeClassTitle = "Biology"
            activeSubjectSyllabusOutcomesArray = BIOSyllabusOutcomesArray
            activeIQorLIArray = IQArray12BIO
            break;

        case '11BIO' :
            activeClassTitle = "Biology"
            activeSubjectSyllabusOutcomesArray = BIOSyllabusOutcomesArray
            activeIQorLIArray = IQArray11BIO
            break;        

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
        
        case '12EES' : 
            activeClassTitle = "Earth and Environmental Science"
            activeSubjectSyllabusOutcomesArray = EESSyllabusOutcomesArray
            activeIQorLIArray = IQArray12EES
            break;

        case '11EES' :
            activeClassTitle = "Earth and Environmental Science"
            activeSubjectSyllabusOutcomesArray = EESSyllabusOutcomesArray
            activeIQorLIArray = IQArray11EES
            break;            

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


    function SubjDiv(){
        const END = subjectInfoArray.filter(item => item.activeClass == activeClass).map(element => {
            return (
                <div className="divSubj" key={element.topic}>
                {element.topic.map(result => {
                    return (
                        <>
                        <div className="divSubjTopic" key={result.topicNumber} >

                            <div className="divSubjTopicInfo">
                            <div className="subjHeading"> Topic {result.topicNumber}: <br/> {result.topicName} </div>

                            <div className="divSubjDuration">  <div className="divSubjBoxHeading"> Duration </div> {result.topicDuration} approx. </div> 
                            

                            <div className="divSubjTopicDescription"> <div className="divSubjBoxHeading"> Topic Description </div> <div className="divSubjBoxText"> {result.topicDescription}</div> </div>
                            

                            <div className="divSubjTopicOutcomes"> <div className="divSubjBoxHeading"> Outcomes </div> {                                  
                                result.topicOutcomes.map(row => {
                                    let out = activeSubjectSyllabusOutcomesArray.find((poop) => poop.outcome == row)
                                    return (
                                        <div key = {out.outcome}> 
                                            <div className="divSubjBoxHeading"> {out.outcome} </div> <div className="divSubjBoxText">{out.description} </div> 
                                            <br/>
                                        </div> 
                                    )                                            
                                })
                            } </div> 
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
                <div className="SubjHeadBG"> <div className="pageHeadingSubj" > Subject Information </div> <div className="subjSubHeading" > ({activeClass})  </div> </div>
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