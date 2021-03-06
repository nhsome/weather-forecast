import React from 'react'
import CloudCircleIcon from '@material-ui/icons/CloudCircle'
import Typography from '@material-ui/core/Typography'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(1)
  }
}))

export default function Header() {
  const classes = useStyles()

  return (
    <AppBar position="relative">
      <Toolbar>
        <CloudCircleIcon className={ classes.icon } />
        <Typography variant="h6" color="inherit" noWrap>
          Прогноз погоды
        </Typography>
      </Toolbar>
    </AppBar>
  )
}
