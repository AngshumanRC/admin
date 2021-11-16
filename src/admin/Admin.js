import React,{useState} from 'react';
import './Admin.css';
import img1 from './1.png';
import img2 from './2.jpg';
import img3 from './3.jpg';
import icon from './icon.png';
import profile from './profile.jpg'

const Admin=()=>{
	const [dash,isDash]=useState(false);
	const [ui,isUi]=useState(false);
	const [form,isForm]=useState(false);
	const [chart,isChart]=useState(false);
	const [table,isTable]=useState(false);
	const [icons,isIcons]=useState(false);

	const setDash=()=>{
		isDash(!dash);
	}

	const setUi=()=>{
		isUi(!ui);
	}

	const setForm=()=>{
		isForm(!form);
	}

	const setChart=()=>{
		isChart(!chart);
	}


	const setTable=()=>{
		isTable(!table);
	}

	const setIcon=()=>{
		isIcons(!icons);
	}

	return(
		<div className="adminMainDiv">
		<nav className="adminNavbar">
		<div className="adminNavbar1">
		<img className="adminLogo" src={icon}/>
		</div>
		<div className="adminSearch-profile" >
		<input className="adminSearch" placeholder="Search new"/>
		<img className="adminProfilepic" src={profile}/>
		</div>
		</nav>

		<div className="adminMenu-content">

		<div className="adminMenu">
		<div style={{cursor:"pointer"}} onClick={setDash}><h3>Dashboard</h3></div>
		{
			dash ? <><div><h5>Analytics</h5></div> <div><h5>Email</h5></div></> : ""
		}
		<div style={{cursor:"pointer"}} onClick={setUi}><h3>UI elements</h3></div>
		{
			ui ? <><div><h5>Boostrap</h5></div> <div><h5>Buttons</h5></div><div><h5>Cards</h5></div></> : ""
		}
		<div style={{cursor:"pointer"}} onClick={setForm}><h3>Form elements</h3></div>
		{
			form ? <><div><h5>Form Elements</h5></div> <div><h5>Form Plugins</h5></div><div><h5>Wizards</h5></div></> : ""
		}
		<div style={{cursor:"pointer"}} onClick={setChart}><h3>Charts</h3></div>
		{
			chart ? <><div><h5>Chart</h5></div> <div><h5>Charts.js</h5></div><div><h5>ApexCharts.js</h5></div></> : ""
		}
		<div style={{cursor:"pointer"}} onClick={setTable}><h3>Tables</h3></div>
		{
			table ? <><div><h5>Table Elements</h5></div> <div><h5>table Plugins</h5></div></> : ""
		}
		<div style={{cursor:"pointer"}} onClick={setIcon}><h3>Icons</h3></div>
		{
			icons ? <><div><h5>Page Icons</h5></div></> : ""
		}
		<div><h3>Layout</h3></div>
		<div><h3>Pages</h3></div>
		<div><h3>Documentation</h3></div>
		</div>
		<div className="adminContent">

		<div className="adminHeader">
		<div>
		<h1>Welcome Amir</h1>
		<h6>All systems are running smoothly! you have 3 unread alerts!</h6>
		</div>
		<div>
		<h6 className="adminFloat">Today (10 Jan 2021)</h6>
		</div>
		</div>

		<div className="adminImages">
		<img className="adminImg1" src={img1}/>
		<img className="adminImg1" src={img2}/>
		<img className="adminImg1" src={img3}/>
		<div className="adminOuter">
		<div className="adminDiv1">
		<h6 className="adminHeader6">Today's Bookings</h6>
		<h1 className="adminHeader1">4006</h1>
		<h6 className="adminHeader6">2.00% (30 days)</h6>
		</div>
		<div className="adminDiv2">
		<h6 className="adminHeader6">Total Bookings</h6>
		<h1 className="adminHeader1">61344</h1>
		<h6 className="adminHeader6">22.00% (30 days)</h6>
		</div>
		<div className="adminDiv3">
		<h6 className="adminHeader6">Number of meetings</h6>
		<h1 className="adminHeader1">34040</h1>
		<h6 className="adminHeader6">2.00% (30 days)</h6>
		</div>
		<div className="adminDiv4">
		<h6 className="adminHeader6">Number of Clients</h6>
		<h1 className="adminHeader1">47033</h1>
		<h6 className="adminHeader6">0.22% (30 days)</h6>
		</div>
		</div>
		</div>
		</div>
		</div>

		<footer>Designed by Angshuman</footer>
		</div>
		);
} 

export default Admin;