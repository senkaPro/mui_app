import React from 'react'
import { OptionUnstyled, SelectUnstyled } from '@mui/base'
import { Box } from '@mui/material'
import cards from '../styles/cards.module.scss'
import down from '../assets/chevron-down.png'

interface OptionProps {
  label: string;
  value: any;
}


interface SelectDropdownProps {
    value: string | number | any | null;
    options: OptionProps[] | null;
    valueSet: (val: any) => void;
    ref: any
}

const SelectDropdown: React.FC<SelectDropdownProps> = React.forwardRef(({value, valueSet, options}, ref) => {
    return (
    <Box className={cards.SelectDropdown_select} ref={(ref as typeof React.forwardRef)}>
        <SelectUnstyled 
            className={cards.SelectDropdown_option} 
            value={value} 
            defaultValue={value}
            onChange={valueSet}
            componentsProps={{
                root: {
                    className: cards.SelectButton
                },
                popper: {
                    className: cards.SelectPopper,
                }
            }}
        >
        {options && options.map((opt: OptionProps, idx: number) => (
            <OptionUnstyled key={`$[opt.label}-${idx}`} value={opt.value} >{opt['label']}</OptionUnstyled>
            )
        )}

        </SelectUnstyled>
        <Box className={cards.SelectDropdown_selectIcon}>
            <img src={down} alt="Down arrow" />
        </Box>
    </Box>
  )
})

export default SelectDropdown