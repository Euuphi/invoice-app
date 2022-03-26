import styled from "styled-components";
// Icons
import TrashCanSVG from "images/svgs/icon-delete.svg";

const Button = styled.button`
    background-color: transparent;
    border: none;
    padding: 1rem;

    &:hover svg {
        color: #ec5757;
    }
`;

const TrashCanIcon = styled(TrashCanSVG)`
    align-self: center;
    justify-self: end;

    color: #888eb0;
`;

const TrashCanButton = ({ onClick }) => {
    return (
        <Button onClick={onClick}>
            <TrashCanIcon height="1.6rem" width="1.3rem" />
        </Button>
    );
};

export default TrashCanButton;
