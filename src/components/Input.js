import styled from "styled-components";

export const TextArea = styled.textarea`
    width: 100%;
    font-size: 14px;
    height: ${props => props.height};
    border-radius: 3px;
    padding: 8px;
    background-color: white;
    color: rgb(38, 38, 38);
    border: 0.5px solid black;
    box-sizing: border-box;
    margin-top: 15px;
    &::placeholder {
        font-size: 12px;
        color: #0084F4;
    }
    &:focus {
        border-color: #0084F4;
    }
    word-wrap: break-word;
    word-break: break-word;
    white-space: pre-wrap;
`;

export const Input = styled.input`
    width: 100%;
    font-size: 14px;
    height: ${props => props.height};
    border-radius: 3px;
    padding: 8px;
    background-color: white;
    color: rgb(38, 38, 38);
    border: 0.5px solid black;
    margin-top: 15px;
    box-sizing: border-box;
    &::placeholder {
        font-size: 12px;
        color: #0084F4;
    }
    &:focus {
        border-color: #0084F4;
    }
`;
export default Input;