import React, { Component } from 'react';
import vnTopo from './geo_data/mapvn1.json' ;
import hs from './geo_data/Hoangsa.json' ;
import ts from './geo_data/Truongsa.json' ;
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from 'react-simple-maps';

const vietnam = [vnTopo, hs, ts];


class App extends Component {
  render() {
    return (
      <ComposableMap
      projection="geoMercator"
      projectionConfig={{
        scale: 1000,
        center: [105, 15] // coordinate of VietNam [long, lat]
      }}
      style={{
        width: "100%",
        height: "auto"
      }}
    >
      <ZoomableGroup center={[104, 17]}>
        {vietnam.map((geoUrl) => (
          <Geographies key={geoUrl} geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  style={{
                    default: {
                      fill: '#808080',
                      stroke: '#212529',
                      strokeWidth: 0.75,
                      outline: 'none',
                    },
                    hover: {
                      fill: '#e6dfd9',
                      stroke: '#212529',
                      strokeWidth: 0.75,
                      outline: 'none',
                    },
                  }}
                />
              ))
            }
          </Geographies>
        ))}
      </ZoomableGroup>
    </ComposableMap>
    );
  }
}

export default App;

