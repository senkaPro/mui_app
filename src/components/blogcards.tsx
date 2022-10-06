import React from 'react'
import { Box } from '@mui/material'
import grid from '../styles/grid.module.scss'
import { useNavigate } from 'react-router-dom';

interface Props {
  category: string;
  title: string;
  estimatedReadingTime: string;
  image: string;
}

const BlogCards: React.FC<Props> = ({category, title, estimatedReadingTime, image}) => {
  
  const navigate = useNavigate();

  return (
    <Box className={grid.BlogCardContainer}>
      <Box className={grid.CardImg}>
        {image && (
          <img src={image} alt={title} />
        )}
      </Box>
      <Box className={grid.CardMask}>
        <Box className={grid.CardCategory}>
          {category}
        </Box>
        <Box className={grid.CardTitle}>
          {title}
        </Box>
        <Box className={grid.CardLink} onClick={() => navigate(title.replace(/[\s:]+/ig, '-').toLowerCase())}>
          Estimated Reading: {estimatedReadingTime}
        </Box>
      </Box>
    </Box>
  )
}

export default BlogCards
