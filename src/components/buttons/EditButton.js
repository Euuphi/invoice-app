import styled from "styled-components";
// Styles
import LightButtonStyle from "styles/buttons/LightButtonStyle";

const Button = styled.button`
    ${LightButtonStyle}
`;

const EditButton = ({ onClick }) => {
    return <Button onClick={onClick}>Edit</Button>;
};

export default EditButton;
