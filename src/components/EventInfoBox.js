

function EventInfoBox({ info }) {
  return (
    <div>
      <h1>Event Info</h1>
      <p>Id: {info.id}</p>
      <p>Title: {info.title}</p>
    </div>
  )
}

export default EventInfoBox
