import styles from '../styles/Loading.module.css'
import { CircularProgress, Typography } from '@mui/material'

const Loading = ({ loadingName }) => {
  return (
    <div className={styles.loading}>
      <Typography
        color='primary'
        component='h1'
        sx={{
          mb: 4,
          fontSize: { xs: 48, sm: 62, md: 72 },
          textAlign: 'center',
          fontWeight: 400,
        }}>
        {loadingName}
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
