import { put, call, takeLatest } from 'redux-saga/effects';
import { actions } from '../slices/articleSlice'
import { actions as commonActions } from '../slices/commonSlice';
import { getArticlesApi } from '../api/articlesAPI';
import Article from '../types/Article';


function* getArticles() {
  yield put(commonActions.setLoading(true));
  const data: Article[] = yield call(getArticlesApi);
  if (data.length) {
    yield put(actions.setArticles(data));
  }
  yield put(commonActions.setLoading(false));
}

export default function* articlesWatcher() {
  yield takeLatest(actions.getArticles.type, getArticles);
}