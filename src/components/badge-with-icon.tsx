import { Badge, Box, Typography } from '@mui/material'
import React from 'react'
import appbar from '../styles/appbar.module.scss'

interface BadgeProps {
    icon?: string;
    text?: string;
    count: number;
}

const BadgeWithIcon: React.FC<BadgeProps> = ({icon, text, count}) => {
    return (
    <Box className={appbar.Badge}>
        <Badge className={appbar.BadgeContainer} badgeContent={count} color='error'>
            <img className={appbar.BadgeImage} src={icon} alt="Icon" />
            <Typography className={appbar.BadgeText}>{text}</Typography>
        </Badge>
    </Box>
  )
}

export default BadgeWithIcon