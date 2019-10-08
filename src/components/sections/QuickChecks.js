import React from 'react';
import Panel from 'react-bootstrap/lib/Panel';
import Grid from 'react-bootstrap/lib/Grid';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row'

import Thumbnail from './Thumbnail';
import Lightbox from './Lightbox';

class Outage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      selectedThumb: null
    };

    this.setSelectedThumb = this.setSelectedThumb.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  setSelectedThumb( thumb ) {
    this.setState({selectedThumb: thumb, show: true})
  }

  handleClose() {
    this.setState({ show: false });
  }

  render() {
    return (
      <section className={ `section ${this.props.sec.id}` }>
        <div className="container">
          <h3 className="sec-title">{this.props.sec.title}</h3>
          <small className="disclaimer"><span className="red">*</span>The picture is a representation. Your device may not look exactly like this.</small>

          <Panel>
            <Panel.Body>
              <h5>Is your account up to date?</h5>
              You have a balance due.  <a href="#">Check your statement here</a>
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
                Yes it is on.  <a href="#">More info</a>
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
                Yes it is on.  <a href="#">More info</a>
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
                Yes it is on.  <a href="#">More info</a>
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
                Yes it is on.  <a href="#">More info</a>
              </Panel.Body>
            </Panel.Collapse>
          </Panel>

          <Panel>
            <Panel.Heading>
              <Panel.Toggle className="collapse in">
                <h5>Make sure there is not a problem with the internet connection to your home</h5>
                <i className="fa fa-plus collapser" aria-hidden="true"></i>
              </Panel.Toggle>
            </Panel.Heading>
            <Panel.Collapse>
              <Panel.Body>

                <Grid>
                  <Row>
                    <Col sm={4}>
                      <Thumbnail >
                        <a onClick={() => this.setSelectedThumb('https://via.placeholder.com/150')}>
                          <img src="https://via.placeholder.com/150" />
                        </a>
                      </Thumbnail>
                    </Col>
                    <Col sm={4}>
                      <Thumbnail nameId='myName'>
                        <a><img src="https://via.placeholder.com/150" /></a>
                      </Thumbnail>
                    </Col>
                    <Col sm={4}>
                      <Thumbnail nameId='myName'>
                        <a><img src="https://via.placeholder.com/150" /></a>
                      </Thumbnail>
                    </Col>
                  </Row>
                </Grid>

              </Panel.Body>
            </Panel.Collapse>
          </Panel>

        </div>
        <Lightbox selectedImage={this.state.selectedThumb} handleClose={this.handleClose} show={this.state.show}></Lightbox>
      </section>
    );
  }
}

export default Outage;
