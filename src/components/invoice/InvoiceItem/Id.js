import styled from "styled-components";
// Styles
import { H3SecondaryStyle } from "components/headings/H3Secondary";

const TextContainer = styled.p`
    ${H3SecondaryStyle};

    display: inline-block;
    width: 10rem;

    & span {
        color: #7e88c3;
    }
`;

const Id = ({ text }) => {
    return (
        <TextContainer>
            <span>#</span>
            {text}
        </TextContainer>
    );
};

export default Id;
