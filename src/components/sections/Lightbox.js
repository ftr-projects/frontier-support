import React from 'react';
import Modal from 'react-bootstrap/lib/Modal';

class Lightbox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      show: this.props.show
    };

     this.handleClose = this.handleClose.bind(this);
  }

  handleClose() {
    this.props.handleClose()
  }

  render() {
    return (
      <div>
        <Modal bsSize="large" show={this.props.show} onHide={this.handleClose}>
          <Modal.Body>
            <img src={this.props.selectedImage} alt=""/>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default Lightbox;
