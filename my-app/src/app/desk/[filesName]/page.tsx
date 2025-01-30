"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Loader from "../../../../components/Loader";

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

  console.log(filesName);

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
    <div style={{ padding: "20px" }}>
      <h1>{desk.name}</h1>
      <Image
        src={`/deskCollectionImages/${desk.filesName}.webp`}
        alt={desk.name}
        width={500}
        height={300}
      />
      <p>
        <strong>Varieties:</strong> {desk.varieties}
      </p>
      <p>
        <strong>Sizes:</strong> {desk.desktopSizes}
      </p>
      <p>
        <strong>Frame Type:</strong> {desk.frameType}
      </p>
      <p>
        <strong>Stars:</strong> {desk.stars} ⭐
      </p>
      <p>
        <strong>Reviews:</strong> {desk.reviews}
      </p>
      <p>
        <strong>Price:</strong> ${desk.price}
      </p>
    </div>
  );
}
