import { Resend } from "resend";

export const runtime = "nodejs";

const escapeHtml = (value = "") =>
  String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  })[character]);

const createEmailTemplate = (name, email, mobile, subject, message) => `
  <!DOCTYPE html>
  <html>
    <body style="font-family:Arial,sans-serif;line-height:1.6;color:#333">
      <div style="max-width:600px;margin:0 auto;padding:20px;background:#f9f9f9">
        <h2 style="padding:20px;background:#854CE6;color:white">New Contact Form Submission</h2>
        <div style="padding:30px;background:white">
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          ${mobile ? `<p><strong>Mobile:</strong> ${escapeHtml(mobile)}</p>` : ""}
          ${subject ? `<p><strong>Subject:</strong> ${escapeHtml(subject)}</p>` : ""}
          <p><strong>Message:</strong></p>
          <div style="white-space:pre-wrap">${escapeHtml(message)}</div>
        </div>
      </div>
    </body>
  </html>
`;

export async function GET() {
  return Response.json({ status: "OK", message: "Email API is running" });
}

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json(
      { success: false, message: "Request body must be valid JSON." },
      { status: 400 }
    );
  }

  const { from_name, from_email, from_mobile, subject, message } = body ?? {};
  if (
    typeof from_name !== "string" ||
    !from_name.trim() ||
    typeof from_email !== "string" ||
    !from_email.trim() ||
    typeof message !== "string" ||
    !message.trim()
  ) {
    return Response.json(
      {
        success: false,
        message: "Please fill in all required fields (Name, Email, and Message)",
      },
      { status: 400 }
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(from_email)) {
    return Response.json(
      { success: false, message: "Please enter a valid email address" },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("Email service is not configured: RESEND_API_KEY is missing.");
    return Response.json(
      { success: false, message: "Email service is not configured." },
      { status: 500 }
    );
  }

  try {
    const resend = new Resend(apiKey);
    const { data, error } = await resend.emails.send({
      from: process.env.FROM_EMAIL || "onboarding@resend.dev",
      to: [process.env.CONTACT_EMAIL || "aadityachauhan6395@gmail.com"],
      subject: subject || `Contact Form Message from ${from_name}`,
      html: createEmailTemplate(
        from_name,
        from_email,
        from_mobile,
        subject,
        message
      ),
      replyTo: from_email,
    });

    if (error) {
      console.error("Resend error:", error);
      return Response.json(
        { success: false, message: error.message || "Failed to send email" },
        { status: 500 }
      );
    }

    return Response.json({
      success: true,
      message: "Email sent successfully!",
      data,
    });
  } catch (error) {
    console.error("Email service error:", error);
    return Response.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
