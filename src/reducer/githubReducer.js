const githubReducer = (state, action) => {
	switch (action.type) {
		case 'GET_USERS':
			return {
				...state,
				users: action.payload,
				loading: false,
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
