import { Map } from "immutable";
import * as actionTypes from './constants';

const defaultState = Map({
  searchSong: [],
  searchSinger: [],
  searchAlbum: [],
  searchVideo: [],
  searchLyric: [],
  searchSongSheet: [],
  searchRadio: [],
  searchUser: []
});

const reducer = (state = defaultState, action) => {
    switch(action.type) {
        case actionTypes.UPDATE_SEARCH_SONG:
            return state.set("searchSong", action.searchResult);
        case actionTypes.UPDATE_SEARCH_SINGER:
            return state.set("searchSinger", action.searchResult);
        case actionTypes.UPDATE_SEARCH_ALBUM:
            return state.set("searchAlbum", action.searchResult);
        case actionTypes.UPDATE_SEARCH_VIDEO:
            return state.set("searchVideo", action.searchResult);
        case actionTypes.UPDATE_SEARCH_LYRIC:
            return state.set("searchLyric", action.searchResult);
        case actionTypes.UPDATE_SEARCH_SONGSHEET:
            return state.set("searchSongSheet", action.searchResult);
        case actionTypes.UPDATE_SEARCH_RADIO:
            return state.set("searchRadio", action.searchResult);
        case actionTypes.UPDATE_SEARCH_USER:
            return state.set("searchUser", action.searchResult);
        default:
            return state;
    }
}

export default reducer;