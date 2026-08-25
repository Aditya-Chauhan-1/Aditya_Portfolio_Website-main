const isProduction = process.env.NODE_ENV === "production";
const API_URL =
  process.env.REACT_APP_API_URL || (isProduction ? "" : "http://localhost:5000");
const CONTACT_EMAIL =
  process.env.REACT_APP_CONTACT_EMAIL || "aadityachauhan6395@gmail.com";

const openMailtoFallback = (formData) => {
  const subject = encodeURIComponent(
    formData.subject || `Portfolio message from ${formData.from_name}`
  );
  const body = encodeURIComponent(
    `Name: ${formData.from_name}\nEmail: ${formData.from_email}\nPhone: ${
      formData.from_mobile || "N/A"
    }\n\n${formData.message}`
  );
  window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
};

export const sendEmail = async (formData) => {
  try {
    const apiEndpoint = `${API_URL}/api/send-email`;
    const response = await fetch(apiEndpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      let errorMessage = `Server error: ${response.status} ${response.statusText}`;
      try {
        const errorData = await response.json();
        errorMessage = errorData.message || errorMessage;
      } catch (e) {
        // keep status text
      }
      throw new Error(errorMessage);
    }

    const data = await response.json();
    return {
      success: true,
      message: data.message || "Email sent successfully!",
      data: data.data,
    };
  } catch (error) {
    openMailtoFallback(formData);
    return {
      success: true,
      fallback: true,
      message: "Opening your email app so the message can still be sent.",
    };
  }
};

