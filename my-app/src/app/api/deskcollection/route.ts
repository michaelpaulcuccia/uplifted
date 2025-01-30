import { NextResponse } from "next/server";
import { deskCollection } from "../../../../data";

export async function GET() {
  return NextResponse.json(deskCollection);
}
