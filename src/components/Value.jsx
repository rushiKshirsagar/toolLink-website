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
        <h2 className="section__title">Why it matters</h2>
        <p className="section__intro">
        Traditional manufacturing often relies on retrospective data—logs written after the shift, and repairs made after the failure. This creates an inherent "data lag" that costs time and precision. We eliminate this friction by creating a real-time digital twin of your production environment.
        <br /><br />By capturing the raw mechanical pulse of your hardware and automating the flow of operational metrics, we provide a unified source of truth. This allows your team to move from reactive troubleshooting to strategic optimization, ensuring that every machine cycle is accounted for and every mechanical irregularity is addressed before it impacts your bottom line.
        </p>
        <div className="value-stats">
          <h3 className="value-stats__title">The cost of unmonitored equipment</h3>
          <p className="value-stats__intro">
            Unplanned downtime costs around <strong>₹70 lakh per hour</strong> (ABB, 2023).
            Large manufacturers globally lose <strong>11% of revenue</strong> to downtime (Siemens). Most plants
            face outages at least once a month, and reactive repairs can cost <strong>up to 10×</strong> more than
            planned maintenance. Monitoring and predictive alerts turn that around.
          </p>
          <div className="stats-cards">
            <div className="stats-card">
              <span className="stats-card__value">₹70L+</span>
              <span className="stats-card__label">Cost per hour of unplanned downtime (India, ABB)</span>
            </div>
            <div className="stats-card">
              <span className="stats-card__value">88%</span>
              <span className="stats-card__label">Of plants have unplanned outages at least monthly</span>
            </div>
            <div className="stats-card">
              <span className="stats-card__value">10×</span>
              <span className="stats-card__label">Reactive repairs can cost vs planned maintenance</span>
            </div>
            <div className="stats-card">
              <span className="stats-card__value">11%</span>
              <span className="stats-card__label">Of revenue lost to downtime (large manufacturers, Siemens)</span>
            </div>
            <div className="stats-card">
              <span className="stats-card__value">~20</span>
              <span className="stats-card__label">Unplanned downtime incidents per month per facility</span>
            </div>
            <div className="stats-card">
              <span className="stats-card__value">52.7%</span>
              <span className="stats-card__label">Less unplanned downtime with predictive vs reactive (NIST)</span>
            </div>
          </div>
          <div className="stats-charts">
            <div className="stat-chart">
              <h4 className="stat-chart__title">Unplanned downtime cost per hour</h4>
              <div className="stat-chart__bar-wrap">
                <span className="stat-chart__label">India (ABB)</span>
                <div className="stat-chart__track">
                  <div className="stat-chart__bar stat-chart__bar--india" style={{ width: '68%' }} />
                </div>
                <span className="stat-chart__value">₹70L</span>
              </div>
              <div className="stat-chart__bar-wrap">
                <span className="stat-chart__label">Global ref.</span>
                <div className="stat-chart__track">
                  <div className="stat-chart__bar stat-chart__bar--global" style={{ width: '100%' }} />
                </div>
                <span className="stat-chart__value">~₹1 cr</span>
              </div>
            </div>
            <div className="stat-chart">
              <h4 className="stat-chart__title">How often do outages happen? (manufacturers)</h4>
              <div className="stat-chart__bar-wrap">
                <span className="stat-chart__label">6–10 per week</span>
                <div className="stat-chart__track">
                  <div className="stat-chart__bar stat-chart__bar--india" style={{ width: '48%' }} />
                </div>
                <span className="stat-chart__value">48%</span>
              </div>
              <div className="stat-chart__bar-wrap">
                <span className="stat-chart__label">11–20 per week</span>
                <div className="stat-chart__track">
                  <div className="stat-chart__bar stat-chart__bar--global" style={{ width: '19%' }} />
                </div>
                <span className="stat-chart__value">19%</span>
              </div>
              <p className="stat-chart__note">Fluke survey (US, UK, Germany).</p>
            </div>
            <div className="stat-chart">
              <h4 className="stat-chart__title">How long do outages last?</h4>
              <div className="stat-chart__bar-wrap">
                <span className="stat-chart__label">Up to 12 hours</span>
                <div className="stat-chart__track">
                  <div className="stat-chart__bar stat-chart__bar--india" style={{ width: '45%' }} />
                </div>
                <span className="stat-chart__value">45%</span>
              </div>
              <div className="stat-chart__bar-wrap">
                <span className="stat-chart__label">Up to 72 hours</span>
                <div className="stat-chart__track">
                  <div className="stat-chart__bar stat-chart__bar--global" style={{ width: '15%' }} />
                </div>
                <span className="stat-chart__value">15%</span>
              </div>
              <p className="stat-chart__note">Fluke survey.</p>
            </div>
            <div className="stat-chart">
              <h4 className="stat-chart__title">Predictive vs reactive (NIST)</h4>
              <div className="stat-chart__bar-wrap stat-chart__bar-wrap--single">
                <span className="stat-chart__label">Less unplanned downtime</span>
                <div className="stat-chart__track">
                  <div className="stat-chart__bar stat-chart__bar--positive" style={{ width: '52.7%' }} />
                </div>
                <span className="stat-chart__value">52.7%</span>
              </div>
              <div className="stat-chart__bar-wrap stat-chart__bar-wrap--single">
                <span className="stat-chart__label">Fewer defects</span>
                <div className="stat-chart__track">
                  <div className="stat-chart__bar stat-chart__bar--positive" style={{ width: '78.5%' }} />
                </div>
                <span className="stat-chart__value">78.5%</span>
              </div>
              <p className="stat-chart__note">NIST manufacturing survey.</p>
            </div>
            <div className="stat-chart">
              <h4 className="stat-chart__title">Industry range: downtime reduction with predictive</h4>
              <div className="stat-chart__bar-wrap stat-chart__bar-wrap--single">
                <span className="stat-chart__label">Unplanned downtime reduction</span>
                <div className="stat-chart__track">
                  <div className="stat-chart__bar stat-chart__bar--positive" style={{ width: '45%' }} />
                </div>
                <span className="stat-chart__value">35–50%</span>
              </div>
              <p className="stat-chart__note">Various industry studies.</p>
            </div>
          </div>
          <p className="value-stats__sources">
            Sources: ABB India “Value of Reliability” 2023; Siemens “True Cost of Downtime”; Fluke Corporation survey; NIST manufacturing maintenance survey.
          </p>
        </div>

        <div className="value-stats value-stats--tracking">
          <h3 className="value-stats__title">From paper to automated tracking</h3>
          <p className="value-stats__intro">
          Many small and mid-sized machine shops still rely on manual registers to track production, rejects, and downtime. This creates a "data lag" that hides the true cost of inefficiency. Industry reports show that over 80% of Indian MSMEs still use paper-based or manual keyboard entry for shop-floor reporting.
          <br /><br />
          In a typical manufacturing environment, human error and manual data gaps can cost between ₹25 Lakh to ₹40 Lakh per year in lost productivity, unoptimized machine time, and rework. Conversely, shifting to automated data capture can unlock savings of ₹40 Lakh to ₹1.2 Crore per year by increasing machine availability and reducing scrap. Moving to a single monitoring unit provides total visibility, freeing your floor supervisors from paperwork and allowing them to focus on high-value production.          </p>
          <div className="stats-cards">
            <div className="stats-card">
              <span className="stats-card__value">80%</span>
              <span className="stats-card__label">Of SMB manufacturers still use paper or manual data entry</span>
            </div>
            <div className="stats-card">
              <span className="stats-card__value">70%</span>
              <span className="stats-card__label">Of manufacturers rely on manual shop-floor data entry</span>
            </div>
            <div className="stats-card">
              <span className="stats-card__value">₹25–40L</span>
              <span className="stats-card__label">Annual cost of manual data entry (productivity + errors)</span>
            </div>
            <div className="stats-card">
              <span className="stats-card__value">₹40L–1.2Cr</span>
              <span className="stats-card__label">Typical annual savings with automated data capture</span>
            </div>
            <div className="stats-card">
              <span className="stats-card__value">5–10%</span>
              <span className="stats-card__label">Of labor time spent on manual data entry in manufacturing</span>
            </div>
            <div className="stats-card">
              <span className="stats-card__value">15%</span>
              <span className="stats-card__label">Production slowdowns / missed deadlines linked to manual processes</span>
            </div>
          </div>
          <div className="stats-charts">
            <div className="stat-chart">
              <h4 className="stat-chart__title">Manual vs automated: error rates</h4>
              <div className="stat-chart__bar-wrap">
                <span className="stat-chart__label">Manual (no verification)</span>
                <div className="stat-chart__track">
                  <div className="stat-chart__bar stat-chart__bar--global" style={{ width: '4%' }} />
                </div>
                <span className="stat-chart__value">~4%</span>
              </div>
              <div className="stat-chart__bar-wrap">
                <span className="stat-chart__label">Automated</span>
                <div className="stat-chart__track">
                  <div className="stat-chart__bar stat-chart__bar--positive" style={{ width: '1%' }} title="~0.04% error rate" />
                </div>
                <span className="stat-chart__value">~0.04%</span>
              </div>
              <p className="stat-chart__note">Humans ~100× more error-prone than automated systems on same tasks.</p>
            </div>
            <div className="stat-chart">
              <h4 className="stat-chart__title">Still using paper or manual entry (SMB mfg)</h4>
              <div className="stat-chart__bar-wrap stat-chart__bar-wrap--single">
                <span className="stat-chart__label">Paper / manual keyboard entry</span>
                <div className="stat-chart__track">
                  <div className="stat-chart__bar stat-chart__bar--india" style={{ width: '80%' }} />
                </div>
                <span className="stat-chart__value">80%</span>
              </div>
              <p className="stat-chart__note">Small to mid-sized US manufacturers.</p>
            </div>
            <div className="stat-chart">
              <h4 className="stat-chart__title">Cost of manual vs savings with automation (annual, ₹)</h4>
              <div className="stat-chart__bar-wrap">
                <span className="stat-chart__label">Manual entry cost</span>
                <div className="stat-chart__track">
                  <div className="stat-chart__bar stat-chart__bar--global" style={{ width: '33%' }} />
                </div>
                <span className="stat-chart__value">₹25–40L</span>
              </div>
              <div className="stat-chart__bar-wrap">
                <span className="stat-chart__label">Automation savings</span>
                <div className="stat-chart__track">
                  <div className="stat-chart__bar stat-chart__bar--positive" style={{ width: '100%' }} />
                </div>
                <span className="stat-chart__value">₹40L–1.2Cr</span>
              </div>
              <p className="stat-chart__note">Labor, error correction, rework; automated capture. INR approx. equivalent of US industry estimates.</p>
            </div>
            <div className="stat-chart">
              <h4 className="stat-chart__title">Labor time and impact of manual entry</h4>
              <div className="stat-chart__bar-wrap stat-chart__bar-wrap--single">
                <span className="stat-chart__label">Labor time on manual data entry</span>
                <div className="stat-chart__track">
                  <div className="stat-chart__bar stat-chart__bar--india" style={{ width: '7.5%' }} />
                </div>
                <span className="stat-chart__value">5–10%</span>
              </div>
              <div className="stat-chart__bar-wrap stat-chart__bar-wrap--single">
                <span className="stat-chart__label">Slowdowns / missed deadlines</span>
                <div className="stat-chart__track">
                  <div className="stat-chart__bar stat-chart__bar--global" style={{ width: '15%' }} />
                </div>
                <span className="stat-chart__value">15%</span>
              </div>
              <p className="stat-chart__note">Manufacturing facilities (survey data).</p>
            </div>
          </div>
          <p className="value-stats__sources">
            Sources: PR Newswire / LNS Research (80% paper/manual); ShopLogix (70% manual shop floor, 5–10% labor time, 15% slowdowns); Machinemetrics (paperless manufacturing). Rupee figures (₹25–40L cost, ₹40L–1.2Cr savings) are approximate INR equivalents of US industry estimates (e.g. $30–50K, $50–150K annual).
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
