import styled from 'styled-components';

export const HeaderCateglory = styled.div`
    width: 100%;
    background-color: #C20C0C;
    display: block;
`;

export const CategloryWrapper = styled.div`
    width: 1100px;
    height: 29px;
    margin: 0 auto;

    .wrap {
        width: 744px;
        display: flex;
        flex-direction: row;
        padding-left:180px;
        padding-top: 2px;
        justify-content: space-around;
    }

    .link > a {
        color: #fff;
        text-decoration: none;
        display: inline-block;
        padding: 0 13px;
        border-radius: 20px;
        &:hover,
        &.menu-active {
            background-color: #9b0909;
        }
    }

`;