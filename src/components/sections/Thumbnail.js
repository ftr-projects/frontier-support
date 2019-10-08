import React from 'react';

class Thumbnail extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={'FancyBorder FancyBorder-' }>
        {this.props.children}
      </div>
    );
  }
}

export default Thumbnail;
