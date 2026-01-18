import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  try {
    const { id } = await params;
    const property = await prisma.property.findUnique({
      where: { id },
      include: { leads: true },
    });
    return NextResponse.json({
      message: "Property fetched successfully",
      status: 200,
      data: property,
      success: true,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      error: "Internal Server Error",
      status: 500,
      success: false,
    });
  }
}
