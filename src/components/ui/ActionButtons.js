// Components
import CenteredContainer from "components/layout/CenteredContainer";
import DeleteButton from "components/buttons/DeleteButton";
import EditButton from "components/buttons/EditButton";
import MarkAsPaidButton from "components/buttons/MarkAsPaidButton";

const ActionButtons = ({ status }) => {
    return (
        <CenteredContainer gap="0.8rem">
            <EditButton />
            <DeleteButton />
            <MarkAsPaidButton status={status} />
        </CenteredContainer>
    );
};

export default ActionButtons;
