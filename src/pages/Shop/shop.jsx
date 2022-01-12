import React, { useState, useEffect } from "react";
import { Route, Link, Routes, useNavigate } from "react-router-dom";
import { Button } from "antd";
import { Empty } from "@douyinfe/semi-ui";
import { PullRefresh } from "react-vant";
import {
	IllustrationConstruction,
	IllustrationConstructionDark,
} from "@douyinfe/semi-illustrations";
import { videos } from "../../api/shop";
import "/src/pages/Css/Shop.scss";

function Shop() {
	const [Feeds, SetFeeds] = useState([]);
	const Go = useNavigate();
	const goContent = (e) => {
		Go(`/ShopContent`, { replace: true, state: { e } });
	};
	const [Limit,SetLimit] = useState(10)
	const VideoDom = () => {
		videos({ channelId: 4, feedChannelId: 105, offset: Limit ,timestamp:+new Date()}).then(
			({ data: { feeds } }) => {
				// feeds.push(feeds);
				SetFeeds(feeds);
			}
		);
	};

	useEffect(() => VideoDom(), []);
	window.onscroll = function(){
		// 滚动视口高度(也就是当前元素的真实高度)
	 let scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
	 // 可见区域高度
	 let clientHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
	 // 滚动条顶部到浏览器顶部高度
	 let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
	 if(clientHeight + scrollTop == scrollHeight){
			console.log('滚动条触底了')
			SetLimit(Limit+10)
			VideoDom()
	 }
	}
	
	return (
		<div className="ShopBox">
			<div className="ShopBoxTitle">精选视频</div>
			<div className="ShopList">
				{Feeds.map((item) => (
					<Link
						to="/ShopContent"
						state={item}
						key={item.id}
						className="ShopListBox"
						style={{ background: `url(${item.video.imgUrl})round` }}
					>
						<div className="ContentShop">
							<div className="ContentTop">{item.title}</div>
							<div className="ContentBottom">
								<img src={item.user.avatarurl} alt="" />
								<span>{item.user.nickName}</span>
							</div>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
}
export default Shop;
