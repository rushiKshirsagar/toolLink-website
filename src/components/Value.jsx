const CARDS = [
  {
    title: 'Operational Continuity',
    text: 'Shift from reactive repairs to a proactive maintenance model. AI-based analytics identify subtle shifts in machine behavior before they escalate, so you can schedule service during planned windows and keep your production line running instead of waiting for the next breakdown.',
    image: './images/continuous.jpg',
  },
  {
    title: 'Systemic Data Integrity',
    text: 'Decisions are only as good as the data behind them. Our architecture prioritizes high-fidelity signal processing and edge computing so every metric is accurate, time-stamped, and ready for AI-driven predictive analysis — turning raw sensor data into actionable maintenance insights.',
    image: './images/data.jpg',
  },
  {
    title: 'Performance Optimization',
    text: 'Maximize the efficiency of your existing assets. Real-time feedback loops allow for the precise adjustment of operational parameters, ensuring that your equipment runs within its ideal mechanical envelope for improved throughput and finish quality.',
    image: './images/analytics.jpg',
  },
  {
    title: 'Strategic Risk Mitigation',
    text: 'Protect your high-value hardware from catastrophic failure. Continuous oversight of internal variables provides a safety net for your equipment, reducing the likelihood of expensive damage and ensuring a safer environment for your operators.',
    image: './images/repair.jpg',
  },
];

export function Value() {
  return (
    <section id="value" className="section" data-section>
      <div className="section__inner">
        <h2 className="section__title">Why it matters</h2>
        <p className="section__intro">
          Unplanned downtime and reactive repairs are expensive. We give you continuous visibility
          and early warnings — on a dashboard and via mobile alerts — so you can plan maintenance,
          protect throughput, and keep machines running instead of fighting fires.
        </p>
        <ul className="value-grid">
          <li className="value-grid__row" data-reveal-row>
            <div className="value-grid__row-inner">
              {CARDS.slice(0, 2).map(({ title, text, image }) => (
                <div key={title} className="value-card">
                  <div className="value-card__media">
                    <img
                      src={image}
                      alt=""
                      width={800}
                      height={500}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <h3 className="value-card__title">{title}</h3>
                  <p className="value-card__text">{text}</p>
                </div>
              ))}
            </div>
          </li>
          <li className="value-grid__row" data-reveal-row>
            <div className="value-grid__row-inner">
              {CARDS.slice(2, 4).map(({ title, text, image }) => (
                <div key={title} className="value-card">
                  <div className="value-card__media">
                    <img
                      src={image}
                      alt=""
                      width={800}
                      height={500}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <h3 className="value-card__title">{title}</h3>
                  <p className="value-card__text">{text}</p>
                </div>
              ))}
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
