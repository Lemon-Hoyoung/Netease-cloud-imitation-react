import styled from 'styled-components';

import wrapPic from '@/assets/img/wrap3.png';

export const RankingWraper = styled.div`
    background: url(${wrapPic}) repeat-y center 0;
    display: flex;
`;

export const RankingLeftWraper = styled.div`
    width: 240px;
    position: static;
    float: left;  
    border: 1px solid #d3d3d3;
    border-width: 0 0 0 1px;
    background: rgb(249, 249, 249);
`

export const RankingRightWraper = styled.div`
    width: 740px;
    border: 1px solid #d3d3d3;
    border-width: 0 1px 0 0;
    float: right;
`