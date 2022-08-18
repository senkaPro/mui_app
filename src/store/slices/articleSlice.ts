import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Article from '../types/Article';

interface ArticleState {
    articles: Article[] | [];
}

const initialState: ArticleState = {
    articles: []
};

export const articleSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {
    getArticles: (state: typeof initialState) => state,
    setArticles: (state: typeof initialState, action: PayloadAction<Article[]>) => {
        state.articles = action?.payload;
    }
  },
});
export const actions = articleSlice.actions;
export default articleSlice.reducer;