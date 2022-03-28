import styled from "styled-components";
import ButtonStyle from "styles/buttons/ButtonStyle";

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

const SaveAsDraftButton = () => {
    return <Button>Save as Draft</Button>;
};

export default SaveAsDraftButton;
