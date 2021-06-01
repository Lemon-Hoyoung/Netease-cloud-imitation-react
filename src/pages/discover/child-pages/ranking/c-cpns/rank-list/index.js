import React, { useEffect, memo, useCallback, useState } from 'react';
import PropTypes from "prop-types";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import { addAllSongs } from '@/pages/app-player-bar/store/actionCreators.js';

import {
    getSizeImage,
    formatMonthDay
} from "@/utils/format-utils";

import { SongSheetWrapper } from './style';

import HYThemeHeaderRank from '@/components/theme-header-rank';
import HYSongList from '@/components/song-list';

const HYSongsheet = memo(function (props) {
    const { info } = props;
    const { tracks = [] } = info;
    const [updateFrequency, setFrequency] = useState();

    const { rankType } = useSelector(state => ({
        rankType: state.getIn(["rank", "rankType"])
    }), shallowEqual);

    useEffect(() => {
        rankType && rankType.map((item) => {
            if (item.id === info.id) {
                setFrequency(item.updateFrequency);
            }
            return item;
        })
    }, [rankType, info.id])

    const dispatch = useDispatch();

    const rankPlay = useCallback(() => {
        dispatch(addAllSongs(tracks, undefined, true));
    }, [dispatch, tracks]);

    const rankAdd = useCallback(() => {
        dispatch(addAllSongs(tracks));
    }, [dispatch, tracks]);

    return (
        <SongSheetWrapper>
            <div className="songSheetTitle">
                <div className="titleLeft">
                    <img src={getSizeImage(info.coverImgUrl, 150)} alt="榜单"></img>
                    <span className="sprite_cover mask"></span>
                </div>
                <div className="titleRight">
                    <h2>{info.name}</h2>
                    <div className="update">
                        <i className="time"></i>
                        <span className="updateTime">最近更新：{formatMonthDay(info.updateTime)}</span>
                        <span className="updateFrequency">（{updateFrequency}）</span>
                    </div>
                    <div className="controlBtn">
                        <span className="playBtn btn forgeA" onClick={rankPlay}>
                            <i>
                                <em className="playIcon"></em>
                                播放
                            </i>
                        </span>
                        <span className="addBtn btn forgeA" onClick={rankAdd}></span>
                        <span className="interactiveBtn shareBtn btn forgeA">
                            <i>{"("+info.shareCount+")"}</i>
                        </span>
                        <span className="interactiveBtn downloadBtn btn forgeA">
                            <i>下载</i>
                        </span>
                        <span className="interactiveBtn commentBtn btn forgeA">
                            <i>{"("+info.commentCount+")"}</i>
                        </span>
                    </div>
                </div>
            </div>
            <div className="songList">
                <HYThemeHeaderRank title="歌曲列表" info={tracks.length+"首歌"} moreInfo={info.playCount}/>
                <HYSongList songlist={tracks}/>
            </div>
        </SongSheetWrapper>
    );
});

HYSongsheet.defaultProps = {
    info: {}
}

HYSongsheet.propTypes = {
    info: PropTypes.object.isRequired
}

export default HYSongsheet;