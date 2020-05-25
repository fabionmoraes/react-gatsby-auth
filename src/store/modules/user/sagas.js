import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';

import { updateProfileSuccess, updateProfileFailure } from './actions';

export function* updateProfile({ payload }) {
  try {
    const { name, email, ramal, birthday, job, ...rest } = payload.data;

    const profile = {
      name: name || null,
      email: email || null,
      ramal: ramal || null,
      birthday: birthday || null,
      job: job || null,
      ...(rest.password ? rest : {}),
    };

    const response = yield call(api.put, 'update/user', profile);

    if (response.data.error) {
      toast.warning(response.data.error);
      return;
    }

    toast.success('Perfil atualizado com sucesso!');

    yield put(updateProfileSuccess(response.data));
  } catch (err) {
    toast.error('Erro ao atualizar o perfil');
    yield put(updateProfileFailure());
  }
}

export function* updateProfilePage({ payload }) {
  try {
    yield put(updateProfileSuccess(payload.data));
  } catch (err) {
    //
    yield put(updateProfileFailure());
  }
}

export function* updateAvatar({ payload }) {
  try {
    const response = yield call(api.put, 'update/user', payload.data);

    toast.success('Avatar Atualizado com sucesso.');

    yield put(updateProfileSuccess(response.data));
  } catch (err) {
    toast.error('Erro ao atualizar o avatar');
    yield put(updateProfileFailure());
  }
}

export default all([
  takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile),
  takeLatest('@user/UPDATE_PROFILE_PAGE_REQUEST', updateProfilePage),
  takeLatest('@user/UPDATE_AVATAR_REQUEST', updateAvatar),
]);
