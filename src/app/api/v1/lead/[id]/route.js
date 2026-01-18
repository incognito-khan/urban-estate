import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  try {
    const { id } = await params;
    const lead = await prisma.lead.findUnique({ where: { id } });
    return NextResponse.json({
      message: "Lead fetched successfully",
      status: 200,
      data: lead,
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
