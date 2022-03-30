import { css } from "styled-components";
import ButtonStyle from "./ButtonStyle";

const LightButtonStyle = css`
    ${ButtonStyle}

    background-color: ${({ theme }) => theme.button.light.background.default};
    color: ${({ theme }) => theme.button.light.text.default};

    &:hover {
        background-color: ${({ theme }) => theme.button.light.background.hover};
        color: ${({ theme }) => theme.button.light.text.hover};
    }
`;

export default LightButtonStyle;
