import React from "react";
import { useNavigate } from "react-router-dom";
import "/src/pages/Css/TileBack.scss";
function TileBack(props) {
	const Go = useNavigate();
	const back = () => {
		Go(-1);
	};
  const SetUp = ()=>{
    console.log(this)
  }
	return (
		<div className="BackBox">
			<img src="/src/pages/img/back.png" alt="" onClick={back} />
			<span>{props.name}</span>
			{Boolean(props.set)&&<p onClick={SetUp}>{props.set}</p>}
		</div>
	);
}
export default TileBack;
