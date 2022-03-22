// Components
import FlexContainer from "components/layout/FlexContainer";
import DetailItem from "./DetailItem";
import convertDate from "functions/convertDate";

const Dates = ({ createdDate, dueDate }) => {
    return (
        <FlexContainer flexDirection="column" gap="3.2rem">
            <DetailItem title="Invoice Date" value={convertDate(createdDate)} />
            <DetailItem title="Payment Due" value={convertDate(dueDate)} />
        </FlexContainer>
    );
};

export default Dates;
