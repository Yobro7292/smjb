import { getUser, setUser } from "@/lib/prisma/user";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json()
  const data = body.userMessage;
  const res = await setUser(data)
  return NextResponse.json({res})
}
export async function GET(request: Request) {
  const res = await getUser()
  return NextResponse.json({res})
}
