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
          <div className="mentor-card">
            <div className="mentor-card-inner">
              <div className="mentor-header">
                <Image 
                  src="https://i.imgur.com/b39KKKu.jpeg" 
                  alt="Muhammad Hafif Al Busyro" 
                  width={150} 
                  height={150} 
                  className="mentor-photo mentor-photo-purple" 
                />
                <h3 className="mentor-name neon-text-purple">Muhammad Hafif Al Busyro</h3>
                <div className="skill-badges-container">
                  <span className="skill-badge">Software Engineer</span>
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
                      <span className="skill-badge">Mobile App Dev (React Native)</span>
                      <span className="skill-badge">Web Dev (JavaScript)</span>
                      <span className="skill-badge">Backend (GraphQL)</span>
                      <span className="skill-badge">API (Axios)</span>
                      <span className="skill-badge">Payment Gateway (Midtrans)</span>
                    </div>
                  </li>
                  <li>
                    <span className="mentor-detail-label">Pengalaman Kunci:</span> 
                    <ul className="experience-list">
                      <li>Head of Education di Pondok Programmer</li>
                      <li>Software Engineer di Olsera</li>
                      <li>Terlibat dalam proyek untuk BPIP RI, HOKBEN, dan BUMA</li>
                    </ul>
                  </li>
                  <li>
                    <span className="mentor-detail-label">Portofolio:</span> 
                    <ul className="portfolio-list">
                      <li>Mengembangkan aplikasi Unity Wallet</li>
                      <li>Aplikasi Seleksi PASKIBRAKA</li>
                      <li>Sistem manajemen desa DEPPUTI</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Mentor 2 */}
          <div className="mentor-card">
            <div className="mentor-card-inner">
              <div className="mentor-header">
                <Image 
                  src="https://i.imgur.com/MqO8hS2.jpeg" 
                  alt="Muhammad Ubaidillah El Ghifari" 
                  width={150} 
                  height={150} 
                  className="mentor-photo mentor-photo-purple" 
                />
                <h3 className="mentor-name neon-text-purple">Muhammad Ubaidillah El Ghifari</h3>
                <div className="skill-badges-container">
                  <span className="skill-badge">Software Engineer</span>
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
                      <span className="skill-badge">Laravel</span>
                      <span className="skill-badge">Web Development</span>
                      <span className="skill-badge">Project Management</span>
                      <span className="skill-badge">Database Management</span>
                      <span className="skill-badge">Critical Thinking</span>
                      <span className="skill-badge">Leadership</span>
                    </div>
                  </li>
                  <li>
                    <span className="mentor-detail-label">Pengalaman Kunci:</span> 
                    <ul className="experience-list">
                      <li>Technical Team Lead di ID Photo Book</li>
                      <li>Mengembangkan sistem pelacakan logistik untuk PT. EXSEA SUKSES ABADI</li>
                      <li>Membangun platform LMS untuk Rumah IT Hub 6</li>
                      <li>Menjadi mentor di kelas pemrograman Pondok IT</li>
                    </ul>
                  </li>
                  <li>
                    <span className="mentor-detail-label">Portofolio:</span> 
                    <ul className="portfolio-list">
                      <li>Terlibat dalam perancangan ulang web Pondok IT</li>
                      <li>Membangun sistem pelacakan kontainer dengan notifikasi real-time dan dasbor yang dipersonalisasi</li>
                      <li>Merancang arsitektur untuk platform e-learning (LMS)</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Mentor 3 */}
          <div className="mentor-card">
            <div className="mentor-card-inner">
              <div className="mentor-header">
                <Image 
                  src="https://i.imgur.com/p5boOSj.jpeg" 
                  alt="Jujun Setiawan" 
                  width={150} 
                  height={150} 
                  className="mentor-photo mentor-photo-purple" 
                />
                <h3 className="mentor-name neon-text-purple">Jujun Setiawan</h3>
                <div className="skill-badges-container">
                  <span className="skill-badge">Software Engineer</span>
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
                      <span className="skill-badge">JavaScript</span>
                      <span className="skill-badge">Next.js</span>
                      <span className="skill-badge">Express.js</span>
                      <span className="skill-badge">React Native</span>
                      <span className="skill-badge">MERN Stack</span>
                      <span className="skill-badge">MongoDB</span>
                      <span className="skill-badge">MySql</span>
                      <span className="skill-badge">Redis</span>
                      <span className="skill-badge">AWS S3</span>
                      <span className="skill-badge">Chakra UI</span>
                      <span className="skill-badge">Tailwind CSS</span>
                    </div>
                  </li>
                  <li>
                    <span className="mentor-detail-label">Pengalaman Kunci:</span> 
                    <ul className="experience-list">
                      <li>Backend Developer di Lifepack.id & ID Photobook</li>
                      <li>Full-stack Developer di Pindah Digital</li>
                      <li>Software Programming Instructor di Remote Worker Indonesia</li>
                    </ul>
                  </li>
                  <li>
                    <span className="mentor-detail-label">Portofolio:</span> 
                    <ul className="portfolio-list">
                      <li>Membangun sistem HRIS</li>
                      <li>Distance Learning System (DLS)</li>
                      <li>Learning Management System (LMS) dengan peran sebagai Backend Architect hingga Full-stack Developer</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Mentor 4 */}
          <div className="mentor-card">
            <div className="mentor-card-inner">
              <div className="mentor-header">
                <Image 
                  src="https://i.imgur.com/lFERaFL.jpeg" 
                  alt="Edward Supratman" 
                  width={150} 
                  height={150} 
                  className="mentor-photo mentor-photo-purple" 
                />
                <h3 className="mentor-name neon-text-purple">Edward Supratman</h3>
                <div className="skill-badges-container">
                  <span className="skill-badge">Software Tester & Front-End Developer</span>
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
                      <span className="skill-badge">JavaScript</span>
                      <span className="skill-badge">React JS</span>
                      <span className="skill-badge">Tailwind CSS</span>
                      <span className="skill-badge">Bootstrap</span>
                      <span className="skill-badge">Figma</span>
                      <span className="skill-badge">Postman</span>
                      <span className="skill-badge">Git</span>
                      <span className="skill-badge">Github</span>
                      <span className="skill-badge">Trello</span>
                      <span className="skill-badge">Swagger</span>
                    </div>
                  </li>
                  <li>
                    <span className="mentor-detail-label">Pengalaman Kunci:</span> 
                    <ul className="experience-list">
                      <li>Software Tester di PT. Sandbox Indonesia Juara</li>
                      <li>Front End Developer di Pondok IT</li>
                      <li>IT Support di SMK YPPT</li>
                    </ul>
                  </li>
                  <li>
                    <span className="mentor-detail-label">Portofolio:</span> 
                    <ul className="portfolio-list">
                      <li>Berpengalaman merancang test plan, skema, dan skenario pengujian aplikasi</li>
                      <li>Membangun berbagai situs web sesuai permintaan</li>
                    </ul>
                  </li>
                </ul>
              </div>
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
          <div className="mentor-card">
            <div className="mentor-card-inner">
              <div className="mentor-header">
                <Image 
                  src="https://i.imgur.com/1ANEOOY.jpeg" 
                  alt="M. Al Fatih Muzakki" 
                  width={150} 
                  height={150} 
                  className="mentor-photo mentor-photo-cyan" 
                />
                <h3 className="mentor-name neon-text">M. Al Fatih Muzakki</h3>
                <div className="skill-badges-container">
                  <span className="skill-badge">Fullstack Developer</span>
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
                      <span className="skill-badge">React.js</span>
                      <span className="skill-badge">Next.js</span>
                      <span className="skill-badge">Tailwind CSS</span>
                      <span className="skill-badge">JavaScript</span>
                      <span className="skill-badge">TypeScript</span>
                      <span className="skill-badge">Express.js</span>
                      <span className="skill-badge">Laravel</span>
                      <span className="skill-badge">Golang</span>
                      <span className="skill-badge">MySQL</span>
                      <span className="skill-badge">PostgreSQL</span>
                      <span className="skill-badge">Git</span>
                      <span className="skill-badge">Figma</span>
                    </div>
                  </li>
                  <li>
                    <span className="mentor-detail-label">Pengalaman Kunci:</span> 
                    <ul className="experience-list">
                      <li>Frontend Web Developer di PT Nizom Berkah Informasi, di mana ia mengembangkan antarmuka web, mengintegrasikan API, dan merefaktorisasi kode.</li>
                    </ul>
                  </li>
                  <li>
                    <span className="mentor-detail-label">Portofolio:</span> 
                    <ul className="portfolio-list">
                      <li>
                        <a 
                          href="https://malfazakki.vercel.app" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="mentor-portfolio-link"
                        >
                          malfazakki.vercel.app
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Assistant Mentor 2 */}
          <div className="mentor-card">
            <div className="mentor-card-inner">
              <div className="mentor-header">
                <Image 
                  src="https://i.imgur.com/cfhw30U.jpeg" 
                  alt="Masura Dani Quthni" 
                  width={150} 
                  height={150} 
                  className="mentor-photo mentor-photo-cyan" 
                />
                <h3 className="mentor-name neon-text">Masura Dani Quthni</h3>
                <div className="skill-badges-container">
                  <span className="skill-badge">Backend Developer</span>
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
                      <span className="skill-badge">PHP (Laravel)</span>
                      <span className="skill-badge">JavaScript (MERN Stack)</span>
                      <span className="skill-badge">MySQL</span>
                      <span className="skill-badge">MongoDB</span>
                      <span className="skill-badge">Git</span>
                      <span className="skill-badge">Postman</span>
                      <span className="skill-badge">REST API</span>
                      <span className="skill-badge">Role Management</span>
                    </div>
                  </li>
                  <li>
                    <span className="mentor-detail-label">Pengalaman Kunci:</span> 
                    <ul className="experience-list">
                      <li>Terlibat dalam pengembangan backend untuk proyek siSantri (role-based access) dan Web Pendataan Masjid</li>
                      <li>Memiliki pengalaman PKL di bidang jaringan (provider WiFi) dan hardware (perakitan komputer)</li>
                    </ul>
                  </li>
                  <li>
                    <span className="mentor-detail-label">Portofolio:</span> 
                    <ul className="portfolio-list">
                      <li>
                        <a 
                          href="https://github.com/projectdanz" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="mentor-portfolio-link"
                        >
                          github.com/projectdanz
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Assistant Mentor 3 */}
          <div className="mentor-card">
            <div className="mentor-card-inner">
              <div className="mentor-header">
                <Image 
                  src="https://i.imgur.com/CNKn1g1.jpeg" 
                  alt="Iqbal Jalaluddin" 
                  width={150} 
                  height={150} 
                  className="mentor-photo mentor-photo-cyan" 
                />
                <h3 className="mentor-name neon-text">Iqbal Jalaluddin</h3>
                <div className="skill-badges-container">
                  <span className="skill-badge">Backend Developer</span>
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
                      <span className="skill-badge">PHP</span>
                      <span className="skill-badge">Laravel</span>
                      <span className="skill-badge">Go</span>
                      <span className="skill-badge">VS Code</span>
                      <span className="skill-badge">Git & Github</span>
                      <span className="skill-badge">Linux Terminal</span>
                    </div>
                  </li>
                  <li>
                    <span className="mentor-detail-label">Pengalaman Kunci:</span> 
                    <ul className="experience-list">
                      <li>Backend Developer di Rumah IT HUB</li>
                      <li>Lead & Backend Developer di CekTagihan</li>
                    </ul>
                  </li>
                  <li>
                    <span className="mentor-detail-label">Portofolio:</span> 
                    <ul className="portfolio-list">
                      <li>Berpengalaman mengembangkan RESTful API</li>
                      <li>Integrasi pembayaran dengan Xendit</li>
                      <li>Merancang dan membangun sistem backend untuk aplikasi web CekTagihan</li>
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