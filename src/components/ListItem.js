import styled from "styled-components";
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ItemContainer = styled.div`
    display: block;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    width: 100%;
    position: relative;
    cursor: pointer;
`;

const Item = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    margin: 0px 1rem 0px 1rem;
    width: 100%;
    padding-top: 1rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid #efeff0;

    > * {
        margin-bottom: 8px;
    }

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

`;

const Description = styled.div`
    font-size: 0.875rem;
    color: rgb(112, 112, 112);
    line-height: 1.4em;
`;




function ListItem({ category, date, name, description, link }){
    return (
        <ItemContainer>
            <Item>
                <span className="category">{ category }</span>
                <span className="name">{ name }</span>
                <Description>{ description }</Description>
            </Item>
            <Link to={link} />
        </ItemContainer>
    );
}
export default ListItem;