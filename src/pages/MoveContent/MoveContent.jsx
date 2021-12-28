import react, { useEffect, useReducer, useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import { MovContent } from "/src/api/home";
import { message } from "antd";
import smile from "/src/pages/img/yellow7.png";
import '../Css/MoveContent.scss'
// 组件
function Content() {
  const params = useParams();
  console.log("params: ", params);
  const [mess, SetMess] = useState({});
  // 获取电影详情数据
  function MovCon(id) {
    MovContent({ movieId: Number(id) })
      .then((res) => {
        SetMess(res.detailMovie);
		console.log(mess)
      })
      .catch((err) => {
        console.log(err);
      });
  }
  useEffect(() => MovCon(params.params),[]);
  return (
    <div className="MoveContent">
		<div className='MoveHead'>
			<p>{mess.nm}</p>
			<p>{mess.oriLang}</p>
			<p>{mess.pubDesc}</p>
			<p>{mess.scoreLabel}：{mess.sc}</p>
		</div>
        <video src={mess.videourl} controls poster={mess.videoImg}></video>
    </div>
  );
}
export default Content;
