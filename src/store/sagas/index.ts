import { all, fork } from 'redux-saga/effects';
import articlesWatcher from './articlesSaga';

export default function* rootSaga() {
  yield all([
    fork(articlesWatcher),
  ]);
}