import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { connect } from "react-redux";
// Media Query
import { useMediaQuery } from "@mui/material";
import screen from "styles/mediaQuery/screens";
// Selectors
import { getItems, getItemById } from "stores/selectors/formInputSelectors";
// Actions
import { deleteItem } from "stores/actions/formInputActions";
import { updateItemTotal, updateTotal } from "stores/actions/formInputActions";
// Functions
import convertCurrency from "functions/convertCurrency";
// Components
import InputField from "components/forms/InputField";
import TrashCanButton from "components/buttons/TrashCanButton";

const ItemListItem = ({ id, formGroup, itemTotal, total, showLabel }) => {
    const dispatch = useDispatch();
    // Media Query
    const tabletSmallScreen = useMediaQuery(screen.tabletS);

    // Variable to adjust padding of input fields
    const inputPadding = "1.7rem";

    const onDeleteClickHandler = (e, group, id) => {
        e.preventDefault();
        dispatch(deleteItem(group, id));
    };

    useEffect(() => {
        dispatch(updateItemTotal(formGroup, id, itemTotal));
        dispatch(updateTotal(total));
    }, [formGroup, id, itemTotal, total, dispatch]);

    return (
        <>
            <InputField
                label={showLabel ? "Item Name" : ""}
                name="name"
                inputType="text"
                formGroup={formGroup}
                formId={id}
                inputPadding={inputPadding}
                inputStyle={
                    tabletSmallScreen ? { marginBottom: "-2.4rem" } : {}
                }
                fullGridColumn={showLabel}
            />
            <InputField
                label={showLabel ? "Qty." : ""}
                name="quantity"
                inputType="number"
                formGroup={formGroup}
                formId={id}
                inputPadding={inputPadding}
                min="0"
            />
            <InputField
                label={showLabel ? "Price" : ""}
                name="price"
                inputType="number"
                formGroup={formGroup}
                formId={id}
                inputPadding={inputPadding}
                step="0.01"
                min="0.00"
            />
            <InputField
                disabled
                label={showLabel ? "Total" : ""}
                name="total"
                inputType="text"
                formGroup={formGroup}
                formId={id}
                inputPadding="0"
                inputStyle={{ backgroundColor: "transparent" }}
                value={convertCurrency(itemTotal)}
            />
            <TrashCanButton
                onClick={(e) => onDeleteClickHandler(e, formGroup, id)}
            />
        </>
    );
};

function mapStateToProps(state, { id }) {
    const items = getItems(state);
    // Get item from id
    const item = getItemById(state, id);
    // Error handler if no items are found
    if (!item) {
        return null;
    }
    // Calculate total of item from price and quantity
    const calculatedItemTotal = item.price * item.quantity;
    const itemTotal = isNaN(calculatedItemTotal) ? 0 : calculatedItemTotal;
    // Calculate total of all item total values
    const total = items.reduce(
        (subtotal, currentItem) => subtotal + currentItem.total,
        0
    );
    return {
        itemTotal,
        total,
    };
}

export default connect(mapStateToProps)(ItemListItem);
