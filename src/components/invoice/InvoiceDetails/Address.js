import styled from "styled-components";
import ParagraphSm from "components/text/ParagraphSm";

const AddressBox = styled.address`
    display: flex;
    flex-direction: column;
    gap: ${({ gap }) => gap};

    font-style: normal;
    text-align: ${({ textAlign }) => textAlign}; ;
`;

/**
 * Create <address> element to display an address object
 *
 * @param {object} address - Object containing address in the form of: { street, city, postCode, country }
 * @param {string} gap - Gap between each address element
 * @param {string} textAlign - Text align property for container element
 * @return {JSX} <address> component displaying input object
 */
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
