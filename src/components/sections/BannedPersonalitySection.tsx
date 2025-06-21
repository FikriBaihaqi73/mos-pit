import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBed,
  faCouch,
  faClock,
  faArrowTrendDown,
  faBrain,
  faHandPointDown,
  faPersonWalkingArrowLoopLeft,
  faFaceSadTear
} from '@fortawesome/free-solid-svg-icons';

export default function BannedPersonalitySection() {
  return (
    <section id="banned-personality" className="banned-personality-section">
      <div className="flow-content-wrapper">
        <div className="section-header-center">
          <h2 className="section-title neon-text-pink">
            Personalitas yang Dilarang Keras
          </h2>
          <p className="section-description">
            Berikut adalah sifat-sifat yang SANGAT TIDAK DIANJURKAN dan dapat menghambat kemajuan Anda dalam dunia pemrograman.
          </p>
        </div>

        <p className="banned-message">
          Jika Anda adalah seseorang yang:
        </p>

        <div className="flow-steps-container flow-grid">
          <div className="flow-step-item concept-card">
            <div className="concept-icon-box shadow-neon-red">
              <FontAwesomeIcon icon={faCouch} className="concept-icon" />
            </div>
            <div className="flow-text-content">
              <h4 className="flow-step-title">Santai Berlebihan</h4>
              <p className="flow-step-description">Terlalu santai dan tidak memiliki urgensi dalam menyelesaikan tugas-tugas pemrograman.</p>
            </div>
          </div>

          <div className="flow-step-item concept-card">
            <div className="concept-icon-box shadow-neon-red">
              <FontAwesomeIcon icon={faBed} className="concept-icon" />
            </div>
            <div className="flow-text-content">
              <h4 className="flow-step-title">Pemalas</h4>
              <p className="flow-step-description">Tidak mau berusaha keras dan selalu mencari jalan pintas yang mudah tanpa mau belajar.</p>
            </div>
          </div>

          <div className="flow-step-item concept-card">
            <div className="concept-icon-box shadow-neon-red">
              <FontAwesomeIcon icon={faClock} className="concept-icon" />
            </div>
            <div className="flow-text-content">
              <h4 className="flow-step-title">Prokrastinator</h4>
              <p className="flow-step-description">Suka menunda-nunda pekerjaan dan selalu mengerjakan tugas di menit-menit terakhir.</p>
            </div>
          </div>

          <div className="flow-step-item concept-card">
            <div className="concept-icon-box shadow-neon-red">
              <FontAwesomeIcon icon={faArrowTrendDown} className="concept-icon" />
            </div>
            <div className="flow-text-content">
              <h4 className="flow-step-title">Kurang Ambisi</h4>
              <p className="flow-step-description">Tidak memiliki target yang jelas dan tidak berusaha untuk terus berkembang dalam karir.</p>
            </div>
          </div>

          <div className="flow-step-item concept-card">
            <div className="concept-icon-box shadow-neon-red">
              <FontAwesomeIcon icon={faBrain} className="concept-icon" />
            </div>
            <div className="flow-text-content">
              <h4 className="flow-step-title">Tidak Logis</h4>
              <p className="flow-step-description">Tidak mampu berpikir secara sistematis dan analitis dalam memecahkan masalah pemrograman.</p>
            </div>
          </div>

          <div className="flow-step-item concept-card">
            <div className="concept-icon-box shadow-neon-red">
              <FontAwesomeIcon icon={faHandPointDown} className="concept-icon" />
            </div>
            <div className="flow-text-content">
              <h4 className="flow-step-title">Meremehkan Hal Kecil</h4>
              <p className="flow-step-description">Mengabaikan detail penting dan tidak teliti dalam menulis kode atau memahami konsep.</p>
            </div>
          </div>

          <div className="flow-step-item concept-card">
            <div className="concept-icon-box shadow-neon-red">
              <FontAwesomeIcon icon={faPersonWalkingArrowLoopLeft} className="concept-icon" />
            </div>
            <div className="flow-text-content">
              <h4 className="flow-step-title">Tidak Mandiri</h4>
              <p className="flow-step-description">Selalu bergantung pada orang lain dan tidak berusaha mencari solusi sendiri terlebih dahulu.</p>
            </div>
          </div>

          <div className="flow-step-item concept-card">
            <div className="concept-icon-box shadow-neon-red">
              <FontAwesomeIcon icon={faFaceSadTear} className="concept-icon" />
            </div>
            <div className="flow-text-content">
              <h4 className="flow-step-title">Tidak Tahan Tekanan</h4>
              <p className="flow-step-description">Mudah menyerah saat menghadapi tantangan dan tidak mampu bekerja di bawah tekanan deadline.</p>
            </div>
          </div>
        </div>

        <p className="banned-consequence neon-text-pink mt-20 text-center">
          Maka Anda harus <s>DIKELUARKAN</s> - <s>DIBLACKLIST</s> - <s>D0</s> dari pembelajaran ini.
        </p>
      </div>
    </section>
  );
}