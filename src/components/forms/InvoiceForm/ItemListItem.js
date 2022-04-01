import { useDispatch, useSelector } from "react-redux";
import { deleteItem } from "stores/actions/formInputActions";
import convertCurrency from "functions/convertCurrency";
// Components
import InputField from "components/forms/InputField";
import TrashCanButton from "components/buttons/TrashCanButton";

const ItemListItem = ({ id, formGroup }) => {
    const dispatch = useDispatch();

    // Variable to adjust padding of input fields
    const inputPadding = "1.7rem";

    // Multiplying quantity and price inputs and convert string to currency format to calculate items totals
    const item = useSelector((state) => {
        const itemList = state.formInput.items;
        return itemList.filter((item) => item.id === id)[0];
    });

    const onDeleteClickHandler = (e, group, id) => {
        e.preventDefault();
        dispatch(deleteItem(group, id));
    };

    const calculateTotal = () => {
        // Check if input field contains a value
        if (!item || !item.quantity || !item.price) {
            return convertCurrency(0);
        } else {
            return convertCurrency(item.quantity * item.price);
        }
    };

    return (
        <>
            <InputField
                name="name"
                inputType="text"
                formGroup={formGroup}
                formId={id}
                inputPadding={inputPadding}
            />
            <InputField
                name="quantity"
                inputType="number"
                formGroup={formGroup}
                formId={id}
                inputPadding={inputPadding}
                min="0"
            />
            <InputField
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
                name="total"
                inputType="text"
                formGroup={formGroup}
                formId={id}
                inputPadding="0"
                inputStyle={{ backgroundColor: "transparent" }}
                value={calculateTotal()}
            />
            <TrashCanButton
                onClick={(e) => onDeleteClickHandler(e, formGroup, id)}
            />
        </>
    );
};

export default ItemListItem;
