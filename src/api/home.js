import axios from "../axios/axios";
export  function Banner (data){
  return axios({
    url:'/api/movieOnInfoList ',
    method:'GET',
    data
  })
}