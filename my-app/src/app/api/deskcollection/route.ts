import { NextResponse } from "next/server";

const deskCollection = [
  {
    name: "UPLIFT Standing Desk",
    varieties: 31,
    desktopSizes: '42" to 80" Wide x 30" Deep',
    frameType: "V2 or V2-Commercial",
    stars: 5,
    reviews: 19701,
    price: 599,
    swatches: ["bamboo-dark", "laminate-ashgray", "laminate-maple"],
  },
];

export async function GET() {
  return NextResponse.json(deskCollection);
}
