// Components
import FlexContainer from "components/layout/FlexContainer";
import DetailInfo from "./DetailInfo";
import convertDate from "functions/convertDate";

const Dates = ({ createdDate, dueDate }) => {
    return (
        <FlexContainer flexDirection="column" gap="3.2rem">
            <DetailInfo title="Invoice Date" value={convertDate(createdDate)} />
            <DetailInfo title="Payment Due" value={convertDate(dueDate)} />
        </FlexContainer>
    );
};

export default Dates;
