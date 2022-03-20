import styled from "styled-components";
// Styles
import { colors } from "themes/colors";
import ButtonStyle from "styles/buttons/ButtonStyle";

const Button = styled.button`
    ${ButtonStyle}

    background-color: ${colors.button.delete.background.default};

    &:hover {
        background-color: ${colors.button.delete.background.hover};
    }
`;

const DeleteButton = ({ onClick }) => {
    return <Button onClick={onClick}>Delete</Button>;
};

export default DeleteButton;
