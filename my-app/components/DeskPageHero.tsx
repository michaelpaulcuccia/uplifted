import React from "react";
import styled from "styled-components";

const Root = styled.div`
  background: #9e9d9d;
  color: #fff;
  padding: 0 20px;
  width: 50%;

  h1 {
    margin-top: 36px;
    margin-bottom: 16px;
    font-size: clamp(24px, 4vw, 36px);
    line-height: clamp(32px, 5vw, 49.5px);
    font-weight: 700;
  }

  p {
    font-size: clamp(12px, 2vw, 16px);
    line-height: clamp(16px, 3vw, 20px);
  }
`;

export default function DeskPageHero() {
  return (
    <>
      <Root>
        <h1>Height Adjustable Standing Desks</h1>
        <p>
          Improve your health, comfort, and productivity with Wirecutter's
          Standing Desk Pick for 6 years. Get up to 6 free accessories when you
          purchase a desk.
        </p>
      </Root>
    </>
  );
}
