"use client";
import React, { useState } from "react";
import StackedImages from "../../components/StackedImages";
import styled from "styled-components";

const ToggleButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #007aff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #005bb5;
  }
`;

const ParentComponent: React.FC = () => {
  const [showTopLayer, setShowTopLayer] = useState(true);

  return (
    <div>
      <StackedImages showTopLayer={showTopLayer} />
      <ToggleButton onClick={() => setShowTopLayer(!showTopLayer)}>
        {showTopLayer ? "Hide" : "Show"} Top Layer
      </ToggleButton>
    </div>
  );
};

export default ParentComponent;
