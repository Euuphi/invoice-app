import styled from "styled-components";
// Styles
import H3Style from "styles/headings/H3Style";
import ParagraphMdStyle from "styles/text/ParagraphMdStyle";
// Components
import FlexContainer from "components/layout/FlexContainer";

const DetailTitle = styled.h2`
    ${ParagraphMdStyle}
`;

const DetailText = styled.p`
    ${H3Style}
    font-size: 1.5rem;
`;

/**
 * Create element with title and body text
 *
 * @param {string} title - String of detail title
 * @param {string} value - String of detail value
 * @return {JSX}
 */
const DetailItem = ({ title, value }) => {
    return (
        <FlexContainer flexDirection="column" gap="1.2rem">
            <DetailTitle>{title}</DetailTitle>
            <DetailText>{value}</DetailText>
        </FlexContainer>
    );
};

export default DetailItem;
