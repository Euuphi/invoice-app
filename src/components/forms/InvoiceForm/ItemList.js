import { useDispatch, useSelector } from "react-redux";
import { addItem } from "stores/actions/formInputActions";
import styled from "styled-components";
// Components
import GridContainer from "components/layout/GridContainer";
import ParagraphSmStyle from "styles/text/ParagraphSmStyle";
import FormGroup from "../FormGroup";
import ItemListItem from "./ItemListItem";
import AddNewItemButton from "components/buttons/formButtons/AddNewItemButton";

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

/**
 * Create list of multiple related input groups
 *
 * @param {string} formGroup - Name of array to store items
 * @return {JSX} - Form component with related input fields
 */
const ItemList = ({ formGroup }) => {
    const dispatch = useDispatch();
    const items = useSelector((state) => state.formInput.items);

    const onAddClickHandler = (e) => {
        e.preventDefault();
        // Create new id for each item added to item list
        const id = items.length === 0 ? 0 : items[items.length - 1].id + 1; // Add one to last item's id
        dispatch(addItem(formGroup, id));
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
                {items.map((item) => {
                    return (
                        <ItemListItem
                            key={item.id}
                            id={item.id}
                            formGroup={formGroup}
                        />
                    );
                })}
            </GridContainer>
            <AddNewItemButton onClick={onAddClickHandler} />
        </FormGroup>
    );
};

export default ItemList;
