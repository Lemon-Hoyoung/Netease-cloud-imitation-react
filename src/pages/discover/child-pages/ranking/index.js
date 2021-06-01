import React, { useEffect, memo } from 'react';
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import qs from "querystring";

import { RankingWraper,
         RankingLeftWraper,
         RankingRightWraper } from './style';

import HYDifferentRank from './c-cpns/different-rank';
import HYSongSheet from './c-cpns/rank-list';

import { getSongSheet } from './store/actionCreators';
import { UP_SPEED_LIST } from './store/constants';

export default memo(function HYRanking(props) {
    const dispatch = useDispatch();

    const state = useSelector(state => ({
        songSheet: state.getIn(["rank", "rankList"])
    }), shallowEqual);

    const { search } = props.location;
    const currentId = qs.parse(search.slice(1)).id;

    useEffect(() => {
        if (search === "") {
            dispatch(getSongSheet(UP_SPEED_LIST));
        } else {
            dispatch(getSongSheet(currentId));
        }
        window.scrollTo(0,0);
    }, [dispatch, search, currentId]);

    return (
        <RankingWraper className="w980">
            <RankingLeftWraper>
                <HYDifferentRank currentId = {currentId}/>
            </RankingLeftWraper>
            <RankingRightWraper>
                <HYSongSheet info={state.songSheet}/>
            </RankingRightWraper>
        </RankingWraper>
    )
})
