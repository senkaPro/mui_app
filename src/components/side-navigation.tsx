import React, { useEffect, useState } from 'react'
import { Box } from '@mui/material'
import SideMenu from './sidemenu'
import SideMenuItem, { SideMenuItemProps } from './sidemenu-item'
import Devider from './devider'
import menu from '../styles/side-menu.module.scss'
import SelectWithLabel from './selectwithlabel'

const SideNavigation = () => {
    const [menu1, menu1Set] = useState<SideMenuItemProps[]>([])
    const [menu2, menu2Set] = useState<SideMenuItemProps[]>([])

    useEffect(() => {
        fetch('data/menu1.json')
        .then((res) => res.json())
        .then((data) => menu1Set(data))
    }, [])

    useEffect(() => {
        fetch('data/menu2.json')
        .then((res) => res.json())
        .then((data) => menu2Set(data))
    }, [])

  return (
    <>
        <SideMenu>
            <Box className={menu.MenuContainer}>
                {menu1.length && menu1?.map((item, idx) => (
                    <SideMenuItem key={`${item.title}-${idx}`} {...item} />
                ))}
            </Box>
            <Devider />
            <Box className={menu.MenuContainer}>
                {menu2.length && menu2?.map((item, idx) => (
                    <SideMenuItem key={`${item.title}-${idx}`} {...item} />
                ))}
            </Box>
        </SideMenu>
        <SelectWithLabel />
    </>
  )
}

export default SideNavigation