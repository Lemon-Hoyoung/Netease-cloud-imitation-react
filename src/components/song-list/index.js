import React, {memo, Fragment, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import {
  SongListWrapper,
  MvDisplay
} from "./style";

import { addSong } from '@/pages/app-player-bar/store/actionCreators.js';

import {
    getSizeImage,
    formatMinuteSecond
} from '@/utils/format-utils'

const HYSongList = memo(function(props) {
    const { songlist = [] } = props;

    const dispatch = useDispatch();

    const shield = useCallback(() => {
        return false;
    }, []);

    const playSong = useCallback((item) => {
        dispatch(addSong(item.id, true));
    }, [dispatch])

    return (
        <SongListWrapper>
            <div onCopy={e => shield()} onCut={e => shield()} onDragStart={e => shield()}>
                <table className="SheetList">
                    <thead>
                        <tr>
                            <th className="space"></th>
                            <th className="title">
                                <div className="wp">标题</div>
                            </th>
                            <th className="time">
                                <div className="wp">时长</div>
                            </th>
                            <th className="singer">
                                <div className="wp">歌手</div>
                            </th>
                        </tr>
                    </thead>
                    <tbody className="list">
                        {
                            songlist.map((item, index) => {
                                return (
                                    <tr key={item.id} className={index % 2 === 0 ? "even":""}>
                                        <td>
                                            <div className="order">
                                                <span className="num">{index + 1}</span>
                                                <div className="rk">
                                                    <span className="icon"></span>
                                                </div>
                                            </div>
                                        </td>
                                        <td className={index < 3 ? "rank":"common"}>
                                            <div className="songTitle">
                                                <a className="songFrontCover" href={"/song?id="+item.id}>
                                                    <img src={getSizeImage(item.al.picUrl, 50)} alt=""></img>
                                                </a>
                                                <span className="play" onClick={e => playSong(item)}></span>
                                                <div className="songName">
                                                    <span className="name">
                                                        <a href={"/song?id="+item.id}>{item.name}</a>
                                                        <span className="alia">{(item.alia[0] === undefined ? "" : "- ("+item.alia[0]+")")}</span>
                                                        <a href={"/mv?id="+item.id}><MvDisplay display={item.mv === 0 ? "none" : "inline-block"} /></a>
                                                    </span>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="duration">
                                            <span>{formatMinuteSecond(item.dt)}</span>
                                        </td>
                                        <td className="singer">
                                            <div>
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
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </SongListWrapper>
    )
});

export default HYSongList;