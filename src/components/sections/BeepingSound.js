import React from 'react';
import Panel from 'react-bootstrap/lib/Panel';

class Beeping extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      opened: false,
      show: false,
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
        <div className="container">
          <button className="back-home-btn" onClick={this.resetPanels}>Back to home</button>
          <button className="sec-title-btn" onClick={this.openMainPanel}>
            <h3 className="sec-title">{this.props.sec.title}</h3>
          </button>
          <div className="panels">
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
                  Yes it is on.  <a href="https://frontier.com">More info</a>
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
                  Yes it is on.  <a href="https://frontier.com">More info</a>
                </Panel.Body>
              </Panel.Collapse>
            </Panel>
          </div>
        </div>
      </section>
    );
  }
}

export default Beeping;
