import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json(
        { error: "Email is required", success: false },
        { status: 400 },
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address", success: false },
        { status: 400 },
      );
    }

    // Check if already subscribed
    const existing = await prisma.newsletter.findUnique({
      where: { email },
    });

    if (existing) {
      return NextResponse.json(
        { error: "This email is already subscribed!", success: false },
        { status: 400 },
      );
    }

    // Create subscription
    await prisma.newsletter.create({
      data: { email },
    });

    return NextResponse.json(
      {
        message: "Thank you for subscribing!",
        success: true,
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("Newsletter error:", error);
    return NextResponse.json(
      { error: "Internal Server Error", success: false },
      { status: 500 },
    );
  }
}

export async function GET() {
  try {
    const subscribers = await prisma.newsletter.findMany({
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(
      {
        success: true,
        data: subscribers,
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Newsletter GET error:", error);
    return NextResponse.json(
      { error: "Internal Server Error", success: false },
      { status: 500 },
    );
  }
}

export async function DELETE(request) {
  try {
    const { id } = await request.json();

    if (!id) {
      return NextResponse.json(
        { error: "ID is required", success: false },
        { status: 400 },
      );
    }

    await prisma.newsletter.delete({
      where: { id },
    });

    return NextResponse.json(
      {
        message: "Subscriber removed successfully",
        success: true,
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Newsletter DELETE error:", error);
    return NextResponse.json(
      { error: "Internal Server Error", success: false },
      { status: 500 },
    );
  }
}
