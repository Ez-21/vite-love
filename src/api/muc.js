import axios from "../axios/axios";
export function SearchMusic(params) {

  return axios({
    url: '/mpi/cloudsearch/get/web',
    // url:'http://music.163.com/api/search/get/web',
    method: 'GET',
    params
  })

}
export function MusicText(params) {
  return axios({
    url: '/mpi/song/media',
    method: 'get',
    params
  })

}
export function MusicUrl(data) {
  return axios({
    url: '/mpi/song/enhance/player/url/v1',
    method: 'POST',
    data
  })
}
export function MusicVideo(id) {
  return axios({
    url: '/mpi/mv/detail',
    method: 'POST',
    params:{
      id:id,
      type :'mp4'
    }
    
  })
}
export function MusicMessage(data){
    return axios({
      url:`/mpi/v1/resource/comments/R_SO_4_${data}`,
      method: 'POST',
    })
}