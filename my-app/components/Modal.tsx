"use client";
import React, { useState, useEffect } from "react";
import styled from "styled-components";

const ModalOverlay = styled.div<{ $isvisible: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${({ $isvisible }) => ($isvisible ? "block" : "none")};
  z-index: 9;
`;

const ModalContainer = styled.div<{ $isvisible: boolean }>`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  display: ${({ $isvisible }) => ($isvisible ? "block" : "none")};
  z-index: 10;

  h2,
  p {
    margin-bottom: 18px;
  }

  p {
    font-size: 18px;
    line-height: 22px;
  }
`;

const AcceptButton = styled.button`
  background-color: #007aff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #005bb5;
  }
`;

const Modal = () => {
  const [isModalVisible, setIsModalVisible] = useState(true);

  const closeModal = () => setIsModalVisible(false);

  useEffect(() => {
    // The modal will be shown by default on page load
    setIsModalVisible(true);
  }, []);

  return (
    <>
      <ModalOverlay $isvisible={isModalVisible}>
        <ModalContainer $isvisible={isModalVisible}>
          <h2>Welcome!</h2>

          <p>
            Thank you for visiting my rebuild of your homepage! I'm excited to
            have you here.{" "}
            <strong>
              Please note that this current version is still in development and
              is not yet optimized for mobile devices
            </strong>
            . I appreciate your understanding and look forward to bringing you a
            fully responsive experience in the near future!
          </p>

          <p>
            Please click on ANY ITEM in the Navigation Bar to view a collection
            of desks. Please click on any desk to see more details about that
            product.
          </p>

          <p>Check back for more updates!</p>

          <AcceptButton onClick={closeModal}>Accept</AcceptButton>
        </ModalContainer>
      </ModalOverlay>
    </>
  );
};

export default Modal;
