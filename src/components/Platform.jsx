import { useState } from 'react';

const PLATFORM_ITEMS = [
  {
    title: 'AI-powered predictive analytics',
    body: `Raw sensor streams are analyzed by machine-learning models trained on equipment
behavior and failure patterns. The system flags anomalies in temperature or vibration
that human eyes might miss, suggests likely causes, and estimates when maintenance
should be scheduled. Over time, as more data is collected from your machines, the
models refine their predictions so alerts stay relevant and false alarms stay low.`,
  },
  {
    title: 'Web dashboard',
    body: `See every machine at a glance: temperature, vibration, spindle RPM, reject-bucket weight, production count, rejection count, reject reasons, and downtime status and reasons in one view. No more paper logs or spreadsheets — all captured automatically. Drill into any machine for detailed time-series charts and historical trends. Compare multiple machines or time ranges to spot patterns and plan maintenance. The dashboard works on desktop and tablet so you can check status from the office or the floor.`,
  },
  {
    title: 'Mobile and email alerts',
    body: `When a threshold is breached or an anomaly is detected, you don’t have to be at your desk.
Get push notifications on your phone and optional email or SMS alerts so you can react immediately —
whether it’s rising temperature, unusual vibration, or a sudden spike in rejects. Configure which
machines and which conditions trigger alerts, and who receives them, so the right person is always informed.`,
  },
  {
    title: 'Export and integration',
    body: `Export time-series data for reporting, audits, or analysis in your own tools. We support
common formats so you can feed dashboards, ERP, or maintenance systems. For larger deployments, ask about
API access and integration options to keep your workflows in sync.`,
  },
];

export function Platform() {
  const [openIndex, setOpenIndex] = useState(-1);

  const toggle = (index) => {
    setOpenIndex((current) => (current === index ? -1 : index));
  };

  return (
    <section id="platform" className="section" data-section>
      <div className="section__inner">
        <div data-reveal-row>
          <h2 className="section__title">Dashboard &amp; alerts</h2>
          <p className="section__intro">
            All machine data and production tracking flow into one place: the web dashboard. See live sensor readings, production count, rejection count, reject reasons, and downtime status and reasons. Compare trends over time and get notified the moment something needs attention, on your phone or in your inbox.
          </p>
        </div>
        <div className="platform__grafana" data-reveal-row>
          <div className="platform__grafana-frame">
            <iframe
              title="CNC Fleet Overview Grafana Dashboard"
              src="https://telemetry.rushikshirsagar.com/d/ad2gr2k/fleet-overview?orgId=1&from=now-3h&to=now&timezone=browser&var-machine=CNC-01&refresh=5s&kiosk=true"
              loading="lazy"
              sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
            />
          </div>
        </div>
        <div className="platform__copy accordion">
          {PLATFORM_ITEMS.map(({ title, body }, index) => {
            const isOpen = index === openIndex;
            return (
              <div key={title} className="platform__block accordion-item" data-reveal-row>
                <button
                  type="button"
                  className="accordion-header"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                >
                  <span className="platform__heading accordion-title">{title}</span>
                  <span className={`accordion-icon ${isOpen ? 'accordion-icon--open' : ''}`} />
                </button>
                <div className={`accordion-body ${isOpen ? 'accordion-body--open' : ''}`}>
                  <p>{body}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
