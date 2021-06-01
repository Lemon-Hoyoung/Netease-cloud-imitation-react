import styled from 'styled-components';

export const HYFriendWrapper = styled.div`
    min-height: 700px;
    margin: 0 auto;
    background-color: #fff;
    border: 1px solid #d3d3d3;
    border-width: 0 1px;

    .content {
        width: 902px;
        height: 484px;
        padding-top: 70px;
        margin: 0 auto 0;
        background-position: 0 70px;

        .textTips {
            padding: 178px 0 0 535px;
            line-height: 23px;
            font-size: 14px;
            color: #666;
        }

        .loginBtn {
            display: block;
            width: 157px;
            height: 48px;
            margin: 36px 0 0 535px;
            background-position: 0 9999px;
            text-indent: -9999px;

            &:hover {
                background-position: 0 -430px;
            }
        }
    }
`;