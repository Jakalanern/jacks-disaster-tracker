import styled, { keyframes } from 'styled-components'
import { merge, bounceIn, fadeIn, flipInY } from 'react-animations'

export const anim = keyframes`${merge(bounceIn, fadeIn)}
`

export const EventInfo = styled.div`
  position: fixed;
  bottom: 3em;
  left: 0.55em;
  max-width: 275px;
  min-height: 125px;
  background: #1976d2db;
  border-radius: 0.5em;
  z-index: 99;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.25em;
  padding: 0.75rem 1rem;
`
