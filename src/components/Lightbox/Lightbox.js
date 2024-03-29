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
        <Modal className="imgModal" bsSize="large" show={this.props.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
          </Modal.Header>
          <Modal.Body>
            <img className="expandedImg" src={this.props.selectedImage} alt=""/>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default Lightbox;
