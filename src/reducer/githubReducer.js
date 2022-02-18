const githubReducer = (state, action) => {
	switch (action.type) {
		case 'GET_USERS':
			return {
				...state,
				users: action.payload,
				loading: false,
				clear: true,
				noresult: false,
			};
		case 'CLEAR_USERS':
			return {
				...state,
				users: [],
				loading: false,
				clear: false,
				noresult: true,
			};
		case 'GET_USER':
			return {
				...state,
				user: action.payload,
			};
		case 'CLEAR_USER':
			return {
				...state,
				user: {},
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
