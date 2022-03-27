import { useContext } from "react";
import convertCurrency from "functions/convertCurrency";
// Context
import { FormContext } from "context/FormContext";
// Components
import InputField from "components/forms/InputField";
import TrashCanButton from "components/buttons/TrashCanButton";

const ItemListItem = ({ index, onDeleteClickHandler }) => {
    // Variable to adjust padding of input fields
    const inputPadding = "1.7rem";

    // Calculate total by multiplying quantity and price inputs and convert string to currency format
    const { inputs } = useContext(FormContext);
    const calculateTotal = () => {
        // Check if input field contains a value
        if (
            !inputs.items ||
            !inputs.items[index] ||
            !inputs.items[index].quantity ||
            !inputs.items[index].price
        ) {
            return convertCurrency(0);
        } else {
            return convertCurrency(
                inputs.items[index].quantity * inputs.items[index].price
            );
        }
    };

    return (
        <>
            <InputField
                name="name"
                inputType="text"
                formGroup="items"
                formIndex={index}
                inputPadding={inputPadding}
            />
            <InputField
                name="quantity"
                inputType="number"
                formGroup="items"
                formIndex={index}
                inputPadding={inputPadding}
                min="0"
            />
            <InputField
                name="price"
                inputType="number"
                formGroup="items"
                formIndex={index}
                inputPadding={inputPadding}
                step="0.01"
                min="0.00"
            />
            <InputField
                disabled
                name="total"
                inputType="text"
                formGroup="items"
                formIndex={index}
                inputPadding="0"
                value={calculateTotal()}
            />
            <TrashCanButton onClick={(e) => onDeleteClickHandler(e, index)} />
        </>
    );
};

export default ItemListItem;
