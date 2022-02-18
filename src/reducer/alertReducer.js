const alertReducer = (state, action) => {
	switch (action.type) {
		case 'SET_ALERT':
			return {
				...state,
				alert: true,
				text: action.payload,
			};
		case 'CLEAR_ALERT':
			return {
				...state,
				alert: false,
				text: '',
			};
		default:
			return {
				...state,
			};
	}
};

export default alertReducer;
