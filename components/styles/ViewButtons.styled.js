import styled from 'styled-components'

export const ViewButtonWrapper = styled.div`
  display: flex;
  z-index: 99;
  gap: 0.5rem;
  margin-right: 1em;
`
export const ViewButton = styled.button`
  color: white;
  padding: 0.5rem 1rem;
  cursor: pointer;
  background: #1976d2db;
  border: 2px solid white;
  border-radius: 0.25em;
  transition: background 0.2s, transform 0.2s;
  height: max-content;
  margin-top: auto;
  margin-bottom: auto;
  font-weight: 500;
  text-transform: uppercase;
  font-size: 12px;
`
