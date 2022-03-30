import styled from "styled-components";
// Styles
import DeleteButtonStyle from "styles/buttons/DeleteButtonStyle";

const Button = styled.button`
    ${DeleteButtonStyle}
`;

const DeleteButton = ({ onClick }) => {
    return <Button onClick={onClick}>Delete</Button>;
};

export default DeleteButton;
