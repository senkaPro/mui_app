import React, { ReactNode } from 'react'
import { styled } from '@mui/material/styles';
import styles from '../styles/main.module.scss'

interface MainProps {
    open?: boolean,
    drawerWidth: number,
    children?: ReactNode
}

const MainContainer = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<MainProps>(({ theme, open, drawerWidth, ...rest }) => ({
  flexGrow: 1,
  padding: theme.spacing(0),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth ? drawerWidth : 0}px`,
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

const Main: React.FC<MainProps> = ({children, ...rest}) => {
    return <MainContainer {...rest} className={styles.Main}>
        {children}
    </MainContainer>
}

export default Main 