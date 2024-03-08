import React from "react";
function Counter() {
    const[Ans,setAns]=React.useState("");
    const[Count,setCount]=React.useState(0);
    const Increment=()=>{
        if(Count>=10){
            setAns("SORRY!U CAN'T INCREASE VALUE MORE THAN 10");
        }
        else{
            setCount(Count+1);
        }
    }
    const Decrement=()=>{
        if(Count<=0){
            setAns("SORRY!!U CAN'T DECRESE VALUE LESS THAN 0");
        }
        else{
            setCount(Count-1);
        }
    }
    return ( <div>
       <h1 className="heading">Couter Task using Hooks</h1>
        <h2 className="count"><center>{Count}</center></h2>
       <input type="button"  value="Increment" onClick={Increment}/>
       <input type="button"  value="Decrement" onClick={Decrement}/>
        <input type="button" value="SetZero" onClick={()=>setCount(0)}/><br/>
       <h2>{Ans}</h2> 

    </div> );
}

export default Counter;