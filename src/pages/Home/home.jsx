import React, { useTransition, useReducer, useState, useEffect } from "react";
import PropTypes from "prop-types";
import "../Css/Home.scss";
import { Button, Input, message, Carousel } from "antd";
import { Banner } from "../../api/home";
import { Route, Link, Routes, useNavigate, Outlet } from "react-router-dom";

const contentStyle = {
	height: "160px",
	color: "#fff",
	lineHeight: "160px",
	textAlign: "center",
	background: "#364d79",
};
function App() {
	const [content, SetContent] = useState([]);
	const nav = useNavigate()
	useEffect(() => {
		Banner().then((res) => {
			console.log(res.movieList);
			res.movieList.map((item) => (item.img = item.img.replace("/w.h", "")));
			SetContent((content) => {
				return (content = res.movieList);
			});
			console.log(content);
		});
	}, []);
	// 去详情
	function goContent(value,e)  {
		e.stopPropagation();
		console.log(value)
		nav(`/Content/${value.toString()}`)
	};
	return (
		<div>
			<header>
				<Carousel autoplay>
					<div>
						<h3 style={contentStyle}>1</h3>
					</div>
					<div>
						<h3 style={contentStyle}>2</h3>
					</div>
					<div>
						<h3 style={contentStyle}>3</h3>
					</div>
					<div>
						<h3 style={contentStyle}>4</h3>
					</div>
				</Carousel>
			</header>
			<div className="Homecontent">
				{content.map((item) => (
					<div
						key={item.id}
						style={{ background: `url(${item.img})round` }}
						className="Homebox"
					>
						<div className="title">{item.rt}</div>
						<p className="star">评分: {item.sc}</p>
					</div>
				))}
			</div>
			<div className="List">
				{content.map((item) => (
					<div className="ListBox" onClick={(e)=>{goContent(item,e)}} key={item.id}>
						<img src={item.img} alt="" />
						<div className="content">
							<p className="title">
								{item.nm}
								<img
									src="https://s0.meituan.net/bs/myfe/canary/file/touchnode/images/dpmmweb/hot-tab/img/base64/v2dimax.png"
									alt=""
								/>
							</p>
							<p>
								观众评分:<span className="star">{item.sc}</span>
							</p>
							<p>主演:{item.star}</p>
							<p>{item.showInfo}</p>
						</div>
						<div
							className="button"
							style={{ background: item.showStateButton.color }}
						>
							{item.showStateButton.content}
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default App;
