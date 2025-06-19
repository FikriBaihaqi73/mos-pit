import Image from "next/image";

export default function ActiveSantriSection() {
  return (
    <section id="active-santri" className="w-full text-center mb-24">
      <h2 className="text-4xl font-semibold text-accent-yellow mb-6">Santri Aktif: Kisah Inspiratif</h2>
      <p className="text-lg text-text-light max-w-3xl mx-auto mb-12">
        Dengarkan cerita dari santri-santri kami yang telah berkembang pesat. Mereka akan berbagi tantangan, pembelajaran, dan manfaat yang mereka rasakan selama aktif di Pondok IT.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Santri 1 */}
        <div className="bg-dark-bg-card p-6 rounded-lg shadow-lg border border-accent-yellow flex flex-col items-center">
          <Image src="https://i.imgur.com/NErlEl8.jpeg" alt="Muhammad Fikri Baihaqi" width={150} height={150} className="rounded-full mb-4 border-2 border-accent-yellow object-cover w-36 h-36" />
          <h3 className="text-2xl font-bold text-accent-yellow">Muhammad Fikri Baihaqi</h3>
          <p className="text-lg text-text-light mb-2">Fullstack Software Engineer</p>
          <p className="text-sm text-text-medium text-center">
            &quot;Aku dulu join karena ingin mendalami dunia programming dan menemukan komunitas yang suportif.&quot;
          </p>
          <ul className="text-sm text-text-dark mt-4 text-left w-full">
            <li><span className="font-semibold text-text-light">Keahlian:</span> Laravel, Express.js, React.js, React Native, Vue.js, Tailwindcss, MySQL, PostgreSQL, Git, Figma.</li>
            <li><span className="font-semibold text-text-light">Pengalaman Kunci:</span> Siswa programmer di Pondok IT dan PKL di Astra Daihatsu Sunter.</li>
            <li><span className="font-semibold text-text-light">Portofolio:</span> <a href="https://portofolio-mfikribaihaqixela.vercel.app" target="_blank" rel="noopener noreferrer" className="text-link-blue hover:underline">portofolio-mfikribaihaqixela.vercel.app</a></li>
          </ul>
        </div>
        {/* Santri 2 */}
        <div className="bg-dark-bg-card p-6 rounded-lg shadow-lg border border-accent-yellow flex flex-col items-center">
          <Image src="https://i.imgur.com/Wze2F9J.jpeg" alt="Muhammad Hubaib" width={150} height={150} className="rounded-full mb-4 border-2 border-accent-yellow object-cover w-36 h-36" />
          <h3 className="text-2xl font-bold text-accent-yellow">Muhammad Hubaib</h3>
          <p className="text-lg text-text-light mb-2">Web Developer (Backend Focus)</p>
          <p className="text-sm text-text-medium text-center">
            &quot;Tantangan terbesar adalah konsistensi, tapi manfaatnya sangat besar, tidak hanya skill teknis tapi juga problem-solving dan kolaborasi.&quot;
          </p>
          <ul className="text-sm text-text-dark mt-4 text-left w-full">
            <li><span className="font-semibold text-text-light">Keahlian:</span> Laravel, PHP, PostgreSQL, MySQL, Vue JS, TailwindCSS, JavaScript, HTML, CSS, Git, GitHub, Vercel.</li>
            <li><span className="font-semibold text-text-light">Pengalaman Kunci:</span> Siswa programmer di Pondok IT Indonesia.</li>
            <li><span className="font-semibold text-text-light">Portofolio:</span> <a href="https://portofolio-hubaib.vercel.app" target="_blank" rel="noopener noreferrer" className="text-link-blue hover:underline">portofolio-hubaib.vercel.app</a> | Proyek Unggulan: Sistem Koperasi Digital</li>
          </ul>
        </div>
      </div>
    </section>
  );
} 