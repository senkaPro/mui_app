import React, { ForwardRefRenderFunction, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {GridCardCoreLeft} from './gridcard-core'
import cards from '../styles/cards.module.scss'
import { Box } from '@mui/material'
import SelectDropdown from './select'
import eye from '../assets/eye.png'
import arrowRight from '../assets/arrow-right.png'

const VisitorsCard = () => {
  const [options, optionsSet] = useState(null)
  const [selectValue, selectValueSet] = useState<any>(1824)
  
  const navigate = useNavigate()
  const visitiorsRef = React.useRef<ForwardRefRenderFunction<any | null>>(null)

  useEffect(() => {
    fetch('data/visitors.json')
      .then((res) => res.json())
      .then((data) => optionsSet(data))
  }, [])

  return (
    <GridCardCoreLeft>
      <Box className={cards.VisitorsCard}>
        <Box className={cards.VisitorsCard__title_container}>
          <Box className={cards.VisitorsCard__title}>
            <Box className={cards.VisitorsCard__icon}>
              <img src={eye} alt="Visitors icon" />
            </Box>
            <span className={cards.VisitorsCard__titleText}>Visitors</span>
          </Box>
          <SelectDropdown 
            value={selectValue}
            valueSet={selectValueSet}
            options={options}
            ref={visitiorsRef}
          />
        </Box>
        <Box className={cards.VisitorsCard_counter}>{selectValue}</Box>
        <Box className={cards.VisitorsCard_linkContainer} onClick={() => navigate('/contact-us')}>
            <span className={cards.VisitorsCard_link}>
              Do you want more visits? Contact us!
            </span>
            <Box className={cards.VisitorsCard_linkIcon}>
              <img src={arrowRight} alt="Right arrow icon" />
            </Box>
        </Box>
        
      </Box>
    </GridCardCoreLeft>
  )
}

export default VisitorsCard