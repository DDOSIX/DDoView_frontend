import styled from "styled-components";

const ButtonContainer = styled.div`
    width: 100%;
    position: flex;
    flex-direction: column;
    align-items: flex-end;
`;

const ColoredButton = styled.button`
    position: relative;
    left: 865px;
    border: 1px solid ${props => props.color};
    background-color: ${props => props.color};
    color: white;
    height: 30px;
    width: 64px;
    margin-right: 8px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    font-size: 14px;
    cursor: pointer;
`;


function Button({ btnColor, children }){
    return (
        <ButtonContainer>
                <ColoredButton color={btnColor}>
                    { children }
                </ColoredButton>
        </ButtonContainer>
    );
}
export default Button;