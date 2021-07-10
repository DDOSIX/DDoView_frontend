import ListItem from "../components/ListItem";
import Text from '../components/Text'
import ContentBox from "../components/ContentBox";
import LongButton from "../components/LongButton";

function Content({ category, name, desc, link}){
    return (
        <>
        <div>image</div>
        <ListItem 
            category={category}
            name={name} 
            description={desc}
            border={"transparent"}
            link={link}
        />
        <Text weight={700} size={"18px"}>기업 & 서비스 소개</Text>
        <ContentBox>
            API에서 받아야 함
        </ContentBox>
        <ContentBox>
            API에서 받아야 함
        </ContentBox>
        <LongButton
            btnColor={'#0084F4'}
            btnName={'리뷰 작성하러 가기'}
        />
        </>
    );
}
export default Content;