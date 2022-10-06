import React, { useEffect, useState } from 'react'
import { Box } from '@mui/material'
import menu from '../styles/side-menu.module.scss'
import DropdownMeniItem from './dropdown-menu-item';

interface DropdownMenuProps {
    name?: string | undefined;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({name}) => {
    const [dropdownItems, dropdownItemsSet] = useState<string[]>(['Empty Dropdown'])

    useEffect(() => {
        name && fetch(`data/submenu.json`).then(res => res.json()).then(data => dropdownItemsSet(data[name]))
    },[name])
    
    return (
    <Box className={menu.DropDownContainer}>
        {dropdownItems && dropdownItems.map(label => (
            <DropdownMeniItem title={label} />
        ))}
    </Box>
  )
}

export default DropdownMenu