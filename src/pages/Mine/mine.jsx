import react from "react"
import {Link} from 'react-router-dom'
import '../../pages/Css/Mine.scss'
const List = [
  {name:'我的余额',id:1},
  {name:'我的消息',id:2},
  {name:'浏览历史',id:3},
  {name:'关于我们',id:4},
  {name:'退出登录',id:5},
]
import smile from '../img/yellow1.png'

// 接收路由传递参数
export default function(){
  return(
    <div className="box">
      <div className="user"> 
          <div></div>
          <p>狗娃爱看片儿</p>
      </div>
      <div>
          <b>我的服务</b>
        </div>
      <div className="MineList">
        {List.map(item=>
          <div key={item.id} className="ListBox">
            <img src='https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ac95b0b87cf64096a78bdacc9e811dc8~tplv-k3u1fbpfcp-no-mark:100:100:100:100.awebp?'  />
            {item.name}</div>
        )}
      </div>
    </div>
  )
}