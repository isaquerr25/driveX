import { all } from 'redux-saga/effects';

import app from './app/saga';

export default function* rootSaga() {
    return yield all([app]);
}









