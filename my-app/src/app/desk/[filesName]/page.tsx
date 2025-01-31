"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Container from "../../../../components/layout/Container";
import Loader from "../../../../components/Loader";
import { SingleDeskDisplay } from "../../../../components/SingleDeskDisplay";

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

export default function DeskDetailPage() {
  const { filesName } = useParams();
  const [desk, setDesk] = useState<Desk | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchDesk() {
      try {
        const res = await fetch(`/api/desk/${filesName}`);
        if (!res.ok) throw new Error("Desk not found");
        const data = await res.json();
        setDesk(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchDesk();
  }, [filesName]);

  if (loading) return <Loader message="Loading desk details..." />;
  if (!desk) return <p>Desk not found.</p>;

  return (
    <Container>
      <SingleDeskDisplay
        name={desk.name}
        frameType={desk.frameType}
        stars={desk.stars}
        reviews={desk.reviews}
        filesName={desk.filesName}
        price={desk.price}
        swatches={desk.swatches}
      />
    </Container>
  );
}
