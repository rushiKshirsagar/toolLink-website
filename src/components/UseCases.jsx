const USE_CASES = [
  'CNC machines',
  'Motors',
  'Pumps',
  'Bearings',
  'Compressors',
  'Gearboxes',
  'Spindles',
  'Conveyors',
];

export function UseCases() {
  return (
    <section id="use-cases" className="section section--use-cases" data-section>
      <div className="section__inner">
        <div data-reveal-row>
          <h2 className="section__title">Use cases</h2>
          <p className="section__intro">
            Save on costly repairs and prevent factory equipment downtime with easy-to-install
            hardware and real-time monitoring across your fleet.
          </p>
        </div>
        <ul className="use-cases-grid">
          {USE_CASES.map((name) => (
            <li key={name} className="use-case-item" data-reveal-row>{name}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
