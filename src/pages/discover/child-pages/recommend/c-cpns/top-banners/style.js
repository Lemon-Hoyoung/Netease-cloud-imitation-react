import styled from 'styled-components';

import downloadPicture from '@/assets/img/download.png';
import changeButtonPicture from '@/assets/img/banner_sprite.png';

export const BannerWrapper = styled.div`
  background: url(${props => props.bgImage}) center center/6000px;

  .banner {
    height: 284px;
    background-color: red;

    display: flex;
    position: relative;
  }
`

export const BannerLeft = styled.div`
  width: 730px;

  .banner-item {
    overflow: hidden;
    height: 284px;
    .image {
      width: 100%;
      height: 284px;
    }
  }

  .slick-dots {
    li {
      height: 12px !important;
      transition: all 0s !important;

      &.slick-active {
        width: 16px !important;
        button {
          background-position: -16px -343px !important;
        }
      }
    }

    button {
      background: url(${changeButtonPicture}) 0 9999px no-repeat !important;
      background-position: 3px -343px !important;
      width: 20px !important;
      height: 20px !important;
      transition: all 0s !important;

      &:hover {
        background-position: -16px -343px !important;
      }
    }
  }
`

export const BannerRight = styled.div`
  width: 254px;
  height: 284px;
  .jump {
    display: block;
    width: 100%;
    height: 100%;
    background: url(${downloadPicture});
  }

  .tips {
    display: block;
    position: relative;
    bottom: 40px;
    color: #8D8D8D;
    font-size: 10px;
    font-family: Arial, Helvetica, sans-serif;
    margin: 10px auto;
    text-align: center;
  }
`

export const BannerControl = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 40%;
  transform: translateY(-50%);

  .btn {
    position: absolute;
    width: 37px;
    height: 63px;
    background-image: url(${changeButtonPicture});
    background-color: transparent;
    cursor: pointer;

    &:hover {
      background-color: rgba(0, 0, 0, .1);
    }
  }

  .left {
    left: -68px;
    background-position: 0 -360px;
  }

  .right {
    right: -68px;
    background-position: 0 -508px;
  }
`
