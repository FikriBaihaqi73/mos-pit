export default function SalaryComparisonSection() {
  return (
    <section id="salary-comparison" className="salary-comparison-section">
      <div className="flow-content-wrapper">
        <div className="section-header-center">
          <h2 className="section-title neon-text-green">
            Kompensasi Gaji Programmer di Indonesia
          </h2>
          <p className="section-description">
            Data gaji rata-rata berdasarkan tingkat pengalaman untuk peran Software Engineer di Indonesia.
          </p>
        </div>

        <div className="salary-data-container">
          {/* Junior Level */}
          <div className="salary-level-item">
            <h4 className="salary-level-title">Junior</h4>
            <div className="salary-bar-container">
              <div className="salary-range-bar junior-range"></div>
              <div className="salary-bar-value value-junior-start">4.75M</div>
              <div className="salary-bar-value value-junior-mid-1">6.00M</div>
              <div className="salary-bar-value value-junior-mid-2">7.50M</div>
              <div className="salary-bar-value value-junior-mid-3">10.00M</div>
              <div className="salary-bar-value value-junior-end">12.50M</div>
            </div>
          </div>

          {/* Mid Level */}
          <div className="salary-level-item">
            <h4 className="salary-level-title">Mid</h4>
            <div className="salary-bar-container">
              <div className="salary-range-bar mid-range"></div>
              <div className="salary-bar-value value-mid-start">6.50M</div>
              <div className="salary-bar-value value-mid-mid-1">9.50M</div>
              <div className="salary-bar-value value-mid-mid-2">11.50M</div>
              <div className="salary-bar-value value-mid-end">14.35M</div>
              <div className="salary-bar-value value-mid-end-extended">25.00M</div>
            </div>
          </div>

          {/* Senior Level */}
          <div className="salary-level-item">
            <h4 className="salary-level-title">Senior</h4>
            <div className="salary-bar-container">
              <div className="salary-range-bar senior-range"></div>
              <div className="salary-bar-value value-senior-start">8.00M</div>
              <div className="salary-bar-value value-senior-mid-1">11.50M</div>
              <div className="salary-bar-value value-senior-mid-2">15.00M</div>
              <div className="salary-bar-value value-senior-mid-3">17.50M</div>
              <div className="salary-bar-value value-senior-end">27.50M</div>
            </div>
          </div>

          {/* Lead Level */}
          <div className="salary-level-item">
            <h4 className="salary-level-title">Lead</h4>
            <div className="salary-bar-container">
              <div className="salary-range-bar lead-range"></div>
              <div className="salary-bar-value value-lead-start">12.50M</div>
              <div className="salary-bar-value value-lead-mid-1">20.00M</div>
              <div className="salary-bar-value value-lead-end">22.00M</div>
            </div>
          </div>

          <p className="salary-note">
            <span className="neon-text-orange">*</span> Catatan: Data untuk persentil ke-10 dan ke-90 tidak disertakan untuk peran Lead karena ukuran dataset yang terbatas, sehingga tidak memungkinkan untuk menampilkan statistik ini.
          </p>
        </div>
      </div>
    </section>
  );
} 