import React from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';

class Footer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      shop: false,
      account: false,
      support: false,
      corporate: false,
      sites: false,
      partners: false,
      terms: false
    }
    this.toggleClass = this.toggleClass.bind(this)
  }

  toggleClass( sec ) {
    this.setState(prevState => ({
      [sec] : !prevState[sec]
    }));
  };

  currentYear() {
    const date = new Date();
    return date.getFullYear();
  }

  render() {
    return (
      <footer id="footer" className="ftr-footer">
        <Grid>
          <Row>
            <Col sm={2} xs={12} onClick={() => this.toggleClass('shop')} className={ `navlist ${this.state.shop ? 'uncollapsed': 'collapsed'}`}>
              <h3>Shop </h3>
              <ul className="list-unstyled">
                <li><a>Bundles</a></li>
                <li><a>Internet</a></li>
                <li><a>Video/TV</a></li>
                <li><a>Phone</a></li>
                <li><a>Frontier Secure</a></li>
                <li><a>Moving</a></li>
                <li><a>Availability</a></li>
              </ul>
            </Col>
            <Col sm={2} xs={12} onClick={() => this.toggleClass('account')} className={ `navlist ${this.state.account ? 'uncollapsed': 'collapsed'}`}>
              <h3>My Account</h3>
              <ul className="list-unstyled">
                <li><a>Register</a></li>
                <li><a>Pay Bill</a></li>
                <li><a>Check Email</a></li>
                <li><a>Manage Account</a></li>
                <li><a>MyFrontier App</a></li>
                <li><a>Watch TV</a></li>
              </ul>
            </Col>
            <Col sm={2} xs={12} onClick={() => this.toggleClass('support')} className={ `navlist ${this.state.support ? 'uncollapsed': 'collapsed'}`}>
              <h3>Support</h3>
              <ul className="list-unstyled">
                <li><a>Help Center</a></li>
                <li><a href="http://videos.frontier.com/">Video Gallery</a></li>
                <li><a>Support Wizard</a></li>
                <li><a >Trouble Ticket Status</a></li>
                <li><a>Order Status</a></li>
                <li><a>Contact Us</a></li>
              </ul>
            </Col>
            <Col sm={2} xs={12} onClick={() => this.toggleClass('corporate')} className={ `navlist ${this.state.corporate ? 'uncollapsed': 'collapsed'}`}>
              <h3>Corporate</h3>
              <ul className="list-unstyled">
                <li><a>Company</a></li>
                <li><a>Investors</a></li>
                <li><a>News</a></li>
                <li><a>Responsibility</a></li>
                <li><a>Suppliers</a></li>
                <li><a>Public Inspection Files</a></li>
                <li><a>Discount Programs</a></li>
                <li><a>Careers</a></li>
              </ul>
            </Col>
            <Col sm={2} xs={12} onClick={() => this.toggleClass('sites')} className={ `navlist ${this.state.sites ? 'uncollapsed': 'collapsed'}`}>
              <h3>FRONTIER SITES</h3>
              <ul className="list-unstyled">
                <li><a>Small Business</a></li>
                <li><a>Enterprise</a></li>
                <li><a>Wholesale</a></li>
                <li><a>Frontier WI-FI</a></li>
                <li><a>Frontier Yahoo Portal</a></li>
                <li><a>Frontier Business Partner Program</a></li>
                <li><a>Community Connections (MDU/HOA)</a></li>
                <li><a>Online Phone Directories</a></li>
              </ul>
            </Col>
            <Col sm={2} xs={12} onClick={() => this.toggleClass('partners')} className={`navlist ${this.state.partners ? 'uncollapsed': 'collapsed'}`}>
              <h3>SALES PARTNERS</h3>
              <ul className="list-unstyled">
                <li><a>Frontier Internet</a></li>
                <li><a>Frontier FiOS</a></li>
                <li><a>Frontier FiOS Internet</a></li>
                <li><a>Local Internet</a></li>
              </ul>
            </Col>
            <Col sm={2} xs={12} lgHidden mdHidden smHidden onClick={() => this.toggleClass('terms')} className={`navlist ${this.state.terms ? 'uncollapsed': 'collapsed'}`}>
              <h3>Terms</h3>
              <ul className="list-unstyled">
                <li><a href="https://frontier.com/">Home</a></li>
                <li><a href="https://blog.frontier.com" rel="nofollow">Blog</a></li>
                <li><a>Site Map</a></li>
                <li><a>Store Locator</a></li>
                <li><a rel="nofollow">Policies &amp; Notifications</a></li>
                <li><a rel="nofollow">Terms &amp; Conditions</a></li>
                <li><a>Privacy Policy</a></li>
              </ul>
            </Col>
            <Col xs={12}>
              <Row>
                <Col xs={12} sm={8} md={8} xsHidden >
                  <ul id="policies" className="list-inline policies">
                    <li className=""><a href="https://frontier.com/">Home</a></li>
                    <li className=""><a href="https://blog.frontier.com/" aria-current="page">Blog</a></li>
                    <li className=""><a href="https://frontier.com/sitemap">Site Map</a></li>
                    <li className=""><a href="https://frontier.com/corporate/retailstores/locations">Store Locator</a></li>
                    <li className=""><a href="https://frontier.com/corporate/policies">Policies &amp; Notifications</a></li>
                    <li className=""><a href="https://frontier.com/corporate/terms">Terms &amp; Conditions</a></li>
                    <li className=""><a href="https://frontier.com/~/media/corporate/policies/privacy-policy.ashx">Privacy Policy</a></li>
                  </ul>
                  <p className="copyright">©{this.currentYear()} Frontier Communications Corporation. All rights reserved. </p>
                </Col>
                <Col xs={12} sm={4} smOffset={0} mdOffset={1} md={3} className="social-icons" id="social-icons">
                  <span className="social-icons-ftr">
                    <a id="ecomm-rv-footer-link-Twitter" href="https://twitter.com/FrontierCorp" className="smi smi-twitter" target="_blank" data-di-id="#ecomm-rv-footer-link-Twitter">
                      <i className="fci-social-twitter" title="Twitter" id="ecomm-rv-footer-social-icon-Twitter"></i>
                    </a>
                  </span>

                  <span className="social-icons-ftr">
                    <a id="ecomm-rv-footer-link-Facebook" href="https://www.facebook.com/FrontierCorp" className="smi smi-facebook" target="_blank" data-di-id="#ecomm-rv-footer-link-Facebook">
                      <i className="fci-social-facebook" title="Facebook" id="ecomm-rv-footer-social-icon-Facebook"></i>
                    </a>
                  </span>

                  <span className="social-icons-ftr">
                    <a id="ecomm-rv-footer-link-Linkedin" href="https://www.linkedin.com/company/frontier-communications" className="smi smi-linkedin" target="_blank" data-di-id="#ecomm-rv-footer-link-Linkedin">
                      <i className="fci-social-linkedin" title="Linkedin" id="ecomm-rv-footer-social-icon-Linkedin"></i>
                    </a>
                  </span>

                  <span className="social-icons-ftr">
                    <a id="ecomm-rv-footer-link-YouTube" href="https://www.youtube.com/user/FrontierCorp " className="smi smi-youtube" target="_blank" data-di-id="#ecomm-rv-footer-link-YouTube">
                      <i className="fci-social-youtube" title="YouTube" id="ecomm-rv-footer-social-icon-YouTube"></i>
                    </a>
                  </span>
                </Col>
              </Row>
            </Col>
          </Row>
        </Grid>
      </footer>
    )
  }
}

export default Footer;
