import React, { useState, useEffect } from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import WeatherCard from './WeatherCard'
import { makeStyles } from '@material-ui/core/styles'
import fetchWeather from '../helpers/fetchWeather'
import { toast } from 'react-toastify'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme => ({
  weather: {
    padding: theme.spacing(3),
    textAlign: 'center'
  }
}))

export default function Weather() {
  const classes = useStyles()
  const [ isProgress, setProgress ] = useState(true)
  const [ weather, setWeather ] = useState({
    consolidated_weather: []
  })

  useEffect(() => {
    fetchWeather(setProgress, setWeather)
      .then(weather => {
        setWeather(weather)
      })
      .catch(err => {
        toast.error(err.message)
      })
      .finally(() => {
        setProgress(false)
      })
  }, [])

  return (
    <div className={ classes.weather }>
      {
        isProgress
          ? (<CircularProgress />)
          : <>
            <Typography className={ classes.header } gutterBottom variant="h4" component="h1">
              { weather.title }
            </Typography>
            {
              weather.consolidated_weather.map(
                weatherItem => <WeatherCard weatherItem={ weatherItem } key={ weatherItem.id } />
              )
            }
          </>
      }
    </div>
  )
}
