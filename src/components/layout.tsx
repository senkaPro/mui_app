import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import BadgeWithIcon from './badge-with-icon';
import MuiBar from './appbar';
import Main from './main'
import Drawer from './drawer';
import appbar from '../styles/appbar.module.scss'
import icon from '../assets/Vector.png'
import Banner from './banner';
import MainGrid from './maingrid';
import SideGrid from './sidegrid';
import MainContent from './maincontent';
import InfoSection from './infosection';
import AdsSection from './adssection';
import NewsSection from './newssection';

const drawerWidth = 255;

export default function Layout() {
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <MuiBar position="fixed" open={open} drawerWidth={drawerWidth}>
        <Toolbar className={appbar.Toolbar} >
          <Typography className={appbar.Dashboard_left} noWrap component="div" onClick={handleDrawerOpen}>
            Dashboard
          </Typography>
          <BadgeWithIcon text={"What's new"} count={2} icon={icon} />
        </Toolbar>
      </MuiBar>
      <Drawer open={open} onClick={handleDrawerClose} />
      <Main open={open} drawerWidth={drawerWidth}>
        <Banner open={open} drawerWidth={drawerWidth}/>
        <MainContent>
          <MainGrid>
            <InfoSection />
            <AdsSection />
            <NewsSection />
          </MainGrid>
          <SideGrid />
        </MainContent>
      </Main>
    </>
  );
}
