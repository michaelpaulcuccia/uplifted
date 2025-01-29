"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import styled from "styled-components";
import FullBleed from "../../../components/layout/FullBleed";
import Container from "../../../components/layout/Container";
import DeskPageHero from "../../../components/DeskPageHero";
import DeskPageBanner from "../../../public/brand/DeskPageBanner.webp";
import DeskCard from "../../../components/DeskCard";

type Desk = {
  filesName: string;
  name: string;
  varieties: number;
  desktopSizes: string;
  frameType: string;
  stars: number;
  reviews: number;
  price: number;
  swatches: string[];
};

export default function page() {
  const [desks, setDesks] = useState<Desk[]>([]);

  useEffect(() => {
    async function fetchDesks() {
      const res = await fetch("/api/deskcollection");
      const data = await res.json();
      setDesks(data);
    }
    fetchDesks();
  }, []);

  const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 16px;
    padding: 20px;
  `;

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
      <Container>
        <Grid>
          {desks.map((desk) => (
            <DeskCard key={desk.filesName} desk={desk} />
          ))}
        </Grid>
      </Container>
    </>
  );
}
