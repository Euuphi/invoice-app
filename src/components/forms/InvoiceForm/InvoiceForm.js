import styled from "styled-components";
// Styles
import H2Style from "styles/headings/H2Style";
// Components
import Backdrop from "components/ui/Backdrop";
import BillFrom from "./BillFrom";

const Background = styled.div`
    background-color: ${({ theme }) => theme.background.form};
    border-radius: 2rem;
    padding-left: 10.3rem;
    width: 72rem;
    height: 100vh;
`;

const FormContainer = styled.div`
    padding: 5.6rem;
`;

const FormTitle = styled.h2`
    ${H2Style}

    margin-bottom: 5.6rem;
`;
const InvoiceForm = ({ formTitle }) => {
    return (
        <Backdrop>
            <Background>
                <FormContainer>
                    <FormTitle>{formTitle}</FormTitle>
                    <form>
                        <BillFrom />
                    </form>
                </FormContainer>
            </Background>
        </Backdrop>
    );
};

export default InvoiceForm;

InvoiceForm.defaultProps = {
    formTitle: "New Invoice",
};
