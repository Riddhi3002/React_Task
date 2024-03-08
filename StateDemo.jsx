// import React from "react";

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {count:0};
//   }
  
// setData(){   
// localStorage.setItem("counter_Data",this.state.count);
// }
  
//   render() { 
//     return ( <>
//     {this.state.count}<br/>
//       <button onClick={()=>this.setState({count:this.state.count+1})} name="incVal">Increment</button>
//       <button onClick={()=>this.setState({count:this.state.count-1})} name="decVal">Decrement</button>
//      <button onClick={this.setData.bind(this)}>Get Data</button>
//      {this.state.ans}
     
//     </> );
//   }
// }
 
// export default App;

//=================================================//
import React from "react";
class StateDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count:0};
  }
  componentDidMount(){
   const data = localStorage.getItem("counter_Data")
   this.setState({count:data})
  }
    Increment(){   
      if(this.state.count<10){
        const updatedCount = Number(this.state.count) + 1;
        this.setState({count:updatedCount })
        localStorage.setItem("counter_Data",updatedCount);
      }
      else{
        alert("Can't Increment")
     }
}
Decrement(){   
  if(this.state.count>0){
    const updatedCount = Number(this.state.count) - 1
    this.setState({count:updatedCount})
    localStorage.setItem("counter_Data",updatedCount);
  }
  else{
    alert("Can't Decrement")
  }
}
  render() { 
    return ( <div className="container">
   <h1 className="heading">Counter Program using State and Display same value after refresh page</h1>
    <h2 className="count1" style={{color:"blue"}}><center>{this.state.count}</center></h2>
    <br/>
      <button onClick={this.Increment.bind(this)} name="incVal">Increment</button>
      <button onClick={this.Decrement.bind(this)} name="decVal">Decrement</button> 
    </div> );
  }
}
export default StateDemo;

