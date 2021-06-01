import styled from 'styled-components';

export const BarWrapper = styled.div`

`;

export const CurWrapper = styled.div.attrs(props => ({
    style: {
        width: props.width,
        height: props.height,
        top: props.top
    }
}))`
    transition: 35ms linear;
    position: absolute;
`;