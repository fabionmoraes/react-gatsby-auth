import { takeLatest, put, all } from 'redux-saga/effects';

import { signNotificationRequest, updateNotificationSuccess } from './actions';

export function* updateNotificationProfile({ payload }) {
  try {
    const response = payload.data;
    yield put(signNotificationRequest(response));
  } catch (err) {
    //
    yield put(signNotificationRequest(0));
  }
}

export function* updateNotificationEdit({ payload }) {
  try {
    yield put(updateNotificationSuccess(payload.data));
  } catch (err) {
    //
    yield put(updateNotificationSuccess());
  }
}

export default all([
  takeLatest(
    '@notification/SIGN_NOTIFICATION_REQUEST',
    updateNotificationProfile
  ),
  takeLatest(
    '@notification/UPDATE_NOTIFICATION_SUCCESS',
    updateNotificationEdit
  ),
]);
