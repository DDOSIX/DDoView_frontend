import styled from "styled-components";

const ButtonContainer = styled.div`
    width: fit-content;
    & > a {
        display: inline-block;
        text-decoration: none;
        cursor: pointer;
    }
`;

const ColoredButton = styled.button`
    border: 1px solid ${props => props.color};
    background-color: ${props => props.color};
    color: white;
    height: 30px;
    width: 64px;
    margin-right: 8px;
    margin-bottom: 8px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
    border-radius: 8px;
    padding: 0.5rem 0.5rem 0.5rem 0.5rem;
    font-size: 12px;
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