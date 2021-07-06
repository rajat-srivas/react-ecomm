import { UserActionTypes } from './user.actiontypes'
export const setCurrentUserAction = user => ({
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user
});

export const setUserAddressAction = data => ({
    type: UserActionTypes.ADD_NEW_ADDRESS,
    payload: data
});