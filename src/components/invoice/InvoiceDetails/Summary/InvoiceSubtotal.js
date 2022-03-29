import styled from "styled-components";
// Styles
import ParagraphSmStyle from "styles/text/ParagraphSmStyle";
import H3SecondaryStyle from "styles/headings/H3SecondaryStyle";
import convertCurrency from "functions/convertCurrency";

const Table = styled.table`
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
    background-color: ${({ theme }) => theme.background.tertiary};

    padding: 3.2rem;
    text-align: right;
    width: 100%;

    & tr {
        display: grid;
        grid-template-columns: 4fr 1fr 2fr 2fr;
    }

    & th {
        ${ParagraphSmStyle}
    }

    /* All column data */
    & tr td {
        ${H3SecondaryStyle}
    }

    /* Left align "Item Name" column */
    & tr th:first-child,
    & tr td:first-child {
        text-align: left;
    }

    /* Change text color for "Quantity" & "Price" column data */
    & tr td:nth-child(2),
    & tr td:nth-child(3) {
        color: ${({ theme }) => theme.text.secondary};
    }
`;

const InvoiceSubtotal = ({ items }) => {
    return (
        <Table>
            <thead>
                <tr>
                    <th>Item Name</th>
                    <th>QTY.</th>
                    <th>Price</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody>
                {items.map((item) => {
                    return (
                        <tr key={item.name}>
                            <td>{item.name}</td>
                            <td>{item.quantity}</td>
                            <td>{convertCurrency(item.price)}</td>
                            <td>{convertCurrency(item.total)}</td>
                        </tr>
                    );
                })}
            </tbody>
        </Table>
    );
};

export default InvoiceSubtotal;
