import react, { useEffect, useReducer, useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import { MovContent } from "/src/api/home";
import { message } from "antd";
import smile from "/src/pages/img/yellow7.png";

// 组件
function Content() {
	const params = useParams();
	console.log('params: ', params);
	const [mess, SetMess] = useState({});
	// 获取电影详情数据
	function MovCon(id) {
		MovContent({ movieId: Number(id) })
			.then((res) => {
				if(res.code!=200){
					message.error(res.msg)
				}else{
					SetMess(res.detailMovie);
				}
			})
			.catch((err) => {
				console.log(err);
			});
	}
	useEffect(()=>MovCon(params.params))
	return (
		<div className="MoveContent">
			<span>
				<video src={""}></video>
			</span>
		</div>
	);
}
export default Content;
