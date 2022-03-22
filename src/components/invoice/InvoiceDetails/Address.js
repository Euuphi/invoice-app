import styled from "styled-components";
import ParagraphSm from "components/text/ParagraphSm";

const AddressBox = styled.address`
    display: flex;
    flex-direction: column;
    gap: ${({ gap }) => gap};

    font-style: normal;
    text-align: ${({ textAlign }) => textAlign}; ;
`;

const Address = ({ address, gap, textAlign }) => {
    return (
        <AddressBox gap={gap} textAlign={textAlign}>
            <ParagraphSm as="span">{address.street}</ParagraphSm>
            <ParagraphSm as="span">{address.city}</ParagraphSm>
            <ParagraphSm as="span">{address.postCode}</ParagraphSm>
            <ParagraphSm as="span">{address.country}</ParagraphSm>
        </AddressBox>
    );
};

export default Address;
