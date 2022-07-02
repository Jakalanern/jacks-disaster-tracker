import styled, { keyframes } from 'styled-components'
import { merge, bounceIn, fadeIn, flipInY } from 'react-animations'

export const anim = keyframes`${merge(bounceIn, fadeIn)}
`

export const EventInfo = styled.div`
  position: fixed;
  bottom: 3em;
  left: 2em;
  max-width: 300px;
  min-height: 125px;
  background: #1976d294;
  border: 2px solid rgba(255, 255, 255, 0.774);
  border-radius: 0.5em;
  z-index: 99;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.25em;
  padding: 0.75rem 1rem;
`
