import styled from "styled-components";


const Header = styled.header`
    width: 100%;
    border-bottom: 1px solid black;
    background-color: ${(props) => props.theme.bgColor};
    padding: 18px 0px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Wrapper = styled.div`
    max-width: 930px;
    width: 100%;
    display: flex;
    flex-direction: column;

    & > span {
        font-size: 30px;
        font-weight: 600;
    }
`;

const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    & > span {
        font-size: 30px;
        font-weight: 600;
    }   
`;


const Content = styled.main`
    margin: 0 auto;
    margin-top: 43px;
    max-width: 930px;
    width: 100%;
`;

export default function Layout({ children }){
    return (
        <>
            <Header>
                <Wrapper>
                    <div>
                        logo
                    </div>
                    <TextWrapper>
                        <span>스타트업의 모든 서비스를 체험하고</span>
                        <span>정성스러운 리뷰를 남겨주세요!</span>
                    </TextWrapper>
                </Wrapper>
            </Header>
            <Content>{children}</Content>
        </>
    );
}