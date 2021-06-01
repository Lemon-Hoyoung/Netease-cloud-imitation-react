import styled from 'styled-components';

import tableBg from '@/assets/img/sprite_table.png';
import iconBg from '@/assets/img/sprite_icon2.png';

export const SongListWrapper = styled.div`
    width: 670px;
    margin-left: 40px;

    .SheetList {
        width: 100%;
        border: 1px solid #d9d9d9;

        .space {
            width: 77px;

        }

        .title {
            width: 328px;
        }

        .time {
            width: 91px;
        }

        .singer {
            width: 26%;
        }

        th {
            height: 38px;
            background-color: #f7f7f7;
            background-position: 0 0;
            background-repeat: repeat-x;
            background-image: url(${tableBg});

            .wp {
                padding: 8px 10px;
                background-position: 0 -56px;
                background-image: url(${tableBg});
                background-repeat: no-repeat;
                font-weight: normal;
                color: #666;
                text-align: left;
                vertical-align: top;
            }
        }

        td {
            padding: 3px 10px;
            line-height: 18px;
            height: 30px;
        }

        .order {
            display: block;

            .num {
                width: 25px;
                float: left;
                text-align: center;
                color: #999;
            }

            .icon {
                background-image: url(${iconBg});
                background-repeat: no-repeat;
                background-position: -67px -283px;
                width: 16px;
                height: 17px;
            }
        }

        .list {
            .even {
                background-color: #f7f7f7;
            }
            .rank {
                padding: 10px;
                .songFrontCover {
                    display: inline-block;
                    float: left;
                }
                .play {
                    margin-top: 17px;
                    margin-left: 14px;
                }
                .songName {
                    padding-top: 16px;
                }
            }
            .common {
                padding: 3px 10px;
                line-height: 18px;
                height: 30px;
                .songFrontCover {
                    display: none;
                }
            }
            .play {
                background-image: url(${tableBg});
                background-repeat: no-repeat;
                background-position: 0 -103px;
                width: 17px;
                height: 17px;
                margin-right: 8px;
                float: left;

                &:hover {
                    background-position: 0 -128px;
                }
            }
            .songName {
                display: block;
                height: 18px;
                .name {
                    display: inline-block;
                    position:relative;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    overflow: hidden;
                    max-width: 88%;
                    margin-right: -1000px;
                    padding-right: 25px;
                    a {
                        color: #333;
                        float: left;
                    }
                    .alia {
                        color: #aeaeae;
                        margin-left: 3px;
                    }
                }
            }

            .singer {
                .singerName {
                    display: inline-block;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    overflow: hidden;
                    max-width: 155px;
                    
                    margin-right: -1000px;
                }
            }
        }
    }
`;

export const MvDisplay = styled.span`
    display: ${ props => props.display };
    background-image: url(${tableBg});
    background-repeat: no-repeat;
    background-position: 0 -151px;
    width: 23px;
    height: 17px;
    margin: 1px 0 0 0;
    top: 0;
    right: 0;
    float: left;
    position: absolute;


    &:hover {
        background-position: -30px -151px;
    }
`
