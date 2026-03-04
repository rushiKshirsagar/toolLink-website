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
          Eliminate the fog of manual logging and human error. Our edge-intelligence platform captures every cycle and every mechanical heartbeat—unifying machine health and production into a single source of truth so you stay ahead of downtime and focused on precision.
        </p>
        <a href="#get-started" className="btn btn--primary hero__cta" onClick={scrollToGetStarted}>
          Get started with ToolLink
        </a>
      </div>
    </section>
  );
}
