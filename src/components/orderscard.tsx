import React, { ForwardRefRenderFunction, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Typography } from '@mui/material'
import {GridCardCoreRight} from './gridcard-core'
import cards from '../styles/cards.module.scss'
import menuIcon from '../assets/menuicon.png'
import SelectDropdown from './select'

const OrdersCard = () => {
  const [options, optionsSet] = useState<any[] | null>(null)
  const [selectValue, selectValueSet] = useState<any>({
            received: 156,
            earning: 1893.24
        })
  const navigate = useNavigate()
  const ordersRef = React.useRef<ForwardRefRenderFunction<any | null>>(null)
  
  useEffect(() => {
    fetch('data/orders.json')
      .then((res) => res.json())
      .then((data) => optionsSet(data))
  }, [])

  useEffect(() => {
    if (options){
        selectValueSet(options[0].value)
    }
  }, [options])

  return (
    <GridCardCoreRight>
        <Box className={cards.OrdersCard}>
            <Box className={cards.OrdersCard_titleContainer}>
                <Box className={cards.OrdersCard_title}>
                    <Box className={cards.OrdersCard_icon}>
                        <img src={menuIcon} alt="Menu icon" />
                    </Box>
                    <Typography className={cards.OrdersCard_titleText}>Orders</Typography>
                </Box>
                <SelectDropdown 
                    value={selectValue}
                    valueSet={selectValueSet}
                    options={options}
                    ref={ordersRef}
                />
            </Box>
            <Box className={cards.OrdersCard_contentContainer}>
                <Box className={cards.OrdersCard_content}>
                    <Box className={cards.OrdersCard_row}>
                        <Typography className={cards.OrdersCard_rowLeft}>
                            Orders Received:
                        </Typography>
                        <Typography className={cards.OrdersCard_rowRight}>
                            {selectValue?.received}
                        </Typography>
                    </Box>
                    <Box className={cards.OrdersCard_row}>
                        <Typography className={cards.OrdersCard_rowLeft}>
                            Earnings:
                        </Typography>
                        <Typography className={cards.OrdersCard_rowRight}>
                            &euro; {selectValue?.earning}
                        </Typography>
                    </Box>
                </Box>
            </Box>
            <Typography className={cards.OrdersCard_link} onClick={() => navigate('/tips')}>10 free tips to increase your sales</Typography>
        </Box>
    </GridCardCoreRight>
  )
}

export default OrdersCard