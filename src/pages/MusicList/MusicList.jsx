import React, { useEffect, useState } from "react";
import "/src/pages/Css/MusicList.scss";
import { SearchMusic } from "../../api/muc";
import { useNavigate, useParams } from "react-router-dom";
export default function MucList() {
	const { state } = useParams();
	const [Song, SetSong] = useState([]);
	const Go = useNavigate();
	const Parmas = {
		offset: 1,
		limit: 20,
		type: 1,
		s: state,
	};
	const Content = (e) => {
		console.log(e);
		Go(`/MusicContent/${e}`);
	};
	const search = () => {
		console.warn(123);
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
	const wacthMv = (value) => {
		console.log(value, "movieID");
    Go(`/MusicVideo/${value}`)
	};
	useEffect(() => {
		search();
	}, []);
	return (
		<div className="MucListBox">
			<div className="MusicBOXFlex">
				{Song.map((item) => (
					<div
						className="FlexList"
						key={item.id}
						onClick={(e) => Content(item.id)}
					>
						<div className="MusMess">
							<div className="headImg">
								<img srcSet={item.al.picUrl} alt="" />
							</div>
							<div>
								{item.name} - {item.ar[0].name}
							</div>
						</div>
						{Boolean(item.mv) && (
							<div className="Mv">
								<img
									onClick={wacthMv(item.mv)}
									src={new URL(`/src//pages/img/mv.png`, import.meta.url).href}
									alt=""
								/>
							</div>
						)}
					</div>
				))}
			</div>
		</div>
	);
}
