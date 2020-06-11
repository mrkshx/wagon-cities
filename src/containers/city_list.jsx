import React, { Component } from 'react';
import City from './city.jsx';

class CityList extends Component {
  renderList = () => {
    const { cities,
      // selectFlat,
      // selectedFlat
    } = this.props;
    return cities.map((city, index) => (
      <City
        name={city.name}
        // imageUrl={city.imageUrl}
        address={city.address}
        slug={city.slug}
        key={city.slug}
        // selectFlat={selectFlat}
        index={index}
        // selected={city.name === selectedFlat.name}
      />
    ));
  }

  render() {
    return (
      <div className="cities">
        {this.renderList()}
      </div>
    );
  }
}

export default CityList;
