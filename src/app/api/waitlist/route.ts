import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { email, userType } = await request.json();

  console.log("Received email:", email);
  console.log("User type:", userType);

  try {
    const response = await fetch('https://solbox-backend-hq.onrender.com/api/v1/join-waitlist/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, userType }),
    });

    const data = await response.json(); // Parse the response from the external API
    console.log("Response from external API:", data);

    if (response.ok) {
      return NextResponse.json({ success: true, data });
    } else {
      console.error('Error from external API:', data);
      return NextResponse.json({ success: false, error: data }, { status: 500 });
    }
  } catch (error) {
    let errorMessage = 'An unknown error occurred';
    
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    
    console.error('Fetch error:', errorMessage);
    return NextResponse.json({ success: false, error: errorMessage }, { status: 500 });
  }
}
