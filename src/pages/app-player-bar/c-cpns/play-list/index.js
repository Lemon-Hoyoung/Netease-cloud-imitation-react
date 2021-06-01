import React, { memo, useMemo, Fragment, useCallback } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { HYPlayListWrapper, HYPlayListHeader, HYPlayListContent, HYPlayListZone, HYPlayListLyr } from './style';

import { formatMinuteSecond } from '@/utils/format-utils';

import { skipSong, deleteAllSong, deleteSong } from '@/pages/app-player-bar/store/actionCreators.js';

export default memo(function HYPlayList(props) {

    const { audioRef, close, lyricRef } = props;
    const dispatch = useDispatch();

    const { songList, currentSong, currentIndex, currentLyric, currentLyricIndex } = useSelector(state => ({
        songList: state.getIn(["player", "songList"]),
        currentSong: state.getIn(['player', 'currentSong']),
        currentIndex: state.getIn(["player", 'currentIndex']),
        currentLyric: state.getIn(['player', 'currentLyric']),
        currentLyricIndex: state.getIn(["player", "currentLyricIndex"])
    }), shallowEqual);

    const song = useMemo(() => {
        return currentSong[0] || {name:"", ar:[{name:""}], al:{picUrl:"http://s4.music.126.net/style/web2/img/default/default_album.jpg"}, dt: 0};
    }, [currentSong]);

    const changeSong = useCallback((id) => {
        if (id === song.id) {
            audioRef.current.currentTime = 0;
        } else {
            dispatch(skipSong(id));
        }
    }, [dispatch, song, audioRef]);

    const deleteCur = useCallback((index) => {
        const songLen = songList.length;
        if (currentIndex === index) {
            if (songLen - 1 === index) {
                if (songLen > 1) {
                    dispatch(skipSong(songList[index - 1].id));
                }
            } else {
                dispatch(skipSong(songList[index + 1].id));
            }
        }
        dispatch(deleteSong(index))
    }, [dispatch, songList, currentIndex]);

    const clearAll = useCallback(() => {
        dispatch(deleteAllSong());
    }, [dispatch])
    
    return (
        <HYPlayListWrapper>
            <HYPlayListHeader>
                <div className="playlist_bg header">
                    <div className="headerC">
                        <h4>播放列表
                            <span className="num">
                                ({songList.length})
                            </span>
                        </h4>
                        <span className="collect operate forgeA">
                            <span className="icon playlist_icon"></span>
                            收藏全部
                        </span>
                        <span className="line"></span>
                        <span className="clear operate forgeA" onClick={clearAll}>
                            <span className="icon playlist_icon"></span>
                            清除
                        </span>
                        <p className="songName">{song.name}</p>
                        <span className="close playlist_icon" onClick={e => close(false)}></span>
                    </div>
                </div>
            </HYPlayListHeader>
            <HYPlayListContent>
                <div className="playlist_bg songList">
                    <img className="backgroundPic" src={song.al.picUrl} style={{top: "-360px"}} alt="背景图"></img>
                    <div className="listMask"></div>
                    <HYPlayListZone className="currentPlayList edgeHiddenScroll firefoxHiddenScroll">
                        {
                            songList && songList.map((item, index) => {
                                return (
                                    <div key={item.id} id={item.id.toString()} className={currentIndex === index ? "playList z-selected" : "playList"} onClick={e => changeSong(item.id)}>
                                        <div className="playNow playlist_icon col"></div>
                                        <div className="name col">{item.name}</div>
                                        <div className="operate col">
                                            <div className="icon">
                                                <i className="ico ico-del playlist_icon" onClick={e => deleteCur(index)}>删除</i>
                                                <i className="ico ico-download playlist_icon">下载</i>
                                                <i className="ico ico-share playlist_icon">分享</i>
                                                <i className="ico ico-collect playlist_icon">收藏</i>
                                            </div>
                                        </div>
                                        <div className="singer col">
                                            <span className="singerName">
                                                {
                                                    item.ar && item.ar.map((item, index, arr) => {
                                                        return (
                                                            <Fragment key={item.name}>
                                                                <a href={"/singer?id="+item.id}>{item.name}</a>
                                                                {index === arr.length - 1 ? "" : "/"}
                                                            </Fragment>
                                                        )
                                                    })
                                                }
                                            </span>
                                        </div>
                                        <div className="time col">{formatMinuteSecond(item.dt)}</div>
                                    </div>
                                )
                            })
                        }
                    </HYPlayListZone>
                    <div className="sliderContainer list"></div>
                    <div className="lyricMask"></div>
                    <HYPlayListLyr ref={lyricRef} className="lyrc edgeHiddenScroll firefoxHiddenScroll">
                        <div className="ly">
                        {
                            currentLyric && currentLyric.map((item, index) => {
                                return <p data-time={item.timeStamp} className={currentLyricIndex === index ? "z-sel lyr":"lyr"} key={index}>{item.lyricContent}</p>
                            })
                        }
                        </div>
                    </HYPlayListLyr>
                    <div className="sliderContainer lyric"></div>
                </div>
            </HYPlayListContent>
        </HYPlayListWrapper>
    )
})
