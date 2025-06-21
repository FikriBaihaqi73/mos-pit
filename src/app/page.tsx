"use client"
import React, { useEffect, useState } from 'react';
import Image from "next/image";
import ConceptSection from "../components/sections/ConceptSection";
import MentorSection from "../components/sections/MentorSection";
import LearningFlowSection from "../components/sections/LearningFlowSection";
import LearningCultureSection from "../components/sections/LearningCultureSection";
import ActiveSantriSection from "../components/sections/ActiveSantriSection";
import ClosingSection from "../components/sections/ClosingSection";
import HeroSection from "@/components/sections/HeroSection";
import ProgrammingConceptSection from "../components/sections/ProgrammingConceptSection";
import SalaryComparisonSection from "../components/sections/SalaryComparisonSection";
import BannedPersonalitySection from "../components/sections/BannedPersonalitySection";
import CallToActionSection from "../components/sections/CallToActionSection";

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

  // Scroll Animation Logic
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1, // Trigger when 10% of the element is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          // Stop observing once visible if you only want the animation to run once
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe all sections and other elements you want to animate
    document.querySelectorAll('.sections-container > section, .main-footer').forEach((section) => {
      section.classList.add('animate-on-scroll');
      observer.observe(section);
    });

    // Observe specific elements within sections if needed
    document.querySelectorAll(
      '.hero-title, .hero-description, .hero-buttons, .concept-card-wrapper, ' +
      '.santri-card-wrapper, .mentor-card-wrapper, .flow-step-item, ' +
      '.culture-insight-card, .culture-intro-card, .comparison-table-container, ' +
      '.timeline-item, .affirmation-word-card'
    ).forEach((element) => {
      element.classList.add('animate-on-scroll');
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <main className="main-container">
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
            <a href="#programming-concept" className="nav-link">Programmer?</a>
            <a href="#salary-comparison" className="nav-link">Salary</a>
            <a href="#banned-personality" className="nav-link">Banned</a>
            <a href="#concept" className="nav-link">Concept</a>
          </nav>
          <button className="mobile-nav-toggle" onClick={toggleMobileMenu} aria-label="Toggle Navigation">
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </header>

      {/* Mobile Navigation Menu */}
      <div className={`mobile-nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
        <a href="#hero">Beranda</a>
        <a href="#programming-concept">Programmer?</a>
        <a href="#salary-comparison">Salary</a>
        <a href="#banned-personality">Banned</a>
        <a href="#concept">Concept</a>
      </div>

      <HeroSection />

      {/* Main Content */}
      <div className="main-content">
        <div className="sections-container">
          <ProgrammingConceptSection />
          <SalaryComparisonSection />
          <BannedPersonalitySection />
          <ConceptSection />
          <LearningFlowSection />
          <LearningCultureSection />
          <MentorSection />
          <ActiveSantriSection />
          <CallToActionSection />
          <ClosingSection />
        </div>
      </div>

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
          <p className="footer-credit"> ©2025: Creating By L The Limitless Learner and Maou73 the Limitbreaker Learner</p>
        </div>
      </footer>
    </main>
  );
}
