import styled from 'styled-components';

export const SearchWrapper = styled.div`
    min-height: 700px;
    margin: 0 auto;
    background-color: #fff;
    border: 1px solid #d3d3d3;
    border-width: 0 1px;

    .search_main {
        padding: 40px;

        .search_input {
            width: 420px;
            height: 40px;
            margin: 0 auto;
            z-index: 10;
            background-position: 0 0;

            .contentInput {
                float: left;
                width: 320px;
                height: 17px;
                margin: 12px 0 0 20px;
                padding: 0;
                background-color: #fff;
                border: none;
                opacity: 1;
            }

            .searchOperate {
                float: right;
                width: 50px;
                height: 40px;

                &:hover {
                    background-position: -430px 0;
                }
            }
        }

        .searchContent {
            .note {
                margin: 28px 0 17px;
                color: #999;

                em {
                    color: #c20c0c;
                    text-align: left;
                }
            }

            .tab_search {
                height: 39px;
                border: 1px solid #ccc;
                border-width: 0 1px;
                background-repeat: repeat-x;
                background-position: 0 0;
                display: flex;
                justify-content: flex-start;

                .btn_search {
                    position: relative;
                    width: 112px;
                    height: 39px;
                    font-size: 14px;

                    .z-slt {
                        background-position: left -90px;

                        em {
                            background-position: right -90px;

                            &:hover {
                                background-position: right -90px !important;
                            }
                        }
                    }

                    .type {
                        padding-left: 2px;
                        height: 39px;
                        float: left;
                        font-size: 14px;
                        width: 112px;


                        &:hover {
                            text-decoration:none;
                        }
                    }

                    em {
                        display: block;
                        width: 112px; 
                        text-align: center;
                        font-size: 12px;
                        height: 37px;
                        padding: 10px 2px 0 0;

                        &:hover {
                            background-position: right -45px;
                        }
                    }
                }
            }

            .songList {
                margin-top: 20px;

                .songInfo {
                    padding: 10px 10px 8px 18px;
                    border: 1px solid #fff;
                    height: 43px;

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

                        b {
                            color: #0c73c2;
                            font-weight: normal;
                        }
                    }
                }

                .even {
                    background-color: #f7f7f7;
                    border-color: #f7f7f7;
                }
            }
        }
    }
`