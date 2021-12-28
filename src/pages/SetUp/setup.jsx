import react, { useState } from "react";
import { Switch, Spin,message } from "antd";
import { useNavigate } from "react-router-dom";
import "../Css/SetUp.scss";

const getImageUrl = (name) => {
	return new URL(`/src/pages/img/${name}.png`, import.meta.url).href;
};
const List = [
	{ text: "清除缓存", img: "clear", id: 1 },
	{ text: "意见反馈", img: "idea", id: 2 },
];

function SetUp() {
  const [Load,SetLoad] = useState(false)
	const Go = useNavigate();
	const back = () => {
		Go("/Mine");
	};
	const TabLick = (id) => {
		switch (id) {
      case 1:{
        SetLoad(true)
        setTimeout(() => {
         SetLoad(false)
         let num = parseInt(Math.random()*100)
         message.success(`已清除${num}Mb`)
        }, 1200);
      };break;
      default:
    }
	};
	return (
		<div className="SetUpBox">
			<div className="SetUpTitle">
				<img src="/src/pages/img/back.png" alt="" onClick={back} />
				<span>设置</span>
			</div>
			<div className="SetUpList">
				<div className="SetUpbox">
					<div>
						<img src="/src/pages/img/SetMess.png" alt="" />
						<span>消息通知</span>
					</div>
					<Switch defaultChecked ></Switch>
				</div>

				{List.map((item) => {
					return (
						<div className="SetUpbox" key={item.id} onClick={e=>TabLick(item.id)}>
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
