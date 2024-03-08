import React from "react";
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state={ }
    }
    //push data in array
    doSubmit(e){
        e.preventDefault();
        var email=this.state.txt1;
        var password=this.state.txt2;
        let user_record=new Array(10);
        user_record=JSON.parse(localStorage.getItem("UserData"))?JSON.parse(localStorage.getItem("UserData")):[]
        console.log("Record", user_record)
        //check email and password are correct or not
        if(user_record.some((v)=>{
            return v.email===email && v.password===password
        })){
            alert("login sucessfull");
            let current_user=user_record.filter((v)=>{
                return v.email===email && v.password===password
            })[0]
            localStorage.setItem("name",current_user.name)
            localStorage.setItem("email",current_user.email)
            localStorage.setItem("password",current_user.password)
            // // window.location.href="./Profile.jsx";
        }
        else{
            alert("Login Fail")
        }
    }
    render() { 
        return ( 
        <div>
            <h1 className="heading">LoginPage and store the data into LocalStorage</h1>
            <form onSubmit={this.doSubmit.bind(this)}>
            Email:<input type="email" name="txt2" onChange={(e)=>this.setState({txt1:e.target.value})}/>
            Password:<input type="password" name="txt3" onChange={(e)=>this.setState({txt2:e.target.value})}/>
            <input type="submit" />
            </form>
        </div> );
    }
}
 
export default Login;
