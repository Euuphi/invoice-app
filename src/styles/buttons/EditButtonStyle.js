import { css } from "styled-components";
import ButtonStyle from "./ButtonStyle";

const EditButtonStyle = css`
    ${ButtonStyle}

    background-color: ${({ theme }) => theme.button.edit.background.default};
    color: ${({ theme }) => theme.button.edit.text.default};

    &:hover {
        background-color: ${({ theme }) => theme.button.edit.background.hover};
        color: ${({ theme }) => theme.button.edit.text.hover};
    }
`;

export default EditButtonStyle;
