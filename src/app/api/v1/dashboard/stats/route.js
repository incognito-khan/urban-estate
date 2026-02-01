import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const totalLeads = await prisma.lead.count();
    const newLeads = await prisma.lead.count({ where: { status: "new" } });
    const convertedLeads = await prisma.lead.count({
      where: { status: "sold" },
    });
    const pendingLeads = await prisma.lead.count({
      where: { status: "contact" },
    });

    const totalProperties = await prisma.property.count();
    const totalSubscribers = await prisma.newsletter.count();

    // Get recent leads with property details
    const recentLeads = await prisma.lead.findMany({
      take: 5,
      orderBy: { createdAt: "desc" },
      include: {
        property: {
          select: {
            title: true,
          },
        },
      },
    });

    // Get lead status summary counts
    const statusSummary = [
      { label: "New", count: newLeads, color: "primary" },
      { label: "Contacted", count: pendingLeads, color: "info" },
      { label: "Sold", count: convertedLeads, color: "success" },
    ];

    return NextResponse.json({
      success: true,
      data: {
        stats: {
          totalLeads,
          newLeads,
          convertedLeads,
          pendingLeads,
          totalProperties,
          totalSubscribers,
        },
        recentLeads,
        statusSummary,
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
