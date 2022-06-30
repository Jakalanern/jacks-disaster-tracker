import styled, { keyframes } from 'styled-components'
import { merge, bounceIn, fadeIn, flipInY } from 'react-animations'

export const anim = keyframes`${merge(bounceIn, fadeIn)}
`

export const FireTitle = styled.h1`
  font-size: 1.15em;
  line-height: 1.5em;
  color: white;
  padding: 2em 1em;
  text-align: center;
  animation: 0.35s ${anim};
`
