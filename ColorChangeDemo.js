import React from "react";
import "./App.css"

class ColorChangeDemo extends React.Component {
    constructor(props) {
        super(props);
        this.state={ };
    }
    //storing data into localstorage
    getData(){
        if(localStorage.getItem('color')){
            var newColor=localStorage.getItem('color');
            var color=JSON.parse(newColor);
            this.setState({newCol:color.col1+" "+color.col2+" "+color.col3});
        }
        else{
            this.setState({txt:"Data Not Present!!"});
        }
    }
    //display data and retrive data from localstorage
    setData(e){
        e.preventDefault();
     var myColor={
      col1:this.state.txt1,
      col2:this.state.txt2,
      col3:this.state.txt3
    }
    localStorage.setItem("color",JSON.stringify(myColor));
    this.setState({txt: "Data save!!"})
    }
  color1(){
    document.myForm.style.backgroundColor = this.state.txt1
  }
  color2(){
    document.myForm.style.backgroundColor = this.state.txt2
  }
  color3(){
    document.myForm.style.backgroundColor = this.state.txt3
  }
    render() { 
        return (<div className="container">
        <form onSubmit={this.setData.bind(this)} name="myForm">
        <h1 className="heading">Task2: ColorChange Using State and store data in LocalStorage</h1>
        {/* Taking input from user */}
            <input type="text" placeholder="Enter color1" name="txt1" onChange={(e)=>this.setState({txt1:e.target.value})}/>
            <br/>
            <input type="text" placeholder="Enter color2" name="txt2"  onChange={(e)=>this.setState({txt2:e.target.value})}/>
            <br/>
            <input type="text" placeholder="Enter color3" name="txt3"  onChange={(e)=>this.setState({txt3:e.target.value})}/>
            <br/>
            <input type="submit"/>
            <input type="button" id="get" value="Get" onClick={this.getData.bind(this)}/>
            <br/><br/>
            {/* Take three button and takee the value from user */}
            <input type="button" value={this.state.txt1} onClick={this.color1.bind(this)}/>
            <input type="button" value={this.state.txt2}  onClick={this.color2.bind(this)}/>
            <input type="button" value={this.state.txt3}  onClick={this.color3.bind(this)}/>
            <br/>
            <br/>
            {this.state.txt}
            <br/>
            <br/>
            {this.state.newCol}
            </form>
            </div>  );
          
    }
}
 
export default ColorChangeDemo;