import { useState,useEffect, useCallback} from "react";
import { Button } from "antd";
import { ReactDOM, React } from "../global/global";
import { Route, Link, Routes, useNavigate,Outlet,NavLink} from "react-router-dom";
import "antd/dist/antd.css";
import '../src/pages/Css/App.scss'
import path from "path";

function App() {
	const Path = [
		{id:1,pagePath:'/Home',imgSrc:'home'},
		{id:2,pagePath:'/Shop',imgSrc:'star'},
		{id:3,pagePath:'/Mine',imgSrc:'mine'},
	]
	const getImageUrl = (name) => {
		return new URL(`pages/img/${name}.png`, import.meta.url).href
	}
	const Gopath = (item)=>{
			item.imgSrc = item.imgSrc+'ed'
	}
	return (
		<div>
			<Outlet></Outlet>
			<div className="Tar">
				{
					Path.map(item=>{
						return(
							<NavLink to={item.pagePath} key={item.id} onClick={()=>Gopath(item)}>
							<img src={useCallback(getImageUrl(item.imgSrc),[Path])} alt="" />
						</NavLink>
						)
					})
				}
			
			</div>
		</div>
	);
}

export default App;
