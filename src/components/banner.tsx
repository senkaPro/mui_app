import React from 'react'
import { styled } from '@mui/material/styles';
import styles from '../styles/main.module.scss'
import { Box, Typography } from '@mui/material';
import ExternalLink from '@mui/icons-material/Launch';

interface BannerProps {
    open?: boolean;
    drawerWidth: number;
    className?: string;
}

const Container = styled('div', { shouldForwardProp: (prop) => prop !== 'open' })<BannerProps>(({ theme, open, drawerWidth, }) => ({
  flexGrow: 0,
  width: 'fill',
  height: '182px',
  marginTop: '60px',
  marginLeft: 0,
  padding: theme.spacing(0),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
    },   
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    width: `calc(100% - ${drawerWidth})`,
    marginTop: '60px',
    marginLeft: `${drawerWidth}`,
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
    },
  }),
}));


const Banner: React.FC<BannerProps> = ({open, drawerWidth}) => {
  return (
    <Container className={styles.BannerContainer} open={open} drawerWidth={drawerWidth}>
        <Box className={styles.Banner}>
            <Typography className={styles.BannerText_left}>Welcome Mario!</Typography>
            <Box className={styles.BannerContent_right}>
                <Typography className={styles.BannerText_right}>app.vetrinalive.it/fenoh-store</Typography>
                <ExternalLink className={styles.ExternalLinkIcon} />
            </Box>
        </Box>
    </Container>
  )
}

export default Banner