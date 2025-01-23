"use client";
import React, { ReactNode } from "react";
import styled from "styled-components";

const FullBleedWrapper = styled.div<{ bgcolor?: string }>`
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  background-color: ${(props) => props.bgcolor || "transparent"};
`;

interface FullBleedContainerProps {
  bgcolor?: string;
  children: ReactNode;
}

const FullBleedContainer: React.FC<FullBleedContainerProps> = ({
  bgcolor,
  children,
}) => {
  return <FullBleedWrapper bgcolor={bgcolor}>{children}</FullBleedWrapper>;
};

export default FullBleedContainer;
