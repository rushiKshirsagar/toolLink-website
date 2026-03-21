import { useState } from 'react';

const SENSORS = [
  {
    label: 'Temperature',
    text: 'Monitors machine and spindle temperature to catch overheating and thermal drift before they cause damage or poor parts.',
  },
  {
    label: 'Vibration & spindle RPM',
    text: 'Instantly detect when your machine goes down, a motor strains under load, or the cabin shakes excessively. These combined sensors automatically track exact run states and predict tooling failures before they impact your production.',
  },
  {
    label: 'Wireless reject-bucket weight',
    text: 'Simply drop a rejected part into the bucket to instantly auto-increment your reject count. Eliminate manual logging entirely while automatically calculating the exact total scrap produced by every machine.',
  },
  {
    label: 'CT clamp (electrical)',
    text: 'A current-transformer clamp measures motor current to detect run state, load, and electrical anomalies. This helps correlate power draw with production and identify issues like phase imbalance or overload before they cause downtime.',
  },
];

export function Sensors() {
  const [openIndex, setOpenIndex] = useState(-1);

  const toggle = (index) => {
    setOpenIndex((current) => (current === index ? -1 : index));
  };

  return (
    <section id="sensors" className="section" data-section>
      <div className="section__inner">
        <div data-reveal-row>
          <h2 className="section__title">Sensors</h2>
          <p className="section__intro">
          While the image below shows the wired prototype, your final hardware is a single, industrial-grade "black box" built for the shop floor. Zero exposed wiring, zero complicated setup. Each plug and play unit captures four continuous sensing streams, automatically correlating thermal, mechanical, and quality data with your production and downtime metrics. These real-time feeds power your dashboard and train our predictive AI, giving you total visibility with minimal human intervention.          </p>
        </div>
        <div className="sensors__layout" data-reveal-row>
          <div className="sensors__media">
            <img src={`${import.meta.env.BASE_URL}images/sensors.jpeg`} alt="Sensors including temperature, vibration, reject-bucket weight, and CT clamp for motor current" />
          </div>
          <ul className="sensor-list accordion">
          {SENSORS.map(({ label, text }, index) => {
            const isOpen = index === openIndex;
            return (
              <li key={label} className="sensor-item accordion-item" data-reveal-row>
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
      </div>
    </section>
  );
}
