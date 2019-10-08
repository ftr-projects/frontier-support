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
  }

  render() {
    return (
      <section className={ `section ${this.props.sec.id}` }>
        <Grid>
          <h3 className="sec-title">{this.props.sec.title}</h3>
          <Row className="show-grid">
            <Col sm={4} >
              <Well bsSize="large">
                <a href="#">
                  <img alt="chat with us" src={chat} />
                  Chat with us
                </a>
              </Well>
            </Col>
            <Col sm={4} >
              <Well bsSize="large">
                <a href="#">
                  <img alt="chat with us" src={video} />
                  Visit our video gallery
                </a>
              </Well>
            </Col>
            <Col sm={4} >
              <Well bsSize="large">
                <a href="#">
                  <img alt="chat with us" src={help} />
                  Visit our Help Center
                </a>
              </Well>
            </Col>
          </Row>
        </Grid>
      </section>
    );
  }
}

export default Outage;
