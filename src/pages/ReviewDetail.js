import ListItem from "../components/ListItem";
import Text from "../components/Text";

function ReviewDetail(){
    return (
        <>
        <ListItem 
            category={"이커머스"}
            name={"마켓컬리"} 
            description={"당신의 리뷰를 원합니다. 새벽배송 참여자 모집 중!"}
            border={"transparent"}
        />
        <Text weight={700} size={"18px"}>리뷰를 작성해주세요.</Text>
        <Text weight={400} size={"16px"} color={'#0084F4'}>Q. 첫번째질문.</Text>
        </>
    );
}
export default ReviewDetail;