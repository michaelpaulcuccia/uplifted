"use client";
import React from "react";
import FullBleed from "../../components/FullBleed";
import Container from "../../components/Container";
import StackedImages from "../../components/StackedImages";

const ParentComponent: React.FC = () => {
  return (
    <div>
      <FullBleed bgcolor="#ccc">
        <Container>
          <StackedImages />
        </Container>
      </FullBleed>
    </div>
  );
};

export default ParentComponent;
