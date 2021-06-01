import React, { memo } from 'react';
import PropTypes from 'prop-types';

import {
  HeaderWrapper
} from "./style";

const HYThemeHeaderSmall = memo(function (props) {
  const { title, more } = props;

  return (
    <HeaderWrapper>
      <h3>{title}</h3>
      <span className="forgeA all">{more}</span>
    </HeaderWrapper>
  )
})

HYThemeHeaderSmall.defaultProps = {

}

HYThemeHeaderSmall.propTypes = {
  title: PropTypes.string.isRequired,
  more: PropTypes.string
}

export default HYThemeHeaderSmall;