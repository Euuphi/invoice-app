import styled from "styled-components";
// Styles
import { H3Style } from "components/headings/H3";

const Span = styled.p`
    ${H3Style}

    display: inline-block;
    text-align: right;
    width: 12rem;
`;

/**
 * Create text element that formats a number into a string for EUR currency.
 *
 * @param {number} total - Currency value as a number eg. 1800.9
 * @return {JSX} - <p> element with input number formatted into EUR currency eg. £ 1,800.9
 */
const Total = ({ total }) => {
    const currencyFormatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "EUR",
    });

    const totalFormat = currencyFormatter.format(total).replace("€", "£ ");

    return <Span>{totalFormat}</Span>;
};

export default Total;
