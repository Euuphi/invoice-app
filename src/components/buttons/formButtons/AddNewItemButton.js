import styled from "styled-components";
// Styles
import LightButtonStyle from "styles/buttons/LightButtonStyle";

const Button = styled.button`
    ${LightButtonStyle}

    width: 100%;
`;

const AddNewItemButton = ({ onClick }) => {
    return (
        <Button onClick={onClick} type="button">
            + Add New Item
        </Button>
    );
};

export default AddNewItemButton;
