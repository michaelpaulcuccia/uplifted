import styled from "styled-components";

export const HoverDiv = styled.div`
  position: relative;
  display: inline-block;
  padding: 20px 15px;
  text-align: center;
  cursor: pointer;
  margin: 0 5px;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%) scaleX(0);
    width: 60%; /* width of line */
    height: 3px;
    background-color: rgb(6, 167, 234);
    transition: transform 0.3s ease;
    transform-origin: center;
  }

  &:hover::after {
    transform: translateX(-50%) scaleX(1);
  }

  @media (max-width: 968px) {
    font-size: 14px;
    margin: 0 4px;
  }
`;
