// src/app/api/waitlist/route.ts

import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { email } = await request.json();

  const response = await fetch('https://solbox-backend-hq.onrender.com/api/v1/join-waitlist/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email }), 
  });

  if (response.ok) {
    return NextResponse.json({ success: true });
  } else {
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
