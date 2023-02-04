import Map from '../components/Map'
import ResponsiveAppBar from '../components/ResponsiveAppBar'
import Head from 'next/head'
import { Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import Loading from '../components/Loading'
import styles from '../styles/Layout.module.css'
import FireInfo from '../components/FireInfo'
import EventList from '../components/EventList'
import fireIcon from '../icons/fire-element--xxxs.png'
import volcanoIcon from '../icons/volcano.png'

export default function Index() {
  const icons = {
    fire: 'https://cdn-icons-png.flaticon.com/512/785/785116.png',
    volcano: 'https://cdn-icons-png.flaticon.com/512/2206/2206644.png',
  }
  const [fires, setFires] = useState()
  const [loading, setLoading] = useState()
  const [eventID, setEventID] = useState(8)
  const [eventIcon, setEventIcon] = useState(icons.fire)
  const [loadingName, setLoadingName] = useState('LOADING WILDFIRES')
  const [eventName, setEventName] = useState('Wildfires')
  const [iconClicked, setIconClicked] = useState(false)
  const [viewMode, setViewMode] = useState('map')

  const changeViewMode = (modeName) => {
    setViewMode(modeName)
  }

  const handleHint = () => {
    setIconClicked(true)
  }

  const changeEvent = (eventID) => {
    if (eventID === 8) {
      setLoadingName('LOADING WILDFIRES')
      setTimeout(() => {
        setEventName('Wildfires')
      })
      setEventIcon(icons.fire)
    }
    if (eventID === 12) {
      setLoadingName('LOADING VOLCANOS')
      setTimeout(() => {
        setEventName('Volcanoes')
      })
      setEventIcon(icons.volcano)
    }
    setEventID(eventID)
  }

  useEffect(() => {
    const fetchFires = async () => {
      setLoading(true)
      const res = await fetch('https://eonet.gsfc.nasa.gov/api/v2.1/events')
      console.log('FETCH COMPLETE')
      const { events } = await res.json()
      const fires = events.filter((event) => event.categories[0].id === eventID)
      setFires(fires)
      setLoading(false)
    }
    fetchFires()
  }, [eventID])

  return (
    <div className={styles.container}>
      <ResponsiveAppBar
        changeEvent={changeEvent}
        changeViewMode={changeViewMode}
      />
      <main className={styles.main}>
        <Head>
          <title>Disaster Tracker</title>
        </Head>
        {loading === true && <Loading loadingName={loadingName} />}
        {!loading && viewMode === 'map' ? (
          <Map
            fires={fires}
            loading={loading}
            eventIcon={eventIcon}
            handleHint={handleHint}
            iconClicked={iconClicked}
            changeViewMode={changeViewMode}
          />
        ) : (
          <EventList events={fires} eventName={eventName} />
        )}
      </main>
    </div>
  )
}
