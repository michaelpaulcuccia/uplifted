"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import Logo from "../../public/brand/upliftHeaderLogo.svg";
import { PiMagnifyingGlassThin } from "react-icons/pi";
import { CiUser } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { HoverDiv, data } from "./Components";

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
  padding: ${({ $isvisible }) => ($isvisible ? "20px" : "0")};
  z-index: 10;
  border-top: 1px solid #ddd;
  display: ${({ $isvisible }) => ($isvisible ? "block" : "none")};
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

const ExpandableContent = styled.div`
  display: flex;
  gap: 20px;
`;

const Column = styled.div`
  flex: 1;
`;

const Headline = styled.h3`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Item = styled.li`
  list-style: none;
  font-size: 1rem;
  margin-bottom: 5px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
    color: #007aff;
  }
`;

export default function NavBar() {
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const [boxVisible, setBoxVisible] = useState<boolean>(false);

  const handleMouseEnter = (tabName: string) => {
    setActiveTab(tabName);
    setBoxVisible(true);
  };

  const handleMouseLeave = () => {
    setBoxVisible(false);
    setActiveTab(null);
  };

  const activeTabData = data.find((category) => category.name === activeTab);

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
              onMouseEnter={() => handleMouseEnter(tab)}
              onMouseLeave={handleMouseLeave}
            >
              {tab}
            </HoverDiv>
          ))}
        </FlexRow>
        <FlexRow>
          <IconWrapper>
            <PiMagnifyingGlassThin />
            <CiUser />
            <CiShoppingCart />
          </IconWrapper>
        </FlexRow>
      </FlexRow>

      <ExpandableBox $isvisible={boxVisible}>
        {activeTabData && (
          <ExpandableContent>
            {activeTabData.data.map((column, index) => (
              <Column key={index}>
                <Headline>{column.headline}</Headline>
                <ul>
                  {column.items.map((item, i) => (
                    <Item key={i}>{item}</Item>
                  ))}
                </ul>
              </Column>
            ))}
          </ExpandableContent>
        )}
      </ExpandableBox>
    </>
  );
}
