import React, { useState, useEffect } from "react";
import { Route, Link, Routes, useNavigate } from "react-router-dom";
import { Button } from "antd";
import { Empty } from "@douyinfe/semi-ui";
import {
	IllustrationConstruction,
	IllustrationConstructionDark,
} from "@douyinfe/semi-illustrations";
import '/src/pages/Css/Shop.scss'
const Emp = () => (
	<div className='EmpBox'>
		<Empty
			image={<IllustrationConstruction style={{ width: 150, height: 150 }} />}
			darkModeImage={
				<IllustrationConstructionDark style={{ width: 150, height: 150 }} />
			}
			title={"功能正在建设,不要猴急!"}
			description="当前功能暂未开放，敬请期待。"
		/>
	</div>
);

class Shop extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="ShopBox">
				<div>
					<Emp />
				</div>
			</div>
		);
	}
}
export default Shop;
