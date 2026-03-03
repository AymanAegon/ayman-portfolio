import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, message } = body;

        // Log the submission (in a real app, you might send an email or save to a DB)
        console.log('Contact Form Submission:', { name, email, message });

        // Simulate success
        return NextResponse.json({ success: true, message: 'Message received!' }, { status: 200 });
    } catch (error) {
        console.error('API Error:', error);
        return NextResponse.json({ success: false, message: 'Internal Server Error' }, { status: 500 });
    }
}
