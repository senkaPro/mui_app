import React, { ReactNode } from 'react'
import { Box, Button, Typography } from '@mui/material'
import grid from '../styles/grid.module.scss'
import { useNavigate } from 'react-router-dom'
import arrowRight from '../assets/arrow-right.png'
import arrowRightGreen from '../assets/arrow-right-green.png'
import useVariant from '../hooks/useVariant'

type IconTitle = {
    icon: string,
    title: string,
}

interface Props {
    variant?: "dark"
    contentElement?: ReactNode
    iconTitle?: IconTitle
    link?: string
    btnText?: string
}

const SideCard: React.FC<Props> = ({iconTitle, link, contentElement, variant, btnText}) => {
  const navigate = useNavigate()
  const {cardColor, titleColor, linkColor } = useVariant(variant)

  return (
    <Box className={grid.SideCardContainer} sx={cardColor}>
        {iconTitle && (
            <Box className={grid.SideCardIconTitle}>
                <Box className={grid.SideCardIcon}>
                    <img src={iconTitle?.icon} alt={iconTitle.title} />
                </Box>
                <Box className={grid.SideCardTitle} sx={titleColor}>{iconTitle?.title}</Box>
            </Box>
            
        )}
        {contentElement && contentElement}
        {link && (
            <Box sx={linkColor} className={grid.SideCardLinkContainer}  onClick={() => navigate(link.replace(/[\s:]+/ig, '-').toLowerCase())}>
                <Typography className={grid.SideCardLink}>{link}</Typography>
                <Box className={grid.SideCardImg}>
                    {variant !== "dark" 
                        ? <img src={arrowRight} alt="Right arrow" />
                        : <img src={arrowRightGreen} alt="Right arrow" />
                    }
                </Box>
            </Box>
        )}
        {btnText && (
            <Button variant='contained' size='large' className={grid.SideCardButton} onClick={() => alert("Thank you for contacting us!")}>
                <span className={grid.text}>{btnText}</span>
            </Button>
        )}
    </Box>
  )
}

export default SideCard
