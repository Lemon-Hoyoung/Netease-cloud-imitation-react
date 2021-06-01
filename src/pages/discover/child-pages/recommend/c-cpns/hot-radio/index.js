import React, { memo } from 'react';

import {
  hotRadios
} from "@/common/local-data";

import HYThemeHeaderSmall from '@/components/theme-header-small';
import {
  HotRadioWrapper
} from './style';

export default memo(function HYHotRadio() {
  return (
    <HotRadioWrapper>
      <HYThemeHeaderSmall title="热门主播" />
      <div className="radio-list">
        {
          hotRadios.map((item, index) => {
            return (
              <div className="item" key={item.picUrl}>
                <span className="image forgeA">
                  <img src={item.picUrl} alt="" />
                </span>
                <div className="info">
                  <span className="name forgeA">{item.name}</span>
                  <div className="position text-nowrap">{item.position}</div>
                </div>
              </div>
            )
          })
        }
      </div>
    </HotRadioWrapper>
  )
})
