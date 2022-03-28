import styled from "styled-components";
import PrimaryButtonStyle from "styles/buttons/PrimaryButtonStyle";

const Button = styled.button`
    ${PrimaryButtonStyle}
`;

const MarkAsPaidButton = ({ onClick }) => {
    return <Button onClick={onClick}>Mark as Paid</Button>;
};

export default MarkAsPaidButton;
