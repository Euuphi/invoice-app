import styled from "styled-components";
import PrimaryButtonStyle from "styles/buttons/PrimaryButtonStyle";

const Button = styled.button`
    ${PrimaryButtonStyle}
`;

const SaveButton = ({ onClick, text }) => {
    return <Button onClick={onClick}>{text}</Button>;
};

export default SaveButton;
