import React, { useState } from "react";
import styled from "styled-components";

const StackedContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 1500px;
  height: 400px;
  margin: 0 auto;
`;

const Layer = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: auto; /* Maintain aspect ratio */
`;

const TilesContainer = styled.div`
  display: flex;
  margin-top: 20px;
  flex-wrap: wrap;
  justify-content: center;
`;

const Tile = styled.img`
  width: 50px;
  height: 50px;
  margin: 5px;
  cursor: pointer;
  transition: border 0.3s ease-in-out;

  &.selected {
    border: 3px solid rgb(6, 167, 234);
  }
`;

const SelectedSwatchName = styled.div`
  margin-top: 20px;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
`;

const StackedImages: React.FC = () => {
  const [selectedSwatch, setSelectedSwatch] = useState<string>("bamboo-dark");

  const tiles = [
    "bamboo-dark",
    "laminate-ashgray",
    "laminate-cherry",
    "laminate-heritage-oak",
    "laminate-maple",
  ];

  const handleTileClick = (tile: string) => {
    setSelectedSwatch(tile);
  };

  const formatSwatchName = (swatch: string) => {
    return swatch.replace(/-/g, " ").toUpperCase();
  };

  return (
    <div>
      <StackedContainer>
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
