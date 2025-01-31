import Link from "next/link";
import { FaStar } from "react-icons/fa";
import {
  Card,
  DeskImage,
  SwatchContainer,
  Swatch,
  Info,
  Stars,
} from "./Components";

interface DeskItem {
  filesName: string;
  name: string;
  varieties: number;
  desktopSizes: string;
  frameType: string;
  stars: number;
  reviews: number;
  price: number;
  swatches: string[];
}

const formatFileName = (fileName: string) => {
  return fileName.toLowerCase();
};

export default function DeskCard({ desk }: { desk: DeskItem }) {
  return (
    <Card>
      <Link href={`/desk/${formatFileName(desk.filesName)}`} passHref>
        <DeskImage
          src={`/deskCollectionImages/${desk.filesName}.webp`}
          alt={desk.name}
          width={300}
          height={200}
        />
      </Link>

      <SwatchContainer>
        {desk.swatches.map((swatch) => (
          <Swatch
            key={swatch}
            src={`/tiles/${swatch}.webp`}
            alt={swatch}
            width={25}
            height={25}
          />
        ))}
      </SwatchContainer>

      <Info>
        <p>
          <strong>Varieties:</strong> {desk.varieties}
        </p>
        <p>
          <strong>Desktop Sizes:</strong> {desk.desktopSizes}
        </p>
        <p>
          <strong>Frame Type:</strong> {desk.frameType}
        </p>
      </Info>

      <Stars>
        {[...Array(desk.stars)].map((_, index) => (
          <FaStar key={index} color="gold" size={18} />
        ))}
      </Stars>
    </Card>
  );
}
