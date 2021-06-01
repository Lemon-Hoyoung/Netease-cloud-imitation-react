import React, { memo, Fragment, useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { HYSearchSongWrapper } from './style'

import HYMatchLetter from '@/components/match-letter';
import { formatMinuteSecond } from '@/utils/format-utils' 
import { addSong } from '@/pages/app-player-bar/store/actionCreators.js';

export default memo(function HYSearchSong(props) {
    const { searchSong, keywords } = props;

      // redux hooks
  const dispatch = useDispatch();

  // other handle
  const playMusic = useCallback((item) => {
    dispatch(addSong(item.id, true));
  }, [dispatch]);

  const addMusic = useCallback((item) => {
      dispatch(addSong(item.id, false));
  }, [dispatch]);

    return (
        <HYSearchSongWrapper className="songList">
            <div>
                {
                    searchSong[0] && searchSong.map((item, index) => {
                        return (<div className={index % 2 === 0 ? "songInfo":"songInfo even"} key={item.id}>
                            <div className="td">
                                <div className="ply sprite_table" onClick={e => playMusic(item)}></div>
                            </div>
                            <div className="td songName text">
                                <span className="allInfo">
                                    <span className="forgeA name"><HYMatchLetter key={item.id} input={item.name} search={keywords}/></span>
                                    <span className="extraInfo">{item.alias[0] ? " - ("+item.alias+")":""}</span>
                                    <a className="mv sprite_table" href={"/mv?id="+item.mvid} style={{display: item.mvid === 0 ? "none":"inline-block"}}> </a>
                                </span>
                            </div>
                            <div className="td">
                                <div className="opt">
                                    <span className="forgeA icon1 sprite_icon2 add" onClick={e => addMusic(item)}></span>
                                    <span className="forgeA icon2 sprite_table collect"></span>
                                    <span className="forgeA icon2 sprite_table share"></span>
                                    <span className="forgeA icon2 sprite_table download"></span>
                                </div>
                            </div>
                            <div className="td singer">
                                <div className="text">
                                    {
                                        item.artists && item.artists.map((item, index, arr) => {
                                            return (
                                                <Fragment key={item.name}>
                                                    <span className="forgeA"><HYMatchLetter key={item.name} input={item.name} search={keywords}/></span>
                                                    {index === arr.length - 1 ? "" : "/"}
                                                </Fragment>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            <div className="td album">
                                <div className="text">
                                    <span className="forgeA">
                                        《
                                        <HYMatchLetter input={item.album && item.album.name} search={keywords}/>
                                        》
                                    </span>
                                </div>
                            </div>
                            <div className="td">{formatMinuteSecond(item.duration)}</div>
                        </div>)
                    })
                }
            </div>
        </HYSearchSongWrapper>
    )
})
