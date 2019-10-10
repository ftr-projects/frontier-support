import React from 'react';
import Well from 'react-bootstrap/lib/Well';
import Grid from 'react-bootstrap/lib/Grid';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import chat from '../../assets/chat.svg';
import video from '../../assets/video.svg';
import help from '../../assets/help.svg';

class Outage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      show: false,
      opened: false
    };

    this.openMainPanel = this.openMainPanel.bind(this);
    this.resetPanels = this.resetPanels.bind(this);
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
        <Grid>
          <button className="back-home-btn" onClick={this.resetPanels}>Back to home</button>
          <button className="sec-title-btn" onClick={this.openMainPanel}>
            <h3 className="sec-title">{this.props.sec.title}</h3>
          </button>
          <div className="panels">
            <Row className="show-grid">
              <Col sm={4} >
                <Well bsSize="large">
                  <a href="https://frontier.com">
                    <img alt="chat with us" src={chat} />
                    Chat with us
                  </a>
                </Well>
              </Col>
              <Col sm={4} >
                <Well bsSize="large">
                  <a href="https://frontier.com">
                    <img alt="chat with us" src={video} />
                    Visit our video gallery
                  </a>
                </Well>
              </Col>
              <Col sm={4} >
                <Well bsSize="large">
                  <a href="https://frontier.com">
                    <img alt="chat with us" src={help} />
                    Visit our Help Center
                  </a>
                </Well>
              </Col>
            </Row>
          </div>

        </Grid>
      </section>
    );
  }
}

export default Outage;
