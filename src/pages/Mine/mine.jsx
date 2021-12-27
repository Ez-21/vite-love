import react from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../pages/Css/Mine.scss";
const List = [
	{ name: "我的余额", id: 1 },
	{ name: "我的消息", id: 2 },
	{ name: "浏览历史", id: 3 },
	{ name: "关于我们", id: 4 },
	{ name: "退出登录", id: 5 },
];
import smile from "../img/yellow1.png";
function Jon(index,Go){
	switch (index) {
		case 4:{Go('/Login'); break;}
		default: break;
	}
}
// 接收路由传递参数
export default function () {
	const Nav = useNavigate();
	return (
		<div className="box">
			<div className="MineBackground"></div>
			<div className="user">
				<div></div>
				<p>张杰</p>
			</div>
			<div>
				<b></b>
			</div>
			<div className="MineList">
				{List.map((item,index) => (
					<div key={item.id} className="ListBox" onClick={()=>Jon(index,Nav)}>
						<img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ac95b0b87cf64096a78bdacc9e811dc8~tplv-k3u1fbpfcp-no-mark:100:100:100:100.awebp?" />
						{item.name}
					</div>
				))}
			</div>
		</div>
	);
}
