import { useDispatch } from "react-redux";
import { createNewInvoice } from "actions/formActions";
import styled from "styled-components";
// Themes
import { colors } from "themes/colors";
// Icon
import PlusIcon from "images/svgs/icon-plus.svg";

const Button = styled.button`
    background-color: ${colors.main.primary};
    border: none;
    border-radius: 100px;
    color: #fff;
    font-family: "Spartan", sans-serif;
    font-size: 1.2rem;
    font-weight: 700;
    padding: 0.8rem;
    padding-right: 1.6rem;

    display: flex;
    align-items: center;
    gap: 1.6rem;

    &:hover {
        background-color: ${colors.main.tint};
    }
`;

const IconContainer = styled.span`
    background-color: #fff;
    border-radius: 50%;
    height: 3.2rem;
    width: 3.2rem;

    display: flex;
    align-items: center;
    justify-content: center;
`;

const NewInvoiceButton = () => {
    const dispatch = useDispatch();

    const clickHandler = () => {
        dispatch(createNewInvoice());
    };

    return (
        <Button onClick={clickHandler}>
            <IconContainer>
                <PlusIcon />
            </IconContainer>
            New Invoice
        </Button>
    );
};

export default NewInvoiceButton;
