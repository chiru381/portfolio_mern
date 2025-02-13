import React, { useRef, useState } from "react";
import { Link } from 'react-router-dom';
import styled from "styled-components";
import {
  Header as HeaderUI,
  HeaderItem,
  Text,
  useTheme,
  HeaderGroup,
  IconButton,
  Menu,
  MenuItem,
  useUpdateTheme,
} from "stelios";
import { IconCaretDown, IconSun, IconMoon, IconBrandGithub, IconMenu2, IconX } from "@tabler/icons-react";

import colorTokens from "../../../tokens/color/color-tokens.json";
import Settings from "./Settings/Settings";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // Mobile menu toggle
  const [appearance, setAppearance] = useState(colorTokens.appearance);
  const colorPalette = useTheme().theme.colorPalette;
  const _background = colorPalette.primary.appearance === "dark" ? "#202124" : "white";
  const categoryRef = useRef(null);
  
  const updateTheme = useUpdateTheme();
  const _color = colorPalette.primary.accentScale[10];

  const _toggleTheme = () => {
    updateTheme({
      appearance: appearance === "light" ? "dark" : "light",
      accents: {
        "primary": colorPalette.primary.main,
        "black": colorTokens.accent.black
      }
    });
    setAppearance((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <HeaderUI
      color="primary"
      id="header"
      height="5rem"
      style={{
        background: _background,
        outline: "none",
        boxShadow: "0px 2px 14px rgba(0, 0, 0, .15)",
        zIndex: 3,
      }}
      expandable={false}
    >
      <HeaderGroup style={{ marginLeft: "1rem" }}>
        <HeaderItem style={{ marginLeft: "2rem" }}>
          <Link tabIndex={0} color="primary" style={{ width: "100%", height: "100%" }} to="/">
            <Text tabIndex={-1} color="primary" fontFamily="'Dosis', sans-serif;">
              Chiranjeevi Kosanam
            </Text>
          </Link>
        </HeaderItem>
      </HeaderGroup>

      {/* Desktop Menu */}
      <NavLinks>
        <HeaderItem><Link to="/" style={{ color: _color }}>Home</Link></HeaderItem>
        <HeaderItem>
          <CategoryLink
            tabIndex={0}
            $color={_color}
            style={{ color: _color }} 
            ref={categoryRef}
            onClick={() => setOpen(!open)}
          >
            <Text disableColor>Category</Text>
            <IconCaretDown size="1rem" />
          </CategoryLink>
          {open && (
            <Menu
              variant="neumorph"
              open={open}
              anchorElement={categoryRef.current}
              color="primary"
              style={{
                backgroundColor: _background,
                boxShadow: "0 6px 6px rgba(0, 0, 0, .1)",
              }}
            >
              <MenuItem><Link to="/projects"><Text color="primary">Projects</Text></Link></MenuItem>
              <MenuItem><Link to="/certificates"><Text color="primary">Certificates</Text></Link></MenuItem>
              <MenuItem><Link to="/skills"><Text color="primary">Skills</Text></Link></MenuItem>
              <MenuItem><Link to="/experience"><Text color="primary">Experience</Text></Link></MenuItem>
              <MenuItem><Link to="/education"><Text color="primary">Education</Text></Link></MenuItem>
            </Menu>
          )}
        </HeaderItem>
        <HeaderItem><Link style={{ color: _color }} to="/resume">Resume</Link></HeaderItem>
      </NavLinks>

      {/* Icons Group */}
      <IconGroup>
        <IconButton color="primary" icon={appearance === "light" ? <IconSun /> : <IconMoon />} alt="Theme Toggle" size="small" variant="neumorph" onClick={_toggleTheme} />
        <IconButton color="primary" icon={<IconBrandGithub />} alt="GitHub" size="small" variant="neumorph" onClick={() => window.open("https://github.com/chiru381/")} />
        <Settings />
      </IconGroup>

      {/* Mobile Menu Button */}
      <MobileMenuButton onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <IconX size="2rem" /> : <IconMenu2 size="2rem" />}
      </MobileMenuButton>

      {/* Mobile Menu */}
      {menuOpen && (
        <MobileNav>
          <MobileNavItem><Link to="/">Home</Link></MobileNavItem>
          <MobileNavItem><Link to="/resume">Resume</Link></MobileNavItem>
          <MobileNavItem><Link to="/projects">Projects</Link></MobileNavItem>
          <MobileNavItem><Link to="/certificates">Certificates</Link></MobileNavItem>
          <MobileNavItem><Link to="/skills">Skills</Link></MobileNavItem>
          <MobileNavItem><Link to="/experience">Experience</Link></MobileNavItem>
          <MobileNavItem><Link to="/education">Education</Link></MobileNavItem>
          <MobileNavItem>
            <IconGroupMobile>
              <IconButton color="primary" icon={appearance === "light" ? <IconSun /> : <IconMoon />} onClick={_toggleTheme} />
              <IconButton color="primary" icon={<IconBrandGithub />} onClick={() => window.open("https://github.com/chiru381/")} />
              <Settings />
            </IconGroupMobile>
          </MobileNavItem>
        </MobileNav>
      )}
    </HeaderUI>
  );
};

export default Header;

// Styled Components
const NavLinks = styled(HeaderGroup)`
  @media (max-width: 768px) {
    display: none;
  }
`;

const IconGroup = styled(HeaderGroup)`
  @media (max-width: 768px) {
    display: none;
  }
`;

const IconGroupMobile = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
`;

const MobileMenuButton = styled.button`
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileNav = styled.div`
  position: absolute;
  top: 5rem;
  left: 0;
  width: 100%;
  background-color: white;
  padding: 1rem;
  display: flex;
  flex-direction: column;
`;

const MobileNavItem = styled.div`
  text-align: center;
  padding: 1rem;
`;
const CategoryLink = styled.button`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  cursor: pointer;
  background: none;
  border: none;
  font: inherit;
  color: ${(props) => props.$color};
  
  &:hover {
    text-decoration: underline;
  }

  &:focus-visible {
    outline: 1px solid ${(props) => props.$color};
    outline-offset: 2px;
    border-radius: 0.25rem;
  }
`;
