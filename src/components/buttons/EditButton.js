import { useDispatch } from "react-redux";
import { showForm } from "stores/actions/formActions";
import { pageScrollOff } from "stores/actions/uiActions";
import styled from "styled-components";
// Styles
import LightButtonStyle from "styles/buttons/LightButtonStyle";

const Button = styled.button`
    ${LightButtonStyle}
`;

const EditButton = () => {
    const dispatch = useDispatch();

    const editHandler = () => {
        dispatch(showForm());
        dispatch(pageScrollOff());
    };

    return <Button onClick={editHandler}>Edit</Button>;
};

export default EditButton;
