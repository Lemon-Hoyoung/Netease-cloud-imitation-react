import styled from 'styled-components';
import backBg from '@/assets/img/sprite_download.png';

export const BackTopWrapper = styled.div`
    width: 49px;
    height: 44px;
    display: ${props => {return Number(props.pos) > 0 ? "block" : "none"}};
    position: fixed;
    left: 50%;
    bottom: 160px;
    margin-left: 500px;
    .backtop {
        background-image: url(${backBg});
        background-position: -265px -47px;
        width: 100%;
        height: 100%;

        &:hover {
            background-position: -325px -47px;
        }
    }
`;