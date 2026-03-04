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
         Transform your manufacturing process by turning hidden physical variables into actionable digital data. Our integrated monitoring solution provides a comprehensive view of your machine’s health and performance, allowing you to detect irregularities before they lead to failure. By bridging the gap between your equipment and a centralized dashboard, we help you maximize uptime, ensure consistent quality, and bring a new level of precision to every production cycle.
        </p>
        <a href="#get-started" className="btn btn--primary hero__cta" onClick={scrollToGetStarted}>
          Get started with ToolLink
        </a>
      </div>
    </section>
  );
}
