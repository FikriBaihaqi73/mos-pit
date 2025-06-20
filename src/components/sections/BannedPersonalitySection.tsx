export default function BannedPersonalitySection() {
  return (
    <section id="banned-personality" className="banned-personality-section">
      <div className="flow-content-wrapper">
        <div className="section-header-center">
          <h2 className="section-title neon-text-pink">
            Personalitas yang Dilarang Keras
          </h2>
          <p className="section-description">
            Berikut adalah sifat-sifat yang SANGAT TIDAK DIANJURKAN dan dapat menghambat kemajuan Anda dalam dunia pemrograman.
          </p>
        </div>

        <div className="banned-traits-container">
          <p className="banned-message">
            Jika Anda adalah seseorang yang:
          </p>
          <ul className="banned-traits-list">
            <li>Santai berlebihan</li>
            <li>Pemalas</li>
            <li>Penunda-nunda pekerjaan (prokrastinator)</li>
            <li>Kurang ambisi</li>
            <li>Tidak logis dalam berpikir</li>
            <li>Meremehkan hal kecil</li>
            <li>Tidak mandiri</li>
            <li>Tidak tahan tekanan</li>
          </ul>
          <p className="banned-consequence neon-text-pink">
            Maka Anda harus <s>DIKELUARKAN</s> - <s>DIBLACKLIST</s> - <s>D0</s> dari pembelajaran ini.
          </p>
        </div>
      </div>
    </section>
  );
} 