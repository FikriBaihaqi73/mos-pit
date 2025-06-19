import Image from "next/image";

export default function MentorSection() {
  return (
    <section id="mentor" className="w-full text-center mb-24">
      <h2 className="text-4xl font-semibold text-accent-teal mb-6">Our Mentors</h2>
      <p className="text-lg text-text-light max-w-3xl mx-auto mb-12">
        Meet the experienced programmers who will guide you on your journey. They believe programming is crucial for the future and are here to share their knowledge and passion.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Mentor 1 */}
        <div className="bg-dark-bg-card p-6 rounded-lg shadow-lg border border-accent-teal flex flex-col items-center">
          <Image src="https://i.imgur.com/b39KKKu.jpeg" alt="Muhammad Hafif Al Busyro" width={150} height={150} className="rounded-full mb-4 border-2 border-accent-teal object-cover w-36 h-36" />
          <h3 className="text-2xl font-bold text-accent-teal">Muhammad Hafif Al Busyro</h3>
          <p className="text-lg text-text-light mb-2">Software Engineer</p>
          <p className="text-sm text-text-medium text-center">
            Seorang Software Engineer dengan 5+ tahun pengalaman, spesialisasi dalam pengembangan aplikasi mobile menggunakan React Native. Memulai karir di Pondok Programmer Yogyakarta sejak 2018.
          </p>
          <ul className="text-sm text-text-dark mt-4 text-left w-full">
            <li><span className="font-semibold text-text-light">Keahlian:</span> Mobile App Dev (React Native), Web Dev (JavaScript), Backend (GraphQL), API (Axios), Payment Gateway (Midtrans).</li>
            <li><span className="font-semibold text-text-light">Pengalaman Kunci:</span> Head of Education di Pondok Programmer, Software Engineer di Olsera, serta terlibat dalam proyek untuk BPIP RI, HOKBEN, dan BUMA.</li>
            <li><span className="font-semibold text-text-light">Portofolio:</span> Mengembangkan aplikasi Unity Wallet, Aplikasi Seleksi PASKIBRAKA, dan sistem manajemen desa DEPPUTI.</li>
          </ul>
        </div>
        {/* Mentor 2 */}
        <div className="bg-dark-bg-card p-6 rounded-lg shadow-lg border border-accent-teal flex flex-col items-center">
          <Image src="https://i.imgur.com/MqO8hS2.jpeg" alt="Muhammad Ubaidillah El Ghifari" width={150} height={150} className="rounded-full mb-4 border-2 border-accent-teal object-cover w-36 h-36" />
          <h3 className="text-2xl font-bold text-accent-teal">Muhammad Ubaidillah El Ghifari</h3>
          <p className="text-lg text-text-light mb-2">Software Engineer</p>
          <p className="text-sm text-text-medium text-center">
            Seorang Software Engineer dengan pengalaman memimpin tim teknis dan membangun berbagai solusi web, mulai dari profil perusahaan hingga sistem manajemen logistik dan LMS yang kompleks.
          </p>
          <ul className="text-sm text-text-dark mt-4 text-left w-full">
            <li><span className="font-semibold text-text-light">Keahlian:</span> Laravel, Web Development, Project Management, Database Management, Critical Thinking, Leadership.</li>
            <li><span className="font-semibold text-text-light">Pengalaman Kunci:</span> Technical Team Lead di ID Photo Book, mengembangkan sistem pelacakan logistik untuk PT. EXSEA SUKSES ABADI, membangun platform LMS untuk Rumah IT Hub 6, dan menjadi mentor di kelas pemrograman Pondok IT.</li>
            <li><span className="font-semibold text-text-light">Portofolio:</span> Terlibat dalam perancangan ulang web Pondok IT, membangun sistem pelacakan kontainer dengan notifikasi real-time dan dasbor yang dipersonalisasi, serta merancang arsitektur untuk platform e-learning (LMS).</li>
          </ul>
        </div>
        {/* Mentor 3 */}
        <div className="bg-dark-bg-card p-6 rounded-lg shadow-lg border border-accent-teal flex flex-col items-center">
          <Image src="https://i.imgur.com/p5boOSj.jpeg" alt="Jujun Setiawan" width={150} height={150} className="rounded-full mb-4 border-2 border-accent-teal object-cover w-36 h-36" />
          <h3 className="text-2xl font-bold text-accent-teal">Jujun Setiawan</h3>
          <p className="text-lg text-text-light mb-2">Software Engineer</p>
          <p className="text-sm text-text-medium text-center">
            Software Engineer dengan 4+ tahun pengalaman dalam menciptakan solusi perangkat lunak yang efektif dan skalabel, dengan kompetensi di backend, integrasi sistem, dan aplikasi mobile yang berfokus pada pengalaman pengguna.
          </p>
          <ul className="text-sm text-text-dark mt-4 text-left w-full">
            <li><span className="font-semibold text-text-light">Keahlian:</span> JavaScript, Next.js, Express.js, React Native, MERN Stack, MongoDB, MySql, Redis, AWS S3, Chakra UI, Tailwind CSS.</li>
            <li><span className="font-semibold text-text-light">Pengalaman Kunci:</span> Backend Developer di Lifepack.id & ID Photobook, Full-stack Developer di Pindah Digital, dan Software Programming Instructor di Remote Worker Indonesia.</li>
            <li><span className="font-semibold text-text-light">Portofolio:</span> Membangun sistem HRIS, Distance Learning System (DLS), dan Learning Management System (LMS) dengan peran sebagai Backend Architect hingga Full-stack Developer.</li>
          </ul>
        </div>
        {/* Mentor 4 */}
        <div className="bg-dark-bg-card p-6 rounded-lg shadow-lg border border-accent-teal flex flex-col items-center">
          <Image src="https://i.imgur.com/lFERaFL.jpeg" alt="Edward Supratman" width={150} height={150} className="rounded-full mb-4 border-2 border-accent-teal object-cover w-36 h-36" />
          <h3 className="text-2xl font-bold text-accent-teal">Edward Supratman</h3>
          <p className="text-lg text-text-light mb-2">Software Tester & Front-End Developer</p>
          <p className="text-sm text-text-medium text-center">
            Seorang Software Tester dan Front-End Developer dengan keahlian dalam mengembangkan serta menguji situs web untuk mengoptimalkan pengalaman pengguna.
          </p>
          <ul className="text-sm text-text-dark mt-4 text-left w-full">
            <li><span className="font-semibold text-text-light">Keahlian:</span> JavaScript, React JS, Tailwind CSS, Bootstrap, Figma, Postman, Git, Github, Trello, Swagger.</li>
            <li><span className="font-semibold text-text-light">Pengalaman Kunci:</span> Software Tester di PT. Sandbox Indonesia Juara, Front End Developer di Pondok IT, dan IT Support di SMK YPPT.</li>
            <li><span className="font-semibold text-text-light">Portofolio:</span> Berpengalaman merancang test plan, skema, dan skenario pengujian aplikasi, serta membangun berbagai situs web sesuai permintaan.</li>
          </ul>
        </div>
      </div>

      <h3 className="text-3xl font-semibold text-accent-purple mt-16 mb-8">Assistant Mentors</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Assistant Mentor 1 */}
        <div className="bg-dark-bg-card p-6 rounded-lg shadow-lg border border-accent-purple flex flex-col items-center">
          <Image src="https://i.imgur.com/pwnWWBs.jpeg" alt="M. Al Fatih Muzakki" width={150} height={150} className="rounded-full mb-4 border-2 border-accent-purple object-cover w-36 h-36" />
          <h3 className="text-2xl font-bold text-accent-purple">M. Al Fatih Muzakki</h3>
          <p className="text-lg text-text-light mb-2">Fullstack Developer</p>
          <p className="text-sm text-text-medium text-center">
            Fullstack Developer dengan keahlian frontend (Next.js, Tailwind CSS) dan backend (Express.js, Laravel, Golang). Berkomitmen pada kode yang bersih dan mudah dipelihara.
          </p>
          <ul className="text-sm text-text-dark mt-4 text-left w-full">
            <li><span className="font-semibold text-text-light">Keahlian:</span> React.js, Next.js, Tailwind CSS, JavaScript, TypeScript, Express.js, Laravel, Golang, MySQL, PostgreSQL, Git, Figma.</li>
            <li><span className="font-semibold text-text-light">Pengalaman Kunci:</span> Frontend Web Developer di PT Nizom Berkah Informasi, di mana ia mengembangkan antarmuka web, mengintegrasikan API, dan merefaktorisasi kode.</li>
            <li><span className="font-semibold text-text-light">Portofolio:</span> <a href="https://malfazakki.vercel.app" target="_blank" rel="noopener noreferrer" className="text-link-blue hover:underline">malfazakki.vercel.app</a></li>
          </ul>
        </div>
        {/* Assistant Mentor 2 */}
        <div className="bg-dark-bg-card p-6 rounded-lg shadow-lg border border-accent-purple flex flex-col items-center">
          <Image src="https://i.imgur.com/cfhw30U.jpeg" alt="Masura Dani Quthni" width={150} height={150} className="rounded-full mb-4 border-2 border-accent-purple object-cover w-36 h-36" />
          <h3 className="text-2xl font-bold text-accent-purple">Masura Dani Quthni</h3>
          <p className="text-lg text-text-light mb-2">Backend Developer</p>
          <p className="text-sm text-text-medium text-center">
            Seorang developer dari Klaten dengan fokus pada pengembangan backend menggunakan Laravel dan PHP, sambil terus mengeksplorasi JavaScript dan MERN Stack. Bersemangat untuk terus berkembang dan siap menghadapi tantangan baru.
          </p>
          <ul className="text-sm text-text-dark mt-4 text-left w-full">
            <li><span className="font-semibold text-text-light">Keahlian:</span> PHP (Laravel), JavaScript (MERN Stack), MySQL, MongoDB, Git, Postman, REST API, Role Management.</li>
            <li><span className="font-semibold text-text-light">Pengalaman Kunci:</span> Terlibat dalam pengembangan backend untuk proyek siSantri (role-based access) dan Web Pendataan Masjid. Memiliki pengalaman PKL di bidang jaringan (provider WiFi) dan hardware (perakitan komputer).</li>
            <li><span className="font-semibold text-text-light">Portofolio:</span> <a href="https://github.com/projectdanz" target="_blank" rel="noopener noreferrer" className="text-link-blue hover:underline">github.com/projectdanz</a></li>
          </ul>
        </div>
        {/* Assistant Mentor 3 */}
        <div className="bg-dark-bg-card p-6 rounded-lg shadow-lg border border-accent-purple flex flex-col items-center">
          <Image src="https://i.imgur.com/CNKn1g1.jpeg" alt="Iqbal Jalaluddin" width={150} height={150} className="rounded-full mb-4 border-2 border-accent-purple object-cover w-36 h-36" />
          <h3 className="text-2xl font-bold text-accent-purple">Iqbal Jalaluddin</h3>
          <p className="text-lg text-text-light mb-2">Backend Developer</p>
          <p className="text-sm text-text-medium text-center">
            Seorang pemuda kelahiran Bandung yang bercita-cita menjadi Problem Solver. Berfokus pada pengembangan backend dengan teknologi Laravel, Express.js, dan Go.
          </p>
          <ul className="text-sm text-text-dark mt-4 text-left w-full">
            <li><span className="font-semibold text-text-light">Keahlian:</span> PHP, Laravel, Go, VS Code, Git & Github, Linux Terminal.</li>
            <li><span className="font-semibold text-text-light">Pengalaman Kunci:</span> Backend Developer di Rumah IT HUB dan Lead & Backend Developer di CekTagihan.</li>
            <li><span className="font-semibold text-text-light">Portofolio:</span> Berpengalaman mengembangkan RESTful API, integrasi pembayaran dengan Xendit, serta merancang dan membangun sistem backend untuk aplikasi web CekTagihan.</li>
          </ul>
        </div>
      </div>
    </section>
  );
} 