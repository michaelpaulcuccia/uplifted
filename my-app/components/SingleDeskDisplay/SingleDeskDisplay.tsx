import React from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import {
  SingleDeskContainer,
  LeftSideContent,
  RightSideContent,
  DeskTitle,
  DeskDetails,
  InfoRow,
  Stars,
} from "./Components";

interface SingleDeskDisplayProps {
  name: string;
  frameType: string;
  stars: number;
  reviews: number;
  filesName: string;
  price: number;
}

const SingleDeskDisplay: React.FC<SingleDeskDisplayProps> = ({
  name,
  frameType,
  stars,
  reviews,
  filesName,
  price,
}) => {
  return (
    <SingleDeskContainer>
      <LeftSideContent>
        <DeskTitle>{name}</DeskTitle>
        <InfoRow>
          <DeskDetails>Frame Type: {frameType}</DeskDetails>
        </InfoRow>
        <InfoRow>
          <Stars>
            {[...Array(stars)].map((_, index) => (
              <FaStar key={index} color="gold" size={18} />
            ))}
          </Stars>{" "}
          <span style={{ marginLeft: "6px", marginRight: "3px" }}>
            {reviews}
          </span>{" "}
          Reviews
        </InfoRow>
        <InfoRow></InfoRow>
        <Image
          src={`/deskCollectionImages/${filesName}.webp`}
          height={300}
          width={400}
          alt=""
        />
      </LeftSideContent>
      <RightSideContent>
        <p>${price}</p>
      </RightSideContent>
    </SingleDeskContainer>
  );
};

export default SingleDeskDisplay;
