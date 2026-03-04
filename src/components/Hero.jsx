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
         Transform your manufacturing processes by turning hidden physical variables into actionable digital data. Our integrated monitoring solution provides a comprehensive view of your machine’s health and performance, allowing you to detect irregularities before they lead to failures.
        </p>
        <a href="#get-started" className="btn btn--primary hero__cta" onClick={scrollToGetStarted}>
          Get started with ToolLink
        </a>
      </div>
    </section>
  );
}
