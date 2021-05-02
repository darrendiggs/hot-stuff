

import { Toast, ToastBody } from 'reactstrap';

function EventInfoBox(props) {
  return (
    <div className="eventInfo">

      <Toast onClick={() => props.setlocationInfo(null)}>
        <ToastBody>
          <p>{props.info.title}</p>
          <p>Id: {props.info.id}</p>
          </ToastBody>
      </Toast>
    </div>
  )
} 

export default EventInfoBox
