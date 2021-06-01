import React, { memo, useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { NavLink } from 'react-router-dom';

import { getSizeImage } from '@/utils/format-utils';
import { addSong, addAllSongs } from '@/pages/app-player-bar/store/actionCreators.js';

import { TopRankingWrapper } from './style';

export default memo(function HYTopRanking(props) {
  // props and state
  const { info = {} } = props;
  const { tracks = [] } = info;

  // redux hooks
  const dispatch = useDispatch();

  // other handle
  const playMusic = useCallback((item) => {
    dispatch(addSong(item.id, true));
  }, [dispatch]);

  const addMusic = useCallback((item) => {
    dispatch(addSong(item.id, false));
  }, [dispatch]);

  const RankPlay = useCallback(() => {
    dispatch(addAllSongs(tracks, undefined, true));
  }, [dispatch, tracks]);

  const RankAdd = useCallback(() => {
    dispatch(addAllSongs(tracks, undefined, false));
  }, [dispatch, tracks]);

  return (
    <TopRankingWrapper>
      <div className="header">
        <div className="image">
          <img src={getSizeImage(info.coverImgUrl)} alt="" />
          <a href="/todo" className="image_cover">ranking</a>
        </div>
        <div className="info">
          <NavLink to={"/discover/ranking?id=" + info.id}>{info.name}</NavLink>
          <div>
            <button className="btn play sprite_02" onClick={RankPlay}></button>
            <button className="btn favor sprite_02" onClick={RankAdd}></button>
          </div>
        </div>
      </div>
      <div className="list">
        {
          tracks.slice(0, 10).map((item, index) => {
            return (
              <div key={item.id} className="list-item">
                <div className="rank">{index + 1}</div>
                <div className="info">
                  <span className="name text-nowrap forgeA">{item.name}</span>
                  <div className="operate">
                    <button className="btn sprite_02 play" 
                            onClick={e => playMusic(item)}></button>
                    <button className="btn sprite_icon2 addto"
                            onClick={e => addMusic(item)}></button>
                    <button className="btn sprite_02 favor"></button>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
      <div className="footer">
        <NavLink to={"/discover/ranking?id=" + info.id}>查看全部 &gt;</NavLink>
      </div>
    </TopRankingWrapper>
  )
})
