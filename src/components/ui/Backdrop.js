import styled from "styled-components";

/**
 * Wrapper component to display semi-transparent backdrop
 *
 * @param {boolean} hide - Control visibility of component. Default - false
 * @return {JSX} - Wrapper for backdrop
 */
const Backdrop = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: ${({ hide }) => (hide ? "none" : "block")};
`;

export default Backdrop;
