
import React from 'react';
import { BrowserRouter as Router,Routes, Route, Link} from 'react-router-dom'  ;
import Calc from './Calc';
import Calculator from './Calculator';
import Counter from './Counter';
import HooksDemo from './HooksDemo';
import StateDemo from './StateDemo';
import ColorChangeDemo from './ColorChangeDemo';
import SignUp from './SignUp';
import Login from "./Login";
import Profile from './Profile';
import Update from './Update';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import ToDoList from './TodoList';
import Todolist_Ls from './Todolist_Ls';


function App() {
    return ( <div >
		<Router>
        <div className='box'>
			<Link to="/HooksDemo" className='hooksDemo'>HooksDemo</Link>
			<Link to="/Calc" className='calc'>Calc</Link>
            <Link to="/Calculator" className='calculator'>Calculator</Link>
			<Link to="/Counter" className='counter '>Counter</Link>
            <Link to="/StateDemo" className='stateDemo'>StateDemo</Link>
            <Link to="/ColorChangeDemo" className='colorChangeDemo'>ColorChangeDemo</Link>
            <Link to="/SignUp" className='sign'>SignUp</Link>
			<Link to="/Login" className='login'>Login</Link>
            <Link to="/Profile" className='profile'>Profile</Link>
            <Link to="/Update" className='Update'>Update</Link>
            <Link to="/Home" className="home">Home</Link>
            <Link to="/About" className="about">About</Link>
            <Link to="/Contact" className="contact">Contact</Link>
	    <Link to="/TodoList" className='todolist'>TodoList</Link>
            <Link to="/Todolist_Ls" className='todolist_ls'>Todolist_Ls</Link>
            </div>
			<Routes>
				<Route path="/HooksDemo" element={<HooksDemo />}/>
				<Route path="/Calc" element={<Calc />}/>
                <Route path="/Calculator" element={<Calculator />}/>
				<Route path="/Counter" element={<Counter />}/>
                <Route path="/StateDemo" element={<StateDemo />}/>
                <Route path="/ColorChangeDemo" element={<ColorChangeDemo />}/>
                <Route path="/SignUp" element={<SignUp />}/>
				<Route path="/Login" element={<Login />}/>
                <Route path="/Profile" element={<Profile />}/>
                <Route path="/Update" element={<Update />}/>
                <Route path="/Home" element={<Home/>} />
                <Route path="/About" element={<About/>} />
                <Route path="/Contact" element={<Contact/>} />
	<Route path='/TodoList' element={<ToDoList/>}/>
                <Route path='/Todolist_Ls' element={<Todolist_Ls/>}/>
			</Routes>			
		</Router>
		</div>);
}

export default App;
