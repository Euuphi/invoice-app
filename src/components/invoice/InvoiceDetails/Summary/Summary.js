import styled from "styled-components";
// Components
import InvoiceSubtotal from "./InvoiceSubtotal";
import InvoiceTotal from "./InvoiceTotal";

const Container = styled.div`
    border-radius: 0.8rem;
    overflow: hidden;
    width: 100%;
`;

const Summary = ({ items, total }) => {
    return (
        <Container>
            <InvoiceSubtotal items={items} />
            <InvoiceTotal total={total} />
        </Container>
    );
};

export default Summary;
