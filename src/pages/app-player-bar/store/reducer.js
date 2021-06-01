import { Map } from 'immutable';
import * as actionTypes from './constants';

const defaultState = Map({
    currentSong: [],
    songList: [],
    currentIndex: -1,
    currentLyric: [],
    songNumberIncrement: false
});

const reducer =  (state = defaultState, action) => {
    switch(action.type) {
        case actionTypes.CHANGE_CURRENT_SONG:
            return state.set("currentSong", action.currentSong);
        case actionTypes.ADD_CURRENT_SONG:
            return state.set("songList", action.newList);
        case actionTypes.DELETE_CURRENT_SONG:
            return state.set("songList", action.newList);
        case actionTypes.CHANGE_CURRENT_INDEX:
            return state.set("currentIndex", action.currentIndex);
        case actionTypes.GET_CURRENT_LYRIC:
            return state.set("currentLyric", action.currentLyric);
        case actionTypes.SET_LYRIC_INDEX:
            return state.set("currentLyricIndex", action.currentLyricIndex);
        case actionTypes.INCREMENT_SONG_NUM:
            return state.set("songNumberIncrement", action.isIncrement)
        default:
            return state;
    }
}

export default reducer;