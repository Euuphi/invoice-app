import styled from "styled-components";
import ButtonStyle from "styles/buttons/ButtonStyle";

const Button = styled.button`
    ${ButtonStyle}

    background-color: ${({ theme }) => theme.button.discard.background.default};
    color: ${({ theme }) => theme.button.discard.text.default};
    margin-right: auto;
`;

const DiscardButton = ({ onClick }) => {
    return <Button onClick={onClick}>Discard</Button>;
};

export default DiscardButton;
