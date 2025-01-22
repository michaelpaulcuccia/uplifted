import React from "react";
import styled from "styled-components";

const StackedContainer = styled.div`
  position: relative;
  width: auto;
  height: 400px;
`;

const Layer = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const TopLayer = styled(Layer).withConfig({
  shouldForwardProp: (prop) => prop !== "isVisible",
})<{ isVisible: boolean }>`
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transition: opacity 0.3s ease-in-out;
`;

interface StackedImagesProps {
  showTopLayer: boolean;
}

const StackedImages: React.FC<StackedImagesProps> = ({ showTopLayer }) => {
  return (
    <StackedContainer>
      <Layer
        src="/deskviews/homepage-desk-build-accessories.webp"
        alt="Accessories"
      />
      <Layer src="/deskviews/homepage-desk-build-frame-gray.webp" alt="Frame" />
      <TopLayer
        src="/swatches/homepage-desk-build-desktop-bamboo-dark.webp"
        alt="Desktop"
        isVisible={showTopLayer}
      />
    </StackedContainer>
  );
};

export default StackedImages;
