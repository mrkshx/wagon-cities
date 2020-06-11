import React, { Component } from 'react';

class City extends Component {
  // handleClick = () => {
  //   const { selectFlat, index } = this.props;
  //   // selectFunction(event.target.id);
  //   selectFlat(index);
  // }

  render() {
    const {
      name,
    } = this.props;
    if (!name) {
      return null;
    }
    return (
      <div className="list-group-item">
        <p>{name}</p>
      </div>
    );
  }
}

export default City;
