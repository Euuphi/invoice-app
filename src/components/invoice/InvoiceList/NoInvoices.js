import Image from "next/image";
import styled from "styled-components";
// Illustration
import illustrationUrl from "images/svgs/illustration-empty.svg?url";
// Components
import H2 from "components/headings/H2";
import ParagraphMd from "components/text/ParagraphMd";

const ImageBox = styled.div`
    margin: 10rem 0 6.4rem;
`;

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2.4rem;

    text-align: center;
    width: 22rem;
`;

const NoInvoices = () => {
    return (
        <>
            <ImageBox>
                <Image
                    src={illustrationUrl}
                    alt="Illustration of woman holding mail"
                    height={200}
                    width={242}
                />
            </ImageBox>
            <TextContainer>
                <H2>There is nothing here</H2>
                <ParagraphMd>
                    Create an invoice by clicking the{" "}
                    <strong>New Invoice</strong> button and get started
                </ParagraphMd>
            </TextContainer>
        </>
    );
};

export default NoInvoices;
