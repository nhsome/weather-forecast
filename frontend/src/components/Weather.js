import React, { useState, useEffect } from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import WeatherCard from './WeatherCard'
import { makeStyles } from '@material-ui/core/styles'
import fetchWeather from '../helpers/fetchWeather'
import { toast } from 'react-toastify'

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
      .catch(err => {
        toast.error(err.message)
      })
  }, [])

  const renderWeather = (weather) => {
    return weather.map(weatherItem => <WeatherCard weatherItem={ weatherItem } key={ weatherItem.id } />)
  }

  return (
    <div className={ classes.weather }>
      {
        isProgress
          ? (<CircularProgress />)
          : renderWeather(weather.consolidated_weather)
      }
    </div>
  )
}
