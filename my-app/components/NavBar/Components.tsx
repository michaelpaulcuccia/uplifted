import styled from "styled-components";

export const HoverDiv = styled.div`
  position: relative;
  display: inline-block;
  padding: 20px 15px;
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

  &:hover::after {
    transform: translateX(-50%) scaleX(1);
  }

  @media (max-width: 968px) {
    font-size: 14px;
    margin: 0 4px;
  }
`;

export const FlexRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  cursor: pointer;

  svg {
    font-size: 28px;
    transition: font-size 0.3s ease;

    @media (max-width: 968px) {
      font-size: 22px;
    }
  }
`;

export const ExpandableContent = styled.div`
  display: flex;
`;

export const Column = styled.div`
  margin: 0 30px;
`;

export const Headline = styled.h3`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const Item = styled.li`
  list-style: none;
  font-size: 1rem;
  margin-bottom: 5px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
    color: rgb(6, 167, 234);
  }
`;

export const data = [
  {
    name: "Featured",
    data: [
      {
        headline: "Featured",
        items: ["Standing Desks", "What's New", "Best Sellers"],
      },
      {
        headline: "Collections",
        items: ["MoPac Storage", "Uplift Spaces"],
      },
    ],
  },
  {
    name: "Desks",
    data: [
      {
        headline: "Desks",
        items: ["Standing Desks", "Frame Desks", "Electric Desks"],
      },
      {
        headline: "Tables",
        items: ["Conference Tables", "Fixed Height Tables"],
      },
    ],
  },
  {
    name: "Seating",
    data: [
      {
        headline: "Seating",
        items: ["Ergonomic Chairs", "Stools"],
      },
      {
        headline: "Lounge Seating",
        items: ["Dillio Lounge Collection", "SoCal Lounge Collection"],
      },
    ],
  },
  {
    name: "Accessories",
    data: [
      {
        headline: "Featured",
        items: ["Standing Desks", "What's New", "Best Sellers"],
      },
      {
        headline: "Collections",
        items: ["MoPac Storage", "Uplift Spaces"],
      },
    ],
  },
  {
    name: "Team Office",
    data: [
      {
        headline: "Desks",
        items: ["Standing Desks", "Frame Desks", "Electric Desks"],
      },
      {
        headline: "Tables",
        items: ["Conference Tables", "Fixed Height Tables"],
      },
    ],
  },
  {
    name: "Support",
    data: [
      {
        headline: "Desk Help",
        items: ["Assembly", "Programming"],
      },
      {
        headline: "Guides",
        items: ["Product Comparison", "Chair Comparison"],
      },
    ],
  },
  {
    name: "Sale",
    data: [
      {
        headline: "Limited Time Offers",
        items: ["Sale"],
      },
      {
        headline: "Clearance",
        items: ["Shop all clearance"],
      },
    ],
  },
];
