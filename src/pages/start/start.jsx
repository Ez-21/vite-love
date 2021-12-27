import React, { Component, Fragment, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";
import "../Css/start.css";
function Demo() {
	const Nav = useNavigate();
	useEffect(() => {
		setTimeout(() => {
			Nav("/Home",{replace:true});
		}, 1300);
	});
	return (
    <div className="StartBody">
  	</div>
  )
}

export default Demo;
