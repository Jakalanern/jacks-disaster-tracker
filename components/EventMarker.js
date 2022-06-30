import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api'
import { useEffect, useState } from 'react'

const EventMarker = ({
  fire,
  fireLat,
  fireLang,
  saveLocationInfo,
  clearLocationInfo,
  showInfoHandler,
  eventIcon,
}) => {
  const icons = {
    fire: 'https://i.ibb.co/CwrWF2P/new-flame-xxxs.png',
    volcano: 'https://i.ibb.co/NZRT1GY/output-onlinepngtools-6.png',
  }
  return (
    <Marker
      onClick={() => {
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
      icon={eventIcon}
    />
  )
}

export default EventMarker
