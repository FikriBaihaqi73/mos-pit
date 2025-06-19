export default function ConceptSection() {
  return (
    <section id="concept" className="w-full text-center mb-24">
      <h2 className="text-4xl font-semibold text-accent-purple mb-6">Concept</h2>
      <p className="text-lg text-text-light max-w-3xl mx-auto">
        Di Pondok IT, setiap santri memiliki potensi tak terbatas. Namun, tanpa wadah dan pembimbing yang tepat, potensi tersebut bisa terkubur. Kami hadir untuk menyediakan lingkungan yang mendukung pertumbuhan Anda.
      </p>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-8 text-center max-w-4xl mx-auto">
        <div className="bg-dark-bg-card p-6 rounded-lg shadow-lg border border-accent-purple">
          <h3 className="text-2xl font-bold text-accent-orange">Alquran</h3>
          <p className="text-text-medium mt-2">Membangun dasar spiritual dan akhlak mulia.</p>
        </div>
        <div className="bg-dark-bg-card p-6 rounded-lg shadow-lg border border-accent-purple">
          <h3 className="text-2xl font-bold text-accent-orange">Komunikasi</h3>
          <p className="text-text-medium mt-2">Mengembangkan kemampuan berbicara dan berinteraksi efektif.</p>
        </div>
        <div className="bg-dark-bg-card p-6 rounded-lg shadow-lg border border-accent-purple">
          <h3 className="text-2xl font-bold text-accent-orange">Leadership</h3>
          <p className="text-text-medium mt-2">Membentuk jiwa kepemimpinan dan inisiatif.</p>
        </div>
        <div className="bg-dark-bg-card p-6 rounded-lg shadow-lg border border-accent-purple">
          <h3 className="text-2xl font-bold text-accent-orange">Skill</h3>
          <p className="text-text-medium mt-2">Mengasah keahlian teknis di bidang teknologi informasi.</p>
        </div>
      </div>
    </section>
  );
} 