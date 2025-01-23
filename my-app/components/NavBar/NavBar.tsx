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

const ExpandableBox = styled.div<{ isVisible: boolean }>`
  position: absolute;
  top: 80px;
  left: 0;
  width: 100%;
  background-color: #f5f5f5;
  overflow: hidden;
  height: ${({ isVisible }) => (isVisible ? "200px" : "0")};
  transition: height 0.3s ease;
  padding: ${({ isVisible }) => (isVisible ? "20px" : "0 20px")};
  z-index: 10;
`;

export default function NavBar() {
  const [activeTab, setActiveTab] = useState<string | null>(null);

  const handleHoverDivClick = (tabName: string) => {
    console.log(`Clicked tab: ${tabName}`);
    setActiveTab((prev) => (prev === tabName ? null : tabName));
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
            <HoverDiv key={tab} onClick={() => handleHoverDivClick(tab)}>
              {tab}
            </HoverDiv>
          ))}
        </FlexRow>
        <FlexRow>
          <PiMagnifyingGlassThin fontSize={28} />
          <CiUser fontSize={28} />
          <CiShoppingCart fontSize={28} />
        </FlexRow>
      </FlexRow>

      <ExpandableBox isVisible={!!activeTab}>
        {activeTab ? <p>{activeTab} Content Goes Here</p> : null}
      </ExpandableBox>
    </>
  );
}
