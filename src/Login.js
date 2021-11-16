import React from 'react';
import './Login.css';
import image from './login.jpg';

const Login=({onUser,onPass,handleClick})=>{




	return(
		<div>
		<div className="loginOuter">
		<div className="loginContent">
		<div className="loginImage"><img src={image}/></div>
		<div className="loginUser">
		<div className="loginLogin">
		<br/>
		<br/>
		<input type="email" placeholder="username" onChange={onUser}/>
		<br/>
		<br/>
		<input type="password" placeholder="password" onChange={onPass}/>
		<br/>
		<br/>
		<input className="loginSignin" type="submit" value="SIGN IN" onClick={handleClick}/>
		</div>
		<h6 className="loginHeader1">Don't have an account yet ?</h6>
		<h6 className="loginHeader2">Create an account</h6>
		</div>
		</div>
		</div>
		</div>
		);
}


export default Login;