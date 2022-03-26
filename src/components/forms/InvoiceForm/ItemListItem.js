import { useState } from "react";
import styled from "styled-components";
// Icons
import TrashCanSVG from "images/svgs/icon-delete.svg";
// Components
import InputField from "components/forms/InputField";
import H3SecondaryStyle from "styles/headings/H3SecondaryStyle";

const Span = styled.span`
    display: flex;
    align-items: center;

    ${H3SecondaryStyle}
    color: ${({ theme }) => theme.form.itemTotalText};
`;

const TrashCanIcon = styled(TrashCanSVG)`
    align-self: center;
    justify-self: end;
`;

const ItemListItem = () => {
    const [inputs, setInputs] = useState({});
    return (
        <>
            <InputField inputType="text" />
            <InputField inputType="number" min="0" />
            <InputField inputType="number" step="0.01" min="0.00" />
            <Span>200,000.00</Span>
            <TrashCanIcon height="1.6rem" width="1.3rem" />
        </>
    );
};

export default ItemListItem;
