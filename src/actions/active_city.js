import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectCity } from '../actions';


class ActiveCity extends Component {
  componentWillMount() {
    this.props.setCities();
  }

  renderList = () => {
    return (
      <div>
        <h2>{selectCity.name}</h2>
        <p>{selectCity.address}</p>
        <img src={`https://kitt.lewagon.com/placeholder/cities/${selectCity.slug}`} alt="" />
      </div>
    );
  }

  render() {
    return (
      <div className="active-city">
        {this.renderList()}
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    selectCity: state.selectCity
  };
}

export default connect(mapDispatchToProps)(ActiveCity);
