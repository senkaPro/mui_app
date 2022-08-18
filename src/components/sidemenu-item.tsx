import React, { ReactNode, useCallback, useState } from 'react'
import { Box } from '@mui/material'
import menu from '../styles/side-menu.module.scss'
import down from '../assets/chevron-down.png'
import up from '../assets/chevron-up.png'
import DropdownMenu from './dropdownmenu';
import { useNavigate } from 'react-router-dom'

export interface SideMenuItemProps {
    icon?: string | ReactNode;
    title?: string | ReactNode;
    chip?: boolean | number;
    dropdown?: boolean;
    dropdownName?: string;
}

const SideMenuItem: React.FC<SideMenuItemProps> = ({icon, title, chip, dropdown, dropdownName}) => {
    const [dropdownOpen, dropdownOpenSet] = useState<boolean>(false)
    const navigate = useNavigate()

    const handleDropdown = useCallback(() => {
        dropdown && dropdownOpenSet(!dropdownOpen)
        title && navigate(title.toString().toLowerCase().replace(/([\s])+/g, '-'))
    },[dropdown, dropdownOpen, title, navigate])

  return (
    <>
        <Box className={menu.MenuItemContainer} onClick={handleDropdown}>
            <Box className={menu.MenuItem}>
                <Box className={menu.Item}>         
                    {icon && typeof icon === 'string' 
                        ? <Box className={menu.ItemIcon}>
                                <img src={icon} alt="Icon" />
                            </Box>
                        : <Box className={menu.ItemIcon}>{icon}</Box>
                    }
                    {title && typeof title === 'string' 
                        ? <Box className={menu.ItemTitle}>
                                {title}
                            </Box>
                        : <Box className={menu.ItemTitle}>{title}</Box>
                    }
                </Box>
                {dropdown && (
                    !dropdownOpen 
                    ? (
                        <Box className={menu.DropdownIcon}>
                            <img src={down} alt="Dropdown icon open" />
                        </Box>
                    ):(
                        <Box className={menu.DropdownIcon}>
                            <img src={up} alt="Dropdown icon close" />
                        </Box>
                    )
                )}
                {chip && (
                    <Box className={menu.DropdownChip}>
                        <Box className={menu.DropdownChipContainer}>
                            <Box className={menu.DropdownChipContent}>
                                {chip}
                            </Box>
                        </Box>
                    </Box>
                )}
            </Box>
        </Box>
        {dropdownOpen && (
            <DropdownMenu name={dropdownName} />
        )}
    </>
    
  )
}

export default SideMenuItem