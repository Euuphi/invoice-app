import GridContainer from "components/layout/GridContainer";
import Dates from "./Dates";

const Details = ({ createdDate, dueDate }) => {
    return (
        <GridContainer columns="1fr 1fr 2fr" columnGap="5rem">
            <Dates createdDate={createdDate} dueDate={dueDate} />
            <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                explicabo cum provident distinctio nemo.
            </div>
            <div>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Similique deleniti sed vitae labore?
            </div>
        </GridContainer>
    );
};

export default Details;
