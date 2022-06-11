import styled from "styled-components";
// Context
import { FormProvider } from "context/FormContext";
import { useDispatch } from "react-redux";
import { pageScrollOn } from "stores/actions/uiActions";
import {
    hideForm,
    resetAllInputErrors,
    setSubmitting,
} from "stores/actions/formActions";
import { resetInputs } from "stores/actions/formInputActions";
// Styles
import H2Style from "styles/headings/H2Style";
// Media Query
import { useMediaQuery } from "@mui/material";
import screen from "styles/mediaQuery/screens";
// Components
import Backdrop from "components/ui/Backdrop";
import InvoiceForm from "components/forms/InvoiceForm/";
import GoBackButton from "components/buttons/GoBackButton";
import FlexContainer from "components/layout/FlexContainer";

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

    @media ${screen.tabletS} {
        width: 100vw;
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

    @media ${screen.tabletS} {
        margin-bottom: 3.2rem;
    }
`;

const InvoiceFormPage = ({ formTitle, formStyle }) => {
    const dispatch = useDispatch();
    const tabletSmallScreen = useMediaQuery(screen.tabletS);

    const goBackHandler = () => {
        dispatch(hideForm());
        dispatch(pageScrollOn());
        dispatch(resetInputs());
        dispatch(resetAllInputErrors());
        dispatch(setSubmitting(false));
    };

    return (
        <Backdrop>
            <FormBackground>
                <FormContainer>
                    <FlexContainer flexDirection="column" gap="1.2rem">
                        {tabletSmallScreen && (
                            <GoBackButton onClick={goBackHandler} />
                        )}
                        <FormTitle>{formTitle}</FormTitle>
                    </FlexContainer>
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
