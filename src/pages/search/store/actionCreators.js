import { getSearch } from '@/services/search.js';

import * as actionTypes from './constants';

const getSearchSongAction = (res) => ({
    type: actionTypes.UPDATE_SEARCH_SONG,
    searchResult: res
});

const getSearchSingerAction = (res) => ({
    type: actionTypes.UPDATE_SEARCH_SINGER,
    searchResult: res
});

const getSearchAlbumAction = (res) => ({
    type: actionTypes.UPDATE_SEARCH_ALBUM,
    searchResult: res
});

const getSearchVideoAction = (res) => ({
    type: actionTypes.UPDATE_SEARCH_VIDEO,
    searchResult: res
});

const getSearchLyricAction = (res) => ({
    type: actionTypes.UPDATE_SEARCH_LYRIC,
    searchResult: res
});

const getSearchSongSheetAction = (res) => ({
    type: actionTypes.UPDATE_SEARCH_SONGSHEET,
    searchResult: res
});

const getSearchRadioAction = (res) => ({
    type: actionTypes.UPDATE_SEARCH_RADIO,
    searchResult: res
});

const getSearchUserAction = (res) => ({
    type: actionTypes.UPDATE_SEARCH_USER,
    searchResult: res
});

export const getSearchResult = (keywords, type) => {
    return dispatch => {
        getSearch(keywords, type).then(res => {
            switch (type) {
                case 1:
                    dispatch(getSearchSongAction(res.result.songs));
                    break;
                case 100:
                    dispatch(getSearchSingerAction(res.result.artists));
                    break;
                case 10:
                    dispatch(getSearchAlbumAction(res.result.albums));
                    break;
                case 1014:
                    dispatch(getSearchVideoAction(res.result.videos));
                    break;
                case 1006:
                    dispatch(getSearchLyricAction(res.result.songs));
                    break;
                case 1000:
                    dispatch(getSearchSongSheetAction(res.result.playlists));
                    break;
                case 1009:
                    dispatch(getSearchRadioAction(res.result.djRadios));
                    break;
                case 1002:
                    dispatch(getSearchUserAction(res.result.userprofiles));
                    break;
                default:
                    dispatch(getSearchSongAction(res.result.songs));
                    break;
            }
        })
    }
}