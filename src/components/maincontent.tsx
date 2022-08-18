import React, {ReactNode} from 'react'
import { Box } from '@mui/material'
import styles from '../styles/main.module.scss'

interface MainContentProps {
    children?: ReactNode
}

const MainContent: React.FC<MainContentProps> = ({children}) => {
  return (
    <Box className={styles.MainContentContainer}>{children}</Box>
  )
}

export default MainContent