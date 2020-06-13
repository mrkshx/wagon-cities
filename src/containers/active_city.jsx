import React, { Component } from 'react';
import { connect } from 'react-redux';


class ActiveCity extends Component {
  renderList = () => {
    const { selectedCity } = this.props;
    if (!selectedCity) {
      return (
        <div>
          <p>Select a city...</p>
        </div>
      );
    }

    return (
      <div>
        <h3>{selectedCity.name}</h3>
        <p>{selectedCity.address}</p>
        <img src={`https://kitt.lewagon.com/placeholder/cities/${selectedCity.slug}`} width="100%" />
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
  return { selectedCity: state.selectedCity };
}

export default connect(mapStateToProps)(ActiveCity);
