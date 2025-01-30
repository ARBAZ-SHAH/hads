import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req, res) {
  const { email, subject, message, fromEmail } = await req.json(); // Now receiving fromEmail from the client

  console.log(email, subject, message, fromEmail);
  
  try {
    const data = await resend.emails.send({
      from: fromEmail, // Dynamically set the from address
      to: email,  // Send the email to the recipient
      subject: subject,
      react: (
        <>
          <h1>{subject}</h1>
          <p>Thank you for contacting us!</p>
          <p>New message submitted:</p>
          <p>{message}</p>
        </>
      ),
    });
    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Email sending failed:", error);
    return NextResponse.json({ success: false, error });
  }
}
