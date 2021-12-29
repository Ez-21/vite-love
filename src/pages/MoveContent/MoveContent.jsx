import react, { useEffect, useReducer, useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import { MovContent } from "/src/api/home";
import { message } from "antd";
import smile from "/src/pages/img/yellow7.png";
import "../Css/MoveContent.scss";

const getRandomColor = function () {
	return (
		"#" +
		(function (color) {
			return (color += "5678956789defdef"[Math.floor(Math.random() * 16)]) &&
				color.length == 6
				? color
				: getRandomColor(color);
		})("")
	);
};
// 组件
function Content() {
	const params = useParams();
	const [mess, SetMess] = useState({});
	// 获取电影详情数据
	function MovCon(id) {
		MovContent({ movieId: Number(id) })
			.then((res) => {
				SetMess(res.detailMovie);
				console.log(mess);
			})
			.catch((err) => {
				console.log(err);
			});
	}
	useEffect(MovCon(params.params), []);
	return (
		<div className="MoveModel">
			<div className="MoveContent">
				<div className="MoveHead">
					<div className="Headposter">
						<img src={mess.img.replace("/w.h", "")} alt="" />
					</div>
					<div className="MoveText">
						<p className="MoveName">{mess.nm}</p>
						<div className="MoveInfo">
							<p>{mess.enm}</p>
							<p>{mess.cat}</p>
							<p>{mess.star}</p>
							<p>
								{mess.pubDesc}
								{mess.dur}分钟
							</p>
						</div>
					</div>
				</div>
				<div className="MoveBrief">
					<span>简介</span>
					<span>展开✨</span>
				</div>
				{/* <video src={mess.videourl} controls poster={mess.videoImg}></video> */}
			</div>
		</div>
	);
}
export default Content;
