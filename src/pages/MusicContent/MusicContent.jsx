import React, { useEffect, useLayoutEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MusicText, MusicUrl, MusicVideo } from "../../api/muc";
import "../Css/MusicContent.scss";
export default function MusicContent() {
	const { state } = useParams();
	const [ top, setTop ] = useState(0);
	const [text, setText] = useState([]);
		setTimeout(() => {
			setTop((top)=>{
				return top+20
			});
		}, 5000);

	const SongText = () => {
		MusicText({ id: state }).then((res) => {
			res.lyric = res.lyric.split("\n");
			console.log(res.lyric);
			setText(res.lyric);
			console.log(text, "设置");
		});
	};
	const SongUrl = () => {
		MusicUrl({ id: state })
			.then((res) => {
				console.log(res);
			})
			.finally(() => {
				console.log(text.length);
			});
	};
	useEffect(() => {
		SongText();
		SongUrl();
	}, []);
	return (
		<div className="MusicbgBox">
			<div className="MusicTextBox">
				<div className="MusicTextDetail" style={{ top: `-${top}px` }}>
					{text.map((item, index) => (
						<p key={item + index}>{item}</p>
					))}
				</div>
			</div>
		</div>
	);
}
