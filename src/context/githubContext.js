import { createContext, useReducer, useState } from 'react';

import githubReducer from '../reducer/githubReducer';

export const githubContext = createContext(null);
const GithubProvider = ({ children }) => {
	const initialState = {
		loading: false,
		users: [],
		user: {},
		clear: false,
		noresult: true,
	};

	const [state, dispatch] = useReducer(githubReducer, initialState);

	return (
		<githubContext.Provider value={{ ...state, dispatch }}>
			{children}
		</githubContext.Provider>
	);
};

export default GithubProvider;
