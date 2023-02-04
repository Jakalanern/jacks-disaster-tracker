import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api'
import { useEffect, useState } from 'react'
import fireIcon from '../icons/fire.png'
import volcanoIcon from '../icons/volcano.png'

const EventMarker = ({
  fire,
  fireLat,
  fireLang,
  saveLocationInfo,
  clearLocationInfo,
  showInfoHandler,
  eventIcon,
  handleHint,
}) => {
  const icons = {
    fire: require('../icons/fire-element--xs.png'),
    volcano: volcanoIcon,
  }
  return (
    <Marker
      onClick={() => {
        handleHint()
        showInfoHandler()
        clearLocationInfo()
        setTimeout(() => {
          saveLocationInfo(fire)
        }, 0.1)
      }}
      key={fire.id}
      position={{
        lat: fireLat,
        lng: fireLang,
      }}
      tracksViewChanges={false}
      icon={{ url: eventIcon, scaledSize: new google.maps.Size(20, 20) }}
    />
  )
}

export default EventMarker
