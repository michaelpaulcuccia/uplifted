import { NextRequest, NextResponse } from "next/server";
import { deskCollection } from "../../../../../data";

export async function GET(
  req: NextRequest,
  context: { params: Promise<{ filesName: string }> }
) {
  try {
    // Await the params object to resolve it
    const params = await context.params;

    // Ensure params exist before destructuring
    if (!params || !params.filesName) {
      return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }

    // Destructure params safely
    const { filesName } = params;

    // Normalize filesName to match stored format
    const normalizedFileName = decodeURIComponent(filesName)
      .replace(/-/g, " ")
      .toLowerCase();

    // Search for the desk in the collection
    const desk = deskCollection.find(
      (item) => item.filesName.toLowerCase() === normalizedFileName
    );

    if (!desk) {
      return NextResponse.json({ error: "Desk not found" }, { status: 404 });
    }

    return NextResponse.json(desk);
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
