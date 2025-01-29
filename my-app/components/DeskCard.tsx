import Image from "next/image";
import styled from "styled-components";
import { FaStar } from "react-icons/fa";

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

const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: 16px;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const DeskImage = styled(Image)`
  border-radius: 8px;
`;

const SwatchContainer = styled.div`
  display: flex;
  gap: 8px;
  margin: 10px 0;
`;

const Swatch = styled(Image)`
  width: 35px;
  height: 35px;
  border: 1px solid #ddd;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin: 10px 0;
  font-size: 14px;
  color: #333;
`;

const Stars = styled.div`
  display: flex;
  gap: 4px;
  margin-top: 8px;
`;

export default function DeskCard({ desk }: { desk: DeskItem }) {
  return (
    <Card>
      <DeskImage
        src={`/deskCollectionImages/${desk.filesName}.webp`}
        alt={desk.name}
        width={300}
        height={200}
      />

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
