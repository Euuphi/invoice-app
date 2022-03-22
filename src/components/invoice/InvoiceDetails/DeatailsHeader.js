// Components
import FlexContainer from "components/layout/FlexContainer";
import CenteredContainer from "components/layout/CenteredContainer";
import Id from "../Id";
import { useTheme } from "styled-components";
import ParagraphMd from "components/text/ParagraphMd";
// Styles
import H3Style from "styles/headings/H3Style";
import Address from "./Address";

const DeatailsHeader = ({ id, description, senderAddress }) => {
    const theme = useTheme();
    return (
        <FlexContainer justifyContent="space-between" width="100%">
            <FlexContainer flexDirection="column" gap="1.2rem">
                <Id text={id} textStyle={H3Style} hashColor="#888eb0" />
                <ParagraphMd color={theme.text.tertiary}>
                    {description}
                </ParagraphMd>
            </FlexContainer>
            <Address address={senderAddress} gap="0.8rem" textAlign="right" />
        </FlexContainer>
    );
};

export default DeatailsHeader;
