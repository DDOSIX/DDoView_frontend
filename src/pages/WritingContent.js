import { useForm } from "react-hook-form";
import styled from "styled-components";
import React, { useState } from 'react';
import { Input, TextArea } from '../components/Input';
import Button from "../components/Button";
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Container = styled.div`
    display: flex;
    height: 100vh;
    align-items: center;
    flex-direction: column;
`;

const Text = styled.span`
    font-weight: 700;
    font-size: 14px;
`;

const Wrapper = styled.div`
    
    max-width: 930px;
    width: 100%;

    & > form {
        display: flex;
        flex-direction: column;
    }    

    & .circleBtn {
        border: 1px solid #0084F4;
        background-color: #0084F4;
        color: white;
        width: 40px;
        height: 40px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        cursor: pointer;
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
                <Text>회사와 서비스를 소개해주세요.</Text>
                
                <form onSubmit={handleSubmit(onSubmit)}>
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
                    <Button
                        btnColor={"#0084F4"}
                    >
                        첨부하기
                    </Button>
                    <Text>질문을 작성해주세요.</Text>
                    {indexes.map(index => {
                        const fieldName = `input[${index}]`;
                        return (
                            <fieldset name={fieldName} key={fieldName}>
                                <Input 
                                    type="text"
                                    height={"48px"}
                                    placeholder={"Q. 질문을 작성해주세요."}
                                    name={`${fieldName}`}
                                    {...register(`${fieldName}`)}
                                />
                                
                                <button type="button" onClick={() => removeInput(index)}>삭제</button>
                            </fieldset>
                    );
                    })}
                    <button className="circleBtn" type="button" onClick={() => addInput()}>
                        <FontAwesomeIcon color="white" size="lg" icon={faPlus} />
                    </button>
                    <input type="submit" />
                </form>
            </Wrapper>
        </Container>
        
    );
};
export default WritingContentPage;