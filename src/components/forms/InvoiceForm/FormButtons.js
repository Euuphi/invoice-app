import SaveAsDraftButton from "components/buttons/formButtons/SaveAsDraft";
import SaveChangesButton from "components/buttons/formButtons/SaveChanges";
import styled from "styled-components";

const FormButtonsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 0.8rem;

    position: absolute;
    bottom: 0;
    left: 0;

    padding: 3rem 5.6rem;
    width: 100%;
`;

const FormButtons = () => {
    return (
        <FormButtonsContainer>
            <SaveAsDraftButton />
            <SaveChangesButton />
        </FormButtonsContainer>
    );
};

export default FormButtons;
