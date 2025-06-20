import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCloud, faMobileAlt, faGlobe,
  faDesktop, faGamepad, faServer
} from '@fortawesome/free-solid-svg-icons';

export default function ProgrammingConceptSection() {
  return (
    <section id="programming-concept" className="programming-concept-section">
      <div className="flow-content-wrapper">
        <div className="section-header-center">
          <h2 className="hero-title neon-text-orange">
            Apa Itu Programmer?
          </h2>
          <p className="hero-description">
          Programmer adalah seorang profesional yang menulis, menguji, dan memelihara kode perangkat lunak untuk menciptakan aplikasi, sistem, atau program komputer. Mereka menggunakan berbagai bahasa pemrograman untuk mengembangkan solusi yang dapat memenuhi kebutuhan pengguna atau bisnis.
          </p>
        </div>

        <div className="programming-concept-container">
          <h3 className="flow-card-title neon-text-purple mt-20">
            Jalur Programmer
          </h3>
          <div className="flow-steps-container flow-grid">
            <div className="flow-step-item concept-card">
              <div className="concept-icon-box shadow-neon-green">
                <FontAwesomeIcon icon={faGlobe} className="concept-icon" />
              </div>
              <h4 className="flow-step-title">Frontend Developer</h4>
              <p className="flow-step-description">Membangun antarmuka pengguna yang interaktif dan responsif.</p>
            </div>

            <div className="flow-step-item concept-card">
              <div className="concept-icon-box shadow-neon-cyan">
                <FontAwesomeIcon icon={faServer} className="concept-icon" />
              </div>
              <h4 className="flow-step-title">Backend Developer</h4>
              <p className="flow-step-description">Mengembangkan logika bisnis, database, dan API di sisi server.</p>
            </div>

            <div className="flow-step-item concept-card">
              <div className="concept-icon-box shadow-neon-orange">
                <FontAwesomeIcon icon={faCloud} className="concept-icon" />
              </div>
              <h4 className="flow-step-title">DevOps Engineer</h4>
              <p className="flow-step-description">Mengelola siklus pengembangan, deployment, dan operasional software.</p>
            </div>

            <div className="flow-step-item concept-card">
              <div className="concept-icon-box shadow-neon-pink">
                <FontAwesomeIcon icon={faMobileAlt} className="concept-icon" />
              </div>
              <h4 className="flow-step-title">Mobile Developer</h4>
              <p className="flow-step-description">Membangun aplikasi untuk perangkat seluler (iOS/Android).</p>
            </div>

            <div className="flow-step-item concept-card">
              <div className="concept-icon-box shadow-neon-purple">
                <FontAwesomeIcon icon={faDesktop} className="concept-icon" />
              </div>
              <h4 className="flow-step-title">Desktop Developer</h4>
              <p className="flow-step-description">Menciptakan aplikasi yang berjalan di sistem operasi desktop.</p>
            </div>

            <div className="flow-step-item concept-card">
              <div className="concept-icon-box shadow-neon-green">
                <FontAwesomeIcon icon={faGamepad} className="concept-icon" />
              </div>
              <h4 className="flow-step-title">Game Developer</h4>
              <p className="flow-step-description">Membangun logika, grafis, dan interaksi untuk video game.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 