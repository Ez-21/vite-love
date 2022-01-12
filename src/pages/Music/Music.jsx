import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "react-vant";

function Music() {
	const [Song, SetSong] = useState("");
	var Go = useNavigate();
	const search = (value) => {
		Go(`/MusicList/${value}`);
	};
	useEffect(() => {});
	return (
		<div>
			<Search
				rightIcon
				placeholder="请输入搜索关键词"
				inputAlign="center"
				onSearch={(e) => search(e)}
			/>
			<div className=""></div>
		</div>
	);
}

export default Music;
