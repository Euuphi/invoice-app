import styled from "styled-components";
// Styles
import EditButtonStyle from "styles/buttons/EditButtonStyle";

const Button = styled.button`
    ${EditButtonStyle}

    width: 100%;
`;

const AddNewItemButton = ({ onClick }) => {
    return <Button onClick={onClick}>+ Add New Item</Button>;
};

export default AddNewItemButton;
