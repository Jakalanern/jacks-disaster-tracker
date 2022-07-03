import styled from 'styled-components'

export const StyledEvent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-height: 250px;
  max-width: 250px;
  font-size: 0.9em;
  padding: 0em 1em;
  text-align: center;
  margin-top: 2.5rem;
  box-shadow: 0px 2px 20px -10px gray;
  cursor: pointer;
  transition: transform 0.2s;
  border-radius: 1rem;

  &:hover {
    transform: scale(1.05);
  }
`
