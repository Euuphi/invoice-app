import styled, { css } from "styled-components";
// Components
import Backdrop from "components/ui/Backdrop";
import H2 from "components/headings/H2";
import ParagraphMd from "components/text/ParagraphMd";
import ButtonStyle from "styles/buttons/ButtonStyle";
import PrimaryButtonStyle from "styles/buttons/PrimaryButtonStyle";

const ModalContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2.4rem;

    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    background-color: ${({ theme }) => theme.background.secondary};
    border-radius: 0.8rem;
    margin: auto;
    padding: 4.8rem;
    height: 25rem;
    width: 48rem;
`;

const ButtonsContainer = styled.div`
    display: flex;
    gap: 0.8rem;
    justify-content: flex-end;
    width: 100%;
`;

const ConfirmButton = styled.button`
    ${({ customStyle }) => customStyle};
`;

const CancelButton = styled.button`
    ${({ customStyle }) => customStyle};
`;

/**
 * Modal for action confirmation with backdrop
 *
 * @param {function} cancelOnClick - Click handler for cancel action
 * @param {function} confirmOnClick - Click handler for confirm action
 * @param {css} cancelButtonStyle - Styled-component css custom cancel button style
 * @param {css} confirmButtonStyle - Styled-component css Custom confirm button style
 * @param {string} confirmButtonText - Text for confirm button. Default - "Confirm"
 * @param {string} title - Modal title text
 * @param {string} body - Modal paragraph text
 * @return {JSX}
 */
const ConfirmationModal = ({
    cancelOnClick,
    confirmOnClick,
    cancelButtonStyle,
    confirmButtonStyle,
    confirmButtonText,
    title,
    body,
}) => {
    return (
        <Backdrop>
            <ModalContainer>
                <H2>{title}</H2>
                <ParagraphMd>{body}</ParagraphMd>
                <ButtonsContainer>
                    <CancelButton
                        onClick={cancelOnClick}
                        customStyle={cancelButtonStyle}>
                        Cancel
                    </CancelButton>
                    <ConfirmButton
                        onClick={confirmOnClick}
                        customStyle={confirmButtonStyle}>
                        {confirmButtonText || "Confirm"}
                    </ConfirmButton>
                </ButtonsContainer>
            </ModalContainer>
        </Backdrop>
    );
};

export default ConfirmationModal;

const CancelButtonStyle = css`
    ${ButtonStyle}

    background-color: ${({ theme }) => theme.button.light.background.default};
    color: ${({ theme }) => theme.button.light.text.default};
`;

const ConfirmButtonStyle = css`
    ${PrimaryButtonStyle}
`;

ConfirmationModal.defaultProps = {
    cancelButtonStyle: CancelButtonStyle,
    confirmButtonStyle: ConfirmButtonStyle,
};
