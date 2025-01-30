import { NextRequest, NextResponse } from "next/server";
import { deskCollection } from "../../../../../data";

export async function GET(
  req: NextRequest,
  { params }: { params: { filesName: string } }
) {
  const { filesName } = params;

  // Normalize the filesName (assuming it's coming from the formatted URL)
  const normalizedFileName = decodeURIComponent(filesName)
    .replace(/-/g, " ")
    .toLowerCase();

  // Find the desk by filesName
  const desk = deskCollection.find(
    (item) => item.filesName.toLowerCase() === normalizedFileName
  );

  if (!desk) {
    return NextResponse.json({ error: "Desk not found" }, { status: 404 });
  }

  return NextResponse.json(desk);
}
