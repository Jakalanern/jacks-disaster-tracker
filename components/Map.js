import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api'
import { useEffect, useState } from 'react'
import mapStyles from '../styles/Map.module.css'
import FireInfo from './FireInfo'
import EventMarker from './EventMarker'
import Hint from './Hint'
import Donate from './Donate'
const defaultProps = {
  center: {
    lat: 40.28223044977514,
    lng: -105.7731614572864,
  },
  zoom: 4,
}

const Map = ({
  center,
  zoom,
  fires,
  loading,
  eventIcon,
  handleHint,
  iconClicked,
}) => {
  const [locationInfo, setLocationInfo] = useState(null)
  const [showInfo, setShowInfo] = useState(false)
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyAVwTTbCccDxHs9PJ52z3yD0zuLbFxeMk8',
  })

  const clearLocationInfo = () => {
    setLocationInfo(null)
  }

  const saveLocationInfo = (info) => {
    setLocationInfo(info)
  }

  const showInfoHandler = () => {
    setShowInfo(true)
  }

  if (!isLoaded) return <div>Loading...</div>
  return (
    <GoogleMap
      zoom={defaultProps.zoom}
      center={defaultProps.center}
      mapContainerClassName={mapStyles.map}>
      {loading === false &&
        fires.map((fire) => {
          let fireLang = fire.geometries[0].coordinates[0]
          let fireLat = fire.geometries[0].coordinates[1]
          return (
            <div className='marker' key={fire.id}>
              <EventMarker
                showInfoHandler={showInfoHandler}
                clearLocationInfo={clearLocationInfo}
                saveLocationInfo={saveLocationInfo}
                locationInfo={locationInfo}
                fire={fire}
                fireLat={fireLat}
                fireLang={fireLang}
                eventIcon={eventIcon}
                handleHint={handleHint}
              />
            </div>
          )
        })}
      <Donate
        href={'https://www.gofundme.com/c/act/wildfire-relief/california'}
      />
      {showInfo && <FireInfo locationInfo={locationInfo} />}
      {iconClicked === false && <Hint />}
    </GoogleMap>
  )
}

export default Map
