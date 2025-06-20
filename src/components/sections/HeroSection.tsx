import React, { useState, useEffect, useMemo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faRocket, faLaptopCode } from '@fortawesome/free-solid-svg-icons';

export default function HeroSection() {
  const [currentDescriptionText, setCurrentDescriptionText] = useState('');
  const descriptionTexts = useMemo(() => [
    "WEB FOR MOS PRESENTATION",
    "Kembangkan Skill Codingmu",
    "Gabung Komunitas Programmer",
    "Bangun Portofolio Keren",
    "Aktif di Pondok IT",
    "Aktif di Rumah IT",
  ], []);

  const divisionTexts = useMemo(() => [
    "DIVISION",
    "PONDOK IT",
    "RUMAH IT",
    "YOGYAKARTA"
  ], []);

  const [currentDivisionText, setCurrentDivisionText] = useState('');

  const typingSpeed = 100; // milliseconds per character
  const deletingSpeed = 50; // milliseconds per character
  const delayBetweenTexts = 1000; // milliseconds

  // Effect for dynamic description text
  useEffect(() => {
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    const typeDescription = () => {
      const fullText = descriptionTexts[textIndex];
      setCurrentDescriptionText(
        isDeleting
          ? fullText.substring(0, charIndex - 1)
          : fullText.substring(0, charIndex + 1)
      );

      charIndex = isDeleting ? charIndex - 1 : charIndex + 1;

      if (!isDeleting && charIndex === fullText.length + 1) {
        setTimeout(() => (isDeleting = true), delayBetweenTexts);
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % descriptionTexts.length;
      }

      const currentSpeed = isDeleting ? deletingSpeed : typingSpeed;
      setTimeout(typeDescription, currentSpeed);
    };

    setTimeout(typeDescription, delayBetweenTexts);
  }, [descriptionTexts]);

  // Effect for dynamic division text
  useEffect(() => {
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    const typeDivision = () => {
      const fullText = divisionTexts[textIndex];
      setCurrentDivisionText(
        isDeleting
          ? fullText.substring(0, charIndex - 1)
          : fullText.substring(0, charIndex + 1)
      );

      charIndex = isDeleting ? charIndex - 1 : charIndex + 1;

      if (!isDeleting && charIndex === fullText.length + 1) {
        setTimeout(() => (isDeleting = true), delayBetweenTexts);
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % divisionTexts.length;
      }

      const currentSpeed = isDeleting ? deletingSpeed : typingSpeed;
      setTimeout(typeDivision, currentSpeed);
    };

    setTimeout(typeDivision, delayBetweenTexts);
  }, [divisionTexts]);

  return (
    <section id="hero" className="hero-section">
      <div className="hero-bg-animations">
        <div className="hero-scanner"></div>
        <div className="hero-floating-icons">
          <div className="floating-icon icon-1"><FontAwesomeIcon icon={faCode} /></div>
          <div className="floating-icon icon-2"><FontAwesomeIcon icon={faLaptopCode} /></div>
          <div className="floating-icon icon-3"><FontAwesomeIcon icon={faRocket} /></div>
        </div>
        <div className="hero-grid-overlay"></div>
      </div>
      
      <div className="hero-container">
        <div className="hero-content-wrap">
          <h1 className="hero-title">
            PROGRAMMER <span className="dynamic-division-text">{currentDivisionText}</span>
          </h1>
          <div className="hero-description-container">
            <p className="hero-description">
              {currentDescriptionText}
            </p>
          </div>
          <div className="hero-buttons">
            <a href="#concept" className="main-button">
              <span className="button-text">Concept</span>
              <span className="button-glow"></span>
            </a>
            <a href="#mentor" className="secondary-button">
              <span className="button-text">Mentor</span>
              <span className="button-glow"></span>
            </a>
          </div>
        </div>
        
        <div className="hero-decoration">
          <div className="holographic-sphere"></div>
        </div>
      </div>
    </section>
  );
} 