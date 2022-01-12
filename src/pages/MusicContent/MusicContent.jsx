import React, { useEffect, useLayoutEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MusicText, MusicUrl } from "../../api/muc";
export default () => {
	const { state } = useParams();
	const [text, setText] = useState([]);
	const SongText = () => {
		MusicText({ id: state }).then((res) => {
			// res.lyric = res.lyric.split("\n");
			console.log(res.lyric);
			setText(res.lyric);
			console.log(text, "设置");
		});
	};
	const SongUrl = () => {
		MusicUrl({ id: state }).then((res) => {
			console.log(res);
		}).finally(()=>{
      console.log(text.length)
    });
	};
	useEffect(() => {
		SongText();
	}, []);
	return <div>{text}</div>;
};
