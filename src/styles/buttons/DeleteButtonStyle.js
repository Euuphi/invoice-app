import { css } from "styled-components";
import { colors } from "themes/colors";
import ButtonStyle from "./ButtonStyle";

const DeleteButtonStyle = css`
    ${ButtonStyle}

    background-color: ${colors.button.delete.background.default};

    &:hover {
        background-color: ${colors.button.delete.background.hover};
    }
`;

export default DeleteButtonStyle;
