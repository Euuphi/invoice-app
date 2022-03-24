import styled from "styled-components";
// Styles
import H3SecondaryStyle from "styles/headings/H3SecondaryStyle";
import { colors } from "themes/colors";

const FormGroupTitle = styled.legend`
    ${H3SecondaryStyle}

    color: ${colors.main.primary};
    margin-bottom: 2.4rem;
`;

export default FormGroupTitle;
