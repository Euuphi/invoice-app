// Components
import Card from "components/layout/Card";
// Styles
import ParagraphMd from "components/text/ParagraphMd";
import StatusIcon from "../../icons/StatusIcon";

const StatusBar = ({ status }) => {
    return (
        <Card>
            <ParagraphMd>Status</ParagraphMd>
            <StatusIcon status={status} marginLeft="1.6rem" />
        </Card>
    );
};

export default StatusBar;
