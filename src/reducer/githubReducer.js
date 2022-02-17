const githubReducer = (state, action) => {
	switch (action.type) {
		case 'GET_USERS':
			return {
				...state,
				users: action.payload,
				loading: false,
				clear: true,
			};
		case 'CLEAR_USERS':
			return {
				...state,
				users: [],
				loading: false,
				clear: false,
			};
		case 'LOADING_STATE':
			return {
				...state,
				loading: true,
			};
		default:
			return {
				...state,
			};
	}
};

export default githubReducer;
