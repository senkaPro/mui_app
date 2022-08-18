import React from 'react'
import { Box } from '@mui/material'
import { Swiper, SwiperSlide } from 'swiper/react';
import cards from '../styles/cards.module.scss'
import 'swiper/css';

const Card = ({
  itemId,
  
}: {
  itemId: string;
}) => {
  return (
    <Box className={cards.ScrollItemContainer}>
        <Box className={cards.ScrollItemTitle} />
        <Box className={cards.ScrollItemContent}>
            <Box className={cards.ScrollItemText}>
            Connect your own domain 
            </Box>
        </Box>
    </Box>
  );
}

const AdsScroll = () => {  
  return (
    <Box className={cards.ScrollContainer}>
      <Swiper
      className={cards.ScrollContainer}
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><Card itemId={"webcard1"} key={"webcard1"} /></SwiperSlide>
      <SwiperSlide><Card itemId={"webcard2"} key={"webcard2"}/></SwiperSlide>
      <SwiperSlide><Card itemId={"webcard3"} key={"webcard3"}/></SwiperSlide>
      <SwiperSlide><Card itemId={"webcard4"} key={"webcard4"}/></SwiperSlide>
      <SwiperSlide><Card itemId={"webcard5"} key={"webcard5"}/></SwiperSlide>
      <SwiperSlide><Card itemId={"webcard6"} key={"webcard6"}/></SwiperSlide>
    </Swiper>
      
      
      
              
    </Box>
  )
}

export default AdsScroll