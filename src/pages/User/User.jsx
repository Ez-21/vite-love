import React, { useEffect, Fragment, useState, useReducer } from "react";
import TileBack from "../../components/Tittle&back";
import {
	Uploader,
	Area,
	Popup,
	ActionSheet,
	Cell,
	Toast,
	Button,
} from "react-vant";
// import { areaList } from '@vant/area-data';
import "../Css/User.scss";
const List = [
	{ id: 1, text: "头像" },
	{ id: 2, text: "昵称" },
	{ id: 3, text: "性别" },
	{ id: 4, text: "地区" },
	{ id: 5, text: "生日" },
];

// 保存
const Save = ()=>{
  setTimeout(() => {
    Toast({ message: '保存成功' ,iconSize:'70px',icon:'http://wx4.sinaimg.cn/bmiddle/006Mi9iRgy1gug1hd7slyj60go0goq3a02.jpg'});
  }, 400);
}
function User() {
	const [HeadPhoto, SetHeadPhoto] = useState("");
	const [Num, SetNum] = useState(null);
	const [Poup, SetPoup] = useState(false);
	const [Sex, SetSex] = useState(["男", "女"]);
	const [Visible, SetVisible] = useState(false);
	const FileUploader = (file) => {
		console.log(file)
		SetHeadPhoto(file.target.value);
	};
	const listClick = (id) => {
		SetPoup(true);
		SetNum(id);
		id == 3 && SetVisible(true);
		console.log(Num);
	};
	const closePoup = () => {
		SetPoup(false);
		alert(Poup);
	};
  const GetImg = () => {
		return new URL(HeadPhoto, import.meta.url).href;
	};
  return (
		<div className="UserAll">
			<TileBack name="个人信息"></TileBack>
			<div className="UserBox">
				{List.map((item) => (
					<div className="Box" key={item.id} onClick={() => listClick(item.id)}>
						<span>{item.text}</span>
						<div>
							{item.id == 1 && (
								<img src={GetImg()} alt="" className="HeadPhoto" />
							)}
							{item.id == 1 && (
								<input type="file" onChange={(e) => FileUploader(e)} />
							)}
							{/* 选择性别 */}
							<ActionSheet
								visible={Visible}
								overlayClass="bgcolor"
								onCancel={() => SetVisible(false)}
								actions={Sex}
								closeOnClickAction
							/>
							{/* 选择地区 */}
							{Num == 4 && (
								<Popup
									visible={Poup}
									position="bottom"
									style={{ height: "30%" }}
									round="true"
									closeable
									closeIcon="close"
									overlayClass="bgcolor"
                  duration='0.5'
								></Popup>
							)}
							{/* {item.id != 1 && (
								<Fragment>
									<span>嘿嘿</span>
									<img src={GetImg()} alt="" />
								</Fragment>
							)} */}
						</div>
					</div>
				))}
			</div>
      <Button type="primary" block className="SaveButton" onClick={Save}>保存</Button>
		</div>
	);
}

export default User;
