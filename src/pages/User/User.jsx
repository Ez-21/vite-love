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
import { Upload, Avatar } from "@douyinfe/semi-ui";
// import { IconCamera } from '@douyinfe/semi-icons';

import "../Css/User.scss";
const List = [
	{ id: 1, text: "头像" },
	{ id: 2, text: "昵称" },
	{ id: 3, text: "性别" },
	{ id: 4, text: "地区" },
	{ id: 5, text: "生日" },
];

// 保存
const Save = () => {
	setTimeout(() => {
		Toast({
			message: "保存成功",
			iconSize: "70px",
			icon: "http://wx4.sinaimg.cn/bmiddle/006Mi9iRgy1gug1hd7slyj60go0goq3a02.jpg",
		});
	}, 400);
};
const api = "https://run.mocky.io/v3/d6ac5c9e-4d39-4309-a747-7ed3b5694859";
let imageOnly = "image/*";
function User() {
	const [HeadPhoto, SetHeadPhoto] = useState("");
	const [Num, SetNum] = useState(null);
	const [Poup, SetPoup] = useState(false);
	const [Sex, SetSex] = useState(["男", "女"]);
	const [Visible, SetVisible] = useState(false);
	const [url, setUrl] = useState('https://sf6-cdn-tos.douyinstatic.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/root-web-sites/avatarDemo.jpeg');
	const FileUploader = (file) => {
		console.log(file);
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
		return new URL("C:/fakepath/2019092915080239.jpeg", import.meta.url).href;
	};
	const onSuccess = (response, file) => {
		console.log('file: ', file);
		Toast.success('头像更新成功');
		setUrl('https://sf6-cdn-tos.douyinstatic.com/obj/ttfe/ies/semi/ttmoment.jpeg');
};
	return (
		<div className="UserAll">
			<TileBack name="个人信息"></TileBack>
			<div className="UserBox">
				{List.map((item) => (
					<div className="Box" key={item.id} onClick={() => listClick(item.id)}>
						<span>{item.text}</span>
						<div>
							<div>
								{item.id == 1 && (
									<Upload
										onSuccess={onSuccess}
										className="avatar-upload"
										accept={imageOnly}
										showUploadList={false}
										onError={() =>console.log("上传失败")}
									>
										<Avatar src={url}  />
									</Upload>
								)}
							</div>
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
									duration="0.5"
								></Popup>
							)}
							{item.id != 1 && (
								<Fragment>
									<span>嘿嘿</span>
								</Fragment>
							)}
						</div>
					</div>
				))}
			</div>
			<Button type="primary" block className="SaveButton" onClick={Save}>
				保存
			</Button>
		</div>
	);
}

export default User;
