import Image from "next/image";

export default function ActiveSantriSection() {
  return (
    <section id="active-santri" className="active-santri-section">
      <div className="section-header-center">
        <h2 className="section-title neon-text-orange">
          Santri Batch 21
        </h2>
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
                    <div className="skill-badges-container">
                      <span className="skill-badge">Laravel</span>
                      <span className="skill-badge">Express.js</span>
                      <span className="skill-badge">React.js</span>
                      <span className="skill-badge">React Native</span>
                      <span className="skill-badge">Vue.js</span>
                      <span className="skill-badge">Tailwindcss</span>
                      <span className="skill-badge">MySQL</span>
                      <span className="skill-badge">PostgreSQL</span>
                      <span className="skill-badge">Git</span>
                      <span className="skill-badge">Figma</span>
                    </div>
                  </li>
                  <li>
                    <span className="santri-detail-label">Pengalaman Kunci:</span> 
                    <ul className="experience-list">
                      <li>Siswa programmer di Pondok IT</li>
                      <li>PKL di Astra Daihatsu Sunter</li>
                    </ul>
                  </li>
                  <li>
                    <span className="santri-detail-label">Portofolio:</span> 
                    <ul className="portfolio-list">
                      <li>
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
                    <div className="skill-badges-container">
                      <span className="skill-badge">Laravel</span>
                      <span className="skill-badge">PHP</span>
                      <span className="skill-badge">PostgreSQL</span>
                      <span className="skill-badge">MySQL</span>
                      <span className="skill-badge">Vue JS</span>
                      <span className="skill-badge">TailwindCSS</span>
                      <span className="skill-badge">JavaScript</span>
                      <span className="skill-badge">HTML</span>
                      <span className="skill-badge">CSS</span>
                      <span className="skill-badge">Git</span>
                      <span className="skill-badge">GitHub</span>
                      <span className="skill-badge">Vercel</span>
                    </div>
                  </li>
                  <li>
                    <span className="santri-detail-label">Pengalaman Kunci:</span> 
                    <ul className="experience-list">
                      <li>Siswa programmer di Pondok IT Indonesia</li>
                    </ul>
                  </li>
                  <li>
                    <span className="santri-detail-label">Portofolio:</span> 
                    <ul className="portfolio-list">
                      <li>
                        <a 
                          href="https://portofolio-hubaib.vercel.app" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="santri-portfolio-link"
                        >
                          portofolio-hubaib.vercel.app
                        </a>
                      </li>
                      <li>Proyek Unggulan: Sistem Koperasi Digital</li>
                    </ul>
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