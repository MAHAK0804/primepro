"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Modal from "../Modal";
import ContactForm from "../ContactForm";
import styles from "./Header.module.css";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openDropdownId, setOpenDropdownId] = useState(null);
  const [activeSection, setActiveSection] = useState("");
  const pathname = usePathname();
  const router = useRouter();
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);
  useEffect(() => {
    // Set active section based on current pathname
    const currentPath = pathname.replace("/", "");
    if (currentPath) {
      setActiveSection(currentPath);
    } else {
      // Set 'why-pro' as active when on home page
      setActiveSection("why-pro");
    }
  }, [pathname]);

  const handleNavClick = (path) => {
    if (path === "why-pro") {
      router.push("/");
      setActiveSection("why-pro");
    } else {
      router.push(`/${path}`);
      setActiveSection(path);
    }
    setIsMenuOpen(false);
  };

  const handleHomeClick = (e) => {
    if (pathname === "/") {
      e.preventDefault(); // Prevent navigation if already on home page
    }
  };

  const navItems = [
    {
      label: "Home",
      id: "home",
      path: "/",
    },
    {
      label: "About Us",
      id: "about",
      path: "about",
    },
    {
      label: "Services",
      id: "services",
      path: "services",
      hasDropdown: true,
      subItems: [
        {
          label: "Protect Your Reputation",
          path: "services/protect-your-reputation",
        },
        {
          label: "Build Your Reputation",
          path: "services/build-your-reputation",
        },
      ],
    },
    {
      label: "Who we serve",
      id: "who-we-serve",
      path: "who-we-serve",
    },
    {
      label: "What we remove",
      id: "what-we-remove",
      path: "what-we-remove",
    },
    {
      label: "Blog",
      id: "blog",
      path: "blog",
    },
    {
      label: "FAQ",
      id: "FAQs",
      path: "FAQs",
    },
    {
      label: "Contact",
      id: "contact",
      path: "contact",
    },
  ];

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" onClick={handleHomeClick}>
          <Image
            src="/LogoHome.svg"
            alt="Logo"
            width={130}
            height={25}
            className={styles.logoImage}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            {navItems.map((item, index) => (
              <li key={index} className={styles.navItem}>
                <div
                  className={`${styles.navLinkWrapper} ${
                    item.hasDropdown ? styles.hasDropdown : ""
                  }`}
                  onMouseEnter={() => setOpenDropdownId(item.id)}
                  onMouseLeave={() => setOpenDropdownId(null)}
                >
                  <button
                    onClick={() => handleNavClick(item.path)}
                    className={`${styles.navLink} ${
                      activeSection === item.id ? styles.active : ""
                    }`}
                  >
                    {item.label}
                    {item.hasDropdown && (
                      <span className={styles.dropdownArrow}></span> // or use an icon/image here
                    )}
                  </button>

                  {item.hasDropdown &&
                    Array.isArray(item.subItems) &&
                    hasMounted &&
                    openDropdownId === item.id && (
                      <ul className={styles.dropdownMenu}>
                        {item.subItems.map((sub, idx) => (
                          <li key={idx}>
                            <button
                              className={styles.dropdownItem}
                              onClick={() => handleNavClick(sub.path)}
                            >
                              {sub.label}
                            </button>
                          </li>
                        ))}
                      </ul>
                    )}
                </div>
              </li>
            ))}
          </ul>
        </nav>

        {/* <button
          className={styles.contactButton}
          onClick={() => setIsModalOpen(true)}
        >
          Contact us
        </button> */}

        {/* Mobile Navigation */}
        <button
          className={`${styles.mobileMenuButton} ${
            isMenuOpen ? styles.active : ""
          }`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={styles.mobileMenuIcon}></span>
        </button>

        <div
          className={`${styles.mobileNavOverlay} ${
            isMenuOpen ? styles.active : ""
          }`}
          onClick={() => setIsMenuOpen(false)}
        />

        <div
          className={`${styles.mobileNavContent} ${
            isMenuOpen ? styles.active : ""
          }`}
        >
          <ul className={styles.mobileNavList}>
            {navItems.map((item, index) => (
              <li key={index} className={styles.mobileNavItem}>
                <div className={styles.mobileNavLinkWrapper}>
                  <button
                    onClick={() => {
                      if (item.hasDropdown) {
                        setOpenDropdownId(
                          openDropdownId === item.id ? null : item.id
                        );
                      } else {
                        handleNavClick(item.path);
                      }
                    }}
                    className={`${styles.mobileNavLink} ${
                      activeSection === item.id ? styles.active : ""
                    }`}
                  >
                    {item.label}
                    {item.hasDropdown && (
                      // <span className={`${styles.mobileDropdownArrow} ${openDropdownId === item.id ? styles.mobileDropdownArrow : ''}`}>
                      // </span>
                      <span
                        className={`${styles.mobileDropdownArrow} ${
                          openDropdownId === item.id
                            ? styles.mobileDropdownArrow
                            : ""
                        }`}
                      />
                    )}
                  </button>

                  {/* Show subItems if this dropdown is open */}
                  {item.hasDropdown &&
                    Array.isArray(item.subItems) &&
                    openDropdownId === item.id && (
                      <ul className={styles.mobileSubMenu}>
                        {item.subItems.map((sub, subIndex) => (
                          <li
                            key={subIndex}
                            className={styles.mobileSubMenuItem}
                          >
                            <button
                              onClick={() => handleNavClick(sub.path)}
                              className={styles.mobileSubMenuLink}
                            >
                              {sub.label}
                            </button>
                          </li>
                        ))}
                      </ul>
                    )}
                </div>
              </li>
            ))}
          </ul>
          <button
            className={styles.mobileContactButton}
            onClick={() => {
              setIsModalOpen(true);
              setIsMenuOpen(false);
            }}
          >
            Contact us
          </button>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ContactForm onClose={() => setIsModalOpen(false)} />
      </Modal>
    </header>
  );
}
