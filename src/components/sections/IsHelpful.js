import React from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Form from 'react-bootstrap/lib/Form';
import Button from 'react-bootstrap/lib/Button';

class IsHelful extends React.Component {
  render() {
    return (
      <section className="section helpful">
        <Grid>
          <h5>Was this page helpful?</h5>
          <Form inline>
            <Button bsStyle="info" type="submit">Yes</Button> <Button bsStyle="info" type="submit">No</Button>
          </Form>
        </Grid>

      </section>
    );
  }
}

export default IsHelful;
