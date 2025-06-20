import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChalkboardTeacher,
  faTasks,
  faUpload,
  faClipboardList,
  faBookOpen,
  faArrowsRotate,
  faFistRaised,
  faThumbsUp,
  faUserTie,
  faUsers,
  faComments,
  faCode,
  faMobileAlt,
  faRocket,
  faServer
} from '@fortawesome/free-solid-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons';

export default function LearningFlowSection() {
  return (
    <section id="learning-flow" className="learning-flow-section">
      <div className="section-header-center">
        <h2 className="section-title neon-text-orange">
          Alur Belajar
        </h2>
        <p className="section-description">
          Program pembelajaran kami dirancang untuk membentuk programmer yang handal dan berkarakter. Setiap tahapan memiliki fokus yang jelas untuk memaksimalkan potensi Anda.
        </p>
      </div>
      
      <div className="flow-content-wrapper">
        {/* Aktivitas Produktif Card - Modified to be like ConceptSection */} 
        <h3 className="flow-card-title neon-text-orange">Aktivitas Produktif</h3>
        <div className="flow-steps-container flow-grid">
          <div className="flow-step-item concept-card">
            <div className="concept-icon-box shadow-neon-orange">
              <FontAwesomeIcon icon={faChalkboardTeacher} className="concept-icon" />
            </div>
            <h4 className="flow-step-title">Mentoring</h4>
            <p className="flow-step-description">Produktif ke-1</p>
          </div>
          <div className="flow-step-item concept-card">
            <div className="concept-icon-box shadow-neon-orange">
              <FontAwesomeIcon icon={faTasks} className="concept-icon" />
            </div>
            <h4 className="flow-step-title">Pengerjaan Tugas Harian</h4>
            <p className="flow-step-description">Produktif ke-2 & 3</p>
          </div>
          <div className="flow-step-item concept-card">
            <div className="concept-icon-box shadow-neon-orange">
              <FontAwesomeIcon icon={faUpload} className="concept-icon" />
            </div>
            <h4 className="flow-step-title">Pengumpulan Tugas Harian</h4>
            <p className="flow-step-description">Produktif ke-4</p>
          </div>
        </div>

        {/* Budaya Divisi Card - Modified to be like ConceptSection */}
        <h3 className="flow-card-title neon-text-orange mt-20">Budaya Divisi</h3>
        <div className="flow-steps-container flow-grid">
          <div className="flow-step-item concept-card">
            <div className="concept-icon-box shadow-neon-orange">
              <FontAwesomeIcon icon={faClipboardList} className="concept-icon" />
            </div>
            <h4 className="flow-step-title">1</h4>
            <p className="flow-step-description">Disiplin</p>
          </div>
          <div className="flow-step-item concept-card">
            <div className="concept-icon-box shadow-neon-orange">
              <FontAwesomeIcon icon={faBookOpen} className="concept-icon" />
            </div>
            <h4 className="flow-step-title">2</h4>
            <p className="flow-step-description">Pembelajar</p>
          </div>
          <div className="flow-step-item concept-card">
            <div className="concept-icon-box shadow-neon-orange">
              <FontAwesomeIcon icon={faArrowsRotate} className="concept-icon" />
            </div>
            <h4 className="flow-step-title">3</h4>
            <p className="flow-step-description">Adaptif</p>
          </div>
          <div className="flow-step-item concept-card">
            <div className="concept-icon-box shadow-neon-orange">
              <FontAwesomeIcon icon={faFistRaised} className="concept-icon" />
            </div>
            <h4 className="flow-step-title">4</h4>
            <p className="flow-step-description">Pantang Menyerah</p>
          </div>
          <div className="flow-step-item concept-card">
            <div className="concept-icon-box shadow-neon-orange">
              <FontAwesomeIcon icon={faThumbsUp} className="concept-icon" />
            </div>
            <h4 className="flow-step-title">5</h4>
            <p className="flow-step-description">Pantang Mengeluh</p>
          </div>
          <div className="flow-step-item concept-card">
            <div className="concept-icon-box shadow-neon-orange">
              <FontAwesomeIcon icon={faUserTie} className="concept-icon" />
            </div>
            <h4 className="flow-step-title">6</h4>
            <p className="flow-step-description">Mandiri</p>
          </div>
          <div className="flow-step-item concept-card">
            <div className="concept-icon-box shadow-neon-orange">
              <FontAwesomeIcon icon={faUsers} className="concept-icon" />
            </div>
            <h4 className="flow-step-title">7</h4>
            <p className="flow-step-description">Kolaborasi</p>
          </div>
          <div className="flow-step-item concept-card">
            <div className="concept-icon-box shadow-neon-orange">
              <FontAwesomeIcon icon={faComments} className="concept-icon" />
            </div>
            <h4 className="flow-step-title">8</h4>
            <p className="flow-step-description">Komunikasi</p>
          </div>
        </div>

        {/* Kurikulum Pembelajaran Section - Modified to be a Timeline */}
        <h3 className="flow-card-title neon-text-orange mt-20">Kurikulum Pembelajaran (1-6 Bulan)</h3>
        <div className="timeline-container">
          <div className="timeline-item">
            <div className="timeline-content concept-card">
              <h4 className="timeline-title">Bulan 1</h4>
              <p className="flow-step-description">Fundamental Programmer</p>
            </div>
            <div className="timeline-indicator shadow-neon-orange">
              <FontAwesomeIcon icon={faCode} className="timeline-icon" />
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-indicator shadow-neon-orange">
              <FontAwesomeIcon icon={faReact} className="timeline-icon" />
            </div>
            <div className="timeline-content concept-card">
              <h4 className="timeline-title">Bulan 2</h4>
              <p className="timeline-description">React JS</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-content concept-card">
              <h4 className="timeline-title">Bulan 3</h4>
              <p className="timeline-description">React Native</p>
            </div>
            <div className="timeline-indicator shadow-neon-orange">
              <FontAwesomeIcon icon={faMobileAlt} className="timeline-icon" />
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-indicator shadow-neon-orange">
              <FontAwesomeIcon icon={faServer} className="timeline-icon" />
            </div>
            <div className="timeline-content concept-card">
              <h4 className="timeline-title">Bulan 4</h4>
              <p className="timeline-description">Express JS</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-content concept-card">
              <h4 className="timeline-title">Bulan 5 & 6</h4>
              <p className="timeline-description">Project Akhir (Build Startup Team with Role As A Hacker with other Hipster and Hustler)</p>
            </div>
            <div className="timeline-indicator shadow-neon-orange">
              <FontAwesomeIcon icon={faRocket} className="timeline-icon" />
            </div>
          </div>
        </div>
        <div className="flow-explanation-container">
          <div className="flow-explanation-item">
            <p className="flow-explanation">
              <span className="flow-explanation-label">Hipster (Desainer):</span> Bertanggung jawab atas desain produk, pengalaman pengguna (UX), dan antarmuka pengguna (UI) yang menarik dan intuitif.
            </p>
          </div>
          <div className="flow-explanation-item mt-4">
            <p className="flow-explanation">
              <span className="flow-explanation-label">Hustler (Bisnis):</span> Fokus pada strategi bisnis, pemasaran, penjualan, dan menjalin kemitraan untuk mengembangkan produk dan mencapai tujuan bisnis.
            </p>
          </div>
          <div className="flow-explanation-item mt-4">
            <p className="flow-explanation">
              <span className="flow-explanation-label">Hacker (Programmer):</span> Membangun dan mengembangkan teknologi inti produk, menulis kode, serta memastikan fungsionalitas dan kinerja sistem.
            </p>
          </div>
        </div>

        {/* Afirmasi Section */}
        <div className="flow-affirmation-container">
          <p className="flow-affirmation-heading neon-text-green text-center">Afirmasi Setiap Pagi:</p>
          <h4 className="flow-affirmation-subtitle neon-text-pink text-center">Programmer:</h4>
          <div className="affirmation-words-grid">
            <div className="affirmation-word-card concept-card">
              <p className="flow-affirmation-text neon-text-pink">&quot;Paksa&quot;</p>
            </div>
            <div className="affirmation-word-card concept-card">
              <p className="flow-affirmation-text neon-text-pink">&quot;Bisa&quot;</p>
            </div>
            <div className="affirmation-word-card concept-card">
              <p className="flow-affirmation-text neon-text-pink">&quot;Terbiasa&quot;</p>
            </div>
            <div className="affirmation-word-card concept-card">
              <p className="flow-affirmation-text neon-text-pink">&quot;Luarbiasa&quot;</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 