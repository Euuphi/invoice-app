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
    const [inputs, setInputs] = useState({});
    return (
        <>
            <InputField inputType="text" />
            <InputField inputType="number" min="0" />
            <InputField inputType="number" step="0.01" min="0.00" />
            <Span>20,000.00</Span>
            <TrashCanButton />
        </>
    );
};

export default ItemListItem;
