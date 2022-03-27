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

const ItemListItem = ({ index }) => {
    // Variable to adjust padding of input fields
    const inputPadding = "1.7rem";

    // Calculate total by multiplying quantity and price inputs and convert string to currency format
    const { inputs } = useContext(FormContext);
    // const total = convertCurrency(inputs.item[0] * inputs.item[0]);

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
            <Span>{"0"}</Span>
            <TrashCanButton />
        </>
    );
};

export default ItemListItem;
