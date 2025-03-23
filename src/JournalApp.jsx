import React, { Fragment } from 'react'
import { AppRouter } from './router/AppRouter'
import { AppTheme } from './theme'

export const JournalApp = () => {
  return (
    <AppTheme>
      <AppRouter />
    </AppTheme>
  )
}
