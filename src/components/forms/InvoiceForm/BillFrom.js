import styled from "styled-components";
// Styles
import H3SecondaryStyle from "styles/headings/H3SecondaryStyle";
import { colors } from "themes/colors";

const FormSection = styled.fieldset`
    border: none;
`;

const FormSectionTitle = styled.legend`
    ${H3SecondaryStyle}

    color: ${colors.main.primary};
`;

const BillFrom = () => {
    return (
        <FormSection>
            <FormSectionTitle>Bill From</FormSectionTitle>
        </FormSection>
    );
};

export default BillFrom;
