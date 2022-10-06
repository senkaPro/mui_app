import React, { useCallback } from 'react'
import { Box } from '@mui/material'
import menu from '../styles/side-menu.module.scss'
import { useLocation, useNavigate } from 'react-router-dom'

interface DropdownMeniItemProps {
    title?: string | undefined
}

const DropdownMeniItem: React.FC<DropdownMeniItemProps> = ({title}) => {
    const navigate = useNavigate()
    const {pathname} = useLocation()

    const handleClick = useCallback(() => {
        title && navigate(`${pathname}/${title.toString().toLowerCase().replace(/([\s])+/g, '-')}`)
    },[title, navigate, pathname])
    
  return (
    <Box className={menu.DropdownMenuItemContainer}>
        <Box className={menu.DropdownMenuItem} onClick={handleClick}>
            <Box className={menu.DropdownItem}>
                {title}
            </Box>
        </Box>
    </Box>
  )
}

export default DropdownMeniItem