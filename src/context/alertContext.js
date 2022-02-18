import { createContext, useReducer } from 'react';
import alertReducer from '../reducer/alertReducer';

export const alertContext = createContext(null);

const AlertProvider = ({ children }) => {
	const initialState = {
		alert: false,
		text: '',
	};

	const setAlert = (text) => {
		dispatch({ type: 'SET_ALERT', payload: text });
		setTimeout(() => {
			dispatch({ type: 'CLEAR_ALERT' });
		}, 2000);
	};

	const [state, dispatch] = useReducer(alertReducer, initialState);

	return (
		<alertContext.Provider value={{ ...state, setAlert }}>
			{children}
		</alertContext.Provider>
	);
};

export default AlertProvider;
