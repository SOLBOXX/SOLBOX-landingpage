import { NextResponse } from 'next/server';

const waitlist: Array<{ email: string; userType: string }> = [];

export async function POST(req: Request) {
  try {
    const { email, userType } = await req.json();
    
    waitlist.push({ email, userType });
    
    return NextResponse.json({ message: "User added to dummy waitlist", waitlist });
  } catch (error) {
    return NextResponse.json({ message: "Failed to add user to waitlist" }, { status: 500 });
  }
}
