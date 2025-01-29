import { NextResponse } from "next/server";

const deskCollection = [
  {
    filesName: "One",
    name: "UPLIFT Standing Desk",
    varieties: 31,
    desktopSizes: '42" to 80" Wide x 30" Deep',
    frameType: "V2 or V2-Commercial",
    stars: 5,
    reviews: 19701,
    price: 599,
    swatches: ["bamboo-dark", "laminate-ashgray", "laminate-maple"],
  },
  {
    filesName: "Two",
    name: 'UPLIFT Standing Desk, 24" Deep Desktop',
    varieties: 15,
    desktopSizes: '42" to 80" Wide x 24" Deep',
    frameType: "V2 or V2-Commercial",
    stars: 5,
    reviews: 1965,
    price: 599,
    swatches: [
      "bamboo-dark",
      "laminate-black",
      "laminate-cherry",
      "laminate-maple",
    ],
  },
  {
    filesName: "Three",
    name: "UPLIFT Curved Corner Standing Desk",
    varieties: 3,
    desktopSizes: "Left or right return",
    frameType: "V2",
    stars: 5,
    reviews: 818,
    price: 999,
    swatches: ["bamboo-dark", "laminate-black", "laminate-cherry"],
  },
  {
    filesName: "Four",
    name: "UPLIFT L-Shaped Standing Desk, 3-Leg",
    varieties: 7,
    desktopSizes: "Left or right return",
    frameType: "V2 or V2-Commercial",
    stars: 5,
    reviews: 1811,
    price: 1149,
    swatches: [
      "bamboo-dark",
      "laminate-ashgray",
      "laminate-black",
      "laminate-cherry",
      "laminate-heritage-oak",
      "laminate-maple",
    ],
  },
];

export async function GET() {
  return NextResponse.json(deskCollection);
}
