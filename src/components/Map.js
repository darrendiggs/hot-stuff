

import GoogleMap from 'google-map-react'
import FireMarker from './FireMarker'
import VolcanoMarker from './VolcanoMarker'

const Map = ({eventData, center, zoom }) => {

const markers = eventData.map(ev => {
  if(ev.categories[0].id === 8){
    return <FireMarker lat={ ev.geometries[0].coordinates[1] } lng={ev.geometries[0].coordinates[0]  } />
  }
  if (ev.categories[0].id === 12 && ev.geometries[0].coordinates.length === 2) {
    return <VolcanoMarker lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]} />
  } 

})

  return (
    <div className="map">
      <GoogleMap
        //this key needs to be hidden (.env or on server)
        bootstrapURLKeys={{ key:  }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
      {markers}
      </GoogleMap>

    </div>
  )
}

Map.defaultProps = {
  center: {
    lat: 40.3428,
    lng: -98.6836
  },
  zoom: 3
}

export default Map