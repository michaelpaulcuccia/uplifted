import React, { useState } from "react";
import styled from "styled-components";

const StackedContainer = styled.div`
  position: relative;
  width: auto;
  height: 400px;
  width: auto;
`;

const Layer = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const ToggleButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007aff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #005bb5;
  }
`;

const StackedImages: React.FC = () => {
  const [showSwatch, setShowSwatch] = useState(false);

  const toggleSwatch = () => {
    setShowSwatch((prev) => !prev);
  };

  return (
    <div>
      <StackedContainer>
        {showSwatch ? (
          <>
            <Layer
              src="/deskviews/homepage-desk-build-frame-gray.webp"
              alt="Build Frame"
            />
            <Layer
              src="/swatches/homepage-desk-build-desktop-bamboo-dark.webp"
              alt="Swatch Layer"
            />
            <Layer
              src="/deskviews/homepage-desk-build-accessories.webp"
              alt="Desktop Build"
            />
          </>
        ) : (
          <>
            <Layer
              src="/deskviews/homepage-desk-build-frame-gray.webp"
              alt="Build Frame"
            />
            <Layer
              src="/deskviews/homepage-desk-build-accessories.webp"
              alt="Desktop Build"
            />
          </>
        )}
      </StackedContainer>

      <ToggleButton onClick={toggleSwatch}>
        {showSwatch ? "Hide Swatch" : "Show Swatch"}
      </ToggleButton>
    </div>
  );
};

export default StackedImages;
