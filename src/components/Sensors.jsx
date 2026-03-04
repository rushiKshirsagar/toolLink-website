import { useState } from 'react';

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
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex((current) => (current === index ? -1 : index));
  };

  return (
    <section id="sensors" className="section" data-section>
      <div className="section__inner">
        <h2 className="section__title">Sensors</h2>
        <p className="section__intro">
          Each unit uses three sensing streams and built-in production tracking so you can correlate thermal, mechanical, and quality data with production count, reject count, and downtime in one place. These feeds power the dashboard, configurable alerts, and AI-based predictive maintenance models that learn from your machines over time.
        </p>
        <ul className="sensor-list accordion">
          {SENSORS.map(({ label, text }, index) => {
            const isOpen = index === openIndex;
            return (
              <li key={label} className="sensor-item accordion-item">
                <button
                  type="button"
                  className="accordion-header"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                >
                  <span className="sensor-item__label accordion-title">{label}</span>
                  <span className={`accordion-icon ${isOpen ? 'accordion-icon--open' : ''}`} />
                </button>
                <div className={`accordion-body ${isOpen ? 'accordion-body--open' : ''}`}>
                  <p className="sensor-item__text">{text}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
