import axios from "../axios/axios";
export function Banner(params) {
	return axios({
		url: "/api/ajax/movieOnInfoList ",
		method: "GET",
		params,
	});
}

// 电影详情
export function Upcoming(params) {
	return axios({
		url: "/api/ajax/comingList",
		method: "GET",
		params,
	});
}

// 电影详情
export function MovContent(params) {
	return axios({
		url: "/api/ajax/detailmovie",
		method: "GET",
		params,
	});
}

// 电影评论
export function MovComment(params) {
	return axios({
		url: "/api/review/v2/comments.json",
		method: "GET",
		params,
	});
}

// 点击购票
export function BuyTicket(params){
	return axios({
		url:'/api/mtrade/cinema/movie',
		method:'GET',
		params
	})
}