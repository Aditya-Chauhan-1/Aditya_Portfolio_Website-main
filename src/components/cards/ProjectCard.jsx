import React from "react";
import styled, { keyframes } from "styled-components";

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Card = styled.div`
  width: 330px;
  min-height: 520px;
  height: auto;
  background-color: ${({ theme }) => theme.card};
  cursor: pointer;
  border-radius: 16px;
  box-shadow: 0 0 12px 4px rgba(0, 0, 0, 0.4);
  overflow: hidden;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  transition: all 0.5s ease-in-out;
  animation: ${fadeInUp} 0.6s ease-out forwards;
  opacity: 0;
  animation-delay: ${({ index }) => (index || 0) * 0.1}s;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 0 50px 4px rgba(0, 0, 0, 0.6);
    filter: brightness(1.1);
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 400px;
    min-height: 0;
  }

  @media (max-width: 480px) {
    width: 100%;
    max-width: 100%;
    padding: 16px;
  }
`;
const Image = styled.img`
  width: 100%;
  height: 190px;
  background-color: ${({ theme }) => theme.white};
  border-radius: 12px;
  box-shadow: 0 0 16px 2px rgba(0, 0, 0, 0.3);
  object-fit: cover;
  object-position: top center;
  flex-shrink: 0;

  @media (max-width: 480px) {
    height: 170px;
  }
`;
const Tags = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 4px;
`;
const Tag = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.primary};
  background-color: ${({ theme }) => theme.primary + 15};
  padding: 2px 8px;
  border-radius: 10px;
  
  @media (max-width: 480px) {
    font-size: 11px;
    padding: 2px 6px;
  }
`;
const Details = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0px;
  padding: 0px 2px;
`;
const Title = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  overflow: hidden;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  
  @media (max-width: 768px) {
    font-size: 18px;
  }
  
  @media (max-width: 480px) {
    font-size: 16px;
  }
`;
const Date = styled.div`
  font-size: 12px;
  margin-left: 2px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + 80};
  @media only screen and (max-width: 768px) {
    font-size: 10px;
  }
`;
const Description = styled.div`
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + 99};
  margin-top: 8px;
  font-size: 14px;
  line-height: 1.55;

  @media (max-width: 480px) {
    font-size: 13px;
  }
`;
const ButtonRow = styled.div`
  display: flex;
  gap: 8px;
  margin-top: auto;
`;

const ActionButton = styled.a`
  flex: 1;
  text-align: center;
  text-decoration: none;
  font-size: 13px;
  font-weight: 600;
  padding: 8px 10px;
  border-radius: 8px;
  color: ${({ $primary, theme }) => ($primary ? "#fff" : theme.primary)};
  background: ${({ $primary, theme }) => ($primary ? theme.primary : "transparent")};
  border: 1px solid ${({ theme }) => theme.primary};
  transition: all 0.25s ease;

  &:hover {
    transform: translateY(-1px);
    filter: brightness(1.08);
  }
`;

const FallbackImage = styled.div`
  width: 100%;
  height: 190px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  color: #fff;
  background: linear-gradient(135deg, #854ce6, #c026d3);

  @media (max-width: 480px) {
    height: 170px;
  }
`;

const ProjectCard = ({ project, setOpenModal, index }) => {
  const [imgError, setImgError] = React.useState(false);

  return (
    <Card index={index} onClick={() => setOpenModal({ state: true, project: project })}>
      {project.image && !imgError ? (
        <Image
          src={project.image}
          alt={project.title}
          loading="lazy"
          onError={() => setImgError(true)}
        />
      ) : (
        <FallbackImage>{project.title}</FallbackImage>
      )}
      <Tags>
        {project.tags?.map((tag, tagIndex) => (
          <Tag key={`tag-${tagIndex}`}>{tag}</Tag>
        ))}
      </Tags>
      <Details>
        <Title>{project.title}</Title>
        {project.date && <Date>{project.date}</Date>}
        <Description>{project.description}</Description>
      </Details>
      <ButtonRow>
        {project.github && (
          <ActionButton
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
          >
            Code
          </ActionButton>
        )}
        {project.webapp && (
          <ActionButton
            href={project.webapp}
            target="_blank"
            rel="noopener noreferrer"
            $primary
            onClick={(e) => e.stopPropagation()}
          >
            Live
          </ActionButton>
        )}
      </ButtonRow>
    </Card>
  );
};

export default ProjectCard;
