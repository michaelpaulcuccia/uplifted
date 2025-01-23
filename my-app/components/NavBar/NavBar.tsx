"use client";
import React from "react";
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

export default function NavBar() {
  return (
    <FlexRow>
      <Link href="/">
        <Image src={Logo} width={150} height={25} alt="" />
      </Link>
      <FlexRow>
        <HoverDiv>Featured</HoverDiv>
        <HoverDiv>Desks</HoverDiv>
        <HoverDiv>Seating</HoverDiv>
        <HoverDiv>Accessories</HoverDiv>
        <HoverDiv>Team Office</HoverDiv>
        <HoverDiv>Support</HoverDiv>
        <HoverDiv>Sale</HoverDiv>
      </FlexRow>
      <FlexRow>
        <PiMagnifyingGlassThin fontSize={28} />
        <CiUser fontSize={28} />
        <CiShoppingCart fontSize={28} />
      </FlexRow>
    </FlexRow>
  );
}
