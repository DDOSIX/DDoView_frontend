import ListItem from "../components/ListItem";
import Text from "../components/Text";
import ContentBox from "../components/ContentBox";
import styled from 'styled-components';

const ReviewContainer = styled.div`
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 14px;
`;

const CommentContainer = styled.div`
`;


function ReviewDetail(){
    return (
        <>
        <ReviewContainer>
            <ListItem 
                category={"이커머스"}
                name={"마켓컬리"} 
                description={"당신의 리뷰를 원합니다. 새벽배송 참여자 모집 중!"}
                border={"transparent"}
            />
            <Text weight={700} size={"18px"}>리뷰제목 받아오기</Text>

            <Wrapper>
                <Text weight={400} size={"16px"} color={'#0084F4'}>Q. 첫번째질문.</Text>
                <ContentBox>

                </ContentBox>
            </Wrapper>
        </ReviewContainer>
        <CommentContainer>
            
        </CommentContainer>
        </>
    );
}
export default ReviewDetail;