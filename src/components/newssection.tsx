import React, { ReactNode } from 'react'
import { Box, CircularProgress } from '@mui/material';

import grid from '../styles/grid.module.scss'
import news from '../assets/news.png'
import externalLink from '../assets/external-link-blue.png'
import { useNavigate } from 'react-router-dom';
import BlogCards from './blogcards';
import useArticles from '../hooks/useArticles';

interface NewsSectionProps {
    children?: ReactNode;
}

const NewsSection: React.FC<NewsSectionProps> = () => {
  const navigate = useNavigate()
  const {loading, articles } = useArticles() 
  

  return (
    <Box className={grid.NewsSection}>
      <Box className={grid.NewsSectionTitleContainer}>  
        <Box className={grid.NewsSectionTitle}>
          <Box className={grid.NewsSectionIcon}>
            <img src={news} alt="News icon" />
          </Box>
          <Box className={grid.NewsSectionTitleText}>
            Latest news
          </Box>
        </Box>
        <Box className={grid.NewsSectionTitleLinkContainer} onClick={() => navigate('/blog')}>
          <Box className={grid.NewsSectionTitleLink}>Visit our blog</Box>
          <Box className={grid.NewsSectionTitleIcon}>
            <img src={externalLink} alt="External link icon" />
          </Box>
        </Box>
      </Box>
      <Box className={grid.NewsSectionBlogCardContainer}>
        {loading && (
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <CircularProgress />
          </Box>
        )}
        {articles.length > 0 && articles.map((article, idx) => (
          <BlogCards key={idx} 
            {...article}
          />
        ))}
      </Box>
    </Box> 
  )
}

export default NewsSection