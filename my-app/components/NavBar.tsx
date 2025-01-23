"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import Logo from "../public/brand/upliftHeaderLogo.svg";

const NavWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HoverDiv = styled.div`
  position: relative;
  display: inline-block;
  padding: 20px 30px;
  text-align: center;
  cursor: pointer;
  margin: 0 5px;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%) scaleX(0);
    width: 60%; /* width of line */
    height: 3px;
    background-color: rgb(6, 167, 234);
    transition: transform 0.3s ease;
    transform-origin: center;
  }

  /* On hover, expand the line */
  &:hover::after {
    transform: translateX(-50%) scaleX(1);
  }
`;

const TabWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default function NavBar() {
  return (
    <NavWrapper>
      <Link href="/">
        <Image src={Logo} width={150} height={25} alt="" />
      </Link>
      <HoverDiv>Featured</HoverDiv>
      <HoverDiv>Desks</HoverDiv>
      <HoverDiv>Seating</HoverDiv>
      <HoverDiv>Accessories</HoverDiv>
      <HoverDiv>Team Office</HoverDiv>
      <HoverDiv>Support</HoverDiv>
      <HoverDiv>Sale</HoverDiv>
    </NavWrapper>
  );
}
