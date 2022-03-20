import { useRouter } from "next/router";
import styled from "styled-components";
// Styles
import H3Secondary from "components/headings/H3Secondary";
// Icon
import LeftArrowIcon from "images/svgs/icon-arrow-left.svg";

const Button = styled.button`
    border: none;
    background-color: transparent;
    margin-bottom: 2.6rem;
    padding: 1.2rem 0.8rem;

    display: flex;
    align-items: flex-start;
    gap: 2.3rem;

    &:hover span {
        color: #7e88c3;
    }
`;

const GoBackButton = () => {
    const router = useRouter();
    return (
        <Button onClick={() => router.push("/")}>
            <LeftArrowIcon />
            <H3Secondary as="span">Go back</H3Secondary>
        </Button>
    );
};

export default GoBackButton;
