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
  faServer,
  faPaintBrush,
  faChartLine
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
            <h4 className="flow-step-title">Disiplin</h4>
            <p className="flow-step-description">Menerapkan pola kerja yang teratur dan konsisten untuk mencapai hasil terbaik dalam setiap tugas.</p>
          </div>
          <div className="flow-step-item concept-card">
            <div className="concept-icon-box shadow-neon-orange">
              <FontAwesomeIcon icon={faBookOpen} className="concept-icon" />
            </div>
            <h4 className="flow-step-title">Pembelajar</h4>
            <p className="flow-step-description">Selalu haus akan pengetahuan baru dan terbuka untuk terus belajar serta mengembangkan diri.</p>
          </div>
          <div className="flow-step-item concept-card">
            <div className="concept-icon-box shadow-neon-orange">
              <FontAwesomeIcon icon={faArrowsRotate} className="concept-icon" />
            </div>
            <h4 className="flow-step-title">Adaptif</h4>
            <p className="flow-step-description">Mampu menyesuaikan diri dengan cepat terhadap perubahan teknologi dan lingkungan kerja yang dinamis.</p>
          </div>
          <div className="flow-step-item concept-card">
            <div className="concept-icon-box shadow-neon-orange">
              <FontAwesomeIcon icon={faFistRaised} className="concept-icon" />
            </div>
            <h4 className="flow-step-title">Pantang Menyerah</h4>
            <p className="flow-step-description">Memiliki semangat juang tinggi dan tidak mudah putus asa menghadapi tantangan atau kesulitan dalam proses belajar.</p>
          </div>
          <div className="flow-step-item concept-card">
            <div className="concept-icon-box shadow-neon-orange">
              <FontAwesomeIcon icon={faThumbsUp} className="concept-icon" />
            </div>
            <h4 className="flow-step-title">Pantang Mengeluh</h4>
            <p className="flow-step-description">Menghadapi masalah dengan sikap positif dan mencari solusi daripada fokus pada keluhan.</p>
          </div>
          <div className="flow-step-item concept-card">
            <div className="concept-icon-box shadow-neon-orange">
              <FontAwesomeIcon icon={faUserTie} className="concept-icon" />
            </div>
            <h4 className="flow-step-title">Mandiri</h4>
            <p className="flow-step-description">Mampu menyelesaikan tugas dan mencari solusi secara independen, dengan inisiatif tinggi.</p>
          </div>
          <div className="flow-step-item concept-card">
            <div className="concept-icon-box shadow-neon-orange">
              <FontAwesomeIcon icon={faUsers} className="concept-icon" />
            </div>
            <h4 className="flow-step-title">Kolaborasi</h4>
            <p className="flow-step-description">Berkontribusi aktif dalam tim, berbagi ide, dan bekerja sama untuk mencapai tujuan bersama.</p>
          </div>
          <div className="flow-step-item concept-card">
            <div className="concept-icon-box shadow-neon-orange">
              <FontAwesomeIcon icon={faComments} className="concept-icon" />
            </div>
            <h4 className="flow-step-title">Komunikasi</h4>
            <p className="flow-step-description">Mengungkapkan ide dan informasi dengan jelas dan efektif, serta mampu mendengarkan dengan baik.</p>
          </div>
        </div>

        {/* Kurikulum Pembelajaran - Enhanced Timeline */}
        <h3 className="flow-card-title neon-text-orange mt-20">Kurikulum Pembelajaran (1-6 Bulan)</h3>
        <div className="timeline-container">
          <div className="timeline-item">
            <div className="timeline-content">
              <h4 className="timeline-title">Bulan 1</h4>
              <p className="timeline-description">Fundamental Programmer</p>
            </div>
            <div className="timeline-indicator">
              <FontAwesomeIcon icon={faCode} className="timeline-icon" />
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-indicator">
              <FontAwesomeIcon icon={faReact} className="timeline-icon" />
            </div>
            <div className="timeline-content">
              <h4 className="timeline-title">Bulan 2</h4>
              <p className="timeline-description">React JS</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-content">
              <h4 className="timeline-title">Bulan 3</h4>
              <p className="timeline-description">React Native</p>
            </div>
            <div className="timeline-indicator">
              <FontAwesomeIcon icon={faMobileAlt} className="timeline-icon" />
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-indicator">
              <FontAwesomeIcon icon={faServer} className="timeline-icon" />
            </div>
            <div className="timeline-content">
              <h4 className="timeline-title">Bulan 4</h4>
              <p className="timeline-description">Express JS</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-content">
              <h4 className="timeline-title">Bulan 5 & 6</h4>
              <p className="timeline-description">Project Akhir (Build Startup Team with Role As A Hacker with other Hipster and Hustler)</p>
            </div>
            <div className="timeline-indicator">
              <FontAwesomeIcon icon={faRocket} className="timeline-icon" />
            </div>
          </div>
        </div>
        
        {/* Role Explanation */}
        <div className="role-cards-container">
          {/* Hipster Role Card */}
          <div className="role-card role-card-hipster">
            <div className="role-card-bg"></div>
            <div className="role-card-header">
              <div className="role-icon-container">
                <FontAwesomeIcon icon={faPaintBrush} className="role-icon" />
              </div>
              <h3 className="role-title">Hipster</h3>
            </div>
            <div className="role-card-content">
              <p className="role-description">
                Hipster adalah desainer kreatif yang bertanggung jawab atas seluruh aspek visual dan pengalaman pengguna dalam sebuah produk digital. Mereka memastikan produk tidak hanya berfungsi dengan baik tetapi juga menarik secara visual dan intuitif digunakan.
              </p>
              <ul className="role-responsibilities">
                <li className="role-responsibility">Mendesain antarmuka pengguna (UI) yang menarik</li>
                <li className="role-responsibility">Merancang pengalaman pengguna (UX) yang intuitif</li>
                <li className="role-responsibility">Membuat aset visual dan branding</li>
                <li className="role-responsibility">Melakukan riset pengguna dan pengujian kegunaan</li>
                <li className="role-responsibility">Mengimplementasikan prinsip desain modern</li>
              </ul>
            </div>
          </div>

          {/* Hustler Role Card */}
          <div className="role-card role-card-hustler">
            <div className="role-card-bg"></div>
            <div className="role-card-header">
              <div className="role-icon-container">
                <FontAwesomeIcon icon={faChartLine} className="role-icon" />
              </div>
              <h3 className="role-title">Hustler</h3>
            </div>
            <div className="role-card-content">
              <p className="role-description">
                Hustler merupakan ahli bisnis yang fokus pada strategi pemasaran, penjualan, dan pengembangan bisnis. Mereka bertanggung jawab menciptakan model bisnis yang berkelanjutan dan membawa produk ke pasar dengan strategi yang tepat.
              </p>
              <ul className="role-responsibilities">
                <li className="role-responsibility">Mengembangkan strategi bisnis dan model pendapatan</li>
                <li className="role-responsibility">Melakukan riset pasar dan analisis kompetitor</li>
                <li className="role-responsibility">Membangun hubungan dengan mitra dan investor</li>
                <li className="role-responsibility">Merencanakan dan mengeksekusi strategi pemasaran</li>
                <li className="role-responsibility">Mengelola operasional dan pertumbuhan bisnis</li>
              </ul>
            </div>
          </div>

          {/* Hacker Role Card */}
          <div className="role-card role-card-hacker">
            <div className="role-card-bg"></div>
            <div className="role-card-header">
              <div className="role-icon-container">
                <FontAwesomeIcon icon={faCode} className="role-icon" />
              </div>
              <h3 className="role-title">Hacker</h3>
            </div>
            <div className="role-card-content">
              <p className="role-description">
                Hacker adalah programmer yang membangun teknologi inti produk. Mereka mengubah ide dan desain menjadi produk fungsional melalui kode, memastikan performa, keamanan, dan stabilitas sistem sesuai kebutuhan pengguna.
              </p>
              <ul className="role-responsibilities">
                <li className="role-responsibility">Menulis kode untuk front-end dan back-end</li>
                <li className="role-responsibility">Memilih arsitektur dan teknologi yang tepat</li>
                <li className="role-responsibility">Mengimplementasikan fitur dan memperbaiki bug</li>
                <li className="role-responsibility">Mengoptimalkan performa dan keamanan aplikasi</li>
                <li className="role-responsibility">Mengintegrasikan sistem dengan API eksternal</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Affirmation Section - Enhanced Grid */}
        <div className="flow-affirmation-container">
          <h3 className="flow-affirmation-heading neon-text-green">Afirmasi Setiap Pagi:</h3>
          <h4 className="flow-affirmation-subtitle neon-text-pink">Programmer:</h4>
          <div className="affirmation-words-grid">
            <div className="affirmation-word-card">
              <p className="flow-affirmation-text neon-text-pink">&quot;Paksa&quot;</p>
            </div>
            <div className="affirmation-word-card">
              <p className="flow-affirmation-text neon-text-pink">&quot;Bisa&quot;</p>
            </div>
            <div className="affirmation-word-card">
              <p className="flow-affirmation-text neon-text-pink">&quot;Terbiasa&quot;</p>
            </div>
            <div className="affirmation-word-card">
              <p className="flow-affirmation-text neon-text-pink">&quot;Luarbiasa&quot;</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 