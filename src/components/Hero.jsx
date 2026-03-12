export function Hero() {
  const scrollToGetStarted = (e) => {
    e.preventDefault();
    document.getElementById('get-started')?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <section id="hero" className="hero section--in-view" data-section>
      <div className="hero__inner">
        {/* <h1 className="hero__title">ToolLink</h1> */}
        <p className="hero__tagline">
          Smart Monitoring for Precision Machining.
        </p>
        <p className="hero__body">
        ToolLink is a plug-and-play edge intelligence platform that transforms precision machining by automating shop-floor data and predicting equipment failures. By replacing error-prone manual logging with smart sensors that monitor every mechanical heartbeat, it provides a real-time, single source of truth for machine health. With minimal human intervention, the system's AI catches subtle anomalies before they cause downtime, allowing manufacturers to effortlessly shift from costly reactive repairs to proactive, uninterrupted production.        </p>
        <a href="#get-started" className="btn btn--primary hero__cta" onClick={scrollToGetStarted}>
          Get started with ToolLink
        </a>
      </div>
    </section>
  );
}
