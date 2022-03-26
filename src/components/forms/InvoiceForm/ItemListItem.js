import { useState } from "react";
import styled from "styled-components";
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
    // Input states
    const [inputs, setInputs] = useState({});

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
            <Span>20,000.00</Span>
            <TrashCanButton />
        </>
    );
};

export default ItemListItem;
