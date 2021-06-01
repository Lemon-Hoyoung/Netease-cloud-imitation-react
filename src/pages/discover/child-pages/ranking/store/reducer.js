import { Map } from "immutable";
import * as actionTypes from './constants';

const defaultState = Map({
  rankType: [],
  rankList: {}
});

const reducer = (state = defaultState, action) => {
    switch(action.type) {
        case actionTypes.CHANGE_RANK_TYPES:
            return state.set('rankType', action.rankType);
        case actionTypes.CHANGE_RANK_LIST:
            return state.set('rankList', action.songSheet);
        default:
            return state;
    }
}

export default reducer;