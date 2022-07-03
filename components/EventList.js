import React from 'react'
import styles from '../styles/EventList.module.css'
import Event from './Event'

const EventList = ({ events, eventName }) => {
  return (
    <>
      <h1
        style={{
          margin: '0',
          marginTop: '100px',
          textAlign: 'center',
          fontSize: '4.5rem',
          color: '#1976d2db',
        }}>
        {eventName}
      </h1>

      <div className={styles.eventList}>
        {events ? (
          events.map((event) => <Event event={event} key={event.id}></Event>)
        ) : (
          <h1 style={{ marginTop: '100px', textAlign: 'center' }}>
            No Events To Show...
          </h1>
        )}
      </div>
    </>
  )
}

export default EventList
