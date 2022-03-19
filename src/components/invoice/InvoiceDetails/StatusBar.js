// Components
import Card from "components/layout/Card";
// Styles
import ParagraphMd from "components/text/ParagraphMd";
import StatusIcon from "../../icons/StatusIcon";
import CenteredContainer from "components/layout/CenteredContainer";

const StatusBar = ({ status }) => {
    return (
        <Card justifyContent="space-between">
            <CenteredContainer gap="2.4rem">
                <ParagraphMd>Status</ParagraphMd>
                <StatusIcon status={status} />
            </CenteredContainer>
            <CenteredContainer>Buttons</CenteredContainer>
        </Card>
    );
};

export default StatusBar;
