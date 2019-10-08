import React from 'react';
import Panel from 'react-bootstrap/lib/Panel';

class Outage extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    isOutage: 'Yes - There\'s an outage impacting your area.'
  }

  render() {
    return (
      <section className={ ` section no-collapse ${this.props.sec.id}` }>
        <div className="container">
          <h3 className="sec-title">{this.props.sec.title}</h3>
          <Panel>
            <Panel.Body>
              <h5>{this.state.isOutage} </h5>
              <a href="https://frontier.com">Find out how outages happen</a>
            </Panel.Body>
          </Panel>

        </div>
      </section>

    );
  }
}

export default Outage;
