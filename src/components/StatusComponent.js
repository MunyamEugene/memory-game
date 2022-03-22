import React from "react";
import './style.css';
const GameHint =({status,correct,hints,activeCellsCount})=>{

const remainingCount=()=>{
    if(!status==='recall') return null;
    return (
        <div className="remain">
         <u>({activeCellsCount-correct.length}) :REMAINING CHOISE</u>
        </div>
    )
}

return(<div className="display">
<div className="status"><u>STATUS: ({hints[status]})</u></div>
{remainingCount()}
</div>)
}

GameHint.defaultProps={
    hints:{
        ready:'ready',
        memorize:'memorize',
        recall:'recall',
        lost:'Game Over',
        won:'You Win'
    }
}

export default GameHint;

