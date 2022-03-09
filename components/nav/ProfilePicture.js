import styled from "styled-components";
import NextImage from "next/image";
// Image
import avatar from "images/image-avatar.webp";

const ImageBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    border-top: 2px solid #494e6e;
    height: 8.8rem;
    width: 100%;
`;

const Image = styled(NextImage)`
    border-radius: 50%;
`;

const ProfilePicture = () => {
    return (
        <ImageBox>
            <Image src={avatar} alt="Profile picture" height={40} width={40} />
        </ImageBox>
    );
};

export default ProfilePicture;
