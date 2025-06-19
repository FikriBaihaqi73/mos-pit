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
        {/* Aktivitas Produktif Card */}
        <div className="flow-card">
          <div className="flow-card-inner">
            <h3 className="flow-card-title neon-text-orange">Aktivitas Produktif</h3>
            <div className="flow-steps-container">
              <div className="flow-step-item">
                <FontAwesomeIcon icon={faChalkboardTeacher} className="flow-icon-large" />
                <p className="flow-step-month">Langkah 1</p>
                <p className="flow-step-description">Produktif ke-1: Mentoring</p>
              </div>
              <div className="flow-step-item">
                <FontAwesomeIcon icon={faTasks} className="flow-icon-large" />
                <p className="flow-step-month">Langkah 2</p>
                <p className="flow-step-description">Produktif ke-2 & 3: Pengerjaan Tugas Harian</p>
              </div>
              <div className="flow-step-item">
                <FontAwesomeIcon icon={faUpload} className="flow-icon-large" />
                <p className="flow-step-month">Langkah 3</p>
                <p className="flow-step-description">Produktif ke-4: Pengumpulan Tugas Harian</p>
              </div>
            </div>
          </div>
        </div>

        {/* Budaya Divisi Card */}
        <div className="flow-card">
          <div className="flow-card-inner">
            <h3 className="flow-card-title neon-text-orange">Budaya Divisi</h3>
            <div className="flow-steps-container">
              <div className="flow-step-item">
                <FontAwesomeIcon icon={faClipboardList} className="flow-icon-large" />
                <p className="flow-step-month">1</p>
                <p className="flow-step-description">Disiplin</p>
              </div>
              <div className="flow-step-item">
                <FontAwesomeIcon icon={faBookOpen} className="flow-icon-large" />
                <p className="flow-step-month">2</p>
                <p className="flow-step-description">Pembelajar</p>
              </div>
              <div className="flow-step-item">
                <FontAwesomeIcon icon={faArrowsRotate} className="flow-icon-large" />
                <p className="flow-step-month">3</p>
                <p className="flow-step-description">Adaptif</p>
              </div>
              <div className="flow-step-item">
                <FontAwesomeIcon icon={faFistRaised} className="flow-icon-large" />
                <p className="flow-step-month">4</p>
                <p className="flow-step-description">Pantang Menyerah</p>
              </div>
              <div className="flow-step-item">
                <FontAwesomeIcon icon={faThumbsUp} className="flow-icon-large" />
                <p className="flow-step-month">5</p>
                <p className="flow-step-description">Pantang Mengeluh</p>
              </div>
              <div className="flow-step-item">
                <FontAwesomeIcon icon={faUserTie} className="flow-icon-large" />
                <p className="flow-step-month">6</p>
                <p className="flow-step-description">Mandiri</p>
              </div>
              <div className="flow-step-item">
                <FontAwesomeIcon icon={faUsers} className="flow-icon-large" />
                <p className="flow-step-month">7</p>
                <p className="flow-step-description">Kolaborasi</p>
              </div>
              <div className="flow-step-item">
                <FontAwesomeIcon icon={faComments} className="flow-icon-large" />
                <p className="flow-step-month">8</p>
                <p className="flow-step-description">Komunikasi</p>
              </div>
            </div>
          </div>
        </div>

        {/* Kurikulum Pembelajaran Section */}
        <div className="flow-curriculum-container">
          <div className="flow-card">
            <div className="flow-card-inner">
              <h3 className="flow-card-title neon-text-orange">Kurikulum Pembelajaran (1-6 Bulan)</h3>
              <div className="flow-steps-container">
                <div className="flow-step-item">
                  <h4 className="flow-step-month">Bulan 1</h4>
                  <FontAwesomeIcon icon={faCode} className="flow-icon-large" />
                  <p className="flow-step-description">Fundamental Programmer</p>
                </div>
                <div className="flow-step-item">
                  <h4 className="flow-step-month">Bulan 2</h4>
                  <FontAwesomeIcon icon={faReact} className="flow-icon-large" />
                  <p className="flow-step-description">React JS</p>
                </div>
                <div className="flow-step-item">
                  <h4 className="flow-step-month">Bulan 3</h4>
                  <FontAwesomeIcon icon={faMobileAlt} className="flow-icon-large" />
                  <p className="flow-step-description">React Native</p>
                </div>
                <div className="flow-step-item">
                  <h4 className="flow-step-month">Bulan 4</h4>
                  <FontAwesomeIcon icon={faServer} className="flow-icon-large" />
                  <p className="flow-step-description">Express JS</p>
                </div>
                <div className="flow-step-item">
                  <h4 className="flow-step-month">Bulan 5 & 6</h4>
                  <FontAwesomeIcon icon={faRocket} className="flow-icon-large" />
                  <p className="flow-step-description">Project Akhir (Build Startup Team with Role As A Hacker with other Hipster and Hustler)</p>
                </div>
              </div>
              <div className="flow-explanation-container">
                <p className="flow-explanation">
                  <span className="flow-explanation-label">Explanation:</span> Triangle team in Startup: Hipster (desainer), Hustler (bisnis), Hacker (programmer).
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Afirmasi Section */}
        <div className="flow-affirmation-card">
          <div className="flow-affirmation-inner">
            <p className="flow-affirmation-heading neon-text-green">Afirmasi Setiap Pagi:</p>
            <p className="flow-affirmation-text neon-text-pink">&quot;Programmer: Paksa - Bisa - Terbiasa - Luarbiasa&quot;</p>
          </div>
        </div>
      </div>
    </section>
  );
} 