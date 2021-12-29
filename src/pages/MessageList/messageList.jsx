import React, { useState,useLayoutEffect } from "react";
import TileBack from "../../components/Tittle&back";
import "/src/pages/Css/MessageList.scss";
import { Badge } from "antd";
function MessageList(props) {
	var list = React.useRef()
	// 消息数
	const [Num, SetNum] = useState(parseInt(Math.random() * 100));
	var LisBox = document.querySelector('.MessListBox')
	useLayoutEffect(()=>{
		console.log(LisBox)
	})
	return (
		<div className="MessageBox">
			<div>
				<TileBack name={"消息列表"} set={"全部已读"}></TileBack>
			</div>
			<div className="MessList">
				<div className="MessListBox" ref={list}>
					<div className="MessContent">
						<Badge count={Num}>
							<img src="/src/pages/img/yellow2.png" alt="" />
						</Badge>
						<div>
							<p className="MessTitle">官方新闻</p>
							<article>驱蚊器请问驱蚊11器翁阿闪大撒所多群翁翁</article>
						</div>
					</div>
					<div className="MessTime">2021-12-22</div>
				</div>
			</div>
		</div>
	);
}
export default MessageList;
