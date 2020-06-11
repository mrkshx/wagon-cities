import React, { Component } from 'react';

class City extends Component {
  handleClick = () => {
    // REDUX ACTION
  }

  render() {
    const {
      name,
    } = this.props;
    if (!name) {
      return null;
    }
    return (
      <div className="list-group-item" onClick={this.handleClick}>
        <p>{name}</p>
      </div>
    );
  }
}

export default City;
