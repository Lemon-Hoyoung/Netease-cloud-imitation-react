import styled from "styled-components";

export const RankListWrapper = styled.li`
    .z-selected {
        background-color: #e6e6e6;
    }

    div {
        padding: 10px 0 10px 20px;

        .rankInfo {
            padding: 0;
            display: inline-block;
            height: 40px;
            position: absolute;
            .rankName {
                display: block;
                width: 150px;
                margin-bottom: 6px;
                margin-left: 10px;
                font-size: 12px;
                font-family: Arial, Helvetica, sans-serif;
                color: #000;
            }

            .updateFrequency {
                display: block;
                margin-left: 10px;
                font-size: 12px;
                color: #999;
            }
        }
    }

    &:hover {
        background-color: #f1f1f1;
    }

    .rankImg {
        display: inline;
    }
`