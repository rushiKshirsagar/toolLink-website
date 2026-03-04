const PRODUCT_IMAGE = 'https://images.unsplash.com/photo-1565680018434-b513d5e261e9?w=720&h=400&fit=crop';
const PLATFORM_IMAGE = 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=720&h=400&fit=crop';
const SENSOR_IMAGE = 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=720&h=360&fit=crop';

const SENSORS = [
  { label: 'Temperature', text: 'Monitors machine and spindle temperature to catch overheating and thermal drift before they cause damage or poor parts.' },
  { label: 'Vibration & spindle RPM', text: 'Vibration for bearing and tooling health; RPM for run state and load. Together they support predictive maintenance and usage insights.' },
  { label: 'Wireless reject-bucket weight', text: 'Weight sensor on the reject bucket tracks scrap and cycle yield wirelessly, so you can tie quality and reject rates to machine and process conditions.' },
];

export function Features() {
  return (
    <section id="features" className="section section--features" data-section>
      <div className="section__inner">
        <h2 className="section__title">Features</h2>
        <p className="section__intro">
          Data connectivity, storage, analytics, and alerting in one system. Start monitoring
          equipment health in minutes through the web dashboard and mobile app.
        </p>

        <div className="feature-block">
          <h3 className="feature-block__title">Monitoring unit and sensors</h3>
          <p className="feature-block__lead">
            A single unit per machine collects temperature, vibration (and spindle RPM), and
            reject-bucket weight. Data is streamed to your dashboard for real-time visibility,
            historical trends, and configurable alerts.
          </p>
          <div className="product__layout">
            <div className="product__media">
              <img src={PRODUCT_IMAGE} alt="Monitoring unit" />
            </div>
            <div className="product__copy">
              <p>
                One device per machine — no per-sensor wiring — with wireless connectivity for the
                reject bucket. Designed for job shops and production floors. Deploy in hours: mount
                the unit, connect sensors, and start viewing data on the web dashboard or your phone.
              </p>
            </div>
          </div>
        </div>

        <div className="feature-block">
          <h3 className="feature-block__title">Dashboard and alerts</h3>
          <p className="feature-block__lead">
            All machine data flows into the web dashboard. View live readings, compare trends, and
            get notified on your phone or by email when something needs attention.
          </p>
          <div className="platform__layout">
            <div className="platform__media">
              <img src={PLATFORM_IMAGE} alt="Dashboard" />
            </div>
            <div className="platform__copy">
              <div className="platform__block">
                <h4 className="platform__heading">Web dashboard</h4>
                <p>See every machine at a glance; drill into time-series charts and historical trends. Works on desktop and tablet.</p>
              </div>
              <div className="platform__block">
                <h4 className="platform__heading">Mobile and email alerts</h4>
                <p>Push notifications and optional email or SMS when thresholds are breached or anomalies are detected. Configure which machines and who receives alerts.</p>
              </div>
              <div className="platform__block">
                <h4 className="platform__heading">Export and integration</h4>
                <p>Export data for reporting or analysis. Ask about API access for larger deployments.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="feature-block">
          <h3 className="feature-block__title">Sensors</h3>
          <p className="feature-block__lead">
            Each unit uses three sensing streams; all readings are on the dashboard and can drive alerts.
          </p>
          <div className="sensors__layout">
            <div className="sensors__media">
              <img src={SENSOR_IMAGE} alt="Sensors" />
            </div>
            <ul className="sensor-list">
              {SENSORS.map(({ label, text }) => (
                <li key={label} className="sensor-item">
                  <span className="sensor-item__label">{label}</span>
                  <p className="sensor-item__text">{text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
