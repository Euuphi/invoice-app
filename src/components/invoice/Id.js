import styled from "styled-components";
// Styles
import H3SecondaryStyle from "styles/headings/H3SecondaryStyle";

const TextContainer = styled.p`
    ${({ textStyle }) => textStyle};

    display: inline-block;
    width: 10rem;

    & span {
        color: ${({ hashColor }) => hashColor};
    }
`;

/**
 * Create <p> element with text in the form of "#text" eg. #RT3080
 *
 * @param {string} text - String of text to display
 * @param {css} textStyle - Styled-components css
 * @param {string} hashColor - Color of "#" as a string
 * @return {JSX} <p> element of styled text
 */
const Id = ({ text, textStyle, hashColor }) => {
    return (
        <TextContainer textStyle={textStyle} hashColor={hashColor}>
            <span>#</span>
            {text}
        </TextContainer>
    );
};

export default Id;

Id.defaultProps = {
    textStyle: H3SecondaryStyle,
    hashColor: "#7e88c3",
};
