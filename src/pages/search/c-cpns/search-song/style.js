import styled from 'styled-components';

export const HYSearchSongWrapper = styled.div`
    margin-top: 20px;

    .songInfo {
        padding: 10px 10px 8px 18px;
        border: 1px solid #fff;
        height: 43px;

        b {
            color: #0c73c2;
            font-weight: normal;
        }

        &:hover {
            border: 1px solid #e1e1e1 !important;
            background: #f2f2f2;

            .add {
                background-position: 0 -700px;
            }

            .collect {
                background-position: 0 -174px;
            }

            .share {
                background-position: 0 -195px;
            }

            .download {
                background-position: -81px -174px;
            }
        }

        .text {
            white-space: nowrap;
            width: 100%;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .td {
            float:left;
            margin-right: 5px;
        }

        .ply {
            width: 17px;
            height: 17px;
            cursor: pointer;
            background-position: 0 -103px
        }

        .songName {
            width: 370px;
            position: relative;

            .allInfo {
                display: inline-block;
                position:relative;
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
                max-width: 88%;
                margin-right: -1000px;
                padding-right: 25px;

                .name {
                    float: left;
                    margin-right: 2px;
                }

                .extraInfo {
                    font-size: 12px;
                    color: #aeaeae;
                    margin-right: 2px;
                    text-overflow: ellipsis;
                    overflow: hidden;
                }

                .mv {
                    width: 23px;
                    height: 17px;
                    background-position: 0 -151px;
                    position: absolute;
                    float: left;
                    right: 0;
                    top: 0;
                }
            }
        }

        .opt {
            width: 96px;
            height: 16px;

            .icon1 {
                margin-right: 8px;
                margin-bottom: 3px;
                width: 13px;
                height: 13px;
                display: inline-block;
            }

            .icon2 {
                display: inline-block;
                margin-right: 7px;
                width: 18px;
                height: 16px;
            }
        }

        .singer {
            width: 15%;
        }

        .album {
            width: 18%
        }
    }

    .even {
        background-color: #f7f7f7;
        border-color: #f7f7f7;
    }
`