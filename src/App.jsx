import React, {
	useState,
	useEffect,
	useCallback,
	useReducer,
	useMemo,
} from "react";
import { Button } from "antd";
import {
	Route,
	Link,
	Routes,
	useNavigate,
	Outlet,
	NavLink,
} from "react-router-dom";
import "antd/dist/antd.css";
import "./pages/Css/App.scss";
import path from "path";

function App() {
	const Path = [
		{ id: 1, pagePath: "/Home", imgSrc: "home" },
		{ id: 2, pagePath: "/Music",imgSrc: "listen" },
		{ id: 3, pagePath: "/Shop", imgSrc: "star" },
		{ id: 4, pagePath: "/Mine", imgSrc: "mine" },
	];
	function SetPath(arr, index) {
		console.log(arr, index);
		arr.map((item) => (item.imgSrc = item.imgSrc.replace("ed", "")));
		// 被点击的图标加个ed
		arr[index].imgSrc = arr[index].imgSrc + "ed";
		return [...arr];
	}
	const [imgPath, SetImgPath] = useReducer(SetPath, Path);
	const getImageUrl = (name) => {
		return new URL(`./pages/img/${name}.png`, import.meta.url).href;
	};
	return (
		<div>
			<Outlet></Outlet>
			<div className="Tar">
				{imgPath.map((item, index) => {
					return (
						<NavLink
							to={item.pagePath}
							key={item.id}
							onClick={() => SetImgPath(index)}
						>
							<img src={getImageUrl(item.imgSrc)} alt="" />
						</NavLink>
					);
				})}
			</div>
		</div>
	);
}

export default App;
