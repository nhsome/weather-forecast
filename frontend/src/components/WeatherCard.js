import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import toLocalDateString from '../helpers/toLocalDateString'
import { weatherStatesTitles } from '../assets/lists'

const useStyles = makeStyles(theme => ({
  card: {
    height: '100%',
    display: 'inline-block',
    margin: theme.spacing(2),
    width: '100%',
    maxWidth: '250px',
    textAlign: 'left'
  },
  header: {
    marginBottom: theme.spacing(2)
  },
  weatherState: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(2)
  },
  weatherStateIcon: {
    width: '40px',
    height: '40px',
    marginRight: theme.spacing(1)
  },
  cardContent: {
    flexGrow: 1
  },
  temperature: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: theme.spacing(2)
  },
  theTemp: {
    marginBottom: theme.spacing(1)
  }
}))

const weatherIconBase = 'https://www.metaweather.com/static/img/weather'

export default function WeatherCard({ weatherItem }) {
  const classes = useStyles()

  return (
    <Card className={ classes.card }>
      <CardContent className={ classes.cardContent }>
        <Typography className={ classes.header } gutterBottom variant="h6" component="h2">
          { toLocalDateString(weatherItem.applicable_date) }
        </Typography>
        <Typography className={ classes.weatherState }>
          <img className={ classes.weatherStateIcon }
               alt={ weatherItem.weather_state_name }
               src={ `${ weatherIconBase }/${ weatherItem.weather_state_abbr }.svg` } />
          { weatherStatesTitles[weatherItem.weather_state_abbr] || weatherItem.weather_state_name }
        </Typography>
        <Typography className={ classes.temperature }>
          <span className={ classes.theTemp }>Температура: { parseInt(weatherItem.the_temp) }°C</span>
          <span>Мин. температура: { parseInt(weatherItem.min_temp) }°C</span>
          <span>Макс. температура: { parseInt(weatherItem.max_temp) }°C</span>
        </Typography>
      </CardContent>
    </Card>
  )
}
