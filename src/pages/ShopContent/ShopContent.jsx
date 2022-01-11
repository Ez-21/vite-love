import { Collapse } from "antd";
import React, { useEffect, useRef, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import "/src/pages/Css/ShopContent.scss";
import TileBack from "../../components/Tittle&back";
export default function ShopContent() {
	const { state } = useLocation();
	const [Show, SetShow] = useState(true);
	const video = useRef(null);
	console.log("state: ", state);
	const playVideo = () => {
		SetShow(false)
		video.current.play();
	};
	const pause = ()=>{
		SetShow(true)
		video.current.pause();
	}
	return (
		<div className="shopContentBox">
			<TileBack></TileBack>
			{Show && (
				<img
					className="play"
					src="https://p1.meituan.net/moviemachine/1602ab135634e5c1e42ef8866bd524c54993.png"
					onClick={playVideo}
				/>
			)}
			<video src={state.video.url} ref={video} onClick={pause}></video>
		</div>
	);
}
