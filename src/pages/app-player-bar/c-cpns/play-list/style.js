import styled from 'styled-components';

export const HYPlayListWrapper = styled.div`
    position: absolute;
    left: 50%;
    bottom: 47px;
    width: 986px;
    height: 301px;
    margin-left: -493px;
`;

export const HYPlayListHeader = styled.div`
    .header {
        background-position: 0 0;
        height: 41px;
        padding: 0 5px;

        .headerC {
            position: relative;
            height: 40px;

            h4 {
                position: absolute;
                left: 25px;
                top: 0;
                height: 39px;
                line-height: 39px;
                font-size: 14px;
                color: #e2e2e2;
            }

            .operate {
                position: absolute;
                top: 12px;
                height: 15px;
                line-height: 15px;
                cursor: pointer;
                color: #ccc;

                .icon {
                    float: left;
                    margin: 1px 6px 0 0;
                    height: 16px;
                }

                &:hover {
                    color: #e2e2e2;
                }
            }

            .collect {
                left: 398px;

                .icon {
                    width: 16px;
                    background-position: -24px 0;
                }

                &:hover {
                    .icon {
                        background-position: -24px -20px;
                    }
                }
            }

            .line {
                position: absolute;
                top: 13px;
                left: 477px;
                height: 15px;
                border-left: 1px solid #000;
                border-right: 1px solid #2c2c2c;
            }

            .clear {
                left: 490px;

                .icon {
                    width: 13px;
                    height: 16px;
                    background-position: -51px 0;
                }

                &:hover {
                    .icon {
                        background-position: -51px -20px;
                    }
                }
            }

            .songName {
                position: absolute;
                left: 595px;
                top: 0;
                width: 346px;
                text-align: center;
                height: 39px;
                line-height: 39px;
                color: #fff;
                font-size: 14px;

                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                word-wrap: normal;
            }

            .close {
                position: absolute;
                top: 6px;
                right: 8px;
                width: 30px;
                height: 30px;
                overflow: hidden;
                cursor: pointer;
                background-position: -195px 9px;

                &:hover {
                    background-position: -195px -21px;
                }
            }
        }
    }
`;

export const HYPlayListContent = styled.div`
    .songList {
        position: absolute;
        left: 0;
        top: 41px;
        width: 986px;
        height: 260px;
        overflow: hidden;
        background-position: -1014px 0;
        background-repeat: repeat-y;
        padding: 0 5px;

        .backgroundPic {
            position: absolute;
            width: 980px;
            height: auto;
            opacity: .2;
            top: -1px;
            left: 2px;
            z-index: 1;
        }

        .listMask {
            position: absolute;
            left: 2px;
            top: 0;
            z-index:2;
            width: 558px;
            height: 260px;
            background: #121212;
            opacity: .5;
        }

        .lyricMask {
            position: absolute;
            left: 560px;
            top: 0;
            z-index: 3;
            width: 420px;
            height: 250px;
            background: #121212;
            opacity: .01;
        }

        .sliderContainer {
            position: absolute;
            top: -1px;
            z-index: 2;
            width: 6px;
            height: 260px;
            background: #000;
            opacity: .5;

            &.list {
                left: 553px;
            }

            &.lyric {
                right: 2px;
            }
        }
    }
`;

export const HYPlayListZone = styled.div`
    position: absolute;
    width: 556px;
    left: 2px;
    height: 260px;
    top: 0;
    z-index: 4;
    overflow: auto;

    .col {
        padding-left: 10px;
        height: 28px;
        line-height: 28px;
        overflow: hidden;
        float: left;
    }

    .playList {
        float: left;
        width: 100%;
        list-style: none;

        .playNow {
            width: 20px;
            cursor: pointer;
        }

        .name {
            width: 266px;
            cursor: pointer;
            white-space: nowrap;
            text-overflow: ellipsis;
            color: #ccc;
        }

        .operate {
            width: 88px;
            position: relative;
            cursor: pointer;

            .icon {
                display: none;
                position: absolute;
                right: 0;
                top: 0;
                width: 100px;
                height: 23px;

                .ico {
                    float: right;
                    overflow: hidden;
                    margin: 7px 0 0 10px;
                    text-indent: -9999px;
                    height: 16px;
                }

                .ico-del {
                    width: 13px;
                    background-position: -51px 0px;

                    &:hover {
                        background-position: -51px -20px;
                    }
                }

                .ico-download {
                    width: 14px;
                    background-position: -57px -50px;

                    &:hover {
                        background-position: -80px -50px;
                    }
                }

                .ico-share {
                    width: 14px;
                    background-position: 0 0;

                    &:hover {
                        background-position: 0 -20px;
                    }
                }

                .ico-collect {
                    width: 16px;
                    background-position: -24px 0;

                    &:hover {
                        background-position: -24px -20px
                    }
                }
            }
        }

        .singer {
            width: 80px;

            .singerName {
                display: inline-block;
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;

                color: #9b9b9b;
                a {
                    color: #9b9b9b;
                }
            }
        }

        .time {
            color: #666;
            width: 45px;
        }

        &:hover {
            background-color: rgba(0, 0, 0, 0.3);

            .name {
                color: #fff;
            }

            .operate {
                .icon {
                    display: block;
                }
            }

            .singer {
                .singerName {
                    color: #fff;
                    a {
                        color: #fff;
                    }
                }
            }

            .time {
                color: #fff;
            }
        }

        &.z-selected {
            background-color: rgba(0, 0, 0, 0.3);

            .playNow {
                background-position: -182px 0;
                padding-top: 8px;
                position: relative;
                top: 8px;
                left: 10px;
            }

            .name {
                color: #fff;
            }

            .singer {
                .singerName {
                    color: #fff;
                    a {
                        color: #fff;
                    }
                }
            }

            .time {
                color: #fff;
            }
        }
    }

    /* 滚动条 */
    ::-webkit-scrollbar-thumb:horizontal {
      /*水平滚动条的样式*/
      width: 4px;
      background-color: #9f9f9f;
      border-radius: 4px;
    }
    ::-webkit-scrollbar-track-piece {
      background-color: #1a1a1a; /*滚动条的背景颜色*/
      border-radius: 0; /*滚动条的圆角宽度*/
    }
    ::-webkit-scrollbar {
      width: 5px; /*滚动条的宽度*/
      height: 6px; /*滚动条的高度*/
    }
    ::-webkit-scrollbar-thumb:vertical {
      /*垂直滚动条的样式*/
      height: 50px;
      background-color: #9f9f9f;
      border-radius: 4px;
      /* outline: 2px solid #000; */
      /* outline-offset: -2px; */
      border: 2px solid #9f9f9f;
    }
`;

export const HYPlayListLyr = styled.div`
    position: absolute;
    right: 3px;
    top: 0;
    z-index: 4;
    margin: 21px 0 20px 0;
    height: 219px;
    width: 424px;
    overflow: auto;

    .ly {
        width: 354px;
        margin: 0 33px;

        p {
            color: #989898;
            word-wrap: break-word;
            text-align: center;
            line-height: 32px;
            height: auto;
            min-height: 32px;
        }

        .z-sel {
            font-size: 14px;
            color: #fff;

            transition: color 0.7s linear;
        }
    }



    /* 滚动条 */
    ::-webkit-scrollbar-thumb:horizontal {
      /*水平滚动条的样式*/
      width: 4px;
      background-color: #9f9f9f;
      border-radius: 4px;
    }
    ::-webkit-scrollbar-track-piece {
      background-color: #1a1a1a; /*滚动条的背景颜色*/
      border-radius: 0; /*滚动条的圆角宽度*/
    }
    ::-webkit-scrollbar {
      width: 5px; /*滚动条的宽度*/
      height: 6px; /*滚动条的高度*/
    }
    ::-webkit-scrollbar-thumb:vertical {
      /*垂直滚动条的样式*/
      height: 50px;
      background-color: #9f9f9f;
      border-radius: 4px;
      /* outline: 2px solid #000; */
      /* outline-offset: -2px; */
      border: 2px solid #9f9f9f;
    }
`;