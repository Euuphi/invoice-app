import { useRouter } from "next/router";
import styled from "styled-components";
// Styles
import { H3SecondaryStyle } from "components/headings/H3Secondary";
// Icon
import LeftArrowIcon from "images/svgs/icon-arrow-left.svg";

const Button = styled.button`
    border: none;
    background-color: transparent;
    color: ${({ theme }) => theme.text.primary};

    display: flex;
    align-items: flex-start;
    gap: 2.3rem;

    /* Text style */
    & span {
        ${H3SecondaryStyle}
    }
`;

const GoBackButton = () => {
    const router = useRouter();
    return (
        <Button onClick={() => router.back()}>
            <LeftArrowIcon />
            <span>Go back</span>
        </Button>
    );
};

export default GoBackButton;
