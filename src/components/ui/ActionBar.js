// Components
import Card from "components/layout/Card";
// Styles
import CenteredContainer from "components/layout/CenteredContainer";
import DeleteButton from "components/buttons/DeleteButton";
import EditButton from "components/buttons/EditButton";
import MarkAsPaidButton from "components/buttons/MarkAsPaidButton";
import StatusBar from "./StatusBar";

const ActionBar = ({ status }) => {
    return (
        <Card justifyContent="space-between">
            <StatusBar status={status} />
            <CenteredContainer gap="0.8rem">
                <EditButton />
                <DeleteButton />
                <MarkAsPaidButton />
            </CenteredContainer>
        </Card>
    );
};

export default ActionBar;
