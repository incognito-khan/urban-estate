import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const totalProperties = await prisma.property.count();
    const activeListings = await prisma.property.count({
      where: { status: "available" },
    });

    // You can add more stats here as needed for the home page sections

    return NextResponse.json({
      success: true,
      data: {
        totalProperties,
        activeListings,
        // Mocking some stats for design consistency if not in DB yet
        verifiedAgents: 150,
        clientSatisfaction: 98,
        awardsWon: 12,
      },
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal Server Error", success: false },
      { status: 500 },
    );
  }
}
