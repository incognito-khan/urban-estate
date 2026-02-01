import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { name, email, phone, subject, message, propertyId } =
      await request.json();

    if (!name || (!email && !phone)) {
      return NextResponse.json({
        error: "Name and either Email or Phone are required",
        status: 400,
        success: false,
      });
    }

    const lead = await prisma.lead.create({
      data: {
        name,
        email,
        phone,
        subject,
        message,
        propertyId: propertyId || null,
      },
    });

    return NextResponse.json({
      message: "Message sent successfully",
      status: 201,
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

export async function GET() {
  try {
    const leads = await prisma.lead.findMany({
      include: {
        property: {
          select: {
            title: true,
            id: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    return NextResponse.json({
      message: "Leads fetched successfully",
      status: 200,
      data: leads,
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

export async function DELETE(request) {
  try {
    const { id } = await request.json();
    const lead = await prisma.lead.delete({ where: { id } });
    return NextResponse.json({
      message: "Lead deleted successfully",
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

export async function PATCH(request) {
  try {
    const { id, status } = await request.json();
    const lead = await prisma.lead.update({
      where: { id },
      data: { status },
    });
    return NextResponse.json({
      message: "Lead updated successfully",
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
