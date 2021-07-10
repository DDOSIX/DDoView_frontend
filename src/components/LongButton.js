import styled from "styled-components";

const ButtonContainer = styled.div`
    max-width: 930px;
    width: 100%;
`;

const ColoredButton = styled.button`
    border: 1px solid ${props => props.color};
    width: 100%;
    background-color: ${props => props.color};
    margin-right: 8px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
    border-radius: 0.75rem;
    padding: 0.75rem 0.75rem 0.7rem 1rem;
    font-size: 0.875rem;
    color: white;
    cursor: pointer;
`;

function LongButton({ btnColor, btnName, btnLink }){
    return (
        <ButtonContainer>
                <ColoredButton color={btnColor}>
                    { btnName }
                </ColoredButton>
        </ButtonContainer>
    );
}
export default LongButton;