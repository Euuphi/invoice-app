// Styles
import styled from "styled-components";
import H3Secondary from "components/headings/H3Secondary";
// Icon
import DownArrowSVG from "images/svgs/icon-arrow-down.svg";

const Button = styled.button`
    border: none;
    background-color: transparent;
    color: ${({ theme }) => theme.text.primary};
    font-family: "Spartan", sans-serif;
    padding: 0.8rem;

    display: flex;
    align-items: center;
`;

const ButtonText = styled(H3Secondary)`
    margin-right: 1.6rem;
`;

const DownArrowIcon = styled(DownArrowSVG)`
    margin-left: x;
`;

const FilterOptionsButton = ({ setMenu }) => {
    const clickHandler = () => {
        // Toggle menu open state
        setMenu((prevState) => !prevState);
    };

    return (
        <Button onClick={clickHandler}>
            <ButtonText as="span">Filter by status</ButtonText>
            <DownArrowIcon />
        </Button>
    );
};

export default FilterOptionsButton;
