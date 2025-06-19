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
                <p className="mentor-role">Software Engineer</p>
              </div>
              
              <div className="mentor-content">
                <p className="mentor-description">
                  Seorang Software Engineer dengan 5+ tahun pengalaman, spesialisasi dalam pengembangan aplikasi mobile menggunakan React Native. Memulai karir di Pondok Programmer Yogyakarta sejak 2018.
                </p>
                
                <ul className="mentor-details">
                  <li>
                    <span className="mentor-detail-label">Keahlian:</span> 
                    Mobile App Dev (React Native), Web Dev (JavaScript), Backend (GraphQL), API (Axios), Payment Gateway (Midtrans).
                  </li>
                  <li>
                    <span className="mentor-detail-label">Pengalaman Kunci:</span> 
                    Head of Education di Pondok Programmer, Software Engineer di Olsera, serta terlibat dalam proyek untuk BPIP RI, HOKBEN, dan BUMA.
                  </li>
                  <li>
                    <span className="mentor-detail-label">Portofolio:</span> 
                    Mengembangkan aplikasi Unity Wallet, Aplikasi Seleksi PASKIBRAKA, dan sistem manajemen desa DEPPUTI.
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
                <p className="mentor-role">Software Engineer</p>
              </div>
              
              <div className="mentor-content">
                <p className="mentor-description">
                  Seorang Software Engineer dengan pengalaman memimpin tim teknis dan membangun berbagai solusi web, mulai dari profil perusahaan hingga sistem manajemen logistik dan LMS yang kompleks.
                </p>
                
                <ul className="mentor-details">
                  <li>
                    <span className="mentor-detail-label">Keahlian:</span> 
                    Laravel, Web Development, Project Management, Database Management, Critical Thinking, Leadership.
                  </li>
                  <li>
                    <span className="mentor-detail-label">Pengalaman Kunci:</span> 
                    Technical Team Lead di ID Photo Book, mengembangkan sistem pelacakan logistik untuk PT. EXSEA SUKSES ABADI, membangun platform LMS untuk Rumah IT Hub 6, dan menjadi mentor di kelas pemrograman Pondok IT.
                  </li>
                  <li>
                    <span className="mentor-detail-label">Portofolio:</span> 
                    Terlibat dalam perancangan ulang web Pondok IT, membangun sistem pelacakan kontainer dengan notifikasi real-time dan dasbor yang dipersonalisasi, serta merancang arsitektur untuk platform e-learning (LMS).
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
                <p className="mentor-role">Software Engineer</p>
              </div>
              
              <div className="mentor-content">
                <p className="mentor-description">
                  Software Engineer dengan 4+ tahun pengalaman dalam menciptakan solusi perangkat lunak yang efektif dan skalabel, dengan kompetensi di backend, integrasi sistem, dan aplikasi mobile yang berfokus pada pengalaman pengguna.
                </p>
                
                <ul className="mentor-details">
                  <li>
                    <span className="mentor-detail-label">Keahlian:</span> 
                    JavaScript, Next.js, Express.js, React Native, MERN Stack, MongoDB, MySql, Redis, AWS S3, Chakra UI, Tailwind CSS.
                  </li>
                  <li>
                    <span className="mentor-detail-label">Pengalaman Kunci:</span> 
                    Backend Developer di Lifepack.id & ID Photobook, Full-stack Developer di Pindah Digital, dan Software Programming Instructor di Remote Worker Indonesia.
                  </li>
                  <li>
                    <span className="mentor-detail-label">Portofolio:</span> 
                    Membangun sistem HRIS, Distance Learning System (DLS), dan Learning Management System (LMS) dengan peran sebagai Backend Architect hingga Full-stack Developer.
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
                <p className="mentor-role">Software Tester & Front-End Developer</p>
              </div>
              
              <div className="mentor-content">
                <p className="mentor-description">
                  Seorang Software Tester dan Front-End Developer dengan keahlian dalam mengembangkan serta menguji situs web untuk mengoptimalkan pengalaman pengguna.
                </p>
                
                <ul className="mentor-details">
                  <li>
                    <span className="mentor-detail-label">Keahlian:</span> 
                    JavaScript, React JS, Tailwind CSS, Bootstrap, Figma, Postman, Git, Github, Trello, Swagger.
                  </li>
                  <li>
                    <span className="mentor-detail-label">Pengalaman Kunci:</span> 
                    Software Tester di PT. Sandbox Indonesia Juara, Front End Developer di Pondok IT, dan IT Support di SMK YPPT.
                  </li>
                  <li>
                    <span className="mentor-detail-label">Portofolio:</span> 
                    Berpengalaman merancang test plan, skema, dan skenario pengujian aplikasi, serta membangun berbagai situs web sesuai permintaan.
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
                  src="https://i.imgur.com/pwnWWBs.jpeg" 
                  alt="M. Al Fatih Muzakki" 
                  width={150} 
                  height={150} 
                  className="mentor-photo mentor-photo-cyan" 
                />
                <h3 className="mentor-name neon-text">M. Al Fatih Muzakki</h3>
                <p className="mentor-role">Fullstack Developer</p>
              </div>
              
              <div className="mentor-content">
                <p className="mentor-description">
                  Fullstack Developer dengan keahlian frontend (Next.js, Tailwind CSS) dan backend (Express.js, Laravel, Golang). Berkomitmen pada kode yang bersih dan mudah dipelihara.
                </p>
                
                <ul className="mentor-details">
                  <li>
                    <span className="mentor-detail-label">Keahlian:</span> 
                    React.js, Next.js, Tailwind CSS, JavaScript, TypeScript, Express.js, Laravel, Golang, MySQL, PostgreSQL, Git, Figma.
                  </li>
                  <li>
                    <span className="mentor-detail-label">Pengalaman Kunci:</span> 
                    Frontend Web Developer di PT Nizom Berkah Informasi, di mana ia mengembangkan antarmuka web, mengintegrasikan API, dan merefaktorisasi kode.
                  </li>
                  <li>
                    <span className="mentor-detail-label">Portofolio:</span> 
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
                <p className="mentor-role">Backend Developer</p>
              </div>
              
              <div className="mentor-content">
                <p className="mentor-description">
                  Seorang developer dari Klaten dengan fokus pada pengembangan backend menggunakan Laravel dan PHP, sambil terus mengeksplorasi JavaScript dan MERN Stack. Bersemangat untuk terus berkembang dan siap menghadapi tantangan baru.
                </p>
                
                <ul className="mentor-details">
                  <li>
                    <span className="mentor-detail-label">Keahlian:</span> 
                    PHP (Laravel), JavaScript (MERN Stack), MySQL, MongoDB, Git, Postman, REST API, Role Management.
                  </li>
                  <li>
                    <span className="mentor-detail-label">Pengalaman Kunci:</span> 
                    Terlibat dalam pengembangan backend untuk proyek siSantri (role-based access) dan Web Pendataan Masjid. Memiliki pengalaman PKL di bidang jaringan (provider WiFi) dan hardware (perakitan komputer).
                  </li>
                  <li>
                    <span className="mentor-detail-label">Portofolio:</span> 
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
                <p className="mentor-role">Backend Developer</p>
              </div>
              
              <div className="mentor-content">
                <p className="mentor-description">
                  Seorang pemuda kelahiran Bandung yang bercita-cita menjadi Problem Solver. Berfokus pada pengembangan backend dengan teknologi Laravel, Express.js, dan Go.
                </p>
                
                <ul className="mentor-details">
                  <li>
                    <span className="mentor-detail-label">Keahlian:</span> 
                    PHP, Laravel, Go, VS Code, Git & Github, Linux Terminal.
                  </li>
                  <li>
                    <span className="mentor-detail-label">Pengalaman Kunci:</span> 
                    Backend Developer di Rumah IT HUB dan Lead & Backend Developer di CekTagihan.
                  </li>
                  <li>
                    <span className="mentor-detail-label">Portofolio:</span> 
                    Berpengalaman mengembangkan RESTful API, integrasi pembayaran dengan Xendit, serta merancang dan membangun sistem backend untuk aplikasi web CekTagihan.
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