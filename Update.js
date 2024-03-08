import React from "react";
class Update extends React.Component {
    constructor(props) {
        super(props);
        this.state={ }
    }
    //Store the data into localStorage
    Submit(e){
        e.preventDefault();
        let password_record=new Array(20);
        password_record=JSON.parse(localStorage.getItem("NewData"))?JSON.parse(localStorage.getItem("NewData")):[]
       let oldpassword=this.state.txt1;
       let newpassword=this.state.txt2;
       let confrimPassword=this.state.txt3;
       //push the data into array
            password_record.push({
        "Old_password":oldpassword,
        "New_password":newpassword,
        "Confrim_Password":confrimPassword,
           })
           //Check newpassword and confrimPassword is correct or not.
            if(newpassword===confrimPassword)
           {
                alert("data successfully saved!!")
                localStorage.setItem("NewData",JSON.stringify(password_record));
            
            }
            else{
                alert("please enter data carefully!!");
            }
            
        }
   
    render() { 
        return ( <div>
        <form onSubmit={this.Submit.bind(this)}>
        <h1 className="heading">Change Password and store the data in Local Storage</h1>
           Old Password:<input type="password" name="txt1" placeholder="Enter your password"  onChange={(e)=>this.setState({txt1:e.target.value})}/>
           New Password:<input type="password" name="txt2" placeholder="Enter your password"  onChange={(e)=>this.setState({txt2:e.target.value})}/>
           Confrim Password:<input type="password" name="txt3" placeholder="Enter your password"  onChange={(e)=>this.setState({txt3:e.target.value})}/>
            <input type="submit"/>
            </form> 
        </div> );
    }
}

 
export default Update;