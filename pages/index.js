import Map from '../components/Map'
import ResponsiveAppBar from '../components/ResponsiveAppBar'
import Head from 'next/head'
import { Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import Loading from '../components/Loading'
import styles from '../styles/Layout.module.css'
import FireInfo from '../components/FireInfo'

export default function Index() {
  const icons = {
    fire: 'https://i.ibb.co/CwrWF2P/new-flame-xxxs.png',
    volcano: 'https://i.ibb.co/NZRT1GY/output-onlinepngtools-6.png',
  }
  const [fires, setFires] = useState()
  const [loading, setLoading] = useState()
  const [eventID, setEventID] = useState(8)
  const [eventIcon, setEventIcon] = useState(icons.fire)
  const [loadingName, setLoadingName] = useState('LOADING WILDFIRES')
  const [iconClicked, setIconClicked] = useState(false)

  const handleHint = () => {
    setIconClicked(true)
  }

  const changeEvent = (eventID) => {
    if (eventID === 8) {
      setLoadingName('LOADING WILDFIRES')
      setEventIcon(icons.fire)
    }
    if (eventID === 12) {
      setLoadingName('LOADING VOLCANOS')
      setEventIcon(icons.volcano)
    }
    // } else if (page === 'Volcanos') {
    //   changeEvent(12)
    // } else if (page === 'Red Tide') {
    //   changeEvent(13)
    // } else if (page === 'Earthquakes') {
    //   changeEvent(16)
    // } else if (page === 'Snow') {
    //   changeEvent(17)
    // } else if (page === 'Drought') {
    //   changeEvent(6)
    // }
    setEventID(eventID)
  }

  useEffect(() => {
    const fetchFires = async () => {
      setLoading(true)
      const res = await fetch('https://eonet.gsfc.nasa.gov/api/v2.1/events')
      const { events } = await res.json()
      const fires = events.filter((event) => event.categories[0].id === eventID)
      setFires(fires)
      setLoading(false)
    }
    fetchFires()
  }, [eventID])

  return (
    <div className={styles.container}>
      <ResponsiveAppBar changeEvent={changeEvent} />
      <main className={styles.main}>
        <Head>
          <title>Disaster Tracker</title>
        </Head>
        {loading === true ? (
          <Loading loadingName={loadingName} />
        ) : (
          <Map
            fires={fires}
            loading={loading}
            eventIcon={eventIcon}
            handleHint={handleHint}
            iconClicked={iconClicked}
          />
        )}
      </main>
    </div>
  )
}
