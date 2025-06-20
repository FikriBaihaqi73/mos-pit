import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faRedo,
  faBullseye,
  faCode,
  faMusic,
  faPaintBrush,
  faDumbbell,
  faBan,
  faCheckCircle,
  faCalculator,
  faCouch,
  faCommentSlash,
  faClipboardList,
  faLightbulb,
  faMountain,
  faComments
} from '@fortawesome/free-solid-svg-icons';

export default function LearningCultureSection() {
    return (
      <section id="learning-culture" className="learning-culture-section">
        <div className="section-header-center">
          <h2 className="section-title">
            Budaya Belajar: <span className="neon-text-green">10.000 Jam</span>
          </h2>
          <p className="section-description">
            Memahami perbedaan antara latihan repetitif dan deliberate practice dalam mencapai keahlian sejati
          </p>
        </div>
        
        <div className="culture-content-wrapper">
          {/* Introduction */}
          <div className="culture-intro-container">
            <div className="culture-intro-card">
              <div className="culture-intro-inner">
                <p className="culture-intro-text">
                  Konsep 10.000 jam, yang dipopulerkan oleh Malcolm Gladwell dalam bukunya &quot;Outliers&quot;, sebenarnya disederhanakan dari penelitian asli Dr. K. Anders Ericsson. Kunci bukan hanya pada kuantitas waktu, tetapi pada <span className="culture-highlight-cyan neon-text">&#34;Deliberate Practice&#34; (Latihan Terarah)</span>.
                </p>
              </div>
            </div>
          </div>
  
          {/* Comparison Cards - Changed to vertical layout */}
          <div className="culture-comparison-container">
            <div className="culture-comparison-grid-vertical">
              {/* Repetitive Practice */}
              <div className="culture-card-wrapper">
                <div className="culture-card">
                  <div className="culture-card-inner">
                    <div className="culture-card-header">
                      <div className="culture-icon-box-pink pulsate-slow">
                        <FontAwesomeIcon icon={faRedo} className="culture-icon-text" />
                      </div>
                      <h3 className="culture-card-title-pink neon-text-pink">10.000 Jam Repetitif</h3>
                    </div>
                    
                    <p className="culture-card-description-alt">
                      Pengulangan yang dilakukan tanpa kesadaran penuh atau tujuan untuk menjadi lebih baik. Setelah mencapai tingkat kompetensi tertentu, Anda berhenti berusaha untuk berkembang.
                    </p>

                    <div className="culture-details-group">
                      <div className="culture-details-grid">
                        <div className="culture-detail-section">
                          <h4 className="culture-detail-heading-pink neon-text-pink">Ciri-ciri:</h4>
                          <div className="culture-detail-list">
                            <div className="culture-detail-item">
                              <FontAwesomeIcon icon={faRedo} className="culture-example-icon" />
                              <p className="culture-example-text">Aktivitas Otomatis: Pengulangan tugas tanpa pemikiran kritis atau upaya untuk perbaikan.</p>
                            </div>
                            <div className="culture-detail-item">
                              <FontAwesomeIcon icon={faCalculator} className="culture-example-icon" />
                              <p className="culture-example-text">Fokus pada Kuantitas: Prioritas utama adalah menyelesaikan jumlah tugas tertentu, bukan kualitasnya.</p>
                            </div>
                            <div className="culture-detail-item">
                              <FontAwesomeIcon icon={faCouch} className="culture-example-icon" />
                              <p className="culture-example-text">Berada di Zona Nyaman: Seseorang cenderung menghindari tantangan dan hanya melakukan apa yang sudah dikuasai.</p>
                            </div>
                            <div className="culture-detail-item">
                              <FontAwesomeIcon icon={faCommentSlash} className="culture-example-icon" />
                              <p className="culture-example-text">Tidak Ada Umpan Balik: Kurangnya evaluasi atau kritik membangun untuk mengidentifikasi area perbaikan.</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="culture-detail-section">
                          <h4 className="culture-detail-heading-pink neon-text-pink">Contoh dalam Berbagai Bidang:</h4>
                          <div className="culture-detail-list">
                            <div className="culture-detail-item">
                              <FontAwesomeIcon icon={faCode} className="culture-example-icon" />
                              <p className="culture-example-text">Pemrograman: Menulis kode yang sama berulang-ulang tanpa refaktor atau perbaikan.</p>
                            </div>
                            <div className="culture-detail-item">
                              <FontAwesomeIcon icon={faMusic} className="culture-example-icon" />
                              <p className="culture-example-text">Musik: Memainkan lagu yang sama tanpa fokus pada bagian yang sulit.</p>
                            </div>
                            <div className="culture-detail-item">
                              <FontAwesomeIcon icon={faPaintBrush} className="culture-example-icon" />
                              <p className="culture-example-text">Seni: Menggambar dengan teknik yang sama tanpa mencoba gaya baru.</p>
                            </div>
                            <div className="culture-detail-item">
                              <FontAwesomeIcon icon={faDumbbell} className="culture-example-icon" />
                              <p className="culture-example-text">Olahraga: Berlatih dengan intensitas yang sama tanpa meningkatkan tantangan.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="culture-detail-section">
                        <h4 className="culture-detail-heading-pink neon-text-pink">Hasil:</h4>
                        <p className="culture-result-text red"><FontAwesomeIcon icon={faBan} className="culture-result-icon" /> Stagnasi</p>
                        <p className="culture-result-description">Seseorang akan menjadi cukup baik, tetapi tidak akan pernah mencapai level pakar. Kemampuan akan mendatar (plateau) setelah beberapa tahun, meskipun telah menghabiskan ribuan jam.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
    
              {/* Deliberate Practice */}
              <div className="culture-card-wrapper">
                <div className="culture-card">
                  <div className="culture-card-inner">
                    <div className="culture-card-header">
                      <div className="culture-icon-box-cyan pulsate-slow">
                        <FontAwesomeIcon icon={faBullseye} className="culture-icon-text" />
                      </div>
                      <h3 className="culture-card-title-cyan neon-text">10.000 Jam Reiterasi / Latihan Terarah</h3>
                    </div>
                    
                    <p className="culture-card-description-alt">
                      Jenis latihan yang dilakukan dengan fokus penelitian Ericsson dan merupakan kunci sesungguhnya untuk menjadi seorang ahli. Ini adalah pengulangan yang cerdas, terstruktur, dan menantang secara mental.
                    </p>

                    <div className="culture-details-group">
                      <div className="culture-details-grid">
                        <div className="culture-detail-section">
                          <h4 className="culture-detail-heading-cyan neon-text">Ciri-ciri:</h4>
                          <div className="culture-detail-list">
                            <div className="culture-detail-item">
                              <FontAwesomeIcon icon={faClipboardList} className="culture-example-icon" />
                              <p className="culture-example-text">Sangat Terstruktur & Bertujuan: Setiap sesi latihan memiliki tujuan spesifik.</p>
                            </div>
                            <div className="culture-detail-item">
                              <FontAwesomeIcon icon={faLightbulb} className="culture-example-icon" />
                              <p className="culture-example-text">Fokus Penuh & Konsentrasi Tinggi: Membutuhkan seluruh perhatian mental.</p>
                            </div>
                            <div className="culture-detail-item">
                              <FontAwesomeIcon icon={faMountain} className="culture-example-icon" />
                              <p className="culture-example-text">Keluar dari Zona Nyaman: Secara konsisten mencoba teknik dan pendekatan baru.</p>
                            </div>
                            <div className="culture-detail-item">
                              <FontAwesomeIcon icon={faComments} className="culture-example-icon" />
                              <p className="culture-example-text">Umpan Balik Konstan: Selalu mencari review dan kritik konstruktif.</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="culture-detail-section">
                          <h4 className="culture-detail-heading-cyan neon-text">Contoh dalam Berbagai Bidang:</h4>
                          <div className="culture-detail-list">
                            <div className="culture-detail-item">
                              <FontAwesomeIcon icon={faCode} className="culture-example-icon" />
                              <p className="culture-example-text">Pemrograman: Menulis kode, kemudian refaktor dengan tujuan spesifik (performa, keterbacaan).</p>
                            </div>
                            <div className="culture-detail-item">
                              <FontAwesomeIcon icon={faMusic} className="culture-example-icon" />
                              <p className="culture-example-text">Musik: Fokus pada bagian sulit dari lagu, merekam dan menganalisis permainan.</p>
                            </div>
                            <div className="culture-detail-item">
                              <FontAwesomeIcon icon={faPaintBrush} className="culture-example-icon" />
                              <p className="culture-example-text">Seni: Mencoba teknik baru dan meminta kritik dari seniman berpengalaman.</p>
                            </div>
                            <div className="culture-detail-item">
                              <FontAwesomeIcon icon={faDumbbell} className="culture-example-icon" />
                              <p className="culture-example-text">Olahraga: Berlatih dengan variasi intensitas dan fokus pada teknik spesifik.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="culture-detail-section">
                        <h4 className="culture-detail-heading-cyan neon-text">Hasil:</h4>
                        <p className="culture-result-text green"><FontAwesomeIcon icon={faCheckCircle} className="culture-result-icon" /> Peningkatan Berkelanjutan</p>
                        <p className="culture-result-description">Peningkatan berkelanjutan dan pencapaian tingkat pakar. Kurva pembelajaran terus menanjak bahkan setelah bertahun-tahun, menghasilkan individu yang benar-benar ahli dan inovatif.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
  
          {/* Perbandingan Langsung */}
          <div className="comparison-section">
            <div className="section-header-center mt-20">
              <h2 className="section-title neon-text">
                Perbandingan Langsung
              </h2>
            </div>
            
            <div className="comparison-table-container">
              <div className="comparison-table-header">
                <div className="comparison-table-cell table-header-cell">Aspek</div>
                <div className="comparison-table-cell table-header-cell">10.000 Jam Repetitif</div>
                <div className="comparison-table-cell table-header-cell">10.000 Jam Terarah</div>
              </div>
              <div className="comparison-table-row">
                <div className="comparison-table-cell table-cell-label">Tujuan</div>
                <div className="comparison-table-cell">Menyelesaikan tugas</div>
                <div className="comparison-table-cell">Meningkatkan keahlian spesifik</div>
              </div>
              <div className="comparison-table-row">
                <div className="comparison-table-cell table-cell-label">Fokus</div>
                <div className="comparison-table-cell">Kuantitas waktu</div>
                <div className="comparison-table-cell">Kualitas latihan</div>
              </div>
              <div className="comparison-table-row">
                <div className="comparison-table-cell table-cell-label">Umpan Balik</div>
                <div className="comparison-table-cell">Minimal atau tidak ada</div>
                <div className="comparison-table-cell">Konstan dan mendalam</div>
              </div>
              <div className="comparison-table-row">
                <div className="comparison-table-cell table-cell-label">Tantangan</div>
                <div className="comparison-table-cell">Tetap di zona nyaman</div>
                <div className="comparison-table-cell">Selalu di luar zona nyaman</div>
              </div>
              <div className="comparison-table-row">
                <div className="comparison-table-cell table-cell-label">Analisis</div>
                <div className="comparison-table-cell">Jarang menganalisis kesalahan</div>
                <div className="comparison-table-cell">Analisis mendalam terhadap kesalahan</div>
              </div>
              <div className="comparison-table-row">
                <div className="comparison-table-cell table-cell-label">Hasil Jangka Panjang</div>
                <div className="comparison-table-cell">Stagnasi dan plateau</div>
                <div className="comparison-table-cell">Pertumbuhan berkelanjutan</div>
              </div>
              <div className="comparison-table-row">
                <div className="comparison-table-cell table-cell-label">Inovasi</div>
                <div className="comparison-table-cell">Rendah, cenderung mengikuti pola</div>
                <div className="comparison-table-cell">Tinggi, mendorong pemikiran baru</div>
              </div>
            </div>
          </div>

          {/* Visualisasi Perbedaan */}
          <div className="visualization-section">
            <div className="section-header-center">
              <h2 className="section-title neon-text-purple">
                Visualisasi Perbedaan
              </h2>
              <p className="section-description">
                Melihat bagaimana dua pendekatan berbeda menghasilkan hasil yang sangat berbeda setelah 10.000 jam.
              </p>
            </div>

            <div className="visual-comparison-grid">
              {/* Kurva Belajar: Repetitif */}
              <div className="visual-card">
                <div className="visual-card-inner">
                  <h3 className="visual-card-title neon-text-purple">Kurva Belajar: Repetitif</h3>
                  <div className="graph-placeholder repetitive-graph">
                    {/* Placeholder for Repetitive Learning Curve Graph */}
                    <p className="graph-label">Pemula</p>
                    <p className="graph-label-vertical">Menengah | Mahir</p>
                    <div className="axis-label-x">0</div>
                    <div className="axis-label-x axis-label-3k">3,000 jam</div>
                    <div className="axis-label-x axis-label-7k">7,000 jam</div>
                    <div className="axis-label-x axis-label-10k">10,000 jam</div>
                    <p className="plateau-label">Plateau</p>
                  </div>
                  <div className="progress-section">
                    <div className="progress-item">
                      <span className="progress-label">Kemajuan Awal</span>
                      <div className="progress-bar-container">
                        <div className="progress-bar repetitive-progress-fast"></div>
                      </div>
                      <span className="progress-value">Cepat</span>
                    </div>
                    <div className="progress-item">
                      <span className="progress-label">Kemajuan Lanjutan</span>
                      <div className="progress-bar-container">
                        <div className="progress-bar repetitive-progress-stagnant"></div>
                      </div>
                      <span className="progress-value">Stagnan</span>
                    </div>
                    <div className="progress-item">
                      <span className="progress-label">Inovasi</span>
                      <div className="progress-bar-container">
                        <div className="progress-bar repetitive-progress-low"></div>
                      </div>
                      <span className="progress-value">Rendah</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Kurva Belajar: Terarah */}
              <div className="visual-card">
                <div className="visual-card-inner">
                  <h3 className="visual-card-title neon-text-green">Kurva Belajar: Terarah</h3>
                  <div className="graph-placeholder deliberate-graph">
                    {/* Placeholder for Deliberate Practice Learning Curve Graph */}
                    <p className="graph-label">Pemula</p>
                    <p className="graph-label-vertical">Menengah | Mahir</p>
                    <div className="axis-label-x">0</div>
                    <div className="axis-label-x axis-label-3k">3,000 jam</div>
                    <div className="axis-label-x axis-label-7k">7,000 jam</div>
                    <div className="axis-label-x axis-label-10k">10,000 jam</div>
                    <p className="breakthrough-1-label">Breakthrough 1</p>
                    <p className="breakthrough-2-label">Breakthrough 2</p>
                  </div>
                  <div className="progress-section">
                    <div className="progress-item">
                      <span className="progress-label">Kemajuan Awal</span>
                      <div className="progress-bar-container">
                        <div className="progress-bar deliberate-progress-moderate"></div>
                      </div>
                      <span className="progress-value">Moderat</span>
                    </div>
                    <div className="progress-item">
                      <span className="progress-label">Kemajuan Lanjutan</span>
                      <div className="progress-bar-container">
                        <div className="progress-bar deliberate-progress-continuous"></div>
                      </div>
                      <span className="progress-value">Berkelanjutan</span>
                    </div>
                    <div className="progress-item">
                      <span className="progress-label">Inovasi</span>
                      <div className="progress-bar-container">
                        <div className="progress-bar deliberate-progress-high"></div>
                      </div>
                      <span className="progress-value">Tinggi</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Key Insight */}
          <div className="insight-section">
            <div className="culture-insight-container">
              <div className="culture-insight-card">
                <div className="culture-insight-inner">
                  <h3 className="culture-insight-title neon-text-purple">Kunci Utama</h3>
                  <p className="culture-insight-text">
                    Perbedaan antara latihan biasa dan deliberate practice terletak pada <span className="culture-insight-highlight neon-text-purple">intensitas mental, struktur pembelajaran, dan fokus pada perbaikan berkelanjutan</span>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }