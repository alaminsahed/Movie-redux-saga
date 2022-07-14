import * as types from '../../redux/type';
import { takeEvery, put, call, takeLatest, take, delay } from 'redux-saga/effects';
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

export function* deleteUserSaga(id) {
    console.log("p", id);
    try {
        const response = yield call(DeleteUserApi, id);
        console.log(response);
        if (response.status === 200) {
            yield delay(200);
            yield put(deleteUserSuccess(id));
        }

    } catch (error) {
        console.log("e", error);
        yield put(deleteUserError(error));
    }
}

export function* onLoadUser() {
    yield takeEvery(types.Loading, userSaga)
}

export function* addUser() {
    yield takeLatest(types.CreateUserStart, addUserSaga)
}

export function* deleteUser() {
    while (true) {
        const { payload: id } = yield take(types.DeleteUserStart);
        yield call(deleteUserSaga, id)

    }
}
