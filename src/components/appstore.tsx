import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Typography } from '@mui/material'
import { GridCardCoreLeft } from './gridcard-core'
import cards from '../styles/cards.module.scss'
import right from '../assets/arrow-right-white.png'
import appstore from '../assets/appstore.png'
import googleplay from '../assets/googleplay.png'

const AppstoreCard = () => {
    const navigate = useNavigate()

  return (
    <GridCardCoreLeft>
        <Box className={cards.AppstoreCard}>
            <Typography className={cards.MainText}>
                Sell your products on your exclusive APP published on the stores 
            </Typography>
            <Box className={cards.MainLink} onClick={() => navigate('/show-more')}>
                <Typography className={cards.LinkText}>Show more</Typography>
                <Box className={cards.LinkIcon}>
                    <img src={right} alt="Arrow right icon" />
                </Box>
            </Box>
            <Box className={cards.deviceImage}/>
            <Box className={cards.AppstoreIcons}>
                <Box className={cards.appstore} onClick={() => navigate('/appstore')}>
                    <img src={appstore} alt="Appstore icon" />
                </Box>
                <Box className={cards.googleplay} onClick={() => navigate('/googleplay')}>
                    <img src={googleplay} alt="Appstore icon" />
                </Box>
            </Box>
        </Box>
    </GridCardCoreLeft>
  )
}

export default AppstoreCard