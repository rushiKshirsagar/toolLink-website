export function Platform() {
  return (
    <section id="platform" className="section" data-section>
      <div className="section__inner">
        <h2 className="section__title">Dashboard &amp; alerts</h2>
        <p className="section__intro">
          All machine data flows into a single place: the web dashboard. View live readings, compare
          trends over time, and get notified the moment something needs attention — on your phone or
          in your inbox.
        </p>
        <div className="platform__copy">
          <div className="platform__block">
            <h3 className="platform__heading">AI-powered predictive analytics</h3>
            <p>
              Raw sensor streams are analyzed by machine-learning models trained on equipment
              behavior and failure patterns. The system flags anomalies in temperature or vibration
              that human eyes might miss, suggests likely causes, and estimates when maintenance
              should be scheduled. Over time, as more data is collected from your machines, the
              models refine their predictions so alerts stay relevant and false alarms stay low.
            </p>
          </div>
          <div className="platform__block">
            <h3 className="platform__heading">Web dashboard</h3>
            <p>
              See every machine at a glance: temperature, vibration, spindle RPM, and reject-bucket
              weight in one view. Drill into any machine for detailed time-series charts and
              historical trends. Compare multiple machines or time ranges to spot patterns and plan
              maintenance. The dashboard works on desktop and tablet so you can check status from
              the office or the floor.
            </p>
          </div>
          <div className="platform__block">
            <h3 className="platform__heading">Mobile and email alerts</h3>
            <p>
              When a threshold is breached or an anomaly is detected, you don’t have to be at your
              desk. Get push notifications on your phone and optional email or SMS alerts so you
              can react immediately — whether it’s rising temperature, unusual vibration, or a
              sudden spike in rejects. Configure which machines and which conditions trigger
              alerts, and who receives them, so the right person is always informed.
            </p>
          </div>
          <div className="platform__block">
            <h3 className="platform__heading">Export and integration</h3>
            <p>
              Export time-series data for reporting, audits, or analysis in your own tools. We
              support common formats so you can feed dashboards, ERP, or maintenance systems. For
              larger deployments, ask about API access and integration options to keep your
              workflows in sync.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
