import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h1>Remine</h1>
          <p>Let us make our planet a greener place to live.</p>
        </div>
        <div>
          <a href="/">
            <i className="fa-brands fa-facebook-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-instagram-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-behance-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-twitter-square"></i>
          </a>
        </div>
      </div>
      <div className="bottom">
        <div>
          <h4>Services</h4>
          <a href="/">Electronic Recycling</a>
          <a href="/">Data Destruction</a>
          <a href="/">Reverse Logistics</a>
          <a href="/">ITAD</a>
        </div>
        <div>
          <h4>Community</h4>
          <a href="/">Github</a>
          <a href="/">Issues</a>
          <a href="/">Projects</a>
          <a href="/">Twitter</a>
        </div>
        <div>
          <h4>Help</h4>
          <a href="/">Support</a>
          <a href="/">Troubleshooting</a>
        </div>
        <div>
          <h4>Our Office</h4>
          <a href="/">WARD NO. 3, SUPRIYA COLONY, SITARGANJ SITARGANJ Udham Singh Nagar
          UR - 262405
          India</a>
          <h4>Contact Us</h4>
          <a href="/"><i className="fa-sharp fa-regular fa-envelope"></i>&nbsp; reminerecyclewaste@gmail.com</a>
          <a href="/"><i className="fa-solid fa-address-book"></i>&nbsp;1812-123-1234</a>
        </div>
      </div>
    </div>
  );
};
export default Footer;
