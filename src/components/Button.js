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
    height: 35px;
    margin-right: 8px;
    margin-bottom: 8px;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 1rem;
    border-radius: 2rem;
    padding: 0.75rem 0.75rem 0.7rem 1rem;
    font-size: 0.875rem;
    cursor: pointer;
`;

function Button({ btnColor, btnName, btnLink }){
    return (
        <ButtonContainer>
            <a href={btnLink}>
                <ColoredButton color={btnColor}>
                    { btnName }
                </ColoredButton>
            </a>
        </ButtonContainer>
    );
}
export default Button;