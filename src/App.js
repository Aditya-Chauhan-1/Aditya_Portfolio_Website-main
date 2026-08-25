import { useState, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { darkTheme, lightTheme } from "./utils/Themes";
import { toast } from "./utils/toast";
import Navbar from "./components/Navbar";
import StarCanvas from "./components/canvas/Stars";
import ScrollToTop from "./components/ScrollToTop";
import WhatsAppFloat from "./components/WhatsAppFloat";
import PageProgress from "./components/PageProgress";
import ErrorBoundary from "./components/ErrorBoundary";
import Preloader from "./components/Preloader";
import { ToastProvider } from "./components/Toast";
import Home from "./pages/Home";
import Achievements from "./pages/Achievements";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
  position: relative;
  padding-top: 80px;

  @media (max-width: 768px) {
    padding-top: 70px;
  }
`;

function App() {
  const [currentTheme, setCurrentTheme] = useState("dark");
  const [toasts, setToasts] = useState([]);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    setCurrentTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setShowLoader(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const unsubscribe = toast.subscribe((action) => {
      if (action.type === "add") {
        setToasts((prev) => [...prev, action.toast]);
      }
    });
    return unsubscribe;
  }, []);

  const handleCloseToast = (id) => {
    setToasts((prev) =>
      prev.map((item) => (item.id === id ? { ...item, closing: true } : item))
    );
    setTimeout(() => {
      setToasts((prev) => prev.filter((item) => item.id !== id));
    }, 300);
  };

  const toggleTheme = () => {
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    setCurrentTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  const theme = currentTheme === "dark" ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <ErrorBoundary>
        <BrowserRouter>
          {showLoader && <Preloader />}
          <PageProgress />
          <a href="#Home" className="skip-link">
            Skip to content
          </a>
          <Navbar themeMode={currentTheme} toggleTheme={toggleTheme} />
          <Body>
            <StarCanvas />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/achievements" element={<Achievements />} />
            </Routes>
            <ScrollToTop />
            <WhatsAppFloat />
            <ToastProvider toasts={toasts} onClose={handleCloseToast} />
          </Body>
        </BrowserRouter>
      </ErrorBoundary>
    </ThemeProvider>
  );
}

export default App;
