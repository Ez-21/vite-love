import axios from "axios";
import {
  message
} from "antd";
const Request = axios.create({
  method: 'GET',
  timeout: 3000,
  headers: {
    "Content-Type": 'application/json',
    "Accept": "text/html, application/xhtml+html, application/xml; q=0.9, */*; q=0.8", // 告诉服务端可以处理的内容类型
    // 'Accept-Encoding': 'gzip, deflate, sdch',
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