import { useDispatch } from "react-redux";
import { showForm } from "stores/actions/formActions";
import { resetInputs } from "stores/actions/formInputActions";
import { pageScrollOff } from "stores/actions/uiActions";
import styled from "styled-components";
// Media Query
import { useMediaQuery } from "@mui/material";
import screen from "styles/mediaQuery/screens";
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
        cursor: pointer;
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
        dispatch(resetInputs());
        dispatch(showForm());
        dispatch(pageScrollOff());
    };

    const tabletSmallScreen = useMediaQuery(screen.tabletS);

    return (
        <Button onClick={clickHandler}>
            <IconContainer>
                <PlusIcon />
            </IconContainer>
            New{!tabletSmallScreen && " invoice"}
        </Button>
    );
};

export default NewInvoiceButton;
