import { useState } from "react";
import styled from "styled-components";
// Components
import GridContainer from "components/layout/GridContainer";
import ParagraphSmStyle from "styles/text/ParagraphSmStyle";
import FormGroup from "../FormGroup";
import ItemListItem from "./ItemListItem";
import AddNewItemButton from "components/buttons/formButtons/AddNewItem";

const Heading = styled.legend`
    color: #777f98;
    font-family: "Spartan", sans-serif;
    font-size: 1.8rem;
    font-weight: 700;
    letter-spacing: -0.38px;
    line-height: 3.2rem;
    margin-bottom: 2.4rem;
`;

const Label = styled.label`
    ${ParagraphSmStyle}
`;

const ItemList = () => {
    const [itemIndex, setItemIndex] = useState(0);
    const [itemList, setItemList] = useState([]);

    const onAddClickHandler = (e) => {
        e.preventDefault();
        setItemList([...itemList, itemIndex]);
        setItemIndex(itemIndex + 1);
    };

    const onDeleteClickHandler = (e, index) => {
        e.preventDefault();
        setItemList(itemList.filter((item) => item !== index));
    };

    return (
        <FormGroup>
            <Heading>Item List</Heading>
            <GridContainer
                alignItems="center"
                columns="8fr 3fr 4fr 4fr 1fr"
                columnGap="1.6rem"
                rowGap="1.6rem">
                <>
                    <Label>Item Name</Label>
                    <Label>Qty.</Label>
                    <Label>Price</Label>
                    <Label style={{ gridColumn: "span 2" }}>Total</Label>
                </>
                {itemList.map((item) => {
                    return (
                        <ItemListItem
                            key={item}
                            index={item}
                            onDeleteClickHandler={onDeleteClickHandler}
                        />
                    );
                })}
            </GridContainer>
            <AddNewItemButton onClick={onAddClickHandler} />
        </FormGroup>
    );
};

export default ItemList;