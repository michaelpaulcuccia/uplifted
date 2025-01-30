import React from "react";
import styled from "styled-components";

type LoaderProps = {
  message: string;
};

const LoaderWrapper = styled.div`
  text-align: center;
  font-size: 1.2rem;
  font-weight: bold;
  padding: 40px;
`;

const Loader: React.FC<LoaderProps> = ({ message }) => {
  return <LoaderWrapper>{message}</LoaderWrapper>;
};

export default Loader;
