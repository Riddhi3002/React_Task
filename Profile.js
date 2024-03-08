// import React from "react";
// class Profile extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state={name: localStorage.getItem("name") }
//     }
//     componentDidMount() {
//         console.log(this.state, "Name")
//     }
   
//     render() { 
//         return (<div>
//             <h1>Hello!!{this.state.name}</h1>
//             <br/>   
//         </div>);
//     }
// }
 
// export default Profile;

//=======================================================//
import React from "react";
class profile extends React.Component {
    constructor(props) {
        super(props);
        // this.state={ name:localStorage.getItem("name") };
        this.state={ name:localStorage.getItem("name"),
        email:localStorage.getItem("email"),
        password:localStorage.getItem("password") };
    }
    // componentDidMount(e) {
    //          this.doSubmit(e);
    //           }
    doSubmit(e){
        e.preventDefault();
        // var myobject={
        //     name:this.state.name,
        //     email:this.state.txt11,
        //     password:this.state.txt12
        // }
        // localStorage.setItem("UserData",JSON.stringify(myobject));
        // this.setState({ans: "Data Saved!!"});]
        
        let user_record=new Array(10);
        user_record=JSON.parse(localStorage.getItem("UserData"))?JSON.parse(localStorage.getItem("UserData")):[]
        user_record.push({
            "name":this.state.name,
            "email":this.state.txt11,
            "password":this.state.txt12,
        })
        localStorage.setItem("UserData",JSON.stringify(user_record));
           this.setState({ans: "Data Saved!!"});
    }
    //Moving data from localstorage to profile page 
    removeData(){
        localStorage.removeItem("email");
        localStorage.removeItem("password");
        this.setState({name:this.state.name})
        this.setState({email:""});
        this.setState({password:""});
        this.setState({ans:"Data Remove!!"})
        }
    render() { 
        return ( 
            <div>
        <form onSubmit={this.doSubmit.bind(this)}>
        <h1 className="heading">Profile Page and retrive data from LocalStorage</h1>
        <h2 style={{color:'brown'}}><center>Hello,{this.state.name}!!</center></h2>
             <input type="email"name="txt11" placeholder="Enter new email" onChange={(e)=>this.setState({txt11:e.target.value})}/>
             <input type="password"name="txt12" placeholder="Enter new Password" onChange={(e)=>this.setState({txt12:e.target.value})}/>
             <br/>
             <input type="submit"/>
             <br/>
             <input type="button" value="Update Data" onClick={this.removeData.bind(this)}/><br/>
             <h3>Get Email and Password</h3>
            <p>Your Email:{this.state.email} and password :{this.state.password} <br/></p>
                      {this.state.ans}
             </form> 
             <br/>   
         </div>);
        
    }
}
export default profile;