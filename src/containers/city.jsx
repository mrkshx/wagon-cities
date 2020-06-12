import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectCity } from '../actions';

class City extends Component {
  handleClick = () => {
    this.props.selectCity(this.props.city);
  }

  render() {
    const {
      city,
    } = this.props;
    if (!city.name) {
      return null;
    }
    return (
      <div className="list-group-item" onClick={this.handleClick}>
        <p>{city.name}</p>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { selectCity },
    dispatch
  );
}

export default connect(null, mapDispatchToProps)(City);
