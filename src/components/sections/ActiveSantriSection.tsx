import Image from "next/image";

export default function ActiveSantriSection() {
  return (
    <section id="active-santri" className="active-santri-section">
      <div className="section-header-center">
        <h2 className="section-title neon-text-orange">
          Santri Aktif: Kisah Inspiratif
        </h2>
        <p className="section-description">
          Dengarkan cerita dari santri-santri kami yang telah berkembang pesat. Mereka akan berbagi tantangan, pembelajaran, dan manfaat yang mereka rasakan selama aktif di Pondok IT.
        </p>
      </div>
      
      <div className="santri-container">
        <div className="santri-grid">
          {/* Santri 1 */}
          <div className="santri-card">
            <div className="santri-card-inner">
              <div className="santri-header">
                <Image 
                  src="https://i.imgur.com/NErlEl8.jpeg" 
                  alt="Muhammad Fikri Baihaqi" 
                  width={150} 
                  height={150} 
                  className="santri-photo" 
                />
                <h3 className="santri-name neon-text-orange">Muhammad Fikri Baihaqi</h3>
                <p className="santri-role">Fullstack Software Engineer</p>
              </div>
              
              <div className="santri-content">
                <p className="santri-quote">
                  &quot;Aku dulu join karena ingin mendalami dunia programming dan menemukan komunitas yang suportif.&quot;
                </p>
                
                <ul className="santri-details">
                  <li>
                    <span className="santri-detail-label">Keahlian:</span> 
                    Laravel, Express.js, React.js, React Native, Vue.js, Tailwindcss, MySQL, PostgreSQL, Git, Figma.
                  </li>
                  <li>
                    <span className="santri-detail-label">Pengalaman Kunci:</span> 
                    Siswa programmer di Pondok IT dan PKL di Astra Daihatsu Sunter.
                  </li>
                  <li>
                    <span className="santri-detail-label">Portofolio:</span> 
                    <a 
                      href="https://portofolio-mfikribaihaqixela.vercel.app" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="santri-portfolio-link"
                    >
                      portofolio-mfikribaihaqixela.vercel.app
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Santri 2 */}
          <div className="santri-card">
            <div className="santri-card-inner">
              <div className="santri-header">
                <Image 
                  src="https://i.imgur.com/Wze2F9J.jpeg" 
                  alt="Muhammad Hubaib" 
                  width={150} 
                  height={150} 
                  className="santri-photo" 
                />
                <h3 className="santri-name neon-text-orange">Muhammad Hubaib</h3>
                <p className="santri-role">Web Developer (Backend Focus)</p>
              </div>
              
              <div className="santri-content">
                <p className="santri-quote">
                  &quot;Tantangan terbesar adalah konsistensi, tapi manfaatnya sangat besar, tidak hanya skill teknis tapi juga problem-solving dan kolaborasi.&quot;
                </p>
                
                <ul className="santri-details">
                  <li>
                    <span className="santri-detail-label">Keahlian:</span> 
                    Laravel, PHP, PostgreSQL, MySQL, Vue JS, TailwindCSS, JavaScript, HTML, CSS, Git, GitHub, Vercel.
                  </li>
                  <li>
                    <span className="santri-detail-label">Pengalaman Kunci:</span> 
                    Siswa programmer di Pondok IT Indonesia.
                  </li>
                  <li>
                    <span className="santri-detail-label">Portofolio:</span> 
                    <a 
                      href="https://portofolio-hubaib.vercel.app" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="santri-portfolio-link"
                    >
                      portofolio-hubaib.vercel.app
                    </a> | Proyek Unggulan: Sistem Koperasi Digital
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 