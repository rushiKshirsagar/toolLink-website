export function Pricing() {
  return (
    <section id="pricing" className="section section--pricing" data-section>
      <div className="section__inner pricing">
        <div className="pricing__header" data-reveal-row>
          <h2 className="section__title">Pricing</h2>
          <p className="section__intro">
            We&apos;re finalizing transparent pricing tailored for pilot deployments and full-scale rollouts.
            Share your requirements today and be the first to access ToolLink when pricing goes live.
          </p>
        </div>

        <div className="pricing__content">
          <div className="pricing-card" data-reveal-row>
            <div className="pricing-card__badge">Coming soon</div>
            <h3 className="pricing-card__title">Early access</h3>
            <p className="pricing-card__subtitle">
              Ideal for shops and plants that want to pilot ToolLink on a few critical machines.
            </p>
            <ul className="pricing-card__list">
              <li>Hardware + dashboard bundle</li>
              <li>Onboarding and integration support</li>
              <li>Alerts tuned to your processes</li>
              <li>Founding customer input on roadmap</li>
            </ul>
            <p className="pricing-card__note">
              Pricing details are in progress. Reach out via the contact form and we&apos;ll follow up with a tailored quote.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

