import { combineReducers } from 'redux-immutable';

import { reducer as recommendReducer } from "../pages/discover/child-pages/recommend/store";
import { reducer as rankReducer } from "../pages/discover/child-pages/ranking/store";
import { reducer as playerReducer } from "../pages/app-player-bar/store";
import { reducer as searchReducer } from "../pages/search/store";


export const cReducer = combineReducers({
    recommend: recommendReducer,
    rank: rankReducer,
    player: playerReducer,
    search: searchReducer
});