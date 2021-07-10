import ListItem from "../components/ListItem";
import Text from '../components/Text'
import ContentBox from "../components/ContentBox";

function Content(){
    return (
        <>
        <div>image</div>
        <ListItem 
            category={"이커머스"}
            name={"마켓컬리"} 
            description={"당신의 리뷰를 원합니다. 새벽배송 참여자 모집 중!"}
            border={"transparent"}
        />
        <Text>기업 & 서비스 소개</Text>
        <ContentBox>
            API에서 받아야 함
        </ContentBox>
        </>
    );
}
export default Content;