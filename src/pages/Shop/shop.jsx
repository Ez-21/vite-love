import React, {useState,useEffect} from "react";
import { Route, Link, Routes, useNavigate } from "react-router-dom";
import { Button } from "antd";
class Shop extends React.Component{
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div className="ShopBox">
            <div>
              shop页面
            </div>
      </div>
    );
  }
}
export default Shop