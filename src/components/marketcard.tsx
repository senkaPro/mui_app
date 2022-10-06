import React from 'react' 
import { useNavigate } from 'react-router-dom'
import { Box, Typography } from '@mui/material'
import { GridCardCoreRight } from './gridcard-core'
import appicon from '../assets/new-app.png'
import arrow from '../assets/arrow-right.png'
import cards from '../styles/cards.module.scss'
import AdsScroll from './adsscroll'

const MarketCard = () => {
  const navigate = useNavigate()
  return (
    <GridCardCoreRight>
      <Box className={cards.MarketCard}>
        <Box className={cards.MarketTitleContainer}>
          <Box className={cards.MarketTitle}>
            <Box className={cards.MarketTitleIcon}>
              <img src={appicon} alt="App icon" />
            </Box>
            <Typography className={cards.MarketTitleText}>
              Extensions Marketplace
            </Typography>
          </Box>
        </Box>  
        <AdsScroll />
        <Box className={cards.MarketCardLinkContainer} onClick={() => navigate('/extensions')}>
          <Typography className={cards.MarketCardLinkText}>
            Discover all extensions
          </Typography>
          <Box className={cards.MarketCardLinkIcon}>
            <img src={arrow} alt="Arrow icon right" />
          </Box>
        </Box>
      </Box>
    </GridCardCoreRight>
  )
}

export default MarketCard