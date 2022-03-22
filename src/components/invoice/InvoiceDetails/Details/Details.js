import GridContainer from "components/layout/GridContainer";
import ClientDetails from "./ClientDetails";
import Dates from "./Dates";

const Details = ({
    createdDate,
    dueDate,
    clientName,
    clientAddress,
    clientEmail,
}) => {
    return (
        <GridContainer columns="1fr 1fr 2fr" columnGap="5rem">
            <Dates createdDate={createdDate} dueDate={dueDate} />
            <ClientDetails
                name={clientName}
                address={clientAddress}
                email={clientEmail}
            />
            <div>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Similique deleniti sed vitae labore?
            </div>
        </GridContainer>
    );
};

export default Details;
