import FlexContainer from "components/layout/FlexContainer";
import Address from "../Address";
import DetailItem from "./DetailItem";

const ClientDetails = ({ name, address, email }) => {
    console.log(address);
    return (
        <FlexContainer flexDirection="column" gap="1.2rem">
            <DetailItem title="Bill to" value={name} />
            <Address address={address} gap="0.3rem" />
        </FlexContainer>
    );
};

export default ClientDetails;
