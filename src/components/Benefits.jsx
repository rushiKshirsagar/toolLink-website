const BENEFITS = [
  {
    title: 'Predictive alerts',
    text: 'Detect machine issues before they occur and take action to reduce operational costs and unplanned downtime.',
  },
  {
    title: 'Easy setup',
    text: 'Start monitoring equipment in minutes with simple installation and automatic analysis. One unit per machine, no complex wiring.',
  },
  {
    title: 'Dashboard & mobile',
    text: 'Real-time dashboard on web and timely push and email notifications in the app so you can respond from anywhere.',
  },
];

export function Benefits() {
  return (
    <section id="benefits" className="section section--benefits" data-section>
      <div className="section__inner">
        <h2 className="section__title">Benefits</h2>
        <ul className="benefits-grid">
          {BENEFITS.map(({ title, text }) => (
            <li key={title} className="benefit-card">
              <h3 className="benefit-card__title">{title}</h3>
              <p className="benefit-card__text">{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
