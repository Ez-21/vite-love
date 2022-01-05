import axios from "../axios/axios";
export function videos(params) {
	return axios({
		url: "/api/asgard/asgardapi/sns/common/feed/channel/list.json",
		method: "GET",
		params,
	});
}