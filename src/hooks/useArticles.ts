import { useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { actions } from '../store/slices/articleSlice'
import { RootState } from '../store/store'

const useArticles = () => {
  const {loading} = useSelector((state: RootState) => state.common)
  const articles = useSelector((state: RootState) => state.articles.articles)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(actions.getArticles())
  }, [dispatch])
  
  return {
    loading,
    articles
  }
}

export default useArticles
