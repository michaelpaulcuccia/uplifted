"use client";
import React, { ReactNode } from "react";
import styled from "styled-components";

const PageContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1440px;
  margin: 0 auto;
  padding: 20px;
  width: 100%;
`;

interface PageContainerProps {
  children: ReactNode;
}

const PageContainer: React.FC<PageContainerProps> = ({ children }) => {
  return <PageContainerWrapper>{children}</PageContainerWrapper>;
};

export default PageContainer;
