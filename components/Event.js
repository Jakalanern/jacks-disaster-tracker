import React from 'react'
import { StyledEvent } from './styles/Event.styled'
import styles from '../styles/Event.module.css'

const Event = ({ event }) => {
  const eventTitleStyles = {
    display: 'inline-block',
    marginBottom: '.5rem',
    color: '#1976d2db',
    fontSize: '1.25rem',
    textDecoration: 'underline',
  }
  const eventCoordStyles = {
    margin: '.2rem',
  }
  const eventCategoryStyles = {
    marginTop: 'auto',
  }
  const eventLinkStyles = {
    marginBottom: '.5rem',
    whiteSpace: 'pre-wrap' /* CSS3 */,
    whiteSpace: '-moz-pre-wrap' /* Mozilla, since 1999 */,
    whiteSpace: '-pre-wrap' /* Opera 4-6 */,
    whiteSpace: '-o-pre-wrap' /* Opera 7 */,
    wordWrap: 'break-word' /* Internet Explorer 5.5+ */,
    color: '#1976d2db',
    marginTop: '.25rem',
  }

  return (
    <StyledEvent
      onClick={() => {
        window.open(event.sources[0].url && event.sources[0].url)
      }}>
      <h3 style={eventTitleStyles}>{event.title}</h3>
      <p style={eventCoordStyles}>
        <b>Longitude:</b> {event.geometries[0].coordinates[0]}
      </p>
      <p style={eventCoordStyles}>
        <b>Latitude:</b> {event.geometries[0].coordinates[1]}
      </p>
      <p style={{ eventCategoryStyles, marginTop: 'auto', marginBottom: 0 }}>
        <b>Category:</b> {event.categories[0].title}
      </p>
      <a
        href={event.sources[0].url && event.sources[0].url}
        style={eventLinkStyles}>
        {event.sources[0].url && event.sources[0].url}
      </a>
      <br />
    </StyledEvent>
  )
}

export default Event
