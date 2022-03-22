import styled from "styled-components";
// Styles
import ParagraphSmStyle from "styles/text/ParagraphSmStyle";

const Table = styled.table`
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
    background-color: ${({ theme }) => theme.background.tertiary};

    padding: 3.2rem;
    text-align: right;
    width: 100%;

    & tr th:first-child,
    & tr td:first-child {
        text-align: left;
    }

    & tr {
        display: grid;
        grid-template-columns: 4fr 1fr 2fr 2fr;
    }

    & th {
        ${ParagraphSmStyle}
    }
`;

const InvoiceSubtotal = ({ items }) => {
    return (
        <Table>
            <tr>
                <th>Item Name</th>
                <th>QTY.</th>
                <th>Price</th>
                <th>Total</th>
            </tr>
            {items.map((item) => {
                return (
                    <tr key={item.name}>
                        <td>{item.name}</td>
                        <td>{item.quantity}</td>
                        <td>{item.price}</td>
                        <td>{item.total}</td>
                    </tr>
                );
            })}
        </Table>
    );
};

export default InvoiceSubtotal;
