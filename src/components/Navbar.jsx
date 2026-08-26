import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Link as LinkR, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Bio } from "../data/constants";
import { MenuRounded, CloseRounded, DarkMode, LightMode } from "@mui/icons-material";

const NAV_LINKS = [
  { id: "Skills", label: "Skills" },
  { id: "Experience", label: "Experience" },
  { id: "Projects", label: "Projects" },
  { id: "Education", label: "Education" },
  { id: "Achievements", label: "Achievements" },
  { id: "Certificates", label: "Certificates" },
  { id: "Contact", label: "Contact" },
];

const Nav = styled.div`
  background-color: ${({ theme }) =>
    theme.bg === "#FFFFFF" ? "rgba(255, 255, 255, 0.95)" : "rgba(9, 9, 23, 0.95)"};
  backdrop-filter: blur(10px);
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 5000;
  color: ${({ theme }) => theme.text_primary};
  border-bottom: 1px solid
    ${({ theme }) =>
      theme.bg === "#FFFFFF" ? "rgba(0, 0, 0, 0.1)" : "rgba(255, 255, 255, 0.1)"};
  box-shadow: ${({ theme }) =>
    theme.bg === "#FFFFFF"
      ? "0 2px 10px rgba(0, 0, 0, 0.05)"
      : "0 2px 10px rgba(0, 0, 0, 0.3)"};

  @media (max-width: 768px) {
    height: 70px;
  }
`;

const ColorText = styled.span`
  color: ${({ theme }) => theme.primary};
  font-size: 24px;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const NameText = styled.span`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 700;
  font-size: 22px;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const SlashText = styled.span`
  color: ${({ theme }) => theme.primary};
  font-weight: 700;
  font-size: 22px;
  margin: 0 2px;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const NavbarContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NavLogo = styled(LinkR)`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 0 6px;
  font-weight: 700;
  text-decoration: none;
  color: ${({ theme }) => theme.text_primary};
  transition: transform 0.3s ease;
  white-space: nowrap;

  &:hover {
    transform: scale(1.04);
  }
`;

const NavItems = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 22px;
  padding: 0 6px;
  list-style: none;

  @media screen and (max-width: 1100px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: ${({ theme, $active }) => ($active ? theme.primary : theme.text_primary)};
  font-weight: ${({ $active }) => ($active ? 600 : 500)};
  cursor: pointer;
  transition: color 0.3s ease;
  text-decoration: none;
  position: relative;
  font-size: 15px;

  &::after {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 0;
    width: ${({ $active }) => ($active ? "100%" : "0")};
    height: 2px;
    background: ${({ theme }) => theme.primary};
    transition: width 0.3s ease;
  }

  &:hover {
    color: ${({ theme }) => theme.primary};

    &::after {
      width: 100%;
    }
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;

  @media screen and (max-width: 1100px) {
    display: none;
  }
`;

const GithubButton = styled.a`
  border: 1.5px solid ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.primary};
  display: flex;
  align-items: center;
  border-radius: 20px;
  cursor: pointer;
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 600;
  transition: all 0.3s ease;
  text-decoration: none;
  white-space: nowrap;

  &:hover {
    background: ${({ theme }) => theme.primary};
    color: #fff;
    transform: translateY(-2px);
  }
`;

const ThemeButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1.5px solid ${({ theme }) => theme.primary + "80"};
  background: transparent;
  color: ${({ theme }) => theme.text_primary};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.primary + "20"};
    color: ${({ theme }) => theme.primary};
  }

  svg {
    font-size: 20px;
  }
`;

const MobileIcon = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${({ theme }) => theme.text_primary};
  cursor: pointer;
  padding: 8px;
  position: relative;
  z-index: 5001;

  @media screen and (max-width: 1100px) {
    display: flex;
    align-items: center;
  }
`;

const MobileOverlay = styled.div`
  position: fixed;
  top: 80px;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 4990;
  background: ${({ theme }) => theme.bg};
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  overscroll-behavior: contain;
  isolation: isolate;

  @media (max-width: 768px) {
    top: 70px;
  }
`;

const MobileMenu = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 4px;
  list-style: none;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 12px 24px 40px;
  min-height: 100%;

  @media (max-width: 480px) {
    padding: 8px 16px 32px;
  }
`;

const MobileNavLink = styled.a`
  display: block;
  width: 100%;
  padding: 14px 12px;
  border-radius: 10px;
  color: ${({ theme, $active }) => ($active ? theme.primary : theme.text_primary)};
  font-weight: ${({ $active }) => ($active ? 600 : 500)};
  font-size: 16px;
  line-height: 1.3;
  text-decoration: none;
  background: ${({ theme, $active }) =>
    $active ? theme.primary + "22" : "transparent"};
  border: none;
  cursor: pointer;

  &:hover,
  &:focus-visible {
    color: ${({ theme }) => theme.primary};
    background: ${({ theme }) => theme.primary + "18"};
  }
`;

const MobileActions = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
  width: 100%;
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid
    ${({ theme }) =>
      theme.bg === "#FFFFFF" ? "rgba(0, 0, 0, 0.08)" : "rgba(255, 255, 255, 0.08)"};
`;

const Navbar = ({ themeMode, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("Skills");
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (location.pathname !== "/") return undefined;

    const ids = NAV_LINKS.map((link) => link.id);
    let ticking = false;

    const updateActive = () => {
      const headerOffset = window.innerWidth <= 768 ? 90 : 100;
      let current = ids[0];

      ids.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;
        if (el.getBoundingClientRect().top - headerOffset <= 0) {
          current = id;
        }
      });

      const doc = document.documentElement;
      if (window.innerHeight + window.scrollY >= doc.scrollHeight - 48) {
        current = ids[ids.length - 1];
      }

      setActive((prev) => (prev === current ? prev : current));
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        updateActive();
        ticking = false;
      });
    };

    updateActive();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [location.pathname]);

  useEffect(() => {
    if (!isOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    document.body.classList.add("nav-open");
    document.documentElement.classList.add("nav-open");

    const onKey = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth > 1100) setIsOpen(false);
    };

    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
      document.body.classList.remove("nav-open");
      document.documentElement.classList.remove("nav-open");
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [isOpen]);

  const scrollToId = (targetId) => {
    const element = document.getElementById(targetId);
    if (!element) return;
    const offset = 80;
    const top = element.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top, behavior: "smooth" });
  };

  const handleNavClick = (e, link) => {
    e.preventDefault();
    setIsOpen(false);
    setActive(link.id);

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => scrollToId(link.id), 120);
      return;
    }

    scrollToId(link.id);
  };

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo
          to="/"
          onClick={() => {
            setIsOpen(false);
            setActive("Skills");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <ColorText>&lt;</ColorText>
          <NameText>Aditya</NameText>
          <SlashText>/</SlashText>
          <NameText>Chauhan</NameText>
          <ColorText>&gt;</ColorText>
        </NavLogo>

        <MobileIcon
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle mobile menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <CloseRounded /> : <MenuRounded />}
        </MobileIcon>

        <NavItems role="navigation" aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <NavLink
                href={`/#${link.id}`}
                $active={active === link.id}
                onClick={(e) => handleNavClick(e, link)}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </NavItems>

        {isOpen &&
          createPortal(
            <MobileOverlay
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
            >
              <MobileMenu>
                {NAV_LINKS.map((link) => (
                  <li key={link.id}>
                    <MobileNavLink
                      href={`/#${link.id}`}
                      $active={active === link.id}
                      onClick={(e) => handleNavClick(e, link)}
                    >
                      {link.label}
                    </MobileNavLink>
                  </li>
                ))}
                <MobileActions>
                  <ThemeButton
                    type="button"
                    onClick={toggleTheme}
                    aria-label="Toggle theme"
                  >
                    {themeMode === "dark" ? <LightMode /> : <DarkMode />}
                  </ThemeButton>
                  <GithubButton href={Bio.github} target="_blank" rel="noopener noreferrer">
                    Github Profile
                  </GithubButton>
                </MobileActions>
              </MobileMenu>
            </MobileOverlay>,
            document.body
          )}

        <ButtonContainer>
          <ThemeButton type="button" onClick={toggleTheme} aria-label="Toggle color theme">
            {themeMode === "dark" ? <LightMode /> : <DarkMode />}
          </ThemeButton>
          <GithubButton href={Bio.github} target="_blank" rel="noopener noreferrer">
            Github Profile
          </GithubButton>
        </ButtonContainer>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
