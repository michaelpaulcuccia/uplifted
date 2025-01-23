import React, { useState } from "react";
import styled from "styled-components";

const StackedContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 1500px;
  height: 0;
  padding-bottom: 35%;
  //padding-bottom: 56.25%; /* Maintain a 16:9 aspect ratio (height = width * 9 / 16) */
  margin: 0 auto;
  background-color: #ccc;
`;

const Layer = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  //height: 100%;
  object-fit: contain; /* Prevent distortion of images */
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

const ContentContainer = styled.div`
  text-align: center;
  margin-top: 20px;
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

      <ContentContainer>
        <p>{formatSwatchName(selectedSwatch)} 1" THICK</p>

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
      </ContentContainer>
    </div>
  );
};

export default StackedImages;
