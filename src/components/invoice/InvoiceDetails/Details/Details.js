import GridContainer from "components/layout/GridContainer";
import ClientDetails from "./ClientDetails";
import Dates from "./Dates";
import DetailInfo from "./DetailInfo";

const Details = ({
    createdDate,
    dueDate,
    clientName,
    clientAddress,
    clientEmail,
}) => {
    return (
        <GridContainer columns="1fr 1fr 2fr" columnGap="5rem" width="100%">
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
