import { css } from "styled-components";
import ButtonStyle from "./ButtonStyle";
import { colors } from "themes/colors";

const PrimaryButtonStyle = css`
    ${ButtonStyle}

    background-color: ${colors.main.primary};

    &:hover {
        background-color: ${colors.main.tint};
    }
`;

export default PrimaryButtonStyle;
