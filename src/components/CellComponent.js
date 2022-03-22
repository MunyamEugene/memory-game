import React from "react";
import './style.css';
const CellComponent = ({id,activeCells,status,guessDataStore,correct,wrong})=>{

    const active=()=> activeCells.indexOf(id)>=0;
    const guessState =()=>{
        if(correct.indexOf(id)>=0){
            return true;
        }else if(wrong.indexOf(id)>=0){
            return false;
        }
    }

    let className="cell";
    if(status==="memorize" && active()){
        className+="active";
    }else{
         className="guess-"+ guessState(); 
    }
    const handleGuess=()=>{
        if(guessState()===undefined && status==='recall'){
            guessDataStore({
                cellId:id,
                isCorrect:active()
            });
        }
    }

    return(
        <div className={className} onClick={handleGuess}>
        </div>
    )
}

export default CellComponent;
