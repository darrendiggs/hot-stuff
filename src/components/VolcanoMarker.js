

const VolcanoMarker = ({ lat, lng, onClick }) => {
  return (
    <div className="location-marker" onClick={onClick}>
      <h4 className="location-marker">🌋</h4>
    </div>
  )
}

export default VolcanoMarker