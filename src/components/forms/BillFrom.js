import styled from "styled-components";
// Styles
import H3SecondaryStyle from "styles/headings/H3SecondaryStyle";
import { colors } from "themes/colors";
// Components
import FormSection from "./FormSection";
import TextInput from "./TextInput";

const FormSectionTitle = styled.legend`
    ${H3SecondaryStyle}

    color: ${colors.main.primary};
    margin-bottom: 2.4rem;
`;

const BillFrom = () => {
    return (
        <FormSection>
            <FormSectionTitle>Bill From</FormSectionTitle>
            <TextInput
                name="streetAddress"
                label="Street Address"
                fullGridColumn
            />
            <TextInput name="city" label="City" />
            <TextInput name="postCode" label="Post Code" />
            <TextInput name="country" label="Country" />
        </FormSection>
    );
};

export default BillFrom;
