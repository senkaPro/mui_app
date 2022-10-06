import React, { ReactNode } from 'react'
import { Box } from '@mui/material'
import grid from '../styles/grid.module.scss'

interface MainGridProps {
    children?: ReactNode
}

const MainGrid: React.FC<MainGridProps> = ({children}) => {
  return (
    <Box className={grid.GridContainer}>
        {children}
    </Box>
  )
}

export default MainGrid