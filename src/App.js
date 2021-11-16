import React,{useState} from 'react';
import Login from './Login';
import Admin from './admin/Admin';

const App=()=>{
	const [user,setUser]=useState("");
	const [pass,setPass]=useState("");
	const [signing,setSigning]=useState(false);
	
	const onUser=(e)=>{
		setUser(e.target.value);
	}

	const onPass=(e)=>{
		setPass(e.target.value);
	}

	const handleClick=()=>{
		if(user==="" || pass===""){
			alert("Enter the required information");
		}
		else{
			setSigning(true);
		}		
	}


	return(
		<div>
		<Login onUser={onUser} onPass={onPass} handleClick={handleClick}/>
		{
			signing ? <Admin/> : ""
		}
		</div>
		);
}

export default App;