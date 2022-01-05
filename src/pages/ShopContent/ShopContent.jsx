import React,{} from "react";
import { useParams } from "react-router-dom";
export default function ShopContent(){
  const params = useParams()
  console.log(JSON.parse(params))
  return(
    <div>
      我是电影详情
    </div>
  )
}