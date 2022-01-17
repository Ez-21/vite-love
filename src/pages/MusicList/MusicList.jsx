import React, { useEffect, useState } from "react";
import "/src/pages/Css/MusicList.scss";
import { SearchMusic } from "../../api/muc";
import { useNavigate, useParams, Link } from "react-router-dom";
export default function MucList() {
	const { states } = useParams();
	const [offset, setoffset] = useState(1);
	const [Song, SetSong] = useState([]);
	const Go = useNavigate();
	const Parmas = {
		offset: offset,
		limit: 20,
		type: 1,
		s: states,
	};
	const Content = (e) => {
		console.log(e);
		Go(`/MusicContent/${e}`);
	};
	const search = () => {
		SearchMusic(Parmas)
			.then(({ code, result }) => {
				if (code == 200) {
					console.log("%c 数据:", "color: red");
					console.log(result);
					SetSong(result.songs);
					console.log(Song);
				}
			})
			.catch((err) => {
				console.log(err);
			});
	};
	window.onscroll = function (e) {
		console.log(e);
	};
	useEffect(() => {
		search();
		return (window.onscroll = "");
	}, []);
	return (
		<div className="MucListBox">
			<div className="MusicBOXFlex">
				{Song.map((item) => (
					<div className="FlexList" key={item.id}>
						<div className="MusMess" onClick={(e) => Content(item.id)}>
							<div className="headImg">
								<img srcSet={item.al.picUrl} alt="" />
							</div>
							<div>
								{item.name} - {item.ar[0].name}
							</div>
						</div>
						{Boolean(item.mv) && (
							<div className="Mv">
								<Link to="/MusicVideo" state={{ item }}>
									<img
										// onClick={() => wacthMv(item.mv)}
										src={
											new URL(`/src//pages/img/mv.png`, import.meta.url).href
										}
										alt=""
									/>
								</Link>
							</div>
						)}
					</div>
				))}
			</div>
		</div>
	);
}
