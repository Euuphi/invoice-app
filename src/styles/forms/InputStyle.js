import { css } from "styled-components";
import H3SecondaryStyle from "styles/headings/H3SecondaryStyle";

const InputStyle = css`
    ${H3SecondaryStyle}

    background-color: ${({ theme }) => theme.background.secondary};
    border: 1px solid ${({ theme }) => theme.form.border};
    border-radius: 0.4rem;
    color: ${({ theme }) => theme.text.primary};
    height: 4.8rem;
    padding: 0 2rem;
    width: 100%;

    &:focus {
        border-color: ${({ theme }) => theme.form.focus};
        outline: none;
    }

    &::placeholder {
        color: ${({ theme }) => theme.form.placeholder};
    }
`;

export default InputStyle;
