import styled from "styled-components";
import convertDate from "functions/convertData";
// Component
import ParagraphMdStyle from "styles/text/ParagraphMdStyle";

const Text = styled.p`
    ${ParagraphMdStyle}

    color: ${({ theme }) => theme.invoiceItem.dueDate.date};
    display: inline-block;

    width: 15rem;

    & span {
        color: ${({ theme }) => theme.invoiceItem.dueDate.due};
        padding-right: 0.5rem;
    }
`;

/**
 * Create text element that reformats and displays a date string
 *
 * @param {string} date - Format ("YYYY-MM-DD") eg. 2018-03-20
 * @return {JSX} <p> element with date formatted to ("dd MMM yyyy ") eg. 20 Mar 2018
 */
const DueDate = ({ date }) => {
    const dateString = convertDate(date);

    return (
        <Text>
            <span>Due</span> {dateString}
        </Text>
    );
};

export default DueDate;
