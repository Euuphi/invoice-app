// Media Query
import useMediaQuery from "@mui/material/useMediaQuery";
import screen from "styles/mediaQuery/screens";
// Styles
import styled from "styled-components";
import H3Secondary from "components/headings/H3Secondary";
// Icon
import DownArrowSVG from "images/svgs/icon-arrow-down.svg";

const Button = styled.button`
    border: none;
    background-color: transparent;
    font-family: "Spartan", sans-serif;
    padding: 0.8rem;

    display: flex;
    align-items: center;
`;

const ButtonText = styled(H3Secondary)`
    margin-right: 1.6rem;
`;

const DownArrowIcon = styled(DownArrowSVG)`
    transition: all 50ms;

    &.open {
        transform: rotate(180deg);
    }
`;

const FilterOptionsButton = ({ menuOpen, onClick }) => {
    const tabletSmallScreen = useMediaQuery(screen.tabletS);

    return (
        <Button onClick={onClick}>
            <ButtonText as="span">
                Filter{!tabletSmallScreen && " by status"}
            </ButtonText>
            <DownArrowIcon className={menuOpen ? "open" : ""} />
        </Button>
    );
};

export default FilterOptionsButton;
