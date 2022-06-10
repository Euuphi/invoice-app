import GridContainer from "components/layout/GridContainer";
import ClientDetails from "./ClientDetails";
import Dates from "./Dates";
import DetailInfo from "./DetailInfo";
// Media Query
import { useMediaQuery } from "@mui/material";
import screen from "styles/mediaQuery/screens";

const Details = ({
    createdDate,
    dueDate,
    clientName,
    clientAddress,
    clientEmail,
}) => {
    const tabletSmallScreen = useMediaQuery(screen.tabletS);

    return (
        <GridContainer
            columns={!tabletSmallScreen ? "1fr 1fr 2fr" : "1fr 1fr"}
            columnGap="5rem"
            rowGap="3.5rem"
            width="100%">
            <Dates createdDate={createdDate} dueDate={dueDate} />
            <ClientDetails
                name={clientName}
                address={clientAddress}
                email={clientEmail}
            />
            <DetailInfo title="Sent to" value={clientEmail} />
        </GridContainer>
    );
};

export default Details;
