import styles from '../styles/FireInfo.module.css'
import { FireTitle } from './styles/FireTitle.styled'

const FireInfo = ({ locationInfo }) => {
  return (
    <div className={styles.fireInfo}>
      {locationInfo && <FireTitle>{locationInfo.title}</FireTitle>}
    </div>
  )
}

export default FireInfo
