import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setCities } from '../actions';
import City from './city.jsx';

class CityList extends Component {
  renderList = () => {
    return this.props.cities.map((city) => (
      <City
        city={city}
        key={city.slug}
      />
    ));
  }

  componentWillMount() {
    this.props.setCities();
  }

  render() {
    return (
      <div className="cities">
        {this.renderList()}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setCities },
    dispatch
  );
}

function mapStateToProps(state) {
  return {
    cities: state.cities
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CityList);
