import { combineReducers } from 'redux'

let formState = {
	form : {}
};

const formSend = (state = formState, action) => {
	switch (action.type) {
		case 'SEND':
			return {
				...state,
				form: action.data
			};
		default:
			return state
	}
};

export default combineReducers({ formSend })