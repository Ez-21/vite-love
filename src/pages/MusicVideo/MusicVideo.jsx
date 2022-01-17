import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { MusicVideo, MusicMessage } from "../../api/muc";
import "../Css/MusicVideo.scss";
export default function () {
	const {
		state: { item },
	} = useLocation();
	const state = item;
	const [data, setData] = useState({});
	const [musicMess, SetmusicMess] = useState([]);
	const Video = () => {
		MusicVideo(state.mv).then(({ data }) => {
			console.log(state, "?");
			// 只看最清晰画质
			data.videos = Object.values(data.brs).at(-1);
			setData(data);
			console.log("data: ", data);
		});
	};
	const Text = () => {
		MusicMessage(state.id)
			.then((res) => {
				res.hotComments = [...res.hotComments, ...res.comments];
				console.log(res.hotComments, "歌词");
				SetmusicMess(res.hotComments);
			})
			.catch((err) => {
				console.log(err);
			});
	};
	useEffect(() => {
		Video();
		Text();
	}, []);
	return (
		<div className="MusicVideoBox">
			<div>
				<video src={data.videos} controls poster={data.cover}></video>
				<h4>
					<p className="MvName"><span>MV</span> {data.name}</p>
					<p className="Mvsinger">歌手:{data.artistName}</p>
					<p className="MvTime">发布时间:{data.publishTime} <span>播放次数:{data.playCount}</span></p>
				</h4>
			</div>
			<h4 className="messTitle">精选评论:</h4>
			<div>
				<ul>
					{musicMess.map((item) => (
						<li key={item.commentId}>
							<div className="liHeadimg">
								<img src={item.user.avatarUrl} alt="" />
							</div>
							<div>
								<div className="liContent">
									<span className="liuserName">{item.user.nickname}</span>
									<span className="limaohao">:</span>
									<span>{item.content}</span>
								</div>
								<div className="litime">{new Date(item.time).toLocaleString().replaceAll('/','-')}</div>
							</div>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
