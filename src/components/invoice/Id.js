import styled from "styled-components";
// Styles
import H3SecondaryStyle from "styles/headings/H3SecondaryStyle";

const TextContainer = styled.p`
    ${({ fontStyle }) => fontStyle};

    display: inline-block;
    width: 10rem;

    & span {
        color: #7e88c3;
    }
`;

/**
 * Create <p> element with text in the form of "#text" eg. #RT3080
 *
 * @param {string} text - String of text to display
 * @param {css} textStyle - Styled-components css
 * @return {JSX} <p> element of styled text
 */
const Id = ({ text, textStyle }) => {
    return (
        <TextContainer fontStyle={textStyle}>
            <span>#</span>
            {text}
        </TextContainer>
    );
};

export default Id;

Id.defaultProps = {
    textStyle: H3SecondaryStyle,
};
