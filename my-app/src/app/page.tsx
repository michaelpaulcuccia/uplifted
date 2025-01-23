"use client";
import React from "react";
import FullBleed from "../../components/layout/FullBleed";
import Container from "../../components/layout/Container";
import StackedImages from "../../components/StackedImages";
import Modal from "../../components/Modal";

const ParentComponent: React.FC = () => {
  return (
    <div>
      <Modal />
      <FullBleed bgcolor="#ccc">
        <Container>
          <StackedImages />
        </Container>
      </FullBleed>
    </div>
  );
};

export default ParentComponent;
