export default function LearningCultureSection() {
  return (
    <section id="learning-culture" className="w-full text-center mb-24">
      <h2 className="text-4xl font-semibold text-accent-pink mb-6">Budaya Belajar: 10.000 Jam</h2>
      <div className="bg-dark-bg-card p-8 rounded-lg shadow-lg border border-accent-pink max-w-4xl mx-auto text-left">
        <p className="text-lg text-text-light mb-6">
          Konsep 10.000 jam, yang dipopulerkan oleh Malcolm Gladwell dalam bukunya &quot;Outliers&quot;, sebenarnya disederhanakan dari penelitian asli Dr. K. Anders Ericsson. Kunci bukan hanya pada kuantitas waktu, tetapi pada <span className="font-bold text-accent-pink">&quot;Deliberate Practice&quot; (Latihan Terarah)</span>.
        </p>
        
        <h3 className="text-2xl font-bold text-accent-pink mb-4">1. 10.000 Jam Repetitif (Latihan Otomatis & Pasif)</h3>
        <p className="text-text-light mb-4">
          Ini adalah pengulangan yang dilakukan tanpa kesadaran penuh atau tujuan untuk menjadi lebih baik. Setelah mencapai tingkat kompetensi tertentu, Anda berhenti berusaha untuk berkembang.
        </p>
        <ul className="text-text-medium list-disc list-inside ml-4 mb-6">
          <li><span className="font-semibold text-text-light">Ciri-ciri:</span> Aktivitas Otomatis, Fokus pada Kuantitas, Berada di Zona Nyaman, Tidak Ada Umpan Balik.</li>
          <li><span className="font-semibold text-text-light">Hasil:</span> Stagnasi, kemampuan mendatar (plateau).</li>
          <li><span className="font-semibold text-text-light">Contoh:</span> Mengemudi selama 20 tahun tanpa menjadi pembalap F1, pekerja pabrik, bermain 3 lagu yang sama di gitar setiap hari.</li>
        </ul>

        <h3 className="text-2xl font-bold text-accent-pink mb-4">2. 10.000 Jam Reiterasi / Latihan Terarah (Deliberate Practice)</h3>
        <p className="text-text-light mb-4">
          Jenis latihan ini adalah kunci sesungguhnya untuk menjadi seorang ahli. Ini adalah pengulangan yang cerdas, terstruktur, dan melelahkan secara mental.
        </p>
        <ul className="text-text-medium list-disc list-inside ml-4 mb-6">
          <li><span className="font-semibold text-text-light">Ciri-ciri:</span> Sangat Terstruktur & Bertujuan, Fokus Penuh & Konsentrasi Tinggi, Mendorong Keluar dari Zona Nyaman, Umpan Balik Konstan.</li>
          <li><span className="font-semibold text-text-light">Hasil:</span> Peningkatan berkelanjutan dan pencapaian tingkat pakar.</li>
          <li><span className="font-semibold text-text-light">Contoh:</span> Pemain catur yang menganalisis permainan grandmaster, mempelajari pembukaan spesifik, dan memecahkan teka-teki taktis.</li>
        </ul>
      </div>
    </section>
  );
} 