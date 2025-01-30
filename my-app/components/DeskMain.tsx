// src/app/desk/[filesName]/DeskMain.tsx
import React from "react";
import styled from "styled-components";
import { FaStar } from "react-icons/fa";

// Define styled components
const DeskMainContainer = styled.div`
  padding: 24px;
  border: 1px solid #eaeaea;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const DeskTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 16px;
`;

const DeskDetails = styled.p`
  font-size: 1.125rem;
  margin-bottom: 8px;
`;

const InfoRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

const Label = styled.span`
  margin-right: 8px;
`;

const BoldText = styled.span`
  font-weight: bold;
`;

const DeskFileName = styled.div`
  font-size: 0.875rem;
  color: #6b7280;
`;

const Stars = styled.div`
  display: flex;
  gap: 4px;
  margin-top: 8px;
`;

interface DeskMainProps {
  name: string;
  frameType: string;
  stars: number;
  reviews: number;
  filesName: string;
}

const DeskMain: React.FC<DeskMainProps> = ({
  name,
  frameType,
  stars,
  reviews,
  filesName,
}) => {
  return (
    <DeskMainContainer>
      <DeskTitle>{name}</DeskTitle>
      <DeskDetails>Frame Type: {frameType}</DeskDetails>
      <InfoRow>
        <Label>Stars:</Label>
        <Stars>
          {[...Array(stars)].map((_, index) => (
            <FaStar key={index} color="gold" size={18} />
          ))}
        </Stars>
      </InfoRow>
      <InfoRow>
        <Label>Reviews:</Label>
        <BoldText>{reviews}</BoldText>
      </InfoRow>
      <DeskFileName>File Name: {filesName}</DeskFileName>
    </DeskMainContainer>
  );
};

export default DeskMain;
