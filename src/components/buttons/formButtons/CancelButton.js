import styled from "styled-components";
import ButtonStyle from "styles/buttons/ButtonStyle";

const Button = styled.button`
    ${ButtonStyle}

    background-color: ${({ theme }) => theme.button.discard.background.default};
    color: ${({ theme }) => theme.button.discard.text.default};
    margin: ${({ margin }) => margin || 0};
`;

const CancelButton = ({ onClick, text, margin }) => {
    return (
        <Button onClick={onClick} type="button" margin={margin}>
            {text}
        </Button>
    );
};

export default CancelButton;
