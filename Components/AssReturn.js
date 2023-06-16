import { 
    SCIAssArray, 
    STEMAssArray, 
    INVAssArray, 
    PHYAssArray, 
    PSYAssArray, 
    CHEAssArray, 
    MSTAssArray, 
} from "./AssArrays";

import { 
    subjectInfoArray, 
    SCISyllabusOutcomesArray, 
    PHYSyllabusOutcomesArray, 
    INVSyllabusOutcomesArray, 
    STEMSyllabusOutcomesArray, 
    PSYSyllabusOutcomesArray, 
    CHESyllabusOutcomesArray, 
    MSTSyllabusOutcomesArray, 
} from "./SubjectInfoArrays";


export default function AssReturn({activeClass} ) {


    let activeClassTitle;
    let activeSyllabusOutcomeArray;
    let activeAssArray;
    switch (activeClass) {
        case '10SCIASP' : case '10SCI' : case '9SCI'  : case '8SCI' : case '7SCI' :
        activeClassTitle = 'Science'
        activeAssArray = SCIAssArray
        activeSyllabusOutcomeArray = SCISyllabusOutcomesArray
        break;

        case '10STY' : case '10STX' : case '9STY' : case '9STX' :
        activeClassTitle = "STEM"
        activeAssArray = STEMAssArray
        activeSyllabusOutcomeArray = STEMSyllabusOutcomesArray
        break;

        //bio
        case '12CHE' : case '11CHE' :
        activeClassTitle = "Chemistry"
        activeSyllabusOutcomeArray = CHESyllabusOutcomesArray
        activeAssArray = CHEAssArray
        break;  
        
        //ees

        case '12INV' : case '11INV' :
        activeClassTitle = "Investigating Science"
        activeSyllabusOutcomeArray = INVSyllabusOutcomesArray
        activeAssArray = INVAssArray
        break;  

        case '12PHY' : case '11PHY' : 
        activeClassTitle = "Physics"
        activeSyllabusOutcomeArray = PHYSyllabusOutcomesArray
        activeAssArray = PHYAssArray
        break;

        case '10PYY' : case '9PYY' :
        activeClassTitle = "Psychology"
        activeAssArray = PSYAssArray
        activeSyllabusOutcomeArray = PSYSyllabusOutcomesArray
        break;

        //bh

        case '12MST' : case '11MST' : case '8MST' :
        activeClassTitle = "Marine Studies"
        activeAssArray = MSTAssArray
        activeSyllabusOutcomeArray = MSTSyllabusOutcomesArray
        break;
    };

    
    function AssDiv() {
        
        return (
            <>
                {activeAssArray.filter(item => item.class == activeClass ).map(element => {
                return (
                    element.tasks.map(result => {
                        return (
                            <> 
                            <div key={result.taskNumber} className="divAssTaskBox">
                                <div className="divAssTaskHeading"> Task {result.taskNumber}: <br/> {result.taskName} </div>


                                <div className="divAssTaskRow"> <div className="divAssTaskSubHeading"> Due Date </div> <div className="divAssTaskSubInfo"> {result.date} </div> </div> 
                                <div className="divAssTaskRow"> <div className="divAssTaskSubHeading"> Weighting </div> <div className="divAssTaskSubInfo"> {result.taskWeighting} </div> </div> 
                                <div className="divAssTaskRow"> <div className="divAssTaskSubHeadingVert"> Task Description </div> <div className="divAssTaskSubInfoVert"> {result.taskDescription} </div> </div>
                                
                                                                
                                <div className="divAssTaskRow" > 
                                    <div className="divAssTaskSubHeadingVert" > Task Outcomes </div>  
                                    {result.taskOutcomes.map(out => {
                                        let des = activeSyllabusOutcomeArray.find((item) => item.outcome == out)
                                        return (
                                            <div key = {des.outcome} className="divAssTaskSubInfoVert" >
                                                <div className="divAssOutcomeBox"> <em>{out}:</em>  {des.description} </div> 
                                            </div>
                                        )
                                    })}
                                
                                </div> 
                                <div className="divAssTaskRow">
                                    <div className="divAssTaskSubHeadingVert"> Specific Task Criteria </div> 
                                        {
                                            result.successCriteria.map(item => {
                                                return (
                                                    <div className="divAssTaskSubInfoVert" key = {item}>
                                                        <div className="divAssSuccessCriteriaBox"> {item} </div>
                                                    </div>
                                                )
                                            })
                                        }
                                </div>
                            </div>

                            <br/>
                            </>
                        )
                    })
                )
            })}
            </>
        )
    };

    // function AssDiv() {
        
    //     return (
    //         <>
    //             {activeAssArray.filter(item => item.class == activeClass ).map(element => {
    //             return (
    //                 element.tasks.map(result => {
    //                     return (
    //                         <> 
    //                         <div key={result.taskNumber} className='divAss'>
    //                             <div className="divAssInfo">
    //                             <div className="assHeading"> Task {result.taskNumber}: {result.taskName} </div>

    //                                 <div className="divAssDueDate"> <div className="divAssBoxHeading"> Due Date </div> <div className="divAssBoxText"> {result.date} </div> </div>
    //                                 <div className="divAssWeighting"> <div className="divAssBoxHeading"> Weighting </div> <div className="divAssBoxText"> {result.taskWeighting} </div> </div>
    //                                 <div className="divAssDescription">  <div className="divAssBoxHeading"> Task Description </div> <div className="divAssBoxText"> {result.taskDescription} </div> </div>
    //                                 <div className="divAssSuccessCriteria"> <div className="divAssBoxHeading"> Specific Task Criteria </div> 
    //                                     {
    //                                         result.successCriteria.map(item => {
    //                                             return (
    //                                                 <div key = {item}>
    //                                                     <div className="divAssBoxText"> {item}  </div>
    //                                                 </div>
    //                                             )
    //                                         })
    //                                     }
    //                                 </div>
                                    
    //                                 <div className="divAssOutcomes"> <div className="divAssBoxHeading"> Task Outcomes </div>  
    //                                     {result.taskOutcomes.map(out => {
    //                                         let des = activeSyllabusOutcomeArray.find((item) => item.outcome == out)
    //                                         return (
    //                                             <div key = {des.outcome} className="divAssHeadingAndText">
    //                                                 <div className="divAssBoxSubHeading"> {out}: </div> <div className="divAssBoxText"> {des.description} </div> 
    //                                             </div>
    //                                         )
    //                                     })}
    //                                 </div>
    //                             </div>
    //                         </div>
    //                         <br/><br/><br/>
    //                         </>
    //                     )
    //                 })
    //             )
    //         })}
    //         </>
    //     )
    // };

    return (
        <div className="divContent">
            <div className="AssHeadBG"> 
                <div className="divAssPageHeading" > Assessments </div> 
                <div className="divAssPageSubHeading" > ({activeClass}) </div> 
            </div>

            {/* <div className="divAssJumpToHeader"> Jump To Section </div> */}

            <AssDiv />
            
        </div>
    )
}