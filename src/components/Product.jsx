export function Product() {
  return (
    <section id="product" className="section" data-section>
      <div className="section__inner">
        <h2 className="section__title">Product</h2>
        <p className="section__intro">
          A single monitoring unit per machine collects temperature, vibration (and spindle RPM),
          and reject-bucket weight. Data is streamed to your dashboard for real-time visibility,
          historical trends, and configurable alerts — including mobile push and email so you can act
          before a small issue becomes a breakdown.
        </p>
        <div className="product__copy">
          <p>
            Behind the dashboard, <strong>AI-driven analytics</strong> continuously learn from your
            machine data. Pattern recognition and anomaly detection spot deviations from normal
            behavior before they turn into failures. Predictive models use temperature, vibration,
            and usage history to estimate when components may need attention — so you can plan
            maintenance by condition, not by the calendar, and reduce unplanned downtime.
          </p>
        </div>
      </div>
    </section>
  );
}
