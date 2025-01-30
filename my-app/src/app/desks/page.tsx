"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import styled from "styled-components";
import FullBleed from "../../../components/layout/FullBleed";
import Container from "../../../components/layout/Container";
import DeskPageHero from "../../../components/DeskPageHero";
import DeskPageBanner from "../../../public/brand/DeskPageBanner.webp";
import DeskCard from "../../../components/DeskCard";
import Loader from "../../../components/Loader";

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

export default function Page() {
  const [desks, setDesks] = useState<Desk[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchDesks() {
      try {
        const res = await fetch("/api/deskcollection");
        const data = await res.json();
        setDesks(data);
      } catch (error) {
        console.error("Error fetching desks:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchDesks();
  }, []);

  const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 16px;
    padding: 20px;
  `;

  // const Loader = styled.div`
  //   text-align: center;
  //   font-size: 1.2rem;
  //   font-weight: bold;
  //   padding: 40px;
  // `;

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
        {loading ? (
          <Loader message="Loading desks..." />
        ) : (
          <Grid>
            {desks.map((desk) => (
              <DeskCard key={desk.filesName} desk={desk} />
            ))}
          </Grid>
        )}
      </Container>
    </>
  );
}
