import styled from "styled-components";
import screen from "styles/mediaQuery/screens";
// Logo
import LogoSVG from "images/svgs/logo.svg";
// Colors
import { colors } from "themes/colors";

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${colors.main.primary};
    border-radius: 0 20px 20px 0;
    height: ${({ size }) => `${size}px`};
    overflow: hidden;
    width: ${({ size }) => `${size}px`};
    position: relative;

    &::after {
        content: "";
        position: absolute;
        bottom: 0;

        background-color: ${colors.main.tint};
        border-radius: 20px 0 0 0;
        height: 50%;
        width: 100%;
    }
`;

const LogoIcon = styled(LogoSVG)`
    z-index: 1;
`;

const Logo = ({ size }) => {
    const height = Math.round(size * 0.39);
    const width = Math.round(size * 0.42);

    return (
        <Container size={size}>
            <LogoIcon height={height} width={width} />
        </Container>
    );
};

export default Logo;
