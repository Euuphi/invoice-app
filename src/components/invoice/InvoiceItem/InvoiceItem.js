import { useRouter } from "next/router";
import styled from "styled-components";
// Media Query
import screen from "styles/mediaQuery/screens";
import { useMediaQuery } from "@mui/material";
// Theme
import { colors } from "themes/colors";
// Components
import Id from "components/invoice/Id";
import DueDate from "./DueDate";
import Name from "./Name";
import Total from "./Total";
import StatusIcon from "components/icons/StatusIcon";
import RightArrowIcon from "./RightArrowIcon";
import Card from "components/layout/Card";

const Container = styled(Card)`
    // Additional styles to Card styled component
    && {
        padding: 1.7rem 3.2rem;
        padding-right: 2.2rem;
    }

    &:hover {
        border-color: ${colors.main.primary};
        cursor: pointer;
    }

    @media ${screen.tablet} {
        display: grid;
        grid-template-columns: 8fr 2fr;
        grid-row-columns: repeat(2, 1fr);
        row-gap: 2.4rem;
    }
`;

const FlexContainer = styled.div`
    display: flex;
    align-items: center;

    @media ${screen.mobileL} {
        flex-direction: column;
        align-items: flex-start;
        gap: 0.8rem;
    }
`;

const InvoiceItem = ({ id, clientName, dueDate, total, status }) => {
    const router = useRouter();

    // Route user to selected invoice
    const clickHandler = () => {
        router.push(`/invoices/${id}`);
    };

    const tabletScreen = useMediaQuery(screen.tablet);

    return (
        <Container onClick={clickHandler}>
            {!tabletScreen ? (
                <>
                    <Id text={id} />
                    <DueDate date={dueDate} />
                    <Name text={clientName} />
                    <Total total={total} />
                    <StatusIcon status={status} marginLeft="3.2rem" />
                    <RightArrowIcon />
                </>
            ) : (
                <>
                    <Id text={id} />
                    <Name text={clientName} />
                    <FlexContainer>
                        <DueDate date={dueDate} />
                        <Total total={total} />
                    </FlexContainer>
                    <StatusIcon status={status} marginLeft="3.2rem" />
                </>
            )}
        </Container>
    );
};

export default InvoiceItem;
