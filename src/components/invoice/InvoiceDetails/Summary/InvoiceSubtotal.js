import styled from "styled-components";
import { useMediaQuery } from "@mui/material";
import screen from "styles/mediaQuery/screens";
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

    & tbody {
        display: flex;
        flex-direction: column;
        gap: 3.2rem;
    }

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
    & .item-name {
        text-align: left;
    }

    /* Change text color for "Quantity" & "Price" column data */
    & .quantity,
    & .price {
        color: ${({ theme }) => theme.text.secondary};
    }

    @media ${screen.tablet} {
        & tr {
            grid-template-columns: 1fr 1fr;
        }

        & .item-name {
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }

        & .total {
            display: flex;
            align-items: center;
            justify-content: end;
        }
    }
`;

const InvoiceSubtotal = ({ items }) => {
    const tabletScreen = useMediaQuery(screen.tablet);

    return (
        <Table>
            {!tabletScreen && (
                <thead>
                    <tr>
                        <th className="item-name">Item Name</th>
                        <th>QTY.</th>
                        <th>Price</th>
                        <th>Total</th>
                    </tr>
                </thead>
            )}
            <tbody>
                {items.map((item) => {
                    return (
                        <tr key={item.name}>
                            <td className="item-name">
                                <span>{item.name}</span>
                                {tabletScreen && (
                                    <span className="quantity price">
                                        {item.quantity}
                                        &nbsp;&nbsp; x &nbsp;&nbsp;
                                        {convertCurrency(item.price)}
                                    </span>
                                )}
                            </td>
                            {!tabletScreen && (
                                <>
                                    <td className="quantity">
                                        {item.quantity}
                                    </td>
                                    <td className="price">
                                        {convertCurrency(item.price)}
                                    </td>
                                </>
                            )}
                            <td className="total">
                                {convertCurrency(item.total)}
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </Table>
    );
};

export default InvoiceSubtotal;
