"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import Logo from "../../public/brand/upliftHeaderLogo.svg";
import { PiMagnifyingGlassThin } from "react-icons/pi";
import { CiUser, CiShoppingCart } from "react-icons/ci";
import {
  HoverDiv,
  FlexRow,
  IconWrapper,
  ExpandableContent,
  Column,
  Headline,
  Item,
  data,
} from "./Components";

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

export default function NavBar() {
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const [boxVisible, setBoxVisible] = useState<boolean>(false);
  const pathname = usePathname();

  // Close the expandable box when the route changes
  useEffect(() => {
    setBoxVisible(false);
    setActiveTab(null);
  }, [pathname]);

  const handleHoverOrClick = (tabName: string) => {
    if (activeTab === tabName) {
      setBoxVisible(false);
      setActiveTab(null);
    } else {
      setBoxVisible(true);
      setActiveTab(tabName);
    }
  };

  const handleHover = (tabName: string) => {
    if (boxVisible && activeTab !== tabName) {
      setActiveTab(tabName);
    }
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
              onClick={() => handleHoverOrClick(tab)}
              onMouseEnter={() => handleHover(tab)}
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
                    <Link key={i} href="/desks">
                      <Item>{item}</Item>
                    </Link>
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
