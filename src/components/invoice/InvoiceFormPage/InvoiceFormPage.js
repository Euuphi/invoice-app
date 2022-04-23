import styled from "styled-components";
import screen from "styles/mediaQuery/screens";
// Context
import { FormProvider } from "context/FormContext";
// Styles
import H2Style from "styles/headings/H2Style";
// Components
import Backdrop from "components/ui/Backdrop";
import InvoiceForm from "components/forms/InvoiceForm/";

const FormBackground = styled.div`
    background-color: ${({ theme }) => theme.form.background};
    border-radius: 0 2rem 2rem 0;
    height: 100vh;
    overflow-y: scroll;
    padding-left: 10.3rem;
    width: 72rem;

    /*----- Hide scroll bar -----*/
    /* Internet Explorer, Edge */
    -ms-overflow-style: none;
    /* Firefox */
    scrollbar-width: none;
    /* Chrome, Safari and Opera */
    &::-webkit-scrollbar {
        display: none;
    }

    @media ${screen.tabletL} {
        padding-left: 0;
        width: 62rem;
    }
`;

const FormContainer = styled.div`
    padding: 5.6rem;
    padding-bottom: 0;

    position: relative;
`;

const FormTitle = styled.h2`
    ${H2Style}

    margin-bottom: 5.6rem;
`;

const InvoiceFormPage = ({ formTitle, formStyle }) => {
    return (
        <Backdrop>
            <FormBackground>
                <FormContainer>
                    <FormTitle>{formTitle}</FormTitle>
                    <FormProvider>
                        <InvoiceForm formStyle={formStyle} />
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
