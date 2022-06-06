import { useContext } from 'react';
import { UserContext } from './UserContext';

const ParaComponent = () => {
	const userCtx = useContext(UserContext);
	console.log(userCtx);
	const { name, age } = userCtx.user;
	const { setUser } = userCtx;
	console.log(setUser);

	return (
		<div>
			<p>
				Hello, my name is {name} and I am {age} years old
			</p>
			<button onClick={() => setUser({ name: 'Andy', age: 40 })}>
				Click me to change name
			</button>
		</div>
	);
};

export default ParaComponent;
