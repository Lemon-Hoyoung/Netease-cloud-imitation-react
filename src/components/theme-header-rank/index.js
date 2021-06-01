import React, {memo} from 'react';
import PropTypes from "prop-types";
import {
  HeaderWrapper
} from "./style";

const HYThemeHeaderRank = memo(function(props) {
  const { title, moreInfo, info } = props;

  return (
    <HeaderWrapper>
      <div className="left">
        <h3 className="title">{title}</h3>
        <div className="keyword">
          {info}
        </div>
      </div>
      <div className="right">
        <span>
            播放：
            <span className="count">{moreInfo}</span>
            次
        </span>
      </div>
    </HeaderWrapper>
  )
});

HYThemeHeaderRank.defaultProps = {
  info: "",
  moreInfo: "0"
}

HYThemeHeaderRank.propTypes = {
  title: PropTypes.string.isRequired
}

export default HYThemeHeaderRank;