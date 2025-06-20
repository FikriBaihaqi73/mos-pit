"use client"
import React, { useEffect, useState } from 'react';
import Image from "next/image";
import ConceptSection from "../components/sections/ConceptSection";
import MentorSection from "../components/sections/MentorSection";
import LearningFlowSection from "../components/sections/LearningFlowSection";
import LearningCultureSection from "../components/sections/LearningCultureSection";
import ActiveSantriSection from "../components/sections/ActiveSantriSection";
import ClosingSection from "../components/sections/ClosingSection";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  }

  useEffect(() => {
    const navLinks = document.querySelectorAll('nav a, .mobile-nav-menu a');

    const scrollToTarget = (targetElement: Element, duration: number) => {
      const startPosition = window.pageYOffset;
      const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
      const distance = targetPosition - startPosition;
      let startTime: number | null = null;

      function animation(currentTime: number) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
      }

      // Easing function
      function easeInOutQuad(t: number, b: number, c: number, d: number) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
      }

      requestAnimationFrame(animation);
    };

    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        if (targetId) {
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            scrollToTarget(targetElement, 1000); // 1000ms = 1 second duration
            // Close mobile menu if it's open
            setMobileMenuOpen(false);
          }
        }
      });
    });
    
    // Prevent scrolling when mobile menu is open
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      // Cleanup function
      document.body.style.overflow = 'auto';
    };
  }, [mobileMenuOpen]);

  return (
    <div className="main-container">
      {/* Header Navigation */}
      <header className="header-nav">
        <div className="header-container">
          <div className="header-logo-group">
            {/* Logo placeholder - replace with actual logo image if available */}
            <div className="logo-placeholder">
              <Image src="https://pondokit.com/wp-content/uploads/2024/04/Logo-Programmer.png" alt="Logo" width={40} height={40} />
            </div>
            <h1 className="site-title">PROGRAMMER DIVISION</h1>
          </div>
          <nav className="main-nav">
            <a href="#hero" className="nav-link">Beranda</a>
            <a href="#concept" className="nav-link">Concept</a>
            <a href="#learning-culture" className="nav-link">Budaya Belajar</a>
            <a href="#mentor" className="nav-link">Mentor</a>
            <a href="#learning-flow" className="nav-link">Alur Belajar</a>
            <a href="#active-santri" className="nav-link">Santri</a>
            <a href="#closing" className="nav-link">Affirmation</a>
          </nav>
          <button className="mobile-nav-toggle" onClick={toggleMobileMenu} aria-label="Toggle Navigation">
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </header>

      {/* Mobile Navigation Menu */}
      <div className={`mobile-nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
        <a href="#hero">Beranda</a>
        <a href="#concept">Concept</a>
        <a href="#mentor">Mentor</a>
        <a href="#learning-flow">Perbandingan</a>
        <a href="#learning-culture">Studi Kasus</a>
        <a href="#active-santri">Perjalanan</a>
      </div>

      {/* Hero Section (incorporating original text with new styling) */}
      <section id="hero" className="hero-section">
        <div className="hero-container">
          <h1 className="hero-title">
            PROGRAMMER DIVISION
          </h1>
          <p className="hero-description">
            WEB FOR MOS PRESENTATION
          </p>
        </div>
      </section>
      {/* Main Content */}
      <main className="main-content">
        <div className="sections-container">
          <ConceptSection />
          <LearningCultureSection />
          <MentorSection />
          <LearningFlowSection />
          <ActiveSantriSection />
          <ClosingSection />
        </div>
      </main>

      {/* Footer */}
      <footer className="main-footer">
        <div className="footer-container">
          <div className="footer-logos">
            <Image 
              src="https://sib.pondokit.com/wp-content/uploads/2022/12/Logo-Pondok-it.png" 
              alt="Pondok IT Logo" 
              width={120} 
              height={80} 
              className="footer-logo"
            />
            <span className="logo-separator">X</span>
            <Image 
              src="https://rumahitindonesia.com/wp-content/uploads/2023/11/1.png" 
              alt="Rumah IT Logo" 
              width={120} 
              height={120} 
              className="footer-logo"
            />
          </div>
          <p className="footer-credit">Credit: Creating By L The Limitless Learner and Maou73 the Limitbreaker Learner</p>
        </div>
      </footer>
    </div>
  );
}
