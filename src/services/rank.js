import request from "./request";

export function getRankTypes() {
  return request({
    url: "/toplist"
  })
}

export function getSongSheetList(id) {
  return request({
    url: "/playlist/detail",
    params: {
      id
    }
  })
}