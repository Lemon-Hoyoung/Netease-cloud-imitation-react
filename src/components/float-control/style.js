import styled from 'styled-components';

export const FloatControlWrapper = styled.div`
    visibility: ${props => { return props.domExist ? (props.visual ? "visible" : "hidden") : "visible"}};
    display: ${props => { return props.domExist ? "block" : (props.visual ? "block" : "none")}};
`;