import styles from '../styles/Loading.module.css'
import { CircularProgress, Typography } from '@mui/material'

const Loading = () => {
  return (
    <div className={styles.loading}>
      <Typography
        variant='h1'
        color='primary'
        component='h1'
        sx={{
          mb: 4,
          fontSize: { xs: 48, sm: 62, md: 96 },
          textAlign: 'center',
        }}>
        LOADING
      </Typography>
      <CircularProgress
        size='3rem'
        sx={{
          mr: 2,
          color: 'primary',
        }}
      />
    </div>
  )
}

export default Loading
