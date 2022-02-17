import { createContext, useReducer, useState } from 'react';

export const githubContext = createContext(null);

const GithubProvider = ({ children }) => {
	const [users, setUsers] = useState([]);
	const fetchUsers = async () => {
		const res = await fetch('https://api.github.com/users');
		const data = await res.json();
		setUsers(data);
	};
	return (
		<githubContext.Provider value={{ users ,fetchUsers}}>
			{children}
		</githubContext.Provider>
	);
};

export default GithubProvider;
