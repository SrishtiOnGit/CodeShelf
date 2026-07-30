import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <h3>CodeShelf</h3>
      <p className="footer-text">
        Your personal library for reusable code snippets.
      </p>
      <div className="ul">
        <ul>
          {" "}
          Product
          <li>
            {" "}
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#features">Features</a>
          </li>
          <li>
            {" "}
            <a href="#works">How it Works</a>
          </li>
          <li>
            {" "}
            <a href="#faq">FAQ</a>
          </li>
        </ul>
        <ul>
          {" "}
          Resources
          <li>
            {" "}
            <a href="/">Github</a>
          </li>
          <li>
            {" "}
            <a href="/">Documentation</a>
          </li>
          <li>
            {" "}
            <a href="/">ChangeLog</a>
          </li>
          <li>
            {" "}
            <a href="/">Support</a>
          </li>
        </ul>

        <ul>
          {" "}
          Company
          <li>
            {" "}
            <a href="/">About</a>
          </li>
          <li>
            {" "}
            <a href="/">Privacy</a>
          </li>
          <li>
            {" "}
            <a href="/">Terms of Service</a>
          </li>
          <li>
            {" "}
            <a href="/">Contact</a>
          </li>
        </ul>
      </div>
      <p className="copyright">&copy; 2026 CodeShelf. All rights reserved.</p>
      <p className="developer">Made for developers, by developer.</p>
      <h1>--CodeShelf--</h1>
    </div>
  );
};

export default Footer;
