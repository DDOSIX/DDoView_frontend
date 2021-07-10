import Button from '../components/Button';
import Search from '../components/Search';
import styled from 'styled-components';
import ListItem from '../components/ListItem';

const Container = styled.div`
    position: flex;
    flex-direction: column;
    justify-contents: start;
`;

function Home({ accent, bgColor }){
    return (
        <Container>
            <Button
                btnColor={accent}
                btnName={"글쓰기"}
                btnLink={"#"}
            />
            <Search />
            <ListItem 
                category={"이커머스"}
                name={"마켓컬리"} 
                description={"당신의 리뷰를 원합니다. 새벽배송 참여자 모집 중!"}
            />
        </Container>
    );
}
export default Home;