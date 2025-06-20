import Image from "next/image";

export default function MentorSection() {
  return (
    <section id="mentor" className="mentor-section">
      <div className="section-header-center">
        <h2 className="section-title neon-text-purple">
          Our Mentors
        </h2>
        <p className="section-description">
          Meet the experienced programmers who will guide you on your journey. They believe programming is crucial for the future and are here to share their knowledge and passion.
        </p>
      </div>
      
      <div className="mentor-container">
        <div className="mentor-grid">
          {/* Mentor 1 */}
          <div className="mentor-card-wrapper">
            <div className="mentor-card">
              <div className="mentor-card-inner">
                <div className="mentor-header">
                  <div className="mentor-image-container">
                    <Image 
                      src="https://i.imgur.com/b39KKKu.jpeg" 
                      alt="Muhammad Hafif Al Busyro" 
                      width={150} 
                      height={150} 
                      className="mentor-photo mentor-photo-purple" 
                    />
                    <div className="mentor-image-glow purple"></div>
                  </div>
                  <h3 className="mentor-name neon-text-purple">Muhammad Hafif Al Busyro</h3>
                  <div className="skill-badges-container">
                    <span className="skill-badge holographic-purple">Software Engineer</span>
                  </div>
                </div>
                
                <div className="mentor-content">
                  <p className="mentor-description">
                    Seorang Software Engineer dengan 5+ tahun pengalaman, spesialisasi dalam pengembangan aplikasi mobile menggunakan React Native. Memulai karir di Pondok Programmer Yogyakarta sejak 2018.
                  </p>
                  
                  <ul className="mentor-details">
                    <li>
                      <span className="mentor-detail-label">Keahlian:</span> 
                      <div className="skill-badges-container">
                        <span className="skill-badge holographic-purple">Mobile App Dev (React Native)</span>
                        <span className="skill-badge holographic-purple">Web Dev (JavaScript)</span>
                        <span className="skill-badge holographic-purple">Backend (GraphQL)</span>
                        <span className="skill-badge holographic-purple">API (Axios)</span>
                        <span className="skill-badge holographic-purple">Payment Gateway (Midtrans)</span>
                      </div>
                    </li>
                    <li>
                      <span className="mentor-detail-label">Pengalaman Kunci:</span> 
                      <ul className="experience-list">
                        <li className="experience-item">Head of Education di Pondok Programmer</li>
                        <li className="experience-item">Software Engineer di Olsera</li>
                        <li className="experience-item">Terlibat dalam proyek untuk BPIP RI, HOKBEN, dan BUMA</li>
                      </ul>
                    </li>
                    <li>
                      <span className="mentor-detail-label">Portofolio:</span> 
                      <ul className="portfolio-list">
                        <li className="portfolio-item">Mengembangkan aplikasi Unity Wallet</li>
                        <li className="portfolio-item">Aplikasi Seleksi PASKIBRAKA</li>
                        <li className="portfolio-item">Sistem manajemen desa DEPPUTI</li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mentor-card-bg"></div>
            </div>
          </div>
          
          {/* Mentor 2 */}
          <div className="mentor-card-wrapper">
            <div className="mentor-card">
              <div className="mentor-card-inner">
                <div className="mentor-header">
                  <div className="mentor-image-container">
                    <Image 
                      src="https://i.imgur.com/MqO8hS2.jpeg" 
                      alt="Muhammad Ubaidillah El Ghifari" 
                      width={150} 
                      height={150} 
                      className="mentor-photo mentor-photo-purple" 
                    />
                    <div className="mentor-image-glow purple"></div>
                  </div>
                  <h3 className="mentor-name neon-text-purple">Muhammad Ubaidillah El Ghifari</h3>
                  <div className="skill-badges-container">
                    <span className="skill-badge holographic-purple">Software Engineer</span>
                  </div>
                </div>
                
                <div className="mentor-content">
                  <p className="mentor-description">
                    Seorang Software Engineer dengan pengalaman memimpin tim teknis dan membangun berbagai solusi web, mulai dari profil perusahaan hingga sistem manajemen logistik dan LMS yang kompleks.
                  </p>
                  
                  <ul className="mentor-details">
                    <li>
                      <span className="mentor-detail-label">Keahlian:</span> 
                      <div className="skill-badges-container">
                        <span className="skill-badge holographic-purple">Laravel</span>
                        <span className="skill-badge holographic-purple">Web Development</span>
                        <span className="skill-badge holographic-purple">Project Management</span>
                        <span className="skill-badge holographic-purple">Database Management</span>
                        <span className="skill-badge holographic-purple">Critical Thinking</span>
                        <span className="skill-badge holographic-purple">Leadership</span>
                      </div>
                    </li>
                    <li>
                      <span className="mentor-detail-label">Pengalaman Kunci:</span> 
                      <ul className="experience-list">
                        <li className="experience-item">Technical Team Lead di ID Photo Book</li>
                        <li className="experience-item">Mengembangkan sistem pelacakan logistik untuk PT. EXSEA SUKSES ABADI</li>
                        <li className="experience-item">Membangun platform LMS untuk Rumah IT Hub 6</li>
                        <li className="experience-item">Menjadi mentor di kelas pemrograman Pondok IT</li>
                      </ul>
                    </li>
                    <li>
                      <span className="mentor-detail-label">Portofolio:</span> 
                      <ul className="portfolio-list">
                        <li className="portfolio-item">Terlibat dalam perancangan ulang web Pondok IT</li>
                        <li className="portfolio-item">Membangun sistem pelacakan kontainer dengan notifikasi real-time dan dasbor yang dipersonalisasi</li>
                        <li className="portfolio-item">Merancang arsitektur untuk platform e-learning (LMS)</li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mentor-card-bg"></div>
            </div>
          </div>
          
          {/* Mentor 3 */}
          <div className="mentor-card-wrapper">
            <div className="mentor-card">
              <div className="mentor-card-inner">
                <div className="mentor-header">
                  <div className="mentor-image-container">
                    <Image 
                      src="https://i.imgur.com/p5boOSj.jpeg" 
                      alt="Jujun Setiawan" 
                      width={150} 
                      height={150} 
                      className="mentor-photo mentor-photo-purple" 
                    />
                    <div className="mentor-image-glow purple"></div>
                  </div>
                  <h3 className="mentor-name neon-text-purple">Jujun Setiawan</h3>
                  <div className="skill-badges-container">
                    <span className="skill-badge holographic-purple">Software Engineer</span>
                  </div>
                </div>
                
                <div className="mentor-content">
                  <p className="mentor-description">
                    Software Engineer dengan 4+ tahun pengalaman dalam menciptakan solusi perangkat lunak yang efektif dan skalabel, dengan kompetensi di backend, integrasi sistem, dan aplikasi mobile yang berfokus pada pengalaman pengguna.
                  </p>
                  
                  <ul className="mentor-details">
                    <li>
                      <span className="mentor-detail-label">Keahlian:</span> 
                      <div className="skill-badges-container">
                        <span className="skill-badge holographic-purple">JavaScript</span>
                        <span className="skill-badge holographic-purple">Next.js</span>
                        <span className="skill-badge holographic-purple">Express.js</span>
                        <span className="skill-badge holographic-purple">React Native</span>
                        <span className="skill-badge holographic-purple">MERN Stack</span>
                        <span className="skill-badge holographic-purple">MongoDB</span>
                        <span className="skill-badge holographic-purple">MySql</span>
                        <span className="skill-badge holographic-purple">Redis</span>
                        <span className="skill-badge holographic-purple">AWS S3</span>
                        <span className="skill-badge holographic-purple">Chakra UI</span>
                        <span className="skill-badge holographic-purple">Tailwind CSS</span>
                      </div>
                    </li>
                    <li>
                      <span className="mentor-detail-label">Pengalaman Kunci:</span> 
                      <ul className="experience-list">
                        <li className="experience-item">Backend Developer di Lifepack.id & ID Photobook</li>
                        <li className="experience-item">Full-stack Developer di Pindah Digital</li>
                        <li className="experience-item">Software Programming Instructor di Remote Worker Indonesia</li>
                      </ul>
                    </li>
                    <li>
                      <span className="mentor-detail-label">Portofolio:</span> 
                      <ul className="portfolio-list">
                        <li className="portfolio-item">Membangun sistem HRIS</li>
                        <li className="portfolio-item">Distance Learning System (DLS)</li>
                        <li className="portfolio-item">Learning Management System (LMS) dengan peran sebagai Backend Architect hingga Full-stack Developer</li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mentor-card-bg"></div>
            </div>
          </div>
          
          {/* Mentor 4 */}
          <div className="mentor-card-wrapper">
            <div className="mentor-card">
              <div className="mentor-card-inner">
                <div className="mentor-header">
                  <div className="mentor-image-container">
                    <Image 
                      src="https://i.imgur.com/lFERaFL.jpeg" 
                      alt="Edward Supratman" 
                      width={150} 
                      height={150} 
                      className="mentor-photo mentor-photo-purple" 
                    />
                    <div className="mentor-image-glow purple"></div>
                  </div>
                  <h3 className="mentor-name neon-text-purple">Edward Supratman</h3>
                  <div className="skill-badges-container">
                    <span className="skill-badge holographic-purple">Software Tester & Front-End Developer</span>
                  </div>
                </div>
                
                <div className="mentor-content">
                  <p className="mentor-description">
                    Seorang Software Tester dan Front-End Developer dengan keahlian dalam mengembangkan serta menguji situs web untuk mengoptimalkan pengalaman pengguna.
                  </p>
                  
                  <ul className="mentor-details">
                    <li>
                      <span className="mentor-detail-label">Keahlian:</span> 
                      <div className="skill-badges-container">
                        <span className="skill-badge holographic-purple">JavaScript</span>
                        <span className="skill-badge holographic-purple">React JS</span>
                        <span className="skill-badge holographic-purple">Tailwind CSS</span>
                        <span className="skill-badge holographic-purple">Bootstrap</span>
                        <span className="skill-badge holographic-purple">Figma</span>
                        <span className="skill-badge holographic-purple">Postman</span>
                        <span className="skill-badge holographic-purple">Git</span>
                        <span className="skill-badge holographic-purple">Github</span>
                        <span className="skill-badge holographic-purple">Trello</span>
                        <span className="skill-badge holographic-purple">Swagger</span>
                      </div>
                    </li>
                    <li>
                      <span className="mentor-detail-label">Pengalaman Kunci:</span> 
                      <ul className="experience-list">
                        <li className="experience-item">Software Tester di PT. Sandbox Indonesia Juara</li>
                        <li className="experience-item">Front End Developer di Pondok IT</li>
                        <li className="experience-item">IT Support di SMK YPPT</li>
                      </ul>
                    </li>
                    <li>
                      <span className="mentor-detail-label">Portofolio:</span> 
                      <ul className="portfolio-list">
                        <li className="portfolio-item">Berpengalaman merancang test plan, skema, dan skenario pengujian aplikasi</li>
                        <li className="portfolio-item">Membangun berbagai situs web sesuai permintaan</li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mentor-card-bg"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-header-center mt-20">
        <h3 className="section-title neon-text-cyan">
          Assistant Mentors
        </h3>
      </div>

      <div className="assistant-mentor-container">
        <div className="mentor-grid assistant-mentor-grid">
          {/* Assistant Mentor 1 */}
          <div className="mentor-card-wrapper">
            <div className="mentor-card">
              <div className="mentor-card-inner">
                <div className="mentor-header">
                  <div className="mentor-image-container">
                    <Image 
                      src="https://i.imgur.com/1ANEOOY.jpeg" 
                      alt="M. Al Fatih Muzakki" 
                      width={150} 
                      height={150} 
                      className="mentor-photo mentor-photo-cyan" 
                    />
                    <div className="mentor-image-glow cyan"></div>
                  </div>
                  <h3 className="mentor-name neon-text">M. Al Fatih Muzakki</h3>
                  <div className="skill-badges-container">
                    <span className="skill-badge holographic">Fullstack Developer</span>
                  </div>
                </div>
                
                <div className="mentor-content">
                  <p className="mentor-description">
                    Fullstack Developer dengan keahlian frontend (Next.js, Tailwind CSS) dan backend (Express.js, Laravel, Golang). Berkomitmen pada kode yang bersih dan mudah dipelihara.
                  </p>
                  
                  <ul className="mentor-details">
                    <li>
                      <span className="mentor-detail-label">Keahlian:</span> 
                      <div className="skill-badges-container">
                        <span className="skill-badge holographic">React.js</span>
                        <span className="skill-badge holographic">Next.js</span>
                        <span className="skill-badge holographic">Tailwind CSS</span>
                        <span className="skill-badge holographic">JavaScript</span>
                        <span className="skill-badge holographic">TypeScript</span>
                        <span className="skill-badge holographic">Express.js</span>
                        <span className="skill-badge holographic">Laravel</span>
                        <span className="skill-badge holographic">Golang</span>
                        <span className="skill-badge holographic">MySQL</span>
                        <span className="skill-badge holographic">PostgreSQL</span>
                        <span className="skill-badge holographic">Git</span>
                        <span className="skill-badge holographic">Figma</span>
                      </div>
                    </li>
                    <li>
                      <span className="mentor-detail-label">Pengalaman Kunci:</span> 
                      <ul className="experience-list">
                        <li className="experience-item">Frontend Web Developer di PT Nizom Berkah Informasi, di mana ia mengembangkan antarmuka web, mengintegrasikan API, dan merefaktorisasi kode.</li>
                      </ul>
                    </li>
                    <li>
                      <span className="mentor-detail-label">Portofolio:</span> 
                      <ul className="portfolio-list">
                        <li className="portfolio-item">
                          <a 
                            href="https://malfazakki.vercel.app" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="mentor-portfolio-link"
                          >
                            malfazakki.vercel.app
                            <span className="link-arrow">→</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mentor-card-bg cyan"></div>
            </div>
          </div>
          
          {/* Assistant Mentor 2 */}
          <div className="mentor-card-wrapper">
            <div className="mentor-card">
              <div className="mentor-card-inner">
                <div className="mentor-header">
                  <div className="mentor-image-container">
                    <Image 
                      src="https://i.imgur.com/cfhw30U.jpeg" 
                      alt="Masura Dani Quthni" 
                      width={150} 
                      height={150} 
                      className="mentor-photo mentor-photo-cyan" 
                    />
                    <div className="mentor-image-glow cyan"></div>
                  </div>
                  <h3 className="mentor-name neon-text">Masura Dani Quthni</h3>
                  <div className="skill-badges-container">
                    <span className="skill-badge holographic">Backend Developer</span>
                  </div>
                </div>
                
                <div className="mentor-content">
                  <p className="mentor-description">
                    Seorang developer dari Klaten dengan fokus pada pengembangan backend menggunakan Laravel dan PHP, sambil terus mengeksplorasi JavaScript dan MERN Stack. Bersemangat untuk terus berkembang dan siap menghadapi tantangan baru.
                  </p>
                  
                  <ul className="mentor-details">
                    <li>
                      <span className="mentor-detail-label">Keahlian:</span> 
                      <div className="skill-badges-container">
                        <span className="skill-badge holographic">PHP (Laravel)</span>
                        <span className="skill-badge holographic">JavaScript (MERN Stack)</span>
                        <span className="skill-badge holographic">MySQL</span>
                        <span className="skill-badge holographic">MongoDB</span>
                        <span className="skill-badge holographic">Git</span>
                        <span className="skill-badge holographic">Postman</span>
                        <span className="skill-badge holographic">REST API</span>
                        <span className="skill-badge holographic">Role Management</span>
                      </div>
                    </li>
                    <li>
                      <span className="mentor-detail-label">Pengalaman Kunci:</span> 
                      <ul className="experience-list">
                        <li className="experience-item">Terlibat dalam pengembangan backend untuk proyek siSantri (role-based access) dan Web Pendataan Masjid</li>
                        <li className="experience-item">Memiliki pengalaman PKL di bidang jaringan (provider WiFi) dan hardware (perakitan komputer)</li>
                      </ul>
                    </li>
                    <li>
                      <span className="mentor-detail-label">Portofolio:</span> 
                      <ul className="portfolio-list">
                        <li className="portfolio-item">
                          <a 
                            href="https://github.com/projectdanz" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="mentor-portfolio-link"
                          >
                            github.com/projectdanz
                            <span className="link-arrow">→</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mentor-card-bg cyan"></div>
            </div>
          </div>
          
          {/* Assistant Mentor 3 */}
          <div className="mentor-card-wrapper">
            <div className="mentor-card">
              <div className="mentor-card-inner">
                <div className="mentor-header">
                  <div className="mentor-image-container">
                    <Image 
                      src="https://i.imgur.com/CNKn1g1.jpeg" 
                      alt="Iqbal Jalaluddin" 
                      width={150} 
                      height={150} 
                      className="mentor-photo mentor-photo-cyan" 
                    />
                    <div className="mentor-image-glow cyan"></div>
                  </div>
                  <h3 className="mentor-name neon-text">Iqbal Jalaluddin</h3>
                  <div className="skill-badges-container">
                    <span className="skill-badge holographic">Backend Developer</span>
                  </div>
                </div>
                
                <div className="mentor-content">
                  <p className="mentor-description">
                    Seorang pemuda kelahiran Bandung yang bercita-cita menjadi Problem Solver. Berfokus pada pengembangan backend dengan teknologi Laravel, Express.js, dan Go.
                  </p>
                  
                  <ul className="mentor-details">
                    <li>
                      <span className="mentor-detail-label">Keahlian:</span> 
                      <div className="skill-badges-container">
                        <span className="skill-badge holographic">PHP</span>
                        <span className="skill-badge holographic">Laravel</span>
                        <span className="skill-badge holographic">Go</span>
                        <span className="skill-badge holographic">VS Code</span>
                        <span className="skill-badge holographic">Git & Github</span>
                        <span className="skill-badge holographic">Linux Terminal</span>
                      </div>
                    </li>
                    <li>
                      <span className="mentor-detail-label">Pengalaman Kunci:</span> 
                      <ul className="experience-list">
                        <li className="experience-item">Backend Developer di Rumah IT HUB</li>
                        <li className="experience-item">Lead & Backend Developer di CekTagihan</li>
                      </ul>
                    </li>
                    <li>
                      <span className="mentor-detail-label">Portofolio:</span> 
                      <ul className="portfolio-list">
                        <li className="portfolio-item">Berpengalaman mengembangkan RESTful API</li>
                        <li className="portfolio-item">Integrasi pembayaran dengan Xendit</li>
                        <li className="portfolio-item">Merancang dan membangun sistem backend untuk aplikasi web CekTagihan</li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mentor-card-bg cyan"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 