import styled from "styled-components";
// Theme
import { colors } from "themes/colors";
// Styles
import { H3SecondaryStyle } from "components/headings/H3Secondary";
import { ParagraphMdStyle } from "components/text/ParagraphMd";
// Components
import DueDate from "./DueDate";
import Total from "./Total";

const Container = styled.div`
    display: flex;
    align-items: center;

    background-color: ${({ theme }) => theme.background.secondary};
    border: 1px solid transparent;
    border-radius: 0.8rem;
    box-shadow: 0 1rem 1rem ${({ theme }) => theme.shadow.light};
    height: 8rem;
    padding: 0 3.2rem;

    &:hover {
        border-color: ${colors.main.primary};
    }
`;

const Id = styled.p`
    ${H3SecondaryStyle};

    color: ${({ theme }) => theme.text.primary};
    display: inline-block;
    font-size: 1.4rem;
    width: 10rem;

    & span {
        color: #7e88c3;
    }
`;

const Name = styled.p`
    ${ParagraphMdStyle}

    color: ${({ theme }) => theme.invoiceItem.name};
    display: inline-block;
    font-size: 1.4rem;
    margin-right: 3rem;
`;

const InvoiceItem = ({ id, clientName, dueDate, total }) => {
    return (
        <Container>
            <Id>
                <span>#</span>
                {id}
            </Id>
            <DueDate date={dueDate} />
            <Name>{clientName}</Name>
            <Total total={total} />
        </Container>
    );
};

export default InvoiceItem;
