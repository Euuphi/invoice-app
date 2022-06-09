import styled from "styled-components";
import screen from "styles/mediaQuery/screens";
import { useTheme } from "styled-components";
import H3SecondaryStyle from "styles/headings/H3SecondaryStyle";

const IconBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;

    ${H3SecondaryStyle}

    background-color: ${({ backgroundColor }) => backgroundColor};
    border-radius: 0.6rem;
    color: ${({ textColor }) => textColor};
    margin-left: ${({ marginLeft }) => marginLeft};
    text-align: center;
    text-transform: capitalize;
    height: 4.4rem;
    width: 10.4rem;

    @media ${screen.tablet} {
        justify-self: right;
        margin-left: 0;
    }
`;

const Circle = styled.span`
    background-color: ${({ color }) => color};
    border-radius: 50%;
    height: 0.8rem;
    width: 0.8rem;
`;

/**
 * Icon that shows the status of an invoice as paid, pending or draft
 *
 * @param {string} status(required) - Status as a string ("paid" || "pending" || "draft")
 * @return {JSX} - Icon colored based on status
 */
const StatusIcon = ({ status, marginLeft }) => {
    const theme = useTheme();

    // Pick bakcground and text color based on value of status prop
    const backgroundColor = theme.icon.invoiceStatus[status].background;
    const textColor = theme.icon.invoiceStatus[status].text;

    return (
        <IconBox
            backgroundColor={backgroundColor}
            textColor={textColor}
            marginLeft={marginLeft}>
            <Circle color={textColor} />
            {status}
        </IconBox>
    );
};

export default StatusIcon;
