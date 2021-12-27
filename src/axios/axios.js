import axios from "axios";
import { message } from "antd";
const Request = axios.create({
  method:'POST',
  timeout:3000,
  headers:{"content-type":'application/json'},
  transformRequest:[(data)=>{
    return JSON.stringify(data)
  }]
})
Request.interceptors.response.use(({data})=>{
  return data
},(err)=>{
  message.error('请求失败!')
})
export default Request