import React from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import {
  SingleDeskContainer,
  LeftSideContent,
  RightSideContent,
  DeskTitle,
  InfoRow,
  Stars,
  ReviewText,
  ImageWrapper,
  PriceContainer,
  VerticalLine,
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
        <InfoRow>Frame Type: {frameType}</InfoRow>
        <InfoRow>
          <Stars>
            {[...Array(stars)].map((_, index) => (
              <FaStar key={index} color="gold" size={18} />
            ))}
          </Stars>{" "}
          <ReviewText>
            {reviews}
            <span>Reviews</span>
          </ReviewText>
        </InfoRow>
        <ImageWrapper>
          <Image
            src={`/deskCollectionImages/${filesName}.webp`}
            style={{ borderRadius: "8px" }}
            layout="intrinsic"
            height={400}
            width={500}
            alt=""
          />
        </ImageWrapper>
      </LeftSideContent>
      <RightSideContent>
        <PriceContainer>
          <div className="top-section">
            <div>
              <h3>${price}</h3>
              <p className="small-text">Starting at $64/mo or 0% APR</p>
            </div>
            <VerticalLine></VerticalLine>
            <p>
              Ships same business day if ordered by
              <br /> 3pm Central
            </p>
          </div>
        </PriceContainer>
      </RightSideContent>
    </SingleDeskContainer>
  );
};

export default SingleDeskDisplay;
