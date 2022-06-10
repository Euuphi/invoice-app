import styled from "styled-components";
import screen from "styles/mediaQuery/screens";
import { useSelector } from "react-redux";

const BackgroundContainer = styled.div`
    background-color: ${({ theme }) => theme.background.primary};
    min-height: 100vh;
    padding: 7.1rem 0;
    position: relative;

    overflow-y: ${({ pageScroll }) => (pageScroll ? "visible" : "hidden")};
    height: ${({ pageScroll }) => (pageScroll ? "100%" : "100vh")};

    @media ${screen.laptop} {
        padding-left: 10.3rem;
    }

    @media ${screen.tabletL} {
        padding: 7.1rem 4.8rem;
    }

    @media ${screen.tabletS} {
        padding: 3.2rem 2.4rem;
    }
`;

const Background = ({ as, children }) => {
    const pageScroll = useSelector((state) => state.ui.pageScroll);

    return (
        <BackgroundContainer pageScroll={pageScroll} as={as ? as : "div"}>
            {children}
        </BackgroundContainer>
    );
};

export default Background;
