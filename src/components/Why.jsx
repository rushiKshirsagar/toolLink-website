const WHY_IMAGE = 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=960&h=540&fit=crop';

export function Why() {
  return (
    <section id="why" className="section section--why" data-section>
      <div className="section__inner">
        <h2 className="section__title">Why ToolLink?</h2>
        <div className="why__layout">
          <div className="why__media">
            <img src={WHY_IMAGE} alt="Industrial equipment and monitoring" />
          </div>
          <div className="why__copy">
            <p>
              ToolLink is an end-to-end system: wireless sensors capture vibration and temperature
              from your equipment, a compact monitoring unit per machine sends data to the cloud,
              and the service analyzes it for abnormal patterns. You get a web dashboard for
              real-time visibility and a mobile app with push notifications when something needs
              attention, so you can set up devices quickly and act on alerts before failures happen.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
