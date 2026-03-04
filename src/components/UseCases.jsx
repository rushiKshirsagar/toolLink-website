const USE_CASES = [
  'CNC spindles & bearings',
  'Tool wear & tool life',
  'Machining center drives',
  'Coolant & lubrication systems',
  'Chip conveyors & augers',
  'Fixture & clamping health',
  'Servo motors & ball screws',
  'Pallet changers & automation',
];

export function UseCases() {
  return (
    <section id="use-cases" className="section section--use-cases" data-section>
      <div className="section__inner">
        <div data-reveal-row>
          <h2 className="section__title">Use cases</h2>
          <p className="section__intro">
            From spindle health to tool life, monitor the critical points in your precision-machining workflow with easy-to-install hardware and real-time alerts.
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
