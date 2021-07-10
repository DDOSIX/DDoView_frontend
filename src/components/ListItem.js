import styled from "styled-components";

const ItemContainer = styled.div`
    display: block;
    margin-bottom: 1.5rem;
    width: 100%;
    position: relative;
`;

const Item = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 0px 3.25rem 0px 1rem;
    width: 100%;
    padding-top: 1rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid #efeff0;

    @media only screen and (max-width: 478px){
        margin-left: 0.625rem;
        margin-right: 2.5rem;
    }

    & .category {
        color: #0084F4;
        font-size: 12px;
    }

    & .name {
        font-weight: 700;
        font-size: 24px;
    }

    & > h3 {
        font-size: 1rem;
        font-weight: 500;
        line-height: 1em;
        margin: 0px;
        padding-top: 0.25rem;
        color: black;

        @media only screen and (max-width: 478px){
            font-size: 13px;
            margin-bottom: 0px;
            padding-top: 0.125rem;
        }
    }
`;

const Description = styled.div`
    font-size: 0.875rem;
    color: rgb(112, 112, 112);
    line-height: 1.4em;
    margin: 0.5rem 0px 0px; 
`;




function ListItem({ category, date, name, description }){
    return (
        <div>
            <ItemContainer>
                <Item>
                    <span className="category">{ category }</span>
                    <span className="name">{ name }</span>
                    <Description>{ description }</Description>
                </Item>
            </ItemContainer>
            {/* <button></button> */}
        </div>
    );
}
export default ListItem;