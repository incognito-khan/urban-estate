import { NextResponse } from "next/server";

export async function POST() {
  try {
    const response = NextResponse.json(
      { message: "Logout successful", success: true },
      { status: 200 },
    );

    // Clear the token cookie
    response.cookies.set("token", "", {
      httpOnly: false, // Matches the login setting (which wasn't httpOnly but let's stick to simple clearing)
      path: "/",
      maxAge: 0,
    });

    return response;
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error", success: false },
      { status: 500 },
    );
  }
}
