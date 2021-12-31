import axios from "axios";
import {
  message
} from "antd";
const Request = axios.create({
  method: 'GET',
  timeout: 3000,
  headers: {
    "Content-Type": 'application/json',
    'Accept': 'text/javascript, application/javascript',
    'Accept-Encoding': 'gzip, deflate, sdch',
    'Accept-Language': 'zh-CN,zh;q=0.8',
  },
  transformRequest: [(data) => {
    return JSON.stringify(data)
  }]
})
Request.interceptors.response.use(({
  data
}) => {
  return data
}, (err) => {
  message.error('请求失败!')
})
export default Request