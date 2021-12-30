import React, { useTransition, useReducer, useState, useEffect } from "react";
import PropTypes from "prop-types";
import "../Css/Home.scss";
import { Button, Input, message, Carousel } from "antd";
import { Banner, Upcoming } from "../../api/home";
import { Route, Link, Routes, useNavigate, Outlet } from "react-router-dom";

function App() {
	const [coming,SetComing] = useState([]);
	const [content, SetContent] = useState([]);
	const nav = useNavigate();
	// 获取电影列表
	const moveList = () => {
		Banner().then((res) => {
			console.log(res.movieList);
			res.movieList.map((item) => (item.img = item.img.replace("/w.h", "")));
			SetContent((content) => {
				return (content = res.movieList);
			});
		});
	};
	// 获取即将上映
	const Upcom = () => {
		Upcoming({ ci: 10, token: "", limit: 10 })
			.then((res) => {
				 res.coming.map((item) => (item.img = item.img.replace("/w.h", "")));
				SetComing(res.coming)
				console.log(coming)
			})
			.catch((err) => {});
	};
	useEffect(() => {
		moveList();
		Upcom();
	}, []);

	// 去详情
	function goContent(value, e) {
		// e.stopPropagation();
		console.log(value);
		nav(`/MoveContent/${value.toString()}`);
	}
	// 点击买票
	const Buyticket = (item) => {
		// if(item.showStateButton.content=='预售')
	};
	return (
		<div>
			<header>
				<Carousel autoplay className="Carousel">
					{coming.map((item) => (
						<div key={item.id} >
							<img src={item.img} alt={item.nm} />
						</div>
					))}
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
					<div className="ListBox" key={item.id}>
						<div className="leftContent" onClick={(e) => goContent(item.id, e)}>
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
						</div>
						<div
							className="button"
							style={{ background: item.showStateButton.color }}
							onClick={(e) => Buyticket(item)}
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
