import { css } from "styled-components";

const ParagraphSmStyle = css`
    color: ${({ theme, color }) => (color ? color : theme.text.secondary)};
    font-size: 1.1rem;
    font-weight: 500;
    letter-spacing: -0.23px;
    line-height: 1.8rem;
`;

export default ParagraphSmStyle;
