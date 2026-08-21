import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: ${({ $mb }) => $mb || "40px"};
  width: 100%;
`;

const Title = styled.h2`
  font-size: 52px;
  font-weight: 600;
  margin-top: 20px;
  margin-bottom: 16px;
  color: ${({ theme }) => theme.text_primary};
  position: relative;
  display: inline-block;

  &::after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 64px;
    height: 4px;
    background: linear-gradient(90deg, ${({ theme }) => theme.primary}, #c026d3);
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }

  @media (max-width: 480px) {
    font-size: 28px;
    margin-top: 8px;
  }
`;

const Desc = styled.p`
  font-size: 18px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary};
  max-width: 640px;
  line-height: 1.6;
  margin-top: 8px;

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const SectionHeader = ({ title, description, mb }) => (
  <Wrapper $mb={mb}>
    <Title>{title}</Title>
    {description && <Desc>{description}</Desc>}
  </Wrapper>
);

export default SectionHeader;
