import React, { useEffect, useState } from 'react'
import { Box, MenuItem, Select, Typography } from '@mui/material'
import menu from '../styles/side-menu.module.scss'

const selectOptions = [
    {
        label: "Fenoh Store",
        value: "fenoh"
    },
    {
        label: "Goodle Store",
        value: "google"
    },
    {
        label: "Apple Store",
        value: "apple"
    }
]

interface OptionProps {
    label: string;
    value: any;
}

const SelectWithLabel = () => {
    const [selectedValue, selectedValueSet] = useState("")
    const [options, optionsSet] = useState<OptionProps[]>([])

    useEffect(() => {
        optionsSet(selectOptions)
        selectedValueSet("fenoh")
    },[])

  return (
    <Box className={menu.SelectWithLabelContainer}>
        <Typography className={menu.FormLabel}>
            Select your shop
        </Typography>
        <Select
            value={selectedValue}
            className={menu.Select}
            labelId="id"
            onChange={({target: {value}}) => selectedValueSet(value)}
        >
            {options?.map(({label, value}, idx) => (
                <MenuItem key={`${value}-${idx}`} value={value}> {label} </MenuItem>
            ))}
        </Select>
    </Box>
  )
}

export default SelectWithLabel