import React from 'react'
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import { styled } from '@mui/material/styles';
import styles from '../styles/appbar.module.scss'

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
  drawerWidth: number
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open, drawerWidth }) => ({
    position: 'absolute',
    height: '60px',
    left: 0,
    top: 0,
    backgroundColor: '#FFFFFF',
    boxShadow: 'none',
    transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth + 1}px)`,
    left: '256px',
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));


const MuiBar: React.FC<AppBarProps> = ({...props}:AppBarProps) => {
    return <AppBar {...props} className={styles.AppBar}/>
}

export default MuiBar