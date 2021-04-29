

import GoogleMap from 'google-map-react'
import LocationMarker from './LocationMarker'

const Map = ({ center, zoom }) => {
  return (
    <div className="map">
      <GoogleMap
        //this key needs to be hidden (.env or on server)
        bootstrapURLKeys={{ key:  }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
      <LocationMarker lat={center.lat} lng={center.lng} />
      </GoogleMap>

    </div>
  )
}

Map.defaultProps = {
  center: {
    lat: 40.3428,
    lng: -105.6836
  },
  zoom: 5
}

export default Map