import { H3SecondaryStyle } from "components/headings/H3Secondary";
import styled from "styled-components";
import { useTheme } from "styled-components";

const IconBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;

    ${H3SecondaryStyle}

    background-color: ${({ backgroundColor }) => backgroundColor};
    border-radius: 0.6rem;
    color: ${({ textColor }) => textColor};
    margin-left: auto;
    text-align: center;
    text-transform: capitalize;
    height: 4.4rem;
    width: 10.4rem;
`;

const Circle = styled.span`
    background-color: ${({ color }) => color};
    border-radius: 50%;
    height: 0.8rem;
    width: 0.8rem;
`;

const StatusIcon = ({ status }) => {
    const theme = useTheme();

    const backgroundColor = theme.icon.invoiceStatus[status].background;
    const textColor = theme.icon.invoiceStatus[status].text;

    return (
        <IconBox backgroundColor={backgroundColor} textColor={textColor}>
            <Circle color={textColor} />
            {status}
        </IconBox>
    );
};

export default StatusIcon;
