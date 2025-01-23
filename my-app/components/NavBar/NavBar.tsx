"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import Logo from "../../public/brand/upliftHeaderLogo.svg";
import { PiMagnifyingGlassThin } from "react-icons/pi";
import { CiUser } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { HoverDiv } from "./Components";

const FlexRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ExpandableBox = styled.div<{ $isvisible: boolean }>`
  position: absolute;
  top: 80px;
  left: 0;
  width: 100%;
  background-color: #f5f5f5;
  overflow: hidden;
  height: ${({ $isvisible }) => ($isvisible ? "200px" : "0")};
  transition: height 0.3s ease;
  padding: ${({ $isvisible }) => ($isvisible ? "20px" : "0 20px")};
  z-index: 10;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  svg {
    font-size: 28px;
    transition: font-size 0.3s ease;

    @media (max-width: 968px) {
      font-size: 22px;
    }
  }
`;

export default function NavBar() {
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const [isBoxOpen, setIsBoxOpen] = useState(false);

  const handleTabClick = (tabName: string) => {
    // Toggle tab content visibility
    if (activeTab === tabName) {
      setIsBoxOpen(false);
      setActiveTab(null);
    } else {
      setIsBoxOpen(true);
      setActiveTab(tabName);
    }
  };

  const handleTabHover = (tabName: string) => {
    if (isBoxOpen) {
      setActiveTab(tabName); // Update content if box is open
    }
  };

  return (
    <>
      <FlexRow>
        <Link href="/">
          <Image src={Logo} width={150} height={25} alt="Logo" />
        </Link>
        <FlexRow>
          {[
            "Featured",
            "Desks",
            "Seating",
            "Accessories",
            "Team Office",
            "Support",
            "Sale",
          ].map((tab) => (
            <HoverDiv
              key={tab}
              onClick={() => handleTabClick(tab)}
              onMouseEnter={() => handleTabHover(tab)}
            >
              {tab}
            </HoverDiv>
          ))}
        </FlexRow>
        <IconWrapper>
          <PiMagnifyingGlassThin />
          <CiUser />
          <CiShoppingCart />
        </IconWrapper>
      </FlexRow>

      <ExpandableBox $isvisible={isBoxOpen}>
        {activeTab ? <p>{activeTab} Content Goes Here</p> : null}
      </ExpandableBox>
    </>
  );
}
