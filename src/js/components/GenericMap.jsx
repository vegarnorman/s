import React from 'react'
import { Map, Marker, Popup, TileLayer, LayersControl } from 'react-leaflet'

export class GenericMap extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className="map-generic">
        <div className="map-generic__map">
          <div className="map__wrapper">
            <div className="map map__inner--visible">
              <div className="map__content">
                <div className="map__canvas__wrapper">
                  <Map center={ this.props.position } zoom={ this.props.zoom } style={{height: '100%'}}>
                    <TileLayer
                      url="http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                      attribution="Skedsmo kommune"
                    />
                  </Map>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}
