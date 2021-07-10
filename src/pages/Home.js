import Button from '../components/Button';
import Search from '../components/Search';
import styled from 'styled-components';

const Container = styled.div`
    position: flex;
    flex-direction: column;
    justify-contents: start;
    border: 1px solid red;
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
        </Container>
    );
}
export default Home;