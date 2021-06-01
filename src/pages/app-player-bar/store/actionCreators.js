import { getSongDetail, getLyricDetail } from '@/services/player';

import * as actionTypes from './constants';

import { lyricTimeToStamp } from '@/utils/format-utils'

const getSongDetailAction = (res) => ({
    type: actionTypes.CHANGE_CURRENT_SONG,
    currentSong: res.songs
});

const changeSongAction = (song) => ({
    type: actionTypes.CHANGE_CURRENT_SONG,
    currentSong: song
})

const getSongLyricAction = (lyric) => ({
    type: actionTypes.GET_CURRENT_LYRIC,
    currentLyric: lyric
})

const setLyricIndexAction = (index) => ({
    type: actionTypes.SET_LYRIC_INDEX,
    currentLyricIndex: index
})

const setSongIndexAction = (index) => ({
    type: actionTypes.CHANGE_CURRENT_INDEX,
    currentIndex: index
});

const addSongDetailAction = (list) => ({
    type: actionTypes.ADD_CURRENT_SONG,
    newList: list
});

const songNumberIncrementAction = (isIncrement) => ({
    type: actionTypes.INCREMENT_SONG_NUM,
    isIncrement: isIncrement
});

const deleteSongDetailAction = (newList) => ({
    type: actionTypes.DELETE_CURRENT_SONG,
    newList: newList
});

export function getSong(id) {
    return dispatch => {
        getSongDetail(id).then(res => {
            dispatch(getSongDetailAction(res));
        })
    }
}

export function getLyric(id) {
    return dispatch => {
        getLyricDetail(id).then(res => {
            const lyric = res.lrc && res.lrc.lyric.trim().split("\n");
            const lyricObj = lyric && lyric.map((item) => {
                const leftBoundaryIndex = item.indexOf("[");
                const rightBoundaryIndex = item.indexOf("]");
                const timeStamp = lyricTimeToStamp(item.slice(leftBoundaryIndex + 1, rightBoundaryIndex - 1));
                const lyricContent = item.slice(rightBoundaryIndex + 1);
                return {timeStamp, lyricContent}
            })
            dispatch(getSongLyricAction(lyricObj));
        })
    }
}

export function setLyricIndex(index) {
    return dispatch => {
        dispatch(setLyricIndexAction(index));
    }
}

export function skipSong(id) {
    return (dispatch, getState) => {
        const songList = getState().getIn(["player", "songList"]);
        songList.map((item) => {
            if (item.id === id) {
                dispatch(changeSongAction([item]));
            }
            return item;
        });
        dispatch(songNumberIncrementAction(false));
    }
}

export function setSongIndex(id) {
    return (dispatch, getState) => {
        const songList = getState().getIn(["player", "songList"]);
        let findIf = false;

        if (typeof id === "undefined") {
            dispatch(setSongIndexAction(-1));
        }
        songList.map((item, index) => {
            if (item.id === id) {
                findIf = true;
                dispatch(setSongIndexAction(index));
            }
            return item;
        });

        if (!findIf) {
            dispatch(setSongIndexAction(songList.length));
        }
    }
}

export function addSong(id, ifPlay) {
    return (dispatch, getState) => {
        getSongDetail(id).then(res => {
            const songList = getState().getIn(["player", "songList"]);
            let findIndex = -1;
            let newList = [];
            songList.map((item, index) => {
                if (item.id === id) {
                    findIndex = index;
                }
                return item;
            });

            if (findIndex < 0) {
                newList = [...songList, ...res.songs];
                dispatch(addSongDetailAction(newList));
                dispatch(songNumberIncrementAction(true));
            } else {
                newList = [...songList];
                dispatch(songNumberIncrementAction(false));
            }
            return {"newList":newList, "findIndex":findIndex};
        }).then(res => {
            const newList = res.newList;
            const listLen = newList.length;
            const findIndex = res.findIndex;
            ifPlay && dispatch(changeSongAction([newList[findIndex < 0 ? listLen - 1 : findIndex]]));
        });
    }
}

export function addAllSongs(tracks, index, ifPlay) {
    return dispatch => {
            dispatch(addSongDetailAction(tracks));
            dispatch(songNumberIncrementAction(true));
            ifPlay && dispatch(changeSongAction([tracks[typeof index === "undefined" ? 0 : index]]))
    }
}

export function deleteSong(index) {
    return (dispatch, getState) => {
        const currentList = getState().getIn(["player", "songList"]);
        const newList = currentList.filter((item, i) => {
            return i !== index
        })
        dispatch(deleteSongDetailAction(newList));
    }
}

export function deleteAllSong() {
    return dispatch => {
        dispatch(deleteSongDetailAction([]));
    }
}