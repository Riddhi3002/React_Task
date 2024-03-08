import React from "react";
// import "./SignUp.css"

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state={ }
        
    }
    doSubmit(e){
        e.preventDefault();
        let user_record=new Array(10);
        user_record=JSON.parse(localStorage.getItem("UserData"))?JSON.parse(localStorage.getItem("UserData")):[]
            user_record.push({
                "name":this.state.txt1,
                "email":this.state.txt2,
                "password":this.state.txt3,
            })
            localStorage.setItem("UserData",JSON.stringify(user_record));
        
        // var data={
        //     Name:this.state.txt1,
        //     Email:this.state.txt2,
        //     Password:this.state.txt3
        // }
        // localStorage.setItem("userData",JSON.stringify(data));
        // this.setState({text:"Data Save!!"})
    }
    render() { 
        return ( <div>
       <h1 className="heading">SignUp Page and Store the data into LocalStorage</h1>
        <form onSubmit={this.doSubmit.bind(this)}>
            Name:<input type="text" name="txt1" placeholder="Enter your name"  onChange={(e)=>this.setState({txt1:e.target.value})}/>
            Email:<input type="email" name="txt2" placeholder="Enter your emailId"  onChange={(e)=>this.setState({txt2:e.target.value})}/>
            Password:<input type="password" name="txt3" placeholder="Enter your password"  onChange={(e)=>this.setState({txt3:e.target.value})}/>
            <input type="submit"/>
            </form>
        </div> );
    }
}
 
export default SignUp;