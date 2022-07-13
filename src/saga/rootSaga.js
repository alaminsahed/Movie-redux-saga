import { all, fork } from 'redux-saga/effects';
import { onLoadUser, addUser, deleteUser } from './helper/userHandler';

// fork is used to run the function parallel
const Sagas = [fork(onLoadUser), fork(addUser), fork(deleteUser)];

export function* rootSaga() {

    yield all([...Sagas])

}