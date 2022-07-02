import { EventTitle } from './styles/EventTitle.styled'
import { EventURL } from './styles/EventURL'
import { EventInfo } from './styles/EventInfo.styled'

const FireInfo = ({ locationInfo }) => {
  return (
    <EventInfo>
      {locationInfo && (
        <>
          <EventTitle>{locationInfo.title}</EventTitle>
          {!locationInfo.sources[0].url.includes('emops') && (
            <EventURL href={locationInfo.sources[0].url}>Source</EventURL>
          )}
          {console.log(locationInfo.sources[0].url)}
        </>
      )}
    </EventInfo>
  )
}

export default FireInfo
