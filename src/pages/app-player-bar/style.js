import styled from 'styled-components';


export const PlayerWrapper = styled.div`
    .playBar {
        background-position: 0 0;
        background-repeat: repeat-x;
        height: 53px;
        margin-right: 67px;

        .controlBar {
            position: absolute;
            height: 47px;
            left: 50%;
            top: 6px;
            margin: 0 auto;
            margin-left: -491px;

            .btn {
                width: 137px;
                padding: 6px 0 0 0;
                float: left;

                .prev {
                    background-position: 0 -130px;
                    width: 28px;
                    height: 28px;
                    float: left;
                    margin-right: 8px;
                    margin-top: 5px;
                    cursor: pointer;

                    &:hover {
                        background-position: -30px -130px;
                    }
                }

                .play {
                    width: 36px;
                    height: 36px;
                    margin-top: 0;
                    margin-right: 8px;
                    float: left;
                    background-position: ${(props) => {return props.playStatus ? "0 -165px":"0 -204px"}};
                    cursor: pointer;

                    &:hover {
                        background-position: ${(props) => {return props.playStatus ? "-40px -165px":"-40px -204px"}};
                    }
                }

                .next {
                    background-position: -80px -130px;
                    width: 28px;
                    height: 28px;
                    float: left;
                    margin-right: 8px;
                    margin-top: 5px;
                    cursor: pointer;

                    &:hover {
                        background-position: -110px -130px;
                    }
                }
            }

            .flag {
                float: left;
                width: 34px;
                height: 34px;
                margin: 6px 15px 0 0;

                img {
                    width: 34px;
                    height: 34px;
                }

                .mask {
                    position: relative;
                    top: -35px;
                    float: left;
                    width: 34px;
                    height: 35px;
                    background-position: 0 -80px;
                }
            }

            .progressBar {
                width: 608px;
                float: left;
                height: 37px;

                .songInfo {
                    height: 28px;
                    color: #e8e8e8;
                    text-shadow: 0 1px 0 #171717;
                    line-height: 28px;

                    .over {
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                    }

                    .songName {
                        color: #e8e8e8;
                        max-width: 300px;
                        display: inline-block;
                    }

                    .master {
                        .singerName {
                            color: #9b9b9b;
                        }
                        margin-left: 15px;
                        max-width: 220px;
                        display: inline-block;
                    }
                }

                .m-bar {
                    width: 493px;
                    position: relative;
                    height: 9px;

                    .barbg {
                        display: inline-block;
                        height: 9px;
                        width: 100%;
                        background-position: right 0;
                        position: relative;
                        top: -3px;

                        .cur {
                            position: absolute;
                            top: 0;
                            left: 0;
                            background-position: left -66px; 

                            .timeHandle {
                                width: 22px;
                                height: 24px;
                                background-position: 0 -250px;
                                position: absolute;
                                top: -7px;
                                right: -11px;
                                cursor: pointer;

                                &:hover {
                                    background-position: 0 -280px;
                                }
                            }
                        }
                    }

                    .time {
                        position: absolute;
                        top: -3px;
                        right: -84px;
                        color: #797979;
                        text-shadow: 0 1px 0 #121212;
                        font-size: 12px;
                        font-family: Arial, Helvetica, sans-serif;

                        em {
                            color: #a1a1a1
                        }
                    }
                }
            }

            .operate {
                .block {
                    width: 25px;
                    height: 25px;
                    float: left;
                    margin: 11px 2px 0 0;
                }

                .collect {
                    background-position: -88px -163px;

                    &:hover {
                        background-position: -88px -189px;
                    }
                }

                .share {
                    background-position: -114px -163px;

                    &:hover {
                        background-position: -114px -189px;
                    }
                }
            }

            .control {
                background-position: -147px -238px;
                position: relative;
                width: 113px;
                height: 36px;
                float: left;
                padding-left: 13px;
                .block {
                    width: 25px;
                    height: 25px;
                    float: left;
                    margin: 11px 2px 0 0;
                }

                .m-vol {
                    width: 32px;
                    height: 113px;
                    position: absolute;
                    top: -113px;
                    left: 10px;
                    background-position: 0 -503px;
                    z-index: 10;

                    .vol_bar {
                        height: 93px;
                        width: 4px;
                        position: absolute;
                        left: 14px;
                        top: 10px;
                        padding: 4px 0;

                        .current_vol {
                            background-position: -40px bottom;
                        }

                        .volHandle {
                            width: 18px;
                            height: 20px;
                            background-position: -40px -250px;
                            display: block;
                            position: relative;
                            top: -8px;
                            left: -7px;
                            cursor: pointer;
                        }
                    }
                }

                .volBtn {
                    background-position: ${props => {return props.volume === 0 ? "-104px -69px":"-2px -248px"}};

                    &:hover {
                        background-position: ${props => {return props.volume === 0 ? "-126px -69px":"-31px -248px"}};
                    }
                }

                .shuffleBtn {
                    cursor: pointer;

                    &.sequencePlay {
                        background-position: -3px -344px;

                        &:hover {
                            background-position: -33px -344px;
                        }
                    }

                    &.randomPlay {
                        background-position: -66px -248px;

                        &:hover {
                            background-position: -93px -248px;
                        }
                    }

                    &.songCircle {
                        background-position: -66px -344px;

                        &:hover {
                            background-position: -93px -344px
                        }
                    }

                }

                .orderState {
                    position: absolute;
                    color: #fff;
                    top: -35px;
                    left: 12px;
                    width: 81px;
                    height: 39px;
                    line-height: 34px;
                    background-position: 0 -457px;
                    text-align: center;
                    z-index: 6;
                }


                .orderHidden {
                    display: none;
                }

                .play-list {
                    position: absolute;
                    float: left;
                    width: 59px;
                    height: 36px;

                    .tips {
                        position: absolute;
                        color: #fff;
                        top: -51px;
                        left: -65px;
                        width: 152px;
                        height: 49px;
                        line-height: 37px;
                        background-position: 0 -287px;
                        text-align: center;
                        z-index: 5
                    }

                    .tipsHidden {
                        display: none;
                    }

                    .listBtn {
                        display: block;
                        position:relative;
                        top: 11px;
                        height: 30px;
                        padding-left: 21px;
                        background-position: -42px -68px;
                        text-indent: 0;
                        text-decoration: none;
                        text-shadow: 0 1px 0 #080707;
                        color: #666;
                        text-align: center;
                        line-height: 27px;

                        &:hover {
                            background-position: -42px -98px;
                        }
                    }
                }
            }
        }
    }

    .lockWrap {
        position: absolute;
        height: 67px;
        width: 52px;
        background-position: 0 -380px;
        right: 15px;
        top: -14px;
        z-index: 9999;

        .lock {
            background-position: ${props => { return props.lock ? "-100px -380px" : "-80px -380px"}};
            margin: 6px 0 0 17px;
            width: 18px;
            height: 18px;
            display: block;

            &:hover {
                background-position: ${props => { return props.lock ? "-100px -400px" : "-80px -400px"}}
            }
        }
    }

    .rightFill {
        position: absolute;
        background-position: -52px -393px;
        height: 54px;
        right: 0;
        bottom: 0;
        top: -1px;
        width: 15px;
    }

    .handleBar {
        width: 100%;
        height: 20px;
        position: absolute;
        top: -10px;
        cursor: pointer;
    }

    .trans {
        margin: 0 auto;
        position: fixed;
        height: 53px;
        width: 100%;
        display: block
    }

    .lock-player-appear {
        bottom: 0;
    }

    .lock-player-exit, .lock-player-exit-active, .lock-player-exit-done,
    .lock-player-enter, .lock-player-enter-active, .lock-player-enter-done {
        bottom: 0;
    }

    .player-appear {
        bottom: 0;
    }

    .player-enter {
        bottom: -46px;
    }

    .player-enter-active {
        transform: translateY(-46px);
        transition: 300ms;
    }

    .player-enter-done {
        bottom: 0;
    }

    .player-exit {
        bottom: 0;
    }

    .player-exit-active {
        transform: translateY(46px);
        transition: 600ms;
    }

    .player-exit-done {
        bottom: -46px;
    }
`;