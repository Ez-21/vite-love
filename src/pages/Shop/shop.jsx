import React, { useState, useEffect } from "react";
import { Route, Link, Routes, useNavigate } from "react-router-dom";
import { Button } from "antd";
import { Empty } from "@douyinfe/semi-ui";
import { PullRefresh } from "react-vant";
import {
	IllustrationConstruction,
	IllustrationConstructionDark,
} from "@douyinfe/semi-illustrations";
import "/src/pages/Css/Shop.scss";
import { videos } from "../../api/shop";
const Emp = () => (
	<div className="EmpBox">
		<Empty
			image={<IllustrationConstruction style={{ width: 150, height: 150 }} />}
			darkModeImage={
				<IllustrationConstructionDark style={{ width: 150, height: 150 }} />
			}
			title={"功能正在建设,不要着急!"}
			description="当前功能暂未开放，敬请期待。"
		/>
	</div>
);

function Shop() {
	const [Feeds, SetFeeds] = useState([]);
	const Go = useNavigate();
	const goContent = (e) => {
		Go(`/ShopContent/${JSON.stringify(e)}`);
	};
	const Videos = () => {
		videos({ channelId: 4, feedChannelId: 105, offset: 10 }).then(
			({ data: { feeds } }) => {
				SetFeeds(feeds);
			}
		);
	};
	useEffect(()=>Videos(), []);
	return (
		<div className="ShopBox">
			<div className="ShopList">
				{Feeds.map((item) => (
					<div
						onClick={()=>goContent(item)}
						className="ShopListBox"
						key={item.id}
						style={{ background: `url(${item.video.imgUrl})round` }}
					>
						<div className="ContentShop">
							<div className="ContentTop">{item.title}</div>
							<div className="ContentBottom">
								<img src={item.user.avatarurl} alt="" />
								<span>{item.user.nickName}</span>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
export default Shop;
