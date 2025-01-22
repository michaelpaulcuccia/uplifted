import React, { useState } from "react";
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

const TilesContainer = styled.div`
  display: flex;
  margin-top: 20px;
`;

const Tile = styled.img`
  width: 50px;
  height: 50px;
  margin: 5px;
  cursor: pointer;
  transition: border 0.3s ease-in-out;

  /* Conditional styles applied via className or inline style */
  &.selected {
    border: 3px solid rgb(6, 167, 234);
  }
`;

const SelectedSwatchName = styled.div`
  margin-top: 20px;
  font-size: 18px;
  font-weight: bold;
`;

const StackedImages: React.FC = () => {
  // Initial swatch set to "bamboo-dark"
  const [selectedSwatch, setSelectedSwatch] = useState<string>("bamboo-dark");

  const tiles = [
    "bamboo-dark",
    "laminate-ashgray",
    "laminate-cherry",
    "laminate-heritage-oak",
    "laminate-maple",
  ];

  const handleTileClick = (tile: string) => {
    setSelectedSwatch(tile); // Update selected swatch when a tile is clicked
  };

  // Function to format the selected swatch name
  const formatSwatchName = (swatch: string) => {
    return swatch
      .replace(/-/g, " ") // Replace "-" with space
      .toUpperCase(); // Convert to uppercase
  };

  return (
    <div>
      <StackedContainer>
        {/* Always display the selected swatch */}
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
      </StackedContainer>

      <SelectedSwatchName>
        Selected Swatch: {formatSwatchName(selectedSwatch)}
      </SelectedSwatchName>

      <TilesContainer>
        {tiles.map((tile) => (
          <Tile
            key={tile}
            src={`/tiles/${tile}.webp`}
            alt={tile}
            className={tile === selectedSwatch ? "selected" : ""}
            onClick={() => handleTileClick(tile)}
          />
        ))}
      </TilesContainer>
    </div>
  );
};

export default StackedImages;
