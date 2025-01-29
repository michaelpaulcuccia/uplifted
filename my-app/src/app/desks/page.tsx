"use client";
import React from "react";
import Image from "next/image";
import FullBleed from "../../../components/layout/FullBleed";
import Container from "../../../components/layout/Container";
import DeskPageHero from "../../../components/DeskPageHero";
import DeskPageBanner from "../../../public/brand/DeskPageBanner.webp";

export default function page() {
  return (
    <>
      <FullBleed bgcolor="#9e9d9d;">
        <Container>
          <DeskPageHero />
        </Container>
      </FullBleed>
      <Container>
        <Image
          src={DeskPageBanner}
          alt="Description"
          width={800}
          height={450}
          style={{ width: "100%", height: "auto" }}
          priority
        />
      </Container>
    </>
  );
}
