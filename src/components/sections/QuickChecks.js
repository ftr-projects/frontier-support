import React from 'react';
import Panel from 'react-bootstrap/lib/Panel';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row'

import Thumbnail from '../Thumbnail/Thumbnail';
import Lightbox from '../Lightbox/Lightbox';

class Outage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      selectedThumb: null,
      opened: false,
      images : [
        'https://via.placeholder.com/150/0000FF',
        'https://via.placeholder.com/150/FFFF00/000000',
        'https://via.placeholder.com/150/000000/FFFFFF'
      ]
    };

    this.setSelectedThumb = this.setSelectedThumb.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.openMainPanel = this.openMainPanel.bind(this);
    this.resetPanels = this.resetPanels.bind(this);
  }

  setSelectedThumb( thumb, e ) {
    this.setState({selectedThumb: thumb, show: true});
    e.preventDefault();
  }

  handleClose() {
    this.setState({ show: false });
  }

  openMainPanel() {
    this.props.isSectionActive( this.props.sec.id );
    this.setState({ opened : true });    
  };

  resetPanels() {
    this.props.resetPanels();
    this.setState({ opened : false });
  }

  render() {
    return (
      <section className={ `section ${this.props.sec.id} ${this.state.opened ? 'active': 'unactive'}` }>
        <div className="container">
          <button className="back-home-btn" onClick={this.resetPanels}>Back to home</button>
          <button className="sec-title-btn" onClick={this.openMainPanel}>
            <h3 className="sec-title">{this.props.sec.title}</h3>
          </button>
          <div className="panels">
            <small className="disclaimer"><span className="red">*</span>The picture is a representation. Your device may not look exactly like this.</small>

            <Panel>
              <Panel.Body>
                <h5>Is your account up to date?</h5>
                You have a balance due.  <a href="https://frontier.com">Check your statement here</a>
              </Panel.Body>
            </Panel>

            <Panel>
              <Panel.Heading>
                <Panel.Toggle>
                  <h5>Is your router powered on?</h5>
                  <i className="fa fa-plus collapser" aria-hidden="true"></i>
                </Panel.Toggle>
              </Panel.Heading>
              <Panel.Collapse>
                <Panel.Body>
                  Yes it is on.  <a href="https://frontier.com">More info</a>
                </Panel.Body>
              </Panel.Collapse>
            </Panel>

            <Panel>
              <Panel.Heading>
                <Panel.Toggle>
                  <h5>Is your router connected to the Internet?</h5>
                  <i className="fa fa-plus collapser" aria-hidden="true"></i>
                </Panel.Toggle>
              </Panel.Heading>
              <Panel.Collapse>
                <Panel.Body>
                  Yes it is on.  <a href="https://frontier.com">More info</a>
                </Panel.Body>
              </Panel.Collapse>
            </Panel>

            <Panel>
              <Panel.Heading>
                <Panel.Toggle>
                  <h5>Restart your router</h5>
                  <i className="fa fa-plus collapser" aria-hidden="true"></i>
                </Panel.Toggle>
              </Panel.Heading>
              <Panel.Collapse>
                <Panel.Body>
                  Yes it is on.  <a href="https://frontier.com">More info</a>
                </Panel.Body>
              </Panel.Collapse>
            </Panel>

            <Panel>
              <Panel.Heading>
                <Panel.Toggle>
                  <h5>Do you have Wi-Fi connection?</h5>
                  <i className="fa fa-plus collapser" aria-hidden="true"></i>
                </Panel.Toggle>
              </Panel.Heading>
              <Panel.Collapse>
                <Panel.Body>
                  Yes it is on.  <a href="https://frontier.com">More info</a>
                </Panel.Body>
              </Panel.Collapse>
            </Panel>

            <Panel defaultExpanded>
              <Panel.Heading>
                <Panel.Toggle >
                  <h5>Make sure there is not a problem with the internet connection to your home</h5>
                  <i className="fa fa-minus collapser" aria-hidden="true"></i>
                </Panel.Toggle>
              </Panel.Heading>
              <Panel.Collapse>
                <Panel.Body>
                  <Row>
                    <Col sm={4}>
                      <Thumbnail >
                        <a onClick={(e) => this.setSelectedThumb(this.state.images[0], e)}>
                          <img src={this.state.images[0]} />
                        </a>
                        <hr/>
                        <p>The ONT battery unit is where service connects to your home. It will beep to alert you when your battery is losing power.</p>
                      </Thumbnail>
                    </Col>
                    <Col sm={4}>
                      <Thumbnail >
                        <a onClick={(e) => this.setSelectedThumb(this.state.images[1], e)}>
                          <img src={this.state.images[1]} />
                        </a>
                        <hr/>
                        <p>No phone service? Your battery is losing power. Just disconnect your battery</p>
                      </Thumbnail>
                    </Col>
                    <Col sm={4}>
                      <Thumbnail>
                        <a onClick={(e) => this.setSelectedThumb(this.state.images[2], e)}>
                          <img src={this.state.images[2]} />
                        </a>
                        <hr/>
                        <p>No phone service? Your battery is losing power. Just disconnect your battery</p>
                      </Thumbnail>
                    </Col>
                  </Row>

                </Panel.Body>
              </Panel.Collapse>
            </Panel>
          </div>
        </div>
        <Lightbox selectedImage={this.state.selectedThumb} handleClose={this.handleClose} show={this.state.show}></Lightbox>
      </section>
    );
  }
}

export default Outage;
