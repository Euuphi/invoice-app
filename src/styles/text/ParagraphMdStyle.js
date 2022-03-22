import { css } from "styled-components";

const ParagraphMdStyle = css`
    color: ${({ theme, color }) => (color ? color : theme.text.secondary)};
    font-size: 1.2rem;
    font-weight: 500;
    letter-spacing: -0.25px;
    line-height: 1.5rem;
`;

export default ParagraphMdStyle;
