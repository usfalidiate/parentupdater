import { sciAssArray, STEMAssArray, invAssArray, phyAssArray } from "./AssArrays";
import { subjectInfoArray, sciSyllabusOutcomesArray, phySyllabusOutcomesArray, invSyllabusOutcomesArray, STEMSyllabusOutcomesArray } from "./SubjectInfoArrays";


export default function AssReturn({activeClass} ) {

    let ActiveAssTable;
    let ActiveAssDiv;
    let activeClassTitle;
    let activeSyllabusOutcomeArray;
    let activeAssArray;
    switch (activeClass) {
        case '10SCIASP' : 
        // ActiveAssTable = SciAssTable
        activeClassTitle = 'Year 10 Science (ASP)'
        // ActiveAssDiv = SciAssDiv
        activeAssArray = sciAssArray
        activeSyllabusOutcomeArray = sciSyllabusOutcomesArray
        break;

        case '12PHY' : case '11PHY' : 
        // ActiveAssTable = PhyAssTable
        activeClassTitle = "Physics"
        // ActiveAssDiv = ST6AssDiv
        activeSyllabusOutcomeArray = phySyllabusOutcomesArray
        activeAssArray = phyAssArray
        break;

        case '12INV' : case '11INV' :
        // ActiveAssTable = InvAssTable
        activeClassTitle = "Investigating Science"
        // ActiveAssDiv = ST6AssDiv
        activeSyllabusOutcomeArray = invSyllabusOutcomesArray
        activeAssArray = invAssArray
        break;

        case '10STY' : 
        // ActiveAssTable = STEMAssTable
        activeClassTitle = "Year 10 STEM (100-Hour)"
        // ActiveAssDiv = STEMAssDiv
        activeAssArray = STEMAssArray
        activeSyllabusOutcomeArray = STEMSyllabusOutcomesArray

        break;
    };

    

    // DIVS
    // function SciAssDiv() {
    //     return (
    //         <>
    //             {activeAssArray.filter(item => item.class == activeClass ).map(element => {
    //             return (
    //                 element.tasks.map(result => {
    //                     return (
    //                         <> 
    //                         <div key={result.taskNumber} className='grid-container-ass-STEM'>
    //                             <div> <h2> Task {result.taskNumber}: {result.taskName} </h2> </div>
    //                             <div> <b> Due Date: </b> {result.date} </div>
    //                             <div> <b> Weighting: </b> {result.taskWeighting} </div>
    //                             <div> <h3> Task Description </h3> {result.taskDescription} </div>

    //                             <div> <h3> Task Outcomes </h3> 
    //                                 {result.kuOutcomes.map(out => {
    //                                     let des = activeSyllabusOutcomeArray.find((item) => item.outcome == out)
    //                                     return (
    //                                         <div key = {des.outcome}>
    //                                             <b> {out}: </b> {des.description} 
    //                                             <br/> 
    //                                         </div>
    //                                     )
    //                                 })}
    //                                 {result.skillsOutcomes.map(out => {
    //                                     let des = activeSyllabusOutcomeArray.find((item) => item.outcome == out)
    //                                     return (
    //                                         <div key = {des.outcome}>
    //                                             <b> {out}: </b> {des.description} 
    //                                             <br/> 
    //                                         </div>
    //                                     )
    //                                 })}
    //                             </div>

    //                             {/* <div> <h3> Success Criteria </h3> </div> */}
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

    // function ST6AssDiv() {
        
    //     return (
    //         <>
    //             {activeAssArray.filter(item => item.class == activeClass ).map(element => {
    //             return (
    //                 element.tasks.map(result => {
    //                     return (
    //                         <> 
    //                         <div key={result.taskNumber} className='grid-container-ass-ST6'>
    //                             <div> <h2> Assessment Task {result.taskNumber}: {result.taskName} </h2> </div>
    //                             <div> <b> Due Date: </b> {result.date} </div>
    //                             <div> <b> Weighting: </b> {result.taskWeighting} </div>
    //                             <div> <h3> Task Description </h3> {result.taskDescription} </div>

    //                             <div> <h3> Task Outcomes </h3> 
    //                                 {result.kuOutcomes.map(out => {
    //                                     let des = activeSyllabusOutcomeArray.find((item) => item.outcome == out)
    //                                     return (
    //                                         <div key = {des.outcome}>
    //                                             <b> {out}: </b> {des.description} 
    //                                             <br/> 
    //                                         </div>
    //                                     )
    //                                 })}

    //                                 {result.skillsOutcomes.map(out => {
    //                                     let des = activeSyllabusOutcomeArray.find((item) => item.outcome == out)
    //                                     return (
    //                                         <>
    //                                             <b> {out}: </b> {des.description} 
    //                                             <br/> 
    //                                         </>
    //                                     )
    //                                 })}         

    //                             </div>

    //                             {/* <div> <h3> Success Criteria </h3> </div> */}
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

    // function STEMAssDiv() {
    //     return (
    //         <>
    //             {activeAssArray.filter(item => item.class == activeClass ).map(element => {
    //             return (
    //                 element.tasks.map(result => {
    //                     return (
    //                         <> 
    //                         <div key={result.taskNumber} className='grid-container-ass-STEM'>
    //                             <div> <h2> Assessment Task {result.taskNumber}: {result.taskName} </h2> </div>
    //                             <div> <b> Due Date: </b> {result.date} </div>
    //                             <div> <b> Weighting: </b> {result.taskWeighting} </div>
    //                             <div> <h3> Task Description </h3> {result.taskDescription} </div>
    //                             <div> <h3> Success Criteria </h3> <b> A strong submission will successfully achieve the following criteria: </b> <br/> {
    //                                 result.successCriteria.map(item => {
    //                                     return (
    //                                         <div key = {item}>
    //                                         {item} <br/>
    //                                         </div>
    //                                     )
    //                                 })
    //                             }
    //                             </div>
    //                             <div> <h3> Task Outcomes </h3> 
    //                                 {result.taskOutcomes.map(out => {
    //                                     let des = activeSyllabusOutcomeArray.find((item) => item.outcome == out)
    //                                     return (
    //                                         <div key = {des.outcome}>
    //                                             <b> {out}: </b> {des.description} 
    //                                             <br/> 
    //                                         </div>
    //                                     )
    //                                 })}
    //                             </div>
    //                         </div>
    //                         <br/><br/><br/>
    //                         </>
    //                         )
    //                 })
    //             )
    //         })}
    //         </>
    //     )
    // };

    function AssDiv() {
        
        return (
            <>
                {activeAssArray.filter(item => item.class == activeClass ).map(element => {
                return (
                    element.tasks.map(result => {
                        return (
                            <> 
                            <div key={result.taskNumber} className='divAss'>
                                <div className="pageHeading2"> Assessment Task {result.taskNumber}:  </div>
                                <div className="pageHeading3"> {result.taskName} </div>
                                <div className="divAssInfo">
                                    <div> <b> Due Date: </b> {result.date} </div>
                                    <div> <b> Weighting: </b> {result.taskWeighting} </div>
                                    <div> <h3> Task Description </h3> {result.taskDescription} </div>

                                    <div> <h3> Task Outcomes </h3> 
                                        {result.taskOutcomes.map(out => {
                                            let des = activeSyllabusOutcomeArray.find((item) => item.outcome == out)
                                            return (
                                                <div key = {des.outcome}>
                                                    <b> {out}: </b> {des.description} 
                                                    <br/> 
                                                </div>
                                            )
                                        })}
                                        <div> <h3> Success Criteria </h3> <b> A strong submission will successfully achieve the following criteria: </b> <br/> 
                                            {
                                                result.successCriteria.map(item => {
                                                    return (
                                                        <div key = {item}>
                                                        {item} <br/>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <br/><br/><br/>
                            </>
                        )
                    })
                )
            })}
            </>
        )
    };

    return (
        <div className="divContent">
            <div className="pageHeading" >{activeClassTitle} ({activeClass})</div>
            <AssDiv />
        </div>
    )
}