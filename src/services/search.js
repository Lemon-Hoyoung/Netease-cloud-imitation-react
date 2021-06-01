import request from "./request";

export function getSearch(keywords, type) {
    return request({
        url: "/search",
        params: {
            keywords,
            type
        }
    })
}