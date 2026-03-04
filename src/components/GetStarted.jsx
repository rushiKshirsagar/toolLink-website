export function GetStarted() {
  return (
    <section id="get-started" className="section section--get-started" data-section>
      <div className="section__inner get-started__inner">
        <div data-reveal-row>
          <h2 className="section__title">Get started with ToolLink</h2>
          <p className="get-started__intro">
            Start with a short call to discuss your shop floor, machine count, and goals. We’ll recommend a pilot setup and send a tailored quote—no commitment.
          </p>
          <div className="get-started__actions">
            <a href="mailto:hello@toollink.example.com" className="btn btn--primary btn--large">
              Book a demo
            </a>
            <a href="mailto:sales@toollink.example.com" className="btn btn--secondary btn--large">
              Contact sales
            </a>
          </div>
          <p className="get-started__note">
            We typically respond within 24 hours. Pilot deployments can go live in 2–4 weeks.
          </p>
        </div>
      </div>
    </section>
  );
}
