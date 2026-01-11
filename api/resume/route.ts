// app/api/resume/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const username = req.nextUrl.searchParams.get('username');

  if (!username) {
    return NextResponse.json(
      { error: 'Username is required' },
      { status: 400 }
    );
  }

  // TODO: Fetch resume data from your database/storage
  // For now, returning a placeholder response
  return NextResponse.json({ 
    message: `Resume data for ${username}`,
    username,
    // Add your resume data structure here
    // data: { ... }
  });
}
