import styled from "styled-components";
import PrimaryButtonStyle from "styles/buttons/PrimaryButtonStyle";

const Button = styled.button`
    ${PrimaryButtonStyle}
`;

const SaveChangesButton = ({ onClick }) => {
    return <Button onClick={onClick}>Save Changes</Button>;
};

export default SaveChangesButton;
