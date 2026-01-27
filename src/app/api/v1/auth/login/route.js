import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { generateToken } from "@/lib/token";

export async function POST(request) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: "Missing email or password", success: false },
        { status: 400 },
      );
    }

    const admin = await prisma.admin.findUnique({ where: { email } });

    if (!admin) {
      return NextResponse.json(
        { error: "Admin not found", success: false },
        { status: 404 },
      );
    }

    const isPasswordValid = admin.password === password;

    if (!isPasswordValid) {
      return NextResponse.json(
        { error: "Invalid password", success: false },
        { status: 401 },
      );
    }

    const token = generateToken({ id: admin.id, email: admin.email });

    return NextResponse.json(
      {
        message: "Admin logged in successfully",
        success: true,
        data: {
          id: admin.id,
          email: admin.email,
          name: admin.name,
        },
        token,
      },
      { status: 200 },
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal Server Error", success: false },
      { status: 500 },
    );
  }
}
