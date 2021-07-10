import styled from 'styled-components';

const Span = styled.span`
    font-weight: 700;
    font-size: 18px;
`;

function Text({ children }){
    return (
        <Span>{ children }</Span>
    );
}
export default Text;