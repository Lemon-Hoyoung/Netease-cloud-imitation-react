import styled from 'styled-components';

import clockBg from '@/assets/img/sprite_icon2.png';
import controlBtn from '@/assets/img/sprite_button.png';

export const SongSheetWrapper = styled.div`
    .songSheetTitle {
        padding: 40px;
        display: flex;

        .titleLeft {
            padding: 3px;
            border: 1px solid #ccc;
            display: inline-block;
            position: relative;

            .mask {
                width: 150px;
                height: 150px;
                position: absolute;
                top: 3px;
                left: 3px;
                background-position: -230px -380px;
            }
        }

        .titleRight {
            margin-left: 31px;
            margin-top: 18px;

            h2 {
                font-size: 20px;
                line-height: 24px;
            }

            .update {
                margin: 2px 0 0 3px;
                margin-bottom: 20px;
                line-height: 35px;
                .time {
                    width: 13px;
                    height: 13px;
                    background: url(${clockBg}) no-repeat 0 9999px;
                    background-position: -18px -682px;
                    float: left;
                    margin-top: 9px;
                }

                .updateTime {
                    margin-left: 5px;
                    color: #666;
                }

                .updateFrequency {
                    color: #999;
                }
            }

            .controlBtn {
                display: block;

                .btn {
                    display: inline-block;
                    background: url(${controlBtn}) no-repeat 0 9999px;
                    height: 31px;
                    line-height: 31px;
                    font-size: 12px;

                    i {
                        background: url(${controlBtn}) no-repeat 0 9999px;
                        height: 31px;
                        line-height: 31px;
                        float: left;
                    }
                }

                .playBtn {
                    background-position: right -428px;
                    height: 31px;
                    line-height: 31px;
                    color: #fff;
                    float: left;

                    .playIcon {
                        background: url(${controlBtn}) no-repeat 0 9999px;
                        background-position: 0 -1622px;
                        margin: 6px 2px 2px 0;
                        padding: 0 5px 0 0;
                        float: left;
                        width: 20px;
                        height: 18px;
                    }

                    i {
                        background-position: 0 -387px;
                        padding: 0 7px 0 8px;

                        &:hover {
                            background-position: 0 -469px;

                            .playIcon {
                                background-position: -28px -1622px;
                            }
                        }
                    }
                }

                .addBtn {
                    background-position: 0 -1588px;
                    padding: 0 5px 0 0;
                    height: 31px;
                    line-height: 31px;
                    width: 31px;
                    margin-right: 6px;
                    float: left;

                    &:hover {
                        background-position: -40px -1588px;
                    }
                }

                .interactiveBtn {
                    background-position: right -1020px;
                    float: left;
                    height: 31px;
                    line-height: 30px;
                    min-width: 23px;
                    margin-right: 6px;
                    padding: 0 5px 0 0;

                    i {
                        padding: 0 7px 0 36px;
                        padding-right: 2px;
                        padding-left: 28px;
                        min-width: 23px;
                    }

                    &.shareBtn {
                        i {
                            background-position: 0 -1225px;
                        }

                        &:hover {
                            i {
                                background-position: 0 -1268px;
                            }
                        }
                    }

                    &.downloadBtn {
                        i {
                            background-position: 0 -2761px;
                        }

                        &:hover {
                            i {
                                background-position: 0 -2805px;
                            }
                        }
                    }

                    &.commentBtn {
                        i {
                            background-position: 0 -1465px;
                        }

                        &:hover {
                            i {
                                background-position: 0 -1508px;
                            }
                        }
                    }
                }
            }
        }
    }
`;