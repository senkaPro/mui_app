import React, { ReactNode } from 'react'
import { Box } from '@mui/material'
import menu from '../styles/side-menu.module.scss'

interface SideMenuProps {
    children?: ReactNode
}

const SideMenu: React.FC<SideMenuProps> = ({children}) => {
  return (
    <Box className={menu.SideMenuContainer}>
        {children}
    </Box>
  )
}

export default SideMenu