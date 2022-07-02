import styled, { keyframes } from 'styled-components'
import { merge, bounceIn, fadeIn, flipInY } from 'react-animations'

export const anim = keyframes`${merge(bounceIn, fadeIn)}
`

export const EventTitle = styled.h4`
  color: white;
  text-align: center;
  animation: 0.35s ${anim};
  margin: 0;
`
