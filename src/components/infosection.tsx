import React, { ReactNode } from 'react'
import { Box } from '@mui/material';
import grid from '../styles/grid.module.scss'
import VisitorsCard from './visitorscard';
import OrdersCard from './orderscard';

interface InfoSectionProps {
    children?: ReactNode;
}

const InfoSection: React.FC<InfoSectionProps> = () => {
  return (
    <Box className={grid.InfoSection}>
      <VisitorsCard />
      <OrdersCard />        
    </Box> 
  )
}

export default InfoSection