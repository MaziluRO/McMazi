import { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
	const defaultUser = { name: 'Marian', age: 30 };
	const [user, setUser] = useState(defaultUser);
	console.log(user);
	return (
		<UserContext.Provider value={{ user, setUser }}>
			{children}
		</UserContext.Provider>
	);
};
