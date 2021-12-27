import { useState } from "react";
import { Button } from "antd";
import { ReactDOM, React } from "../global/global";
import { Route, Link, Routes, useNavigate,Outlet,NavLink} from "react-router-dom";
import "antd/dist/antd.css";
import '../src/pages/Css/App.scss'
function App() {
	return (
		<div>
			<Outlet></Outlet>
			<div className="Tar">
			<NavLink to="/Home">首页</NavLink>
			<NavLink to="/Shop">推荐</NavLink>
			<NavLink to="/Mine">我的</NavLink>
			</div>
		</div>
	);
}

export default App;
