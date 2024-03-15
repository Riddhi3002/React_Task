 //Store And Delete in LocalStorage

 import React from 'react';
//  import "./UserRecord.css";
 // import ReactSearchBox from "react-search-box";
 class ValidLs extends React.Component {
     constructor(props) {
         super(props);
         this.state = {Fname:"",Lname:"",email:"",dob:"",password:"",Cpassword:"",searchInput:"",myerror:{} ,myarry:[],newTask: ' '
    }
     }
     doValidation(){
         // e.preventDefault();
         var er={}
         var isValid=true;
         const {Fname,Lname,email,dob,password,Cpassword}=this.state;
         const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
     
         //check all inputs
         if(!Fname){
             isValid=false;
             er.Fname="Enter First Name";
             this.setState({Fname:" "})
         }
         if(!Lname){
             isValid=false;
             er.Lname="Enter Last Name";
         }
         if(!email){
             isValid=false;
             er.email="Enter Email Address";
         }
         else if(!email.match(isValidEmail)){
             console.log("hellooo", email)
             isValid=false;
             er.email="Enter Valid Email Address";
         }
         if(!dob){
             isValid=false;
             er.dob="Enter DOB";
         }
         if(!password){
             isValid=false;
             er.password="Enter Pasword";
         }
         if(!Cpassword){
             isValid=false;
             er.Cpassword="Enter Confrim Password";
         }
         else if(Cpassword!==password){
             isValid=false;
             alert("Password and Confrim Password should be the same");
         }
         this.setState({myerror:er});
         return isValid; 
     }

          //iff send data when data varified
       senData(){
        const newTask=this.state;
        if(this.doValidation()){
        const oldData=[...this.state.myarry];
        oldData.push(newTask);
        this.setState({ myarry: oldData});
        this.setState({newTask:" " })
        let Records=new Array([]);
        Records=JSON.parse(localStorage.getItem("UserData"))?JSON.parse(localStorage.getItem("UserData")):[]
            Records.push({
                "Firstname":this.state.Fname,
                "LastName":this.state.Lname,
                "Email":this.state.email,
                "DOB":this.state.dob,
                "Password":this.state.password,
                "ConfrimPassword":this.state.Cpassword,
            })
            localStorage.setItem("UserData",JSON.stringify(Records)); 

    }
 }
     //Deleting Reacord in Table
     deltask = (index) => {
         const myarry = [...this.state.myarry];
         const updatedTodos = myarry.filter((_, i) => i !== index);
         this.setState({myarry:updatedTodos})
         localStorage.setItem('UserData', JSON.stringify(updatedTodos));
        
       };
 
  
     render() { 
      
         return ( <div className='contaniner'>
         <h1 style={{color:'red'}}><center>Validation Form With LocalStorage</center></h1>
         {/* <h1 style={{color:'blue'}}>{this.state.myerror.er}</h1>   */}
                 <lable>First Name:</lable>
                 <input type='text' onChange={(e)=>this.setState({Fname:e.target.value})}/><br/>
                 <p style={{color: 'red'}}>{this.state.myerror.Fname}</p>
                 <label>Last Name</label>
                 <input type='text' onChange={(e)=>this.setState({Lname:e.target.value})}/><br/>
                 <p style={{color: 'red'}}>{this.state.myerror.Lname}</p>
                 <label>Email</label>
                 <input type='email' onChange={(e)=>this.setState({email:e.target.value})}/><br/>
                 <p style={{color: 'red'}}>{this.state.myerror.email}</p>
                 <label>DOB</label>
                 <input type='text' onChange={(e)=>this.setState({dob:e.target.value})}/><br/>
                 <p style={{color: 'red'}}>{this.state.myerror.dob}</p>
                 <label>Password</label>
                 <input type='password' onChange={(e)=>this.setState({password:e.target.value})}/><br/>
                 <p style={{color: 'red'}}>{this.state.myerror.password}</p>
                 <label>Confrim Password</label>
                 <input type='password' onChange={(e)=>this.setState({Cpassword:e.target.value})}/><br/>
                 <p style={{color: 'red'}}>{this.state.myerror.Cpassword}</p>
                 <input type='button' value="Submit" onClick={this.senData.bind(this)} /><br/>
                 {/* <input type='text' placeholder='search Here...' onChange={(e)=>this.setState({searchInput:e.target.value})}/> */}
                 {/* <input type='button' value="Submit" onClick={this.search.bind(this)} /><br/> */}
             <h2>UserData</h2>
 
             <table border={1}>
                 <thead>
                     <tr>
                     <th>Id</th>
                         <th>Fname</th>
                         <th>Lname</th>
                         <th>Email</th>
                         <th>DOB</th>
                         <th>Password</th>
                         <th>ConfrimPassword</th>
                         <th>Delete</th>
                     </tr>
                 </thead>
                 <tbody>
                     {this.state.myarry.map((v,i)=>{
                         return(<tr key={i}>
                             <td>{i+1}</td>
                             <td>{v.Fname}</td>
                             <td>{v.Lname}</td>
                             <td>{v.email}</td>
                             <td>{v.dob}</td>
                             <td>{v.password}</td>
                             <td>{v.Cpassword}</td>
                             <td><input type='button' value="Delete" onClick={() => this.deltask(i)}/></td>
                         </tr>)
                     })}
                 </tbody>
             </table>
 
         </div> );
     }
 }
  
 export default ValidLs;
 