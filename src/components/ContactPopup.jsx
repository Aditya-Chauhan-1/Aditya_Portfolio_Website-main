import React, { useRef, useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { CloseRounded, SendRounded } from "@mui/icons-material";
import { sendEmail } from "../utils/emailService";

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.55);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding: 20px;
`;

const PopupContainer = styled(motion.div)`
  max-width: 480px;
  width: 100%;
  max-height: 92vh;
  overflow: hidden;
  border-radius: 24px;
  position: relative;
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.35);
  display: flex;
  flex-direction: column;

  @media (max-width: 480px) {
    border-radius: 20px;
    max-height: 95vh;
  }
`;

const Header = styled.div`
  position: relative;
  background: linear-gradient(135deg, #2563eb 0%, #7c3aed 50%, #c026d3 100%);
  padding: 28px 28px 24px;
  text-align: center;
  flex-shrink: 0;

  @media (max-width: 480px) {
    padding: 24px 20px 20px;
  }
`;

const Sparkle = styled.span`
  position: absolute;
  top: 18px;
  left: 20px;
  font-size: 22px;
  line-height: 1;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
`;

const CloseButton = styled(motion.button)`
  position: absolute;
  top: 16px;
  right: 16px;
  cursor: pointer;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: none;
  background-color: rgba(255, 255, 255, 0.85);
  transition: all 0.2s ease;
  padding: 0;

  &:hover {
    background-color: #fff;
    transform: scale(1.05);
  }

  svg {
    color: #64748b;
    font-size: 20px;
  }
`;

const Title = styled(motion.h2)`
  font-size: 26px;
  font-weight: 700;
  color: #ffffff;
  margin: 8px 0 8px;
  line-height: 1.25;

  @media (max-width: 480px) {
    font-size: 22px;
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 14px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.92);
  line-height: 1.5;
  margin: 0;
  max-width: 320px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 480px) {
    font-size: 13px;
  }
`;

const FormBody = styled.div`
  background: rgba(248, 245, 255, 0.97);
  backdrop-filter: blur(12px);
  padding: 24px 28px 28px;
  overflow-y: auto;
  flex: 1;

  @media (max-width: 480px) {
    padding: 20px;
  }
`;

const Form = styled(motion.form)`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

const FieldGroup = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Label = styled.label`
  font-size: 14px;
  font-weight: 600;
  color: #1e293b;
`;

const Input = styled(motion.input)`
  width: 100%;
  background-color: #ffffff;
  border: none;
  outline: none;
  font-size: 15px;
  color: #1e293b;
  border-radius: 12px;
  padding: 14px 16px;
  font-family: inherit;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);
  transition: box-shadow 0.2s ease, transform 0.2s ease;

  &:focus {
    box-shadow: 0 0 0 3px rgba(124, 58, 237, 0.2);
  }

  &::placeholder {
    color: #94a3b8;
  }

  &:disabled {
    opacity: 0.65;
    cursor: not-allowed;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    padding: 12px 14px;
  }
`;

const TextArea = styled(motion.textarea)`
  width: 100%;
  background-color: #ffffff;
  border: none;
  outline: none;
  font-size: 15px;
  color: #1e293b;
  border-radius: 12px;
  padding: 14px 16px;
  resize: vertical;
  min-height: 110px;
  font-family: inherit;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);
  transition: box-shadow 0.2s ease;

  &:focus {
    box-shadow: 0 0 0 3px rgba(124, 58, 237, 0.2);
  }

  &::placeholder {
    color: #94a3b8;
  }

  &:disabled {
    opacity: 0.65;
    cursor: not-allowed;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    padding: 12px 14px;
    min-height: 100px;
  }
`;

const SubmitButton = styled(motion.button)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background: linear-gradient(135deg, #2563eb 0%, #7c3aed 50%, #c026d3 100%);
  padding: 15px 24px;
  border-radius: 14px;
  border: none;
  color: #ffffff;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  margin-top: 4px;
  box-shadow: 0 4px 16px rgba(124, 58, 237, 0.35);

  svg {
    font-size: 20px;
  }

  &:hover:not(:disabled) {
    transform: translateY(-1px);
    box-shadow: 0 6px 20px rgba(124, 58, 237, 0.45);
  }

  &:disabled {
    opacity: 0.75;
    cursor: not-allowed;
  }

  @media (max-width: 480px) {
    font-size: 15px;
    padding: 14px 20px;
  }
`;

const StatusMessage = styled(motion.div)`
  padding: 12px 16px;
  border-radius: 10px;
  font-size: 13px;
  text-align: center;
  white-space: pre-line;
  background-color: ${({ type }) =>
    type === "success"
      ? "rgba(76, 175, 80, 0.15)"
      : "rgba(244, 67, 54, 0.12)"};
  color: ${({ type }) => (type === "success" ? "#15803d" : "#dc2626")};
  border: 1px solid
    ${({ type }) =>
      type === "success"
        ? "rgba(76, 175, 80, 0.35)"
        : "rgba(244, 67, 54, 0.35)"};
`;

const ContactPopup = ({ isOpen, onClose }) => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: null, message: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    const formData = {
      from_name: form.current.from_name.value,
      from_email: form.current.from_email.value,
      from_mobile: form.current.from_mobile.value,
      subject: form.current.subject.value,
      message: form.current.message.value,
    };

    if (!formData.from_email || !formData.from_name || !formData.message) {
      setSubmitStatus({
        type: "error",
        message: "Please fill in all required fields (Name, Email, and Message)",
      });
      setIsSubmitting(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.from_email)) {
      setSubmitStatus({
        type: "error",
        message: "Please enter a valid email address",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      await sendEmail(formData);

      setSubmitStatus({
        type: "success",
        message: "Message Successfully Sent ✅\nI will get back to you soon!",
      });
      form.current.reset();

      setTimeout(() => {
        onClose();
        setSubmitStatus({ type: null, message: "" });
      }, 3000);
    } catch (error) {
      console.error("Error:", error);
      let errorMessage = error.message || "Failed to send message. Please try again later.";

      const isDevelopment = process.env.NODE_ENV === "development";
      if (
        isDevelopment &&
        (errorMessage.includes("Unable to connect to server") ||
          errorMessage.includes("Failed to fetch") ||
          errorMessage.includes("NetworkError"))
      ) {
        errorMessage =
          "⚠️ Backend server is not running!\n\n" +
          "Please start the server:\n" +
          "1. Open terminal\n" +
          "2. Run: npm run server\n" +
          "OR run both together: npm run dev\n\n" +
          "Then try submitting again.";
      }

      setSubmitStatus({
        type: "error",
        message: errorMessage,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3, ease: "easeOut" } },
    exit: { opacity: 0, transition: { duration: 0.2, ease: "easeIn" } },
  };

  const popupVariants = {
    hidden: { scale: 0.85, opacity: 0, y: 40 },
    visible: {
      scale: 1,
      opacity: 1,
      y: 0,
      transition: { type: "spring", damping: 22, stiffness: 320, delay: 0.05 },
    },
    exit: { scale: 0.9, opacity: 0, y: 24, transition: { duration: 0.2 } },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -12 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.15, duration: 0.35 } },
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: -8 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.22, duration: 0.35 } },
  };

  const formVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.06, delayChildren: 0.28 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", damping: 22, stiffness: 260 },
    },
  };

  const closeButtonVariants = {
    hidden: { opacity: 0, scale: 0.6 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", damping: 18, stiffness: 320, delay: 0.1 },
    },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <Overlay
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={onClose}
        >
          <PopupContainer
            variants={popupVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
          >
            <Header>
              <Sparkle>✨</Sparkle>
              <CloseButton
                type="button"
                variants={closeButtonVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                onClick={onClose}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.92 }}
                aria-label="Close"
              >
                <CloseRounded />
              </CloseButton>

              <Title variants={titleVariants} initial="hidden" animate="visible">
                Get In Touch! 🚀
              </Title>

              <Subtitle
                variants={subtitleVariants}
                initial="hidden"
                animate="visible"
              >
                Have a question or want to work together? Send me a message!
              </Subtitle>
            </Header>

            <FormBody>
              <Form
                ref={form}
                onSubmit={handleSubmit}
                variants={formVariants}
                initial="hidden"
                animate="visible"
              >
                <FieldGroup variants={itemVariants}>
                  <Label htmlFor="from_name">Your Name *</Label>
                  <Input
                    id="from_name"
                    name="from_name"
                    required
                    disabled={isSubmitting}
                  />
                </FieldGroup>

                <FieldGroup variants={itemVariants}>
                  <Label htmlFor="from_email">Your Email *</Label>
                  <Input
                    id="from_email"
                    name="from_email"
                    type="email"
                    required
                    disabled={isSubmitting}
                  />
                </FieldGroup>

                <FieldGroup variants={itemVariants}>
                  <Label htmlFor="from_mobile">Your Mobile Number</Label>
                  <Input
                    id="from_mobile"
                    name="from_mobile"
                    type="tel"
                    disabled={isSubmitting}
                  />
                </FieldGroup>

                <FieldGroup variants={itemVariants}>
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    disabled={isSubmitting}
                  />
                </FieldGroup>

                <FieldGroup variants={itemVariants}>
                  <Label htmlFor="message">Your Message *</Label>
                  <TextArea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    disabled={isSubmitting}
                  />
                </FieldGroup>

                <SubmitButton
                  variants={itemVariants}
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  {!isSubmitting && <SendRounded />}
                </SubmitButton>

                {submitStatus.message && (
                  <StatusMessage
                    type={submitStatus.type}
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                  >
                    {submitStatus.message}
                  </StatusMessage>
                )}
              </Form>
            </FormBody>
          </PopupContainer>
        </Overlay>
      )}
    </AnimatePresence>
  );
};

export default ContactPopup;
