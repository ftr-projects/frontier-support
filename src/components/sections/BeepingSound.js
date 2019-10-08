import React from 'react';
import Panel from 'react-bootstrap/lib/Panel';

class Outage extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    panels :
      [
        {
          question: 'Is your account up to date?',
          answer: 'You have a balance due.',
          uncollapsable: false,
          link :  {url: '#', title: 'Check your statement here'}
        }, {
          question: 'Is your router powered on?',
          answer: 'Yes',
          uncollapsable: false
        }
      ]

  }

  render() {
    return (
      <section className={ `section ${this.props.sec.id}` }>
        <div className="container">
          <h3 className="sec-title">{this.props.sec.title}</h3>
          <small className="disclaimer"><span className="red">*</span>The picture is a representation. Your device may not look exactly like this.</small>

          <Panel>
            <Panel.Heading>
              <Panel.Toggle>
                <h5>Check your ONT battery unit</h5>
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
                <h5>To stop beeping</h5>
                <i className="fa fa-plus collapser" aria-hidden="true"></i>
              </Panel.Toggle>
            </Panel.Heading>
            <Panel.Collapse>
              <Panel.Body>
                Yes it is on.  <a href="#">More info</a>
              </Panel.Body>
            </Panel.Collapse>
          </Panel>

        </div>
      </section>
    );
  }
}

export default Outage;
