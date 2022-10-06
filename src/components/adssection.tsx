import React, { ReactNode } from 'react'
import { Box } from '@mui/material';
import grid from '../styles/grid.module.scss'
import AppstoreCard from './appstore';
import MarketCard from './marketcard';


interface AdsSectionProps {
    children?: ReactNode;
}

const AdsSection: React.FC<AdsSectionProps> = () => {
  return (
    <Box className={grid.AdsSection}>
        <AppstoreCard />
        <MarketCard />
    </Box> 
  )
}

export default AdsSection