
import { useState } from 'react'
import GoogleMap from 'google-map-react'
import FireMarker from './FireMarker'
import VolcanoMarker from './VolcanoMarker'
import EventInfoBox from './EventInfoBox'

const Map = ({ eventData, center, zoom }) => {

  const [locationInfo, setlocationInfo] = useState(null)

  const markers = eventData.map(ev => {
    if (ev.categories[0].id === 8) {
      return <FireMarker
        lat={ev.geometries[0].coordinates[1]}
        lng={ev.geometries[0].coordinates[0]}
        onClick={() => setlocationInfo({ id: ev.id, title: ev.title })}
      />
    }
    if (ev.categories[0].id === 12 && ev.geometries[0].coordinates.length === 2) {
      return <VolcanoMarker
        lat={ev.geometries[0].coordinates[1]}
        lng={ev.geometries[0].coordinates[0]}
        onClick={() => setlocationInfo({ id: ev.id, title: ev.title })}
      />
    }

  })

  return (
    <div className="map container my-auto">
      <GoogleMap
        //this key needs to be hidden (.env or on server)
        bootstrapURLKeys={{ key:  }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {markers}
      </GoogleMap>
      {locationInfo && <EventInfoBox info={locationInfo} />}
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