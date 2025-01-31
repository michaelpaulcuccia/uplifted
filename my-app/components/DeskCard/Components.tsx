import styled from "styled-components";
import Image from "next/image";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 332px;
  padding: 16px;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

export const DeskImage = styled(Image)`
  border-radius: 8px;
`;

export const SwatchContainer = styled.div`
  display: flex;
  gap: 8px;
  margin: 10px 0;
`;

export const Swatch = styled(Image)`
  width: 35px;
  height: 35px;
  border: 1px solid #ddd;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin: 10px 0;
  font-size: 14px;
  color: #333;
`;

export const Stars = styled.div`
  display: flex;
  gap: 4px;
  margin-top: 8px;
`;
