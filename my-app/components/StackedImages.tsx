import React, { useState } from "react";
import styled from "styled-components";

// Container for stacking images
const StackedContainer = styled.div`
  position: relative;
  width: auto;
  height: 400px;
`;

// Image layer that will be stacked
const Layer = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

// Button for toggling swatch visibility
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

// Tile container for the clickable image tiles
const TileContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
`;

const Tile = styled.div<{ bgsrc: string }>`
  width: 50px;
  height: 50px;
  background-image: url(${(props) => props.bgsrc});
  background-size: cover;
  background-position: center;
  cursor: pointer;
  border: 2px solid transparent;

  &:hover {
    border-color: #007aff;
  }
`;

const StackedImages: React.FC = () => {
  const [showSwatch, setShowSwatch] = useState(false);
  const [selectedSwatch, setSelectedSwatch] = useState<string>("bamboo-dark");

  const handleTileClick = (tile: string) => {
    setSelectedSwatch(tile);
  };

  const toggleSwatch = () => {
    setShowSwatch((prev) => !prev);
  };

  return (
    <div>
      <StackedContainer>
        {/* Conditional rendering for showing layers based on showSwatch */}
        {showSwatch ? (
          <>
            <Layer
              src="/deskviews/homepage-desk-build-frame-gray.webp"
              alt="Build Frame"
            />
            <Layer
              src={`/swatches/homepage-desk-build-desktop-${selectedSwatch}.webp`}
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

      {/* Tile row with available swatches */}
      <TileContainer>
        {[
          "bamboo-dark",
          "laminate-ashgray",
          "laminate-cherry",
          "laminate-heritage-oak",
          "laminate-maple",
        ].map((tile) => (
          <Tile
            key={tile}
            bgsrc={`/tiles/${tile}.webp`}
            onClick={() => handleTileClick(tile)}
          />
        ))}
      </TileContainer>
    </div>
  );
};

export default StackedImages;
