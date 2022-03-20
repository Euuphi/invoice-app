// Components
import Card from "components/layout/Card";
// Styles
import ParagraphMd from "components/text/ParagraphMd";
import StatusIcon from "../../icons/StatusIcon";
import CenteredContainer from "components/layout/CenteredContainer";
import DeleteButton from "components/buttons/DeleteButton";
import EditButton from "components/buttons/EditButton";
import MarkAsPaidButton from "components/buttons/MarkAsPaidButton";

const StatusBar = ({ status }) => {
    return (
        <Card justifyContent="space-between">
            <CenteredContainer gap="2.4rem">
                <ParagraphMd>Status</ParagraphMd>
                <StatusIcon status={status} />
            </CenteredContainer>
            <CenteredContainer gap="0.8rem">
                <EditButton />
                <DeleteButton />
                <MarkAsPaidButton />
            </CenteredContainer>
        </Card>
    );
};

export default StatusBar;
