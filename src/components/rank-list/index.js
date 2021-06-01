import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';

import {
  getSizeImage
} from "@/utils/format-utils";

import {
  RankListWrapper
} from "./style";

export default memo(function HYRankList(props) {
    const { item, currentId } = props;
    return (
      <NavLink to={"/discover/ranking?id="+item.id}>
        <RankListWrapper>
          <div className={Number(currentId) === Number(item.id) ? "z-selected" : "" }>
              <img src={getSizeImage(item.coverImgUrl, 40)} alt="" className="rankImg"/>
              <div className="rankInfo">
                  <p className="rankName">{item.name}</p>
                  <p className="updateFrequency">{item.updateFrequency}</p>
              </div>
          </div>
        </RankListWrapper>
      </NavLink>
    )
  })