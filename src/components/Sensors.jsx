const SENSORS = [
  {
    label: 'Temperature',
    text: 'Monitors machine and spindle temperature to catch overheating and thermal drift before they cause damage or poor parts.',
  },
  {
    label: 'Vibration & spindle RPM',
    text: 'Vibration for bearing and tooling health; RPM for run state and load. Together they support predictive maintenance and usage insights.',
  },
  {
    label: 'Wireless reject-bucket weight',
    text: 'Weight sensor on the reject bucket tracks scrap and cycle yield wirelessly, so you can tie quality and reject rates to machine and process conditions.',
  },
];

export function Sensors() {
  return (
    <section id="sensors" className="section" data-section>
      <div className="section__inner">
        <h2 className="section__title">Sensors</h2>
        <p className="section__intro">
          Each unit uses three sensing streams so you can correlate thermal, mechanical, and quality
          data in one place. These feeds power the dashboard, configurable alerts, and
          AI-based predictive maintenance models that learn from your machines over time.
        </p>
        <ul className="sensor-list">
          {SENSORS.map(({ label, text }) => (
            <li key={label} className="sensor-item">
              <span className="sensor-item__label">{label}</span>
              <p className="sensor-item__text">{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
