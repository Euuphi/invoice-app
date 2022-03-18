import { useRouter } from "next/router";
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
import Card from "components/layout/Card";

const Container = styled(Card)`
    && {
        padding: 1.7rem 3.2rem;
        padding-right: 2.2rem;
    }

    &:hover {
        border-color: ${colors.main.primary};
    }
`;

const InvoiceItem = ({ id, clientName, dueDate, total, status }) => {
    const router = useRouter();

    // Route user to selected invoice
    const clickHandler = () => {
        router.push(`/invoices/${id}`);
    };

    return (
        <Container onClick={clickHandler}>
            <Id text={id} />
            <DueDate date={dueDate} />
            <Name text={clientName} />
            <Total total={total} />
            <StatusIcon status={status} />
            <RightArrowIcon />
        </Container>
    );
};

export default InvoiceItem;
