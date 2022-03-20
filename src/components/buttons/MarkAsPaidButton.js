import styled from "styled-components";
import ButtonStyle from "styles/buttons/ButtonStyle";
import { colors } from "themes/colors";

const Button = styled.button`
    ${ButtonStyle}

    background-color: ${colors.main.primary};

    &:hover {
        background-color: ${colors.main.tint};
    }
`;

const MarkAsPaidButton = ({ onClick }) => {
    return <Button onClick={onClick}>Mark as Paid</Button>;
};

export default MarkAsPaidButton;
