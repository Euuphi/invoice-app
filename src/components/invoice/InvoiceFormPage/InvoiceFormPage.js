import styled from "styled-components";
// Context
import { FormProvider } from "context/FormContext";
// Styles
import H2Style from "styles/headings/H2Style";
// Components
import Backdrop from "components/ui/Backdrop";
import InvoiceForm from "components/forms/InvoiceForm/";

const FormBackground = styled.div`
    background-color: ${({ theme }) => theme.form.background};
    border-radius: 2rem;
    padding-left: 10.3rem;
    width: 72rem;
`;

const FormContainer = styled.div`
    padding: 5.6rem;
    padding-bottom: 9.2rem;

    position: relative;
`;

const FormTitle = styled.h2`
    ${H2Style}

    margin-bottom: 5.6rem;
`;

const InvoiceFormPage = ({ formTitle }) => {
    return (
        <Backdrop>
            <FormBackground>
                <FormContainer>
                    <FormTitle>{formTitle}</FormTitle>
                    <FormProvider>
                        <InvoiceForm />
                    </FormProvider>
                </FormContainer>
            </FormBackground>
        </Backdrop>
    );
};

export default InvoiceFormPage;

InvoiceFormPage.defaultProps = {
    formTitle: "New Invoice",
};
