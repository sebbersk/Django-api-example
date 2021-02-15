import React, { useContext, useState } from 'react';
import AuthContext from './context/auth/authContext';
import { withRouter } from 'react-router-dom';
function LoginForm(props) {
	const [login, setLogin] = useState({
		email: '',
		password: '',
	});
	const authContext = useContext(AuthContext);
	const handleLogin = (e) => {
		e.preventDefault();
		authContext.login(login);
		props.history.push('/posts/my');
	};
	const handleLoginChange = (e) => {
		setLogin((state) => ({ ...state, [e.target.name]: e.target.value }));
	};
	return (
		<div className='login-form'>
			<form onSubmit={handleLogin}>
				<input type='text' name='email' placeholder='email' value={login.email} onChange={handleLoginChange} />
				<input
					type='text'
					name='password'
					placeholder='password'
					value={login.password}
					onChange={handleLoginChange}
				/>
				<button type='submit'>Login</button>
			</form>
		</div>
	);
}

export default withRouter(LoginForm);
