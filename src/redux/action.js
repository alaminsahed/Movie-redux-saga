import * as types from './type';


export const loadingStart = () => {
    return {
        type: types.Loading,
    }
}

export const userSuccess = (user) => {
    return {
        type: types.Success,
        payload: user,
    }
}

export const userError = (error) => {
    return {
        type: types.Error,
        payload: error,
    }
}

export const createUserStart = (user) => {
    return {
        type: types.CreateUserStart,
        payload: user,
    }
}

export const createUserSuccess = () => {
    return {
        type: types.CreateUserSuccess,

    }
}

export const createUserError = (error) => {
    return {
        type: types.CreateUserError,
        payload: error,
    }
}

export const deleteUserStart = (id) => {
    return {
        type: types.DeleteUserStart,
        payload: id,
    }
}

export const deleteUserSuccess = (id) => {
    return {
        type: types.DeleteUserSuccess,
        payload: id,
    }
}

export const deleteUserError = (error) => {
    return {
        type: types.DeleteUserError,
        payload: error,
    }
}