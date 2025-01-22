"use client";
import React from "react";
import styled from "styled-components";

const Test = styled.div`
  background: blue;
  color: white;
`;

export default function page() {
  return (
    <>
      <Test>Hello World</Test>
    </>
  );
}
