import { EventTitle } from './styles/EventTitle.styled'
import { EventURL } from './styles/EventURL'
import { EventInfo } from './styles/EventInfo.styled'
import Donate from './Donate'

const FireInfo = ({ locationInfo }) => {
  return (
    <EventInfo>
      {locationInfo && (
        <>
          <EventTitle>{locationInfo.title}</EventTitle>
          {!locationInfo.sources[0].url.includes('emops') && (
            <EventURL href={locationInfo.sources[0].url}>Learn More</EventURL>
          )}
          {console.log(locationInfo.sources[0].url)}
        </>
      )}
    </EventInfo>
  )
}

export default FireInfo
