import convertCurrency from "functions/convertCurrency";
import styled from "styled-components";
import screen from "styles/mediaQuery/screens";
// Styles
import H3Style from "styles/headings/H3Style";

const Span = styled.p`
    ${H3Style}

    display: inline-block;
    text-align: right;
    width: 12rem;

    @media ${screen.tablet} {
        text-align: left;
    }
`;

/**
 * Create text element that formats a number into a string for EUR currency.
 *
 * @param {number} total - Currency value as a number eg. 1800.9
 * @return {JSX} - <p> element with input number formatted into EUR currency eg. £ 1,800.9
 */
const Total = ({ total }) => {
    const formattedTotal = convertCurrency(total);

    return <Span>{formattedTotal}</Span>;
};

export default Total;
