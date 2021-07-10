import { useForm } from "react-hook-form";
import styled from "styled-components";
import React, { useState } from 'react';
import { InputContainer, TextArea } from '../components/Input';
import Button from "../components/Button";
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Text from '../components/Text'
import BlankBox from "../components/BlankBox";

const Container = styled.div`
    display: flex;
    height: 100vh;
    align-items: center;
    flex-direction: column;
`;


const Wrapper = styled.div`
    
    max-width: 930px;
    width: 100%;

    & > form {
        display: flex;
        flex-direction: column;
    }    
`;

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    & button {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        border: 1px solid #0084F4;
        background-color: #0084F4;
        color: white;
        cursor: pointer;
        margin: 15px 12px 15px 0;
    }

    & .defaultBtn {
        height: 30px;
        width: 64px;
        border-radius: 8px;
        font-size: 12px;
    }

    & .circleBtn {
        width: 40px;
        height: 40px;
        border-radius: 50%;
    }

    & span {
        font-size: 12px;
        font-weight: 400;
        line-height: 14px;
    }
`;

const ButtonInputContainer = styled(InputContainer)`
    &:hover{
        > button {
            display: block;
            cursor: pointer;
            margin-right: 8px;
        }
    }
    > button {
        display: none;
        border: none;
    }
    &::placeholder {
        font-size: 14px;
        color: #0084F4;
    }

`;

function WritingContentPage(){
    const [indexes, setIndexes] = useState([]);
    const [counter, setCounter] = useState(0);
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    const addInput = () => {
        setIndexes(prevIndexes => [...prevIndexes, counter]);
        setCounter(prevCounter => prevCounter + 1);
    };

    const removeInput = (index) => {
        setIndexes(prevIndexes => [...prevIndexes.filter(item => item !== index)]);
        setCounter(prevCounter => prevCounter - 1);
    };

    return (
        <Container>
            <Wrapper>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Text weight={700} size={"18px"}>25자 이내로 소개글 한 마디를 작성해주세요.</Text>
                    <InputContainer>
                        <input
                            type="text"
                            placeholder={"소개글을 작성해주세요."}
                            name={'default'}
                            {...register('intro',{
                                required: "Intro is required.",
                                maxlength: 25,
                            })}
                        />
                    </InputContainer>
                    <BlankBox size={"14px"} />
                    <Text weight={700} size={"18px"}>회사와 서비스를 소개해주세요.</Text>
                    <TextArea 
                        height={"124px"}
                        type="textarea"
                        placeholder={"회사를 소개해주세요."}
                        name={"회사소개"}
                        {...register("회사소개")}
                    />
                    <TextArea 
                        height={"124px"}
                        type="textarea"
                        placeholder={"서비스를 소개해주세요."}
                        name={"서비스소개"}
                        {...register("서비스소개")}
                    />
                    <ButtonContainer>
                        <button className="defaultBtn">첨부하기</button>
                        <span>상세 이미지 파일을 첨부해주세요.</span>
                    </ButtonContainer>
                    <Text weight={700} size={"18px"}>질문을 작성해주세요.</Text>
                    <InputContainer>
                        <input
                            type="text"
                            placeholder={"Q. 질문을 작성해주세요."}
                            name={'default'}
                            {...register('default')}
                        />
                    </InputContainer>
                    {indexes.map(index => {
                        const fieldName = `input[${index}]`;
                        return (
                            <ButtonInputContainer>
                                <input 
                                    type="text"
                                    placeholder={"Q. 질문을 작성해주세요."}
                                    name={`${fieldName}`}
                                    {...register(`${fieldName}`)}
                                />
                                <button type="button" onClick={() => removeInput(index)}>
                                    <FontAwesomeIcon size="lg" icon={faTimes} />
                                </button>
                            </ButtonInputContainer>
                    );
                    })}
                    <ButtonContainer>
                        <button className="circleBtn" type="button" onClick={() => addInput()}>
                            <FontAwesomeIcon color="white" size="lg" icon={faPlus} />
                        </button>
                        <span>질문을 추가해주세요.</span>
                    </ButtonContainer>
                    <input type="submit" />
                </form>
            </Wrapper>
        </Container>
        
    );
};
export default WritingContentPage;