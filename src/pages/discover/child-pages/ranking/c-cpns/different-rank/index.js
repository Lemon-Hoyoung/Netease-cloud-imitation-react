import React, { useEffect, memo } from 'react';
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import { getRank } from '../../store/actionCreators';
import { UP_SPEED_LIST } from '../../store/constants';

import { DifferentRankWraper,
         RankList } from './style';

import HYRankList from '@/components/rank-list'

export default memo(function HYDifferentRank(props) {

    const { currentId = UP_SPEED_LIST } = props;

    const state = useSelector(state => ({
        rankType: state.getIn(["rank", "rankType"])
    }), shallowEqual);

    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getRank())
    }, [dispatch])
    return (
        <DifferentRankWraper>
            <h2>云音乐特色榜</h2>
            <RankList>
                {
                    state.rankType && state.rankType.slice(0, 4).map((item) => {
                        return (
                            <HYRankList currentId={currentId} item={item} key={item.name}/>
                        )
                    })
                }
            </RankList>
            <h2>全球媒体榜</h2>
            <RankList>
                {
                    state.rankType && state.rankType.slice(4).map((item) => {
                        return (
                            <HYRankList currentId={currentId} item={item} key={item.name}/>
                        )
                    })
                }
            </RankList>
        </DifferentRankWraper>
        
    )
})