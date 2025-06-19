import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faComments, faCrown, faBolt } from '@fortawesome/free-solid-svg-icons';

export default function ConceptSection() {
    return (
      <section id="concept" className="concept-section">
        <div className="section-header-center">
          <h2 className="section-title neon-text-green">
            Concept
          </h2>
          <p className="section-description">
            Di Pondok IT, setiap santri memiliki potensi tak terbatas. Namun, tanpa wadah dan pembimbing yang tepat, potensi tersebut bisa terkubur. Kami hadir untuk menyediakan lingkungan yang mendukung pertumbuhan Anda.
          </p>
        </div>
        
        <div className="concept-container">
          <div className="concept-grid">
            <div className="concept-card-wrapper">
              <div className="concept-card">
                <div className="concept-icon-box shadow-neon-cyan">
                  <FontAwesomeIcon icon={faBook} className="concept-icon" />
                </div>
                <h3 className="concept-card-title neon-text">Alquran</h3>
                <p className="concept-card-description">
                  Membangun dasar spiritual dan akhlak mulia sebagai fondasi kehidupan.
                </p>
              </div>
            </div>
            
            <div className="concept-card-wrapper">
              <div className="concept-card">
                <div className="concept-icon-box-purple shadow-neon-purple">
                  <FontAwesomeIcon icon={faComments} className="concept-icon" />
                </div>
                <h3 className="concept-card-title-purple neon-text-purple">Komunikasi</h3>
                <p className="concept-card-description">
                  Mengembangkan kemampuan berbicara dan berinteraksi efektif dengan sesama.
                </p>
              </div>
            </div>
            
            <div className="concept-card-wrapper">
              <div className="concept-card">
                <div className="concept-icon-box-green shadow-neon-green">
                  <FontAwesomeIcon icon={faCrown} className="concept-icon" />
                </div>
                <h3 className="concept-card-title-green neon-text-green">Leadership</h3>
                <p className="concept-card-description">
                  Membentuk jiwa kepemimpinan dan inisiatif untuk masa depan yang lebih baik.
                </p>
              </div>
            </div>
            
            <div className="concept-card-wrapper">
              <div className="concept-card">
                <div className="concept-icon-box-orange shadow-neon-orange">
                  <FontAwesomeIcon icon={faBolt} className="concept-icon" />
                </div>
                <h3 className="concept-card-title-orange neon-text-orange">Skill</h3>
                <p className="concept-card-description">
                  Mengasah keahlian teknis di bidang teknologi informasi dan programming.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }