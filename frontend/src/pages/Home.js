import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles'
import Weather from '../components/Weather'

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 'calc(100vh - 180px)',
    padding: '0'
  }
}))

export default function Home() {
  const classes = useStyles()
  const [ showForecast, setShowForecast ] = useState(false)

  return (
    <Container className={ classes.container } maxWidth="md">
      { !showForecast ?
        <Button variant="contained" color="primary" onClick={ () => setShowForecast(true) }>
          Получить прогноз погоды
        </Button> :
        <Weather />
      }
    </Container>
  )
}
