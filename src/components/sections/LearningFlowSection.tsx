export default function LearningFlowSection() {
  return (
    <section id="learning-flow" className="w-full text-center mb-24">
      <h2 className="text-4xl font-semibold text-accent-orange mb-6">Alur Belajar</h2>
      <div className="bg-dark-bg-card p-8 rounded-lg shadow-lg border border-accent-orange max-w-4xl mx-auto">
        <p className="text-lg text-text-light mb-6">
          Program pembelajaran kami dirancang untuk membentuk programmer yang handal dan berkarakter. Setiap tahapan memiliki fokus yang jelas untuk memaksimalkan potensi Anda.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-accent-orange mb-4">Aktivitas Produktif</h3>
            <ul className="text-left text-text-light list-disc list-inside">
              <li>Produktif ke-1: Mentoring</li>
              <li>Produktif ke-2 & 3: Pengerjaan Tugas Harian</li>
              <li>Produktif ke-4: Pengumpulan Tugas Harian</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-accent-orange mb-4">Budaya Divisi</h3>
            <ul className="text-left text-text-light list-disc list-inside">
              <li>Disiplin</li>
              <li>Pembelajar</li>
              <li>Adaptif</li>
              <li>Pantang Menyerah</li>
              <li>Pantang Mengeluh</li>
              <li>Mandiri</li>
              <li>Kolaborasi</li>
              <li>Komunikasi</li>
            </ul>
          </div>
        </div>
        <p className="text-2xl font-bold text-accent-teal mt-8 mb-4">Afirmasi Setiap Pagi:</p>
        <p className="text-3xl font-extrabold text-accent-pink">“Programmer: Paksa - Bisa - Terbiasa - Luarbiasa”</p>
        
        <h3 className="text-2xl font-bold text-accent-orange mt-12 mb-4">Kurikulum Pembelajaran (1-6 Bulan)</h3>
        <ol className="text-left text-text-light list-decimal list-inside max-w-2xl mx-auto">
          <li>Fundamental Programmer</li>
          <li>React JS</li>
          <li>React Native</li>
          <li>Express JS</li>
          <li>Project Akhir (Build Startup Team with Role As A Hacker with other Hipster and Hustler)</li>
        </ol>
        <p className="text-text-medium text-sm mt-4">
          <span className="font-semibold text-text-light">Explanation:</span> Triangle team in Startup: Hipster (desainer), Hustler (bisnis), Hacker (programmer).
        </p>
      </div>
    </section>
  );
} 