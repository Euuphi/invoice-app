import styled from "styled-components";
// Styles
import EditButtonStyle from "styles/buttons/EditButtonStyle";

const Button = styled.button`
    ${EditButtonStyle}
`;

const EditButton = ({ onClick }) => {
    return <Button onClick={onClick}>Edit</Button>;
};

export default EditButton;
