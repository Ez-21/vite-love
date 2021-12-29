import react, { useState } from "react";
import { Switch, Spin, message } from "antd";
import { useNavigate } from "react-router-dom";
import TileBack from "../../components/Tittle&back";
import "../Css/SetUp.scss";
import { Banner } from "@douyinfe/semi-ui";
const getImageUrl = (name) => {
	return new URL(`/src/pages/img/${name}.png`, import.meta.url).href;
};
const List = [
	{ text: "清除缓存", img: "clear", id: 1 },
	{ text: "意见反馈", img: "idea", id: 2 },
];

function SetUp() {
	const [Load, SetLoad] = useState(false);
	const [BannerShow, SetBannerShow] = useState(false);
	const Go = useNavigate();

	//防抖
	function Fang() {
		var Bool = false;
		return function () {
			if (Bool) {
				clearTimeout(timi);
				return false;
			} else {
				Bool = true;
				SetLoad(true);
				var timi = setTimeout(() => {
					SetLoad(false);
					let num = parseInt(Math.random() * 100);
					message.success(`已清除${num}Mb`);
				}, 1300);
			}
		};
	}
	var clear = Fang();
	const back = () => {
		Go("/Mine");
	};
	const TabLick = (id) => {
		switch (id) {
			case 1:
				{
					clear();
				}
				break;
			case 2:
				{
					SetBannerShow(true);
				}
				break;
			default:
		}
	};
	return (
		<div className="SetUpBox">
			{BannerShow && (
				<Banner
					type="danger"
					onClose={() => SetBannerShow(false)}
					description="都好兄弟,没什么意见🙅‍♂️"
				/>
			)}
			<TileBack name={"设置"}></TileBack>
			<div className="SetUpList">
				<div className="SetUpbox">
					<div>
						<img src="/src/pages/img/SetMess.png" alt="" />
						<span>消息通知</span>
					</div>
					<Switch defaultChecked></Switch>
				</div>

				{List.map((item) => {
					return (
						<div
							className="SetUpbox"
							key={item.id}
							onClick={(e) => TabLick(item.id)}
						>
							<div>
								<img src={getImageUrl(item.img)} alt="" />
								<span>{item.text}</span>
							</div>
						</div>
					);
				})}

				{/* loding */}
				<div className="Load">{Load && <Spin size="large" />}</div>
			</div>
		</div>
	);
}
export default SetUp;
