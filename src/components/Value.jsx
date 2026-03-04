const CARDS = [
  {
    title: 'Operational Continuity',
    text: 'Shift from reactive repairs to a proactive maintenance model. AI-based analytics identify subtle shifts in machine behavior before they escalate. Schedule service during planned windows and keep your production line running instead of waiting for the next breakdown.',
    image: './images/continuous.jpg',
  },
  {
    title: 'Systemic Data Integrity',
    text: 'Decisions are only as good as the data behind them. Our architecture prioritizes high-fidelity signal processing and edge computing so every metric is accurate and time-stamped. That foundation makes your data ready for AI-driven analysis and turns raw sensor streams into actionable maintenance insights.',
    image: './images/data.jpg',
  },
  {
    title: 'Performance Optimization',
    text: 'Maximize the efficiency of your existing assets. Real-time feedback loops support precise adjustment of operating parameters so your equipment runs within its ideal mechanical envelope. The result is improved throughput and more consistent finish quality.',
    image: './images/analytics.jpg',
  },
  {
    title: 'Strategic Risk Mitigation',
    text: 'Protect your high-value hardware from catastrophic failure. Continuous oversight of internal variables creates a safety net for your equipment and reduces the likelihood of expensive damage. It also supports a safer environment for your operators.',
    image: './images/repair.jpg',
  },
];

export function Value() {
  return (
    <section id="value" className="section" data-section>
      <div className="section__inner">
        <div data-reveal-row>
          <h2 className="section__title">Why it matters</h2>
          <p className="section__intro">
            The cost of unmonitored equipment is measurable—and avoidable. Here's what the data shows.
          </p>
        </div>
        <div className="value-stats" data-reveal-row>
          <div className="stats-cards">
            <div className="stats-card" data-reveal-row>
              <span className="stats-card__value">₹70L+</span>
              <span className="stats-card__label">Cost per hour of unplanned downtime (India, ABB)</span>
            </div>
            <div className="stats-card" data-reveal-row>
              <span className="stats-card__value">10×</span>
              <span className="stats-card__label">Reactive repairs can cost vs planned maintenance</span>
            </div>
            <div className="stats-card" data-reveal-row>
              <span className="stats-card__value">11%</span>
              <span className="stats-card__label">Of revenue lost to downtime (large manufacturers, Siemens)</span>
            </div>
            <div className="stats-card" data-reveal-row>
              <span className="stats-card__value">52.7%</span>
              <span className="stats-card__label">Less unplanned downtime with predictive vs reactive (NIST)</span>
            </div>
          </div>
          <p className="value-stats__sources">
            Sources: ABB India “Value of Reliability” 2023; Siemens “True Cost of Downtime”; NIST manufacturing maintenance survey.
          </p>
        </div>

        <div className="value-stats value-stats--tracking" data-reveal-row>
          <p className="section__intro">
            The cost of paper and manual entry—and the upside of automation—is clear in the numbers.
          </p>
          <div className="stats-cards">
            <div className="stats-card" data-reveal-row>
              <span className="stats-card__value">80%</span>
              <span className="stats-card__label">Of SMB manufacturers still use paper or manual data entry</span>
            </div>
            <div className="stats-card" data-reveal-row>
              <span className="stats-card__value">70%</span>
              <span className="stats-card__label">Of manufacturers rely on manual shop-floor data entry</span>
            </div>
            <div className="stats-card" data-reveal-row>
              <span className="stats-card__value">₹25–40L</span>
              <span className="stats-card__label">Annual cost of manual data entry (productivity + errors)</span>
            </div>
            <div className="stats-card" data-reveal-row>
              <span className="stats-card__value">₹40L–1.2Cr</span>
              <span className="stats-card__label">Typical annual savings with automated data capture</span>
            </div>
            <div className="stats-card" data-reveal-row>
              <span className="stats-card__value">5–10%</span>
              <span className="stats-card__label">Of labor time spent on manual data entry in manufacturing</span>
            </div>
            <div className="stats-card" data-reveal-row>
              <span className="stats-card__value">15%</span>
              <span className="stats-card__label">Production slowdowns / missed deadlines linked to manual processes</span>
            </div>
          </div>
          <p className="value-stats__sources">
            Sources: PR Newswire / LNS Research; ShopLogix; Machinemetrics. Rupee figures are approximate INR equivalents of US industry estimates.
          </p>
        </div>

        <ul className="value-grid">
          {CARDS.map(({ title, text, image }, index) => (
            <li
              key={title}
              className={`value-card ${index % 2 === 1 ? 'value-card--image-right' : ''}`}
              data-reveal-row
            >
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
              <div className="value-card__body">
                <div className="value-card__eyebrow">
                  <span className="value-card__index">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="value-card__tag">Outcome</span>
                </div>
                <h3 className="value-card__title">{title}</h3>
                <p className="value-card__text">{text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
