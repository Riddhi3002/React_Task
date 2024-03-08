import React from "react";

function Calc() {
    const[No1,setNo1]=React.useState(0);
    const[No2,setNo2]=React.useState(0);
    const[Ans,setAns]=React.useState("");
    const Sum =()=>{
        var sum= parseInt(No1)+ parseInt(No2);
        setAns("sum is "+sum)
    }
    const Sub =()=>{
        var sub= parseInt(No1)- parseInt(No2);
        setAns("sub is "+sub)
    }
    const Mul =()=>{
        var mul= parseInt(No1)* parseInt(No2);
        setAns("Mul is "+mul)
    }
    const Div =()=>{
        var div= parseInt(No1)/parseInt(No2);
        setAns("Division is "+div)
    }
    return ( <div>
    <h1 className="heading">Example of UseState</h1>
    <h1>{Ans}</h1><br/>
        <input type="text" placeholder="Enter No1" onChange={(e)=>setNo1(e.target.value)}/>
        <input type="text" placeholder="Enter No2" onChange={(e)=>setNo2(e.target.value)}/>
        <br/>
        <br/>
        <input type="button" onClick={Sum} value="Increment"/> {/* increment */}
        <input type="button" onClick={Sub} value="Decrement"/>{/* Decrement */}
        <input type="button" onClick={Mul} value="Multiplication"/>{/* Multiplication */}
        <input type="button" onClick={Div} value="Division"/>{/* Division */}

    </div> );
}

export default Calc;



