import * as actionTypes from './constants';

import { getRankTypes,
         getSongSheetList
} from '@/services/rank';

const changeRankTypesAction = (res) => ({
    type: actionTypes.CHANGE_RANK_TYPES,
    rankType: res.list
});

const changeSongSheetAction = (res) => ({
    type: actionTypes.CHANGE_RANK_LIST,
    songSheet: res.playlist
})

export const getRank = () => {
    return dispatch => {
        getRankTypes().then(res => {
            dispatch(changeRankTypesAction(res));
        });
    }
}

export const getSongSheet = (id) => {
    return dispatch => {
        getSongSheetList(id).then(res => {
            dispatch(changeSongSheetAction(res));
        })
    }
}