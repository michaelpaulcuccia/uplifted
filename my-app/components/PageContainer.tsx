"use client";
import React, { ReactNode } from "react";
import styled from "styled-components";

// Styled component
const PageContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1440px; /* Max width equivalent to MacBook 13-inch */
  margin: 0 auto; /* Centers the container horizontally */
  padding: 20px; /* Optional padding for better spacing */
  width: 100%; /* Ensures the component is responsive */
`;

// Defining the type for the children prop
interface PageContainerProps {
  children: ReactNode;
}

const PageContainer: React.FC<PageContainerProps> = ({ children }) => {
  return <PageContainerWrapper>{children}</PageContainerWrapper>;
};

export default PageContainer;
