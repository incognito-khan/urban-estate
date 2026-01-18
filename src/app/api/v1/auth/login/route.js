import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json({
        error: "Missing email or password",
        status: 400,
        success: false,
      });
    }

    const admin = await prisma.admin.findUnique({ where: { email } });

    if (!admin) {
      return NextResponse.json({
        error: "Admin not found",
        status: 404,
        success: false,
      });
    }

    const isPasswordValid = admin.password === password;

    if (!isPasswordValid) {
      return NextResponse.json({
        error: "Invalid password",
        status: 401,
        success: false,
      });
    }

    return NextResponse.json({
      message: "Admin logged in successfully",
      status: 200,
      data: admin,
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
