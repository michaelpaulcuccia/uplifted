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

export const DeskTitle = styled.h1`
  font-size: 26px;
  font-weight: 600;
  margin-bottom: 16px;
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

export const ReviewText = styled.p`
  color: #06a7ea;
  font-size: 14px;
  margin-left: 6px;

  span {
    margin-left: 3px;
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 70px;
`;

export const RightSideContent = styled.div`
  width: 50%;
`;

export const PriceContainer = styled.div`
  display: flex;
  padding: 0 30px;

  .top-section {
    display: flex;
    justify-content: space-evenly;
    width: 100%;
  }

  h3 {
    font-size: 28px;
    font-weight: 300;
    margin-bottom: 8px;
  }

  .small-text {
    font-size: 11px;
  }
`;

export const VerticalLine = styled.div`
  width: 1px;
  //height: 100%;
  align-self: stretch; //using this instead of height
  background-color: #ccc;
  margin: 0 8px;
`;

export const FreeRow = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 0 80px;
  width: 100%;
  margin-top: 30px;
  height: auto;

  p {
    font-size: 11px;
  }
`;
