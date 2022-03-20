import styled from "styled-components";
// Styles
import { colors } from "themes/colors";
import ButtonStyle from "styles/buttons/ButtonStyle";

const Button = styled.button`
    ${ButtonStyle}

    background-color: ${({ theme }) => theme.button.edit.background.default};
    color: ${({ theme }) => theme.button.edit.text.default};

    &:hover {
        background-color: ${({ theme }) => theme.button.edit.background.hover};
        color: ${({ theme }) => theme.button.edit.text.hover};
    }
`;

const EditButton = ({ onClick }) => {
    return <Button onClick={onClick}>Edit</Button>;
};

export default EditButton;
