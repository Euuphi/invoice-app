import styled from "styled-components";
import ButtonStyle from "styles/buttons/ButtonStyle";

// TODO: Add themes prop for reusability
const Button = styled.button`
    ${ButtonStyle}

    background-color: ${({ theme }) =>
        theme.button.saveDraft.background.default};
    color: ${({ theme }) => theme.button.saveDraft.text};

    &:hover {
        background-color: ${({ theme }) =>
            theme.button.saveDraft.background.hover};
    }
`;

const SaveAsDraftButton = ({ onClick, text }) => {
    return <Button onClick={onClick}>{text}</Button>;
};

export default SaveAsDraftButton;
