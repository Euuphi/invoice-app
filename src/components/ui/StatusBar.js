// Media Query
import { useMediaQuery } from "@mui/material";
import screen from "styles/mediaQuery/screens";
// Components
import ParagraphMd from "components/text/ParagraphMd";
import StatusIcon from "components/icons/StatusIcon";
import CenteredContainer from "components/layout/CenteredContainer";

/**
 * Status box displaying statuses with different colors
 *
 * @param {string} status - String specifying status eg. "paid" || "pending" || draft
 * @return {JSX}
 */
const StatusBar = ({ status }) => {
    const tabletScreen = useMediaQuery(screen.tablet);

    return (
        <CenteredContainer
            gap="2.4rem"
            justifyContent="space-between"
            width={!tabletScreen ? "auto" : "100%"}>
            <ParagraphMd>Status</ParagraphMd>
            <StatusIcon status={status} />
        </CenteredContainer>
    );
};

export default StatusBar;
