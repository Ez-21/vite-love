import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MusicVideo } from "../../api/muc";
export default () => {
	const { state } = useParams();
  const [data,setData] = useState({})
	const Video = () => {
		MusicVideo(state).then((res) => {
			console.log(res.data.brs['480']);
      setData(res)
      console.log(data,'data')
		});
	};
	useEffect(() => {
		Video();
	}, []);
	return (
		<div>
			{/* <video src={data.data.brs['480']}></video> */}
		</div>
	);
};
