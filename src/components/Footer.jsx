export function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__inner">
        <div className="footer__top">
          <nav className="footer__nav" aria-label="Footer navigation">
            <ul className="footer__grid">
              <li className="footer__col">
                <span className="footer__col-title">Product</span>
                <ul className="footer__list">
                  <li><a href="#platform">Dashboard &amp; alerts</a></li>
                  <li><a href="#sensors">Sensors</a></li>
                  <li><a href="#use-cases">Use cases</a></li>
                  <li><a href="#pricing">Pricing</a></li>
                  <li><a href="#">Documentation</a></li>
                </ul>
              </li>
              <li className="footer__col">
                <span className="footer__col-title">Company</span>
                <ul className="footer__list">
                  <li><a href="#value">Why it matters</a></li>
                  <li><a href="#">About us</a></li>
                  <li><a href="#get-started">Contact</a></li>
                  <li><a href="#">Blog</a></li>
                </ul>
              </li>
              <li className="footer__col">
                <span className="footer__col-title">Legal</span>
                <ul className="footer__list">
                  <li><a href="#">Privacy policy</a></li>
                  <li><a href="#">Terms of service</a></li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
        <div className="footer__bottom">
          <p className="footer__copy">
            &copy; {new Date().getFullYear()} ToolLink. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
