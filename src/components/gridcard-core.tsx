import React, { ReactNode } from 'react'
import { Box } from '@mui/material'
import cards from '../styles/cards.module.scss'

interface CoreCardProps {
  className?: string
  children?: ReactNode;
}

export const GridCardCoreLeft: React.FC<CoreCardProps> = React.forwardRef(({className, children}, ref) => {
  
  return (
    <Box ref={ref} className={cards.GridCardCoreLeft} classes={{card: className}}>
      {children}
    </Box>
  )
})

export const GridCardCoreRight: React.FC<CoreCardProps> = React.forwardRef(({className, children}, ref) => {
  
  return (
    <Box ref={ref} className={cards.GridCardCoreRight} classes={{card: className}}>
      {children}
    </Box>
  )
})

