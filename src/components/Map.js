

import GoogleMap from 'google-map-react'

const Map = ({ center, zoom }) => {
  return (
    <div className="map">
      <GoogleMap
        bootstrapURLKeys={{ key: '' }}
        defaultCenter={center}
        defaultZoom={zoom}
      >

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