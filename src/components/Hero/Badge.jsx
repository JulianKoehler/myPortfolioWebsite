import styled from "styled-components";
import certificate from "../../assets/meta-front-end-developer-certificate.png";

const Badge = () => {
  return (
    <a
      href="https://www.credly.com/badges/fa64283d-d88d-41a9-bdcd-c40253975310/public_url"
      target="_blank"
      rel="noopener noreferrer">
      <Image
        src={certificate}
        alt="Meta Front-End Certificate"
      />
    </a>
  );
};

export default Badge;

const Image = styled.img`
  width: 150px;
`;
