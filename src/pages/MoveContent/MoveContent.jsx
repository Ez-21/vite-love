import react  from "react";
import { useParams } from "react-router-dom";

function Content(){
  const params = useParams()
  console.log(params,'电影详情页面')
  return(
    <div>
      我是电影详情
    </div>
  )
}
export default  Content