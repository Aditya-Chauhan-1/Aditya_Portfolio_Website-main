const isProduction = process.env.NODE_ENV === "production";
const API_URL =
  process.env.REACT_APP_API_URL || (isProduction ? "" : "http://localhost:5000");

export const sendEmail = async (formData) => {
  const response = await fetch(`${API_URL}/api/send-email`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  });

  let data;
  try {
    data = await response.json();
  } catch {
    throw new Error(
      `Email server returned an invalid response (${response.status}).`
    );
  }

  if (!response.ok) {
    throw new Error(
      data.message || `Email server error: ${response.status} ${response.statusText}`
    );
  }

  return {
    success: true,
    message: data.message || "Email sent successfully!",
    data: data.data,
  };
};
