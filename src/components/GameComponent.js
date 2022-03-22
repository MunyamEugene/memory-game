import React, { Component } from "react";
import _ from 'lodash';

import RawComponent from "./RawComponent";
import CellComponent from "./CellComponent";
import GameHint from "./StatusComponent";

class GameComponent extends Component{
    constructor(props){
        super(props)
        this.state={status:'ready',correct:[],wrong:[]};
        const {rawNum,colNum, activeCellsCount}=this.props;
        this.matrix=[];
        for(let r=0;r<rawNum;r++){
            let raw=[];
             for(let c=0;c<colNum;c++){
                 raw.push(`${r}${c}`)
                }
           this.matrix.push(raw);
            }
let flatMatrix = _.flatten(this.matrix);
this.activeCells = _.sampleSize(flatMatrix,activeCellsCount);
}


componentDidMount(){
    setTimeout(()=>{
        this.setState({...this.state,status:'memorize'});
        setTimeout(()=>{
            this.setState({...this.state,status:'recall'})
        },2000)
    },4000)
}

guessDataStore=({cellId,isCorrect})=>{
        let {correct,wrong,status}=this.state;
        if(isCorrect){
            correct.push(cellId);
            if(correct.length===this.activeCells.length){
                status='won';
                alert("You Win !")
            }
        }else{
            wrong.push(cellId);
            if(wrong.length>this.props.allowedWrong){
                status='lost';
                alert("Game Over")
            }
        }
       this.setState({correct,wrong, status});
    }

render(){

    return (
      <div className="game-bord">
          <GameHint {...this.state} activeCellsCount={this.props.activeCellsCount} />
          {this.matrix.map((rw,id)=><RawComponent key={id}>
              {rw.map((num)=><CellComponent key={num} guessDataStore={this.guessDataStore} {...this.state} activeCells={this.activeCells} id={num}/>)}
              </RawComponent>)}
          
      </div>
  )
    
}



}

GameComponent.defaultProps={
    allowedWrong:2
}

export default GameComponent;
