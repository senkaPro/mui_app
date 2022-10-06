import React, { ReactNode } from 'react'
import MuiDrawer, { DrawerProps } from '@mui/material/Drawer'
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu'
import styles from '../styles/drawer.module.scss'
import logo from '../assets/logo.png'
import SideNavigation from './side-navigation';

interface ComponentProps extends DrawerProps{
    children?: ReactNode;
    open?: boolean;
    onClick?: () => void;
}

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    width: '211.25px',
    height: '24px',
    left: '20px',
    top: '24px',
    padding: theme.spacing(0),
    margin: theme.spacing(0),
}));

const CustomDrawer: React.FC<ComponentProps> = ({open, onClick}) => {
  return (
    <MuiDrawer
        variant="persistent"
        anchor="left"
        open={open}
        classes={{ root: styles.DrawerRoot, paper: styles.DrawerPaper }}
      > 
        <DrawerHeader>
          <img className={styles.DrawerHeader_logo} src={logo} alt="Logo"/>
          <IconButton onClick={onClick} className={styles.ToggleButton}>
            <MenuIcon />
          </IconButton>
        </DrawerHeader>
        <SideNavigation />
      </MuiDrawer>
  )
}

export default CustomDrawer