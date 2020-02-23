import React from 'react'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  }
}))

export default function Footer() {
  const classes = useStyles()

  return (
    <footer className={ classes.footer }>
      <Typography variant="body2" color="textSecondary" align="center">
        { 'Copyright © ' }
        <Link color="inherit" href="https://github.com/nhsome/weather-forecast">
          Alex Shor (nhsome) — Прогноз погоды
        </Link>{ ' ' }
        { new Date().getFullYear() }
      </Typography>
    </footer>
  )
}
