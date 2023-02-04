import { useEffect } from 'react'
import styles from '../styles/Hint.module.css'

const Hint = () => {
  return (
    <div className={styles.hint} id='hint'>
      <p>Click an icon to view more info!</p>
    </div>
  )
}

export default Hint
