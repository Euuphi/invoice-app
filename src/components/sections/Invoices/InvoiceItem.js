import styled from "styled-components";
// Theme
import { colors } from "themes/colors";

const Container = styled.div`
    background-color: ${({ theme }) => theme.background.secondary};
    border: 1px solid transparent;
    border-radius: 0.8rem;
    box-shadow: 0 1rem 1rem ${({ theme }) => theme.shadow.light};
    height: 8rem;

    &:hover {
        border-color: ${colors.main.primary};
    }
`;

const Id = styled.span``;

const InvoiceItem = () => {
    return (
        <Container>
            <Id></Id>
        </Container>
    );
};

export default InvoiceItem;
