import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const currentTime = new Date().toISOString();
  return NextResponse.json({ message: currentTime })
}