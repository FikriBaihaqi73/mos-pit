import Image from "next/image";

export default function ActiveSantriSection() {
  return (
    <section id="active-santri" className="active-santri-section">
      <div className="section-header-center">
        <h2 className="section-title neon-text-orange">
          Santri Batch 21
        </h2>
        <p className="section-description">
          Programmer handal yang telah membuktikan dedikasi dan skill mereka di Pondok IT
        </p>
      </div>
      
      <div className="santri-container">
        <div className="santri-grid">
          {/* Santri 1 */}
          <div className="santri-card-wrapper">
            <div className="santri-card">
              <div className="santri-card-inner">
                <div className="santri-header">
                  <div className="santri-image-container">
                    <Image 
                      src="https://i.imgur.com/NErlEl8.jpeg" 
                      alt="Muhammad Fikri Baihaqi" 
                      width={150} 
                      height={150} 
                      className="santri-photo" 
                    />
                    <div className="santri-image-glow orange"></div>
                  </div>
                  <h3 className="santri-name neon-text-orange">Muhammad Fikri Baihaqi</h3>
                  <div className="santri-role-badge">
                    <span className="santri-role">Fullstack Software Engineer</span>
                  </div>
                </div>
                
                <div className="santri-content">
                  <div className="santri-quote-container">
                    <p className="santri-quote">
                      &quot;Tantangan terbesar bukan pada materi, tapi pada diri sendiri—apakah kita mau terus bertumbuh atau menyerah di tengah jalan.&quot;~Maou73
                    </p>
                  </div>
                  
                  <ul className="santri-details">
                    <li>
                      <span className="santri-detail-label">Keahlian:</span> 
                      <div className="skill-badges-container">
                        <span className="skill-badge holographic">Laravel</span>
                        <span className="skill-badge holographic">PHP</span>
                        <span className="skill-badge holographic">Express.js</span>
                        <span className="skill-badge holographic">React.js</span>
                        <span className="skill-badge holographic">React Native</span>
                        <span className="skill-badge holographic">Vue.js</span>
                        <span className="skill-badge holographic">Tailwindcss</span>
                        <span className="skill-badge holographic">MySQL</span>
                        <span className="skill-badge holographic">PostgreSQL</span>
                        <span className="skill-badge holographic">Postman</span>
                        <span className="skill-badge holographic">Git</span>
                        <span className="skill-badge holographic">GitHub</span>
                        <span className="skill-badge holographic">Figma</span>
                      </div>
                    </li>
                    <li>
                      <span className="santri-detail-label">Pengalaman Kunci:</span> 
                      <ul className="experience-list">
                        <li className="experience-item">Siswa programmer di Pondok IT</li>
                        <li className="experience-item">PKL di Astra Daihatsu Sunter</li>
                      </ul>
                    </li>
                    <li>
                      <span className="santri-detail-label">Portofolio:</span> 
                      <ul className="portfolio-list">
                        <li className="portfolio-item">
                          <a 
                            href="https://portofolio-mfikribaihaqixela.vercel.app" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="santri-portfolio-link"
                          >
                            portofolio-mfikribaihaqixela.vercel.app
                            <span className="link-arrow">→</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="santri-card-bg"></div>
            </div>
          </div>
          
          {/* Santri 2 */}
          <div className="santri-card-wrapper">
            <div className="santri-card">
              <div className="santri-card-inner">
                <div className="santri-header">
                  <div className="santri-image-container">
                    <Image 
                      src="https://i.imgur.com/Wze2F9J.jpeg" 
                      alt="Muhammad Hubaib" 
                      width={150} 
                      height={150} 
                      className="santri-photo" 
                    />
                    <div className="santri-image-glow orange"></div>
                  </div>
                  <h3 className="santri-name neon-text-orange">Muhammad Hubaib</h3>
                  <div className="santri-role-badge">
                    <span className="santri-role">Web Developer (Backend Focus)</span>
                  </div>
                </div>
                
                <div className="santri-content">
                  <div className="santri-quote-container">
                    <p className="santri-quote">
                      &quot;Tantangan terbesar adalah konsistensi, tapi manfaatnya sangat besar, tidak hanya skill teknis tapi juga problem-solving dan kolaborasi.&quot;
                    </p>
                  </div>
                  
                  <ul className="santri-details">
                    <li>
                      <span className="santri-detail-label">Keahlian:</span> 
                      <div className="skill-badges-container">
                        <span className="skill-badge holographic">Laravel</span>
                        <span className="skill-badge holographic">PHP</span>
                        <span className="skill-badge holographic">PostgreSQL</span>
                        <span className="skill-badge holographic">MySQL</span>
                        <span className="skill-badge holographic">Vue JS</span>
                        <span className="skill-badge holographic">TailwindCSS</span>
                        <span className="skill-badge holographic">JavaScript</span>
                        <span className="skill-badge holographic">HTML</span>
                        <span className="skill-badge holographic">CSS</span>
                        <span className="skill-badge holographic">Git</span>
                        <span className="skill-badge holographic">GitHub</span>
                        <span className="skill-badge holographic">Vercel</span>
                      </div>
                    </li>
                    <li>
                      <span className="santri-detail-label">Pengalaman Kunci:</span> 
                      <ul className="experience-list">
                        <li className="experience-item">Siswa programmer di Pondok IT Indonesia</li>
                      </ul>
                    </li>
                    <li>
                      <span className="santri-detail-label">Portofolio:</span> 
                      <ul className="portfolio-list">
                        <li className="portfolio-item">
                          <a 
                            href="https://portofolio-hubaib.vercel.app" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="santri-portfolio-link"
                          >
                            portofolio-hubaib.vercel.app
                            <span className="link-arrow">→</span>
                          </a>
                        </li>
                        <li className="portfolio-item">
                          <span className="project-highlight">Proyek Unggulan:</span> Sistem Koperasi Digital
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="santri-card-bg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 