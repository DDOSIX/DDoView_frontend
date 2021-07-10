import Button from '../components/Button';
import Search from '../components/Search';
import styled from 'styled-components';
import ListItem from '../components/ListItem';
import routes from '../routes';

const Container = styled.div`
`;

const Wrapper = styled.div`
`;

function Home({ accent, bgColor }){
    return (
        <Container>
            <Button
                btnColor={accent}
                btnLink={"#"}
            >
                글쓰기
            </Button>
            <Search />
            <Wrapper>
                <ListItem 
                    category={"이커머스"}
                    name={"마켓컬리"} 
                    description={"당신의 리뷰를 원합니다. 새벽배송 참여자 모집 중!"}
                    link={routes.reviewContent}
                    border={"#efeff0"}
                />
                <ListItem 
                    category={"이커머스"}
                    name={"마켓컬리"} 
                    description={"당신의 리뷰를 원합니다. 새벽배송 참여자 모집 중!"}
                    border={"#efeff0"}
                />
            </Wrapper>
        </Container>
    );
}
export default Home;