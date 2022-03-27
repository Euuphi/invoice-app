import { useContext } from "react";
import styled from "styled-components";
import convertCurrency from "functions/convertCurrency";
// Context
import { FormContext } from "context/FormContext";
// Components
import InputField from "components/forms/InputField";
import H3SecondaryStyle from "styles/headings/H3SecondaryStyle";
import TrashCanButton from "components/buttons/TrashCanButton";

const Span = styled.span`
    display: flex;
    align-items: center;

    ${H3SecondaryStyle}
    color: ${({ theme }) => theme.form.itemTotalText};
`;

const ItemListItem = () => {
    // Variable to adjust padding of input fields
    const inputPadding = "1.7rem";

    // Calculate total by multiplying quantity and price inputs and convert string to currency format
    const { inputs } = useContext(FormContext);
    const total = convertCurrency(inputs.itemQuantity * inputs.itemPrice);

    return (
        <>
            <InputField
                name="itemName"
                inputType="text"
                inputPadding={inputPadding}
            />
            <InputField
                name="itemQuantity"
                inputType="number"
                inputPadding={inputPadding}
                min="0"
            />
            <InputField
                name="itemPrice"
                inputType="number"
                inputPadding={inputPadding}
                step="0.01"
                min="0.00"
            />
            <Span>{total || "0"}</Span>
            <TrashCanButton />
        </>
    );
};

export default ItemListItem;
