import styled from "styled-components";
import { useSelector } from "react-redux";

const BackgroundContainer = styled.div`
    background-color: ${({ theme }) => theme.background.primary};
    min-height: 100vh;
    padding: 7.1rem 0;
    position: relative;

    overflow-y: ${({ pageScroll }) => (pageScroll ? "visible" : "hidden")};
    height: ${({ pageScroll }) => (pageScroll ? "100%" : "100vh")};
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
