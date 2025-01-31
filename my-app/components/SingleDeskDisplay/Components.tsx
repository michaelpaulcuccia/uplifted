import styled from "styled-components";

export const SingleDeskContainer = styled.div`
  display: flex;
  padding: 24px;
  gap: 30px;
  border: 1px solid #eaeaea;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const LeftSideContent = styled.div`
  width: 50%;
`;

export const RightSideContent = styled.div`
  width: 50%;
`;

export const DeskTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 16px;
`;

export const DeskDetails = styled.p`
  font-size: 1.125rem;
  margin-bottom: 8px;
`;

export const InfoRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

export const Stars = styled.div`
  display: flex;
  gap: 4px;
`;
