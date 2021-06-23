//last state
// action
const INITIAL_STATE = {
    currentUser: null
}

//setting the default state, similar setting up this.state in constructor 
// we are saying here that when we have the action type as set_Current_user then what we want is to just change
// the currentUser object with the new one in the payload, and we let the other state remain as is as the state contain
// entire state all object and for this action we just want to update the current user one
const UserReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_CURRENT_USER':
            return {
                ...state,
                currentUser: action.payload
            }
        default:
            return state;
    }
}

export default UserReducer;