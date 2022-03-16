import styled from "styled-components";
// Theme
import { colors } from "themes/colors";
// Components
import Id from "./Id";
import DueDate from "./DueDate";
import Name from "./Name";
import Total from "./Total";
import StatusIcon from "./StatusIcon";
import RightArrowIcon from "./RightArrowIcon";

const Container = styled.div`
    display: flex;
    align-items: center;

    background-color: ${({ theme }) => theme.background.secondary};
    border: 1px solid transparent;
    border-radius: 0.8rem;
    box-shadow: 0 1rem 1rem ${({ theme }) => theme.shadow.light};
    height: 8rem;
    padding-left: 3.2rem;
    padding-right: 2.2rem;

    &:hover {
        border-color: ${colors.main.primary};
    }
`;

const InvoiceItem = ({ id, clientName, dueDate, total, status }) => {
    // TODO: Route user to selected invoice
    const clickHandler = () => {
        console.log(`Invoice item: ${id} clicked`);
    };

    return (
        <Container onClick={clickHandler}>
            <Id>
                <span>#</span>
                {id}
            </Id>
            <DueDate date={dueDate} />
            <Name>{clientName}</Name>
            <Total total={total} />
            <StatusIcon status={status} />
            <RightArrowIcon />
        </Container>
    );
};

export default InvoiceItem;
