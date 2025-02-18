import axios from "axios"

export const instance = axios.create({
	baseURL: "https://jsonplaceholder.typicode.com/",
})

export const fetchPostsData = {
	getElement(url: string, limit: number = 100) {
		return instance.get(`${url}?_limit=${limit}`);
	},
};
