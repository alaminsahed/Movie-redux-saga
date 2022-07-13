import * as types from '../../redux/type';
import { takeEvery, put, call } from 'redux-saga/effects';
import { userSuccess, userError, createUserSuccess, createUserError, deleteUserSuccess, deleteUserError } from '../../redux/action';
import { loadUserApi } from '../request/api';
import { AddUserApi, DeleteUserApi } from '../request/api';


export function* userSaga() {
    try {
        const response = yield call(loadUserApi);
        yield put(userSuccess(response.data));
    } catch (error) {
        yield put(userError(error));
    }
}

export function* addUserSaga({ payload }) {
    try {
        const response = yield call(AddUserApi, payload);
        yield put(createUserSuccess(response.data));

    } catch (error) {
        yield put(createUserError(error));
    }
}

export function* deleteUserSaga({ payload }) {
    try {
        const response = yield call(DeleteUserApi, payload);
        yield put(deleteUserSuccess(response.data));

    } catch (error) {
        yield put(deleteUserError(error));
    }
}

export function* onLoadUser() {
    yield takeEvery(types.Loading, userSaga)
}

export function* addUser() {
    yield takeEvery(types.CreateUserStart, addUserSaga)
}

export function* deleteUser() {
    yield takeEvery(types.DeleteUserStart, deleteUserSaga)

}
