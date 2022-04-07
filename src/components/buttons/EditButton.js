import { useDispatch } from "react-redux";
import { createNewInvoice } from "stores/actions/formActions";
import styled from "styled-components";
// Styles
import LightButtonStyle from "styles/buttons/LightButtonStyle";

const Button = styled.button`
    ${LightButtonStyle}
`;

const EditButton = () => {
    const dispatch = useDispatch();

    const editHandler = () => {
        dispatch(createNewInvoice());
    };

    return <Button onClick={editHandler}>Edit</Button>;
};

export default EditButton;
