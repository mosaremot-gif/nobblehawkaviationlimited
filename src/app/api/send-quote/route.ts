import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { tripType, departure, destination, flightDate, passengers, preferredAircraft, fullName, email, phone, company, notes } = body;

    const data = await resend.emails.send({
      from: "Noble Hawk Charter Desk <info@noblehawkaviationlimited.com>",
      to: ["info@noblehawkaviationlimited.com"],
      replyTo: email,
      subject: `New Flight Charter Request: ${departure} to ${destination} (${fullName})`,
      html: `
        <div style="font-family: Arial, sans-serif; color: #111; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eaeaea; border-radius: 12px;">
          <h2 style="color: #62C5ED; background: #000; padding: 15px; border-radius: 8px; text-align: center;">New Charter Flight Request</h2>
          
          <h3 style="border-bottom: 2px solid #62C5ED; padding-bottom: 5px;">Itinerary Details</h3>
          <p><strong>Trip Type:</strong> ${tripType}</p>
          <p><strong>Departure:</strong> ${departure}</p>
          <p><strong>Destination:</strong> ${destination}</p>
          <p><strong>Departure Date:</strong> ${flightDate}</p>
          <p><strong>Passengers:</strong> ${passengers}</p>
          <p><strong>Preferred Jet:</strong> ${preferredAircraft || "No preference (Best match)"}</p>

          <h3 style="border-bottom: 2px solid #62C5ED; padding-bottom: 5px; margin-top: 20px;">Client Contact Information</h3>
          <p><strong>Full Name:</strong> ${fullName}</p>
          <p><strong>Email Address:</strong> ${email}</p>
          <p><strong>Phone / WhatsApp:</strong> ${phone}</p>
          <p><strong>Company:</strong> ${company || "N/A"}</p>
          
          <h3 style="border-bottom: 2px solid #62C5ED; padding-bottom: 5px; margin-top: 20px;">Additional Requirements</h3>
          <p style="background: #f9f9f9; padding: 10px; border-radius: 6px;">${notes || "None provided"}</p>
          
          <hr style="border: none; border-top: 1px solid #eaeaea; margin: 20px 0;" />
          <p style="font-size: 11px; color: #666; text-align: center;">Noble Hawk Aviation Limited Automated Dispatch System</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ success: false, error: (error as Error).message }, { status: 500 });
  }
}