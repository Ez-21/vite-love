import { message } from "antd";
import react from "react";
import { Link, useNavigate } from "react-router-dom";
import { Dialog, Toast } from "react-vant";
import "../../pages/Css/Mine.scss";
const List = [
	{ name: "我的余额", id: 1, imgUrl: "money" },
	{ name: "我的消息", id: 2, imgUrl: "message" },
	{ name: "浏览历史", id: 3, imgUrl: "calendar" },
	{ name: "设置", id: 5, imgUrl: "setting" },
	{ name: "分享我们", id: 6, imgUrl: "share" },
	{ name: "退出登录", id: 7, imgUrl: "giao" },
];
function Jon(index, Go) {
	switch (index) {
		case 2:
			{
				Go("/MessageList");
			}
			break;
		case 5:
			{
				Go("/SetUp");
			}
			break;
		case 7: {
			Dialog.confirm({
				title: "等等!",
				message: "兄弟别走,啥都好说😭",
			}).then(() => {
				Go("/Login");
			});
			break;
		}
		default:
			break;
	}
}
// 接收路由传递参数
export default function () {
	const getImageUrl = (name) => {
		return new URL(`../img/${name}.png`, import.meta.url).href;
	};
	const Nav = useNavigate();
	const UserMess = () => {
		Nav('/User')
	};
	return (
		<div className="box">
			<div className="MineBackground">
				<img src="https://w.wallhaven.cc/full/3z/wallhaven-3z7exy.jpg" alt="" />
			</div>
			<div className="user" onClick={UserMess}>
				<div></div>
				<p>张杰</p>
			</div>
			<div>
				<b></b>
			</div>
			<div className="MineList">
				{List.map((item, index) => (
					<div
						key={item.id}
						className="ListBox"
						onClick={() => Jon(item.id, Nav)}
					>
						<div className="icon">
							<img src={getImageUrl(item.imgUrl)} alt="" />
							{item.name}
						</div>
						<img className="join" src={getImageUrl("join")} alt="" />
					</div>
				))}
			</div>
		</div>
	);
}
