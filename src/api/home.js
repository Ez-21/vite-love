import axios from "../axios/axios";
export function Banner(params) {
	return axios({
		url: "/api/movieOnInfoList ",
		method: "GET",
		params,
	});
}

// 电影详情
export function Upcoming(params) {
	return axios({
		url: "/api/comingList",
		method: "GET",
		params,
	});
}

// 电影详情
export function MovContent(params) {
	return axios({
		url: "/api/detailmovie",
		method: "GET",
		params,
	});
}
