import React, { ReactNode } from 'react'
import { Box } from '@mui/material'
import grid from '../styles/grid.module.scss'
import SideCard from './side-card'
import tool from '../assets/tool.png'
import star from '../assets/star-green.png'
import users from '../assets/users.png'
import headphones from '../assets/headphones.png'
import profileImage from '../assets/profileImage.png'




interface SideGridProps {
    children?: ReactNode
}

const FirstCard: React.FC = () => {
  return (
    <Box className={grid.SideCardContentContainer}>
      <Box className={grid.FirstCard}>
        <Box className={grid.FirstCardTitle}>
          <span className={grid.number}>45%</span> 
          <span className={grid.completed}>Completed</span>
        </Box>
        <Box className={grid.FirstCardContent}>
          Complete all the steps to have a complete shop to best present to your customers. 
        </Box>
      </Box>
    </Box>
  )
}

const SecondCard: React.FC = () => {
  return (
    <Box className={grid.SideCardContentContainer}>
      <Box className={grid.SecondCard}>
        Show us your love by leaving a <span className={grid.green}>positive</span> review on trust pilot and receive the extension of <span className={grid.white}>50 additional products</span>
      </Box>
    </Box>
  )
}

const ThirdCard: React.FC = () => {
  return (
    <Box className={grid.SideCardContentContainer}>
      <Box className={grid.SecondCard}>
        <span className={grid.green}>Receive 50 products</span> by inviting a friend who subscribes to a plan. Your friend will receive a 30% discount coupon valid for any plan.
      </Box>
    </Box>
  )
}

const ForthCard: React.FC = () => {
  return (
    <Box className={grid.SideCardContentContainer}>
      <Box className={grid.ForthCard}>
        <Box className={grid.ForthCardImg}>
          <img src={profileImage} alt="Profile avatar" />
        </Box>
        <Box className={grid.ForthCardContent}>
          Simone is here to help you.
        </Box>
      </Box>
    </Box>
  )
}

const SideGrid: React.FC<SideGridProps> = () => {
  return (
    <Box className={grid.SideContainer}>
        <SideCard 
          link="Complete the setup!" 
          contentElement={<FirstCard/>}
          iconTitle={{icon: tool, title: "Configure your shop"}}/>
        <SideCard
          variant="dark" 
          link="Write a review on Trustpilot" 
          contentElement={<SecondCard/>}
          iconTitle={{icon: star, title: "Trustpilot"}}/>
        <SideCard
          link="Start inviting friends!" 
          contentElement={<ThirdCard/>}
          iconTitle={{icon: users, title: "Invite friend"}}/>
        <SideCard
          contentElement={<ForthCard/>}
          btnText="Contact us"
          iconTitle={{icon: headphones, title: "Customer support"}}/>
    </Box>
  )
}

export default SideGrid