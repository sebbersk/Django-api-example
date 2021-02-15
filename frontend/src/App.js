import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import AuthState from './context/auth/AuthState';
import PostState from './context/post/PostState';
import LoginForm from './LoginForm';
import { Switch, Route } from 'react-router-dom';
import setAuthToken from './utils/setAuthToken';
import Navbar from './Navbar';
import AllPost from './AllPost';
import MyPost from './MyPost';
import Showcase from './Showcase';
import PostCreator from './PostCreator';
import PrivateRoute from './utils/PrivateRoute';
function App() {
	const [register, setRegister] = useState({
		email: '',
		password: '',
		password2: '',
		name: '',
	});

	const handleRegistration = (e) => {
		e.preventDefault();
		fetch('http://localhost:8000/api/accounts/signup', {
			method: 'POST',
			headers: {
				'Content-type': 'application/json',
			},
			body: JSON.stringify(register),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
			});
	};
	const handleRegisterChange = (e) => {
		setRegister((state) => ({ ...state, [e.target.name]: e.target.value }));
	};
	if (localStorage.token) {
		setAuthToken(localStorage.token);
	}

	return (
		<>
			<AuthState>
				<PostState>
					<Navbar />
					<Switch>
						<Route exact path='/'>
							<div className='App'>
								<div className='container'>
									<div className='forms-container'>
										<div className='register-form'>
											<form onSubmit={handleRegistration}>
												<input
													type='text'
													name='email'
													placeholder='email'
													value={register.email}
													onChange={handleRegisterChange}
												/>
												<input
													type='text'
													name='name'
													placeholder='name'
													value={register.name}
													onChange={handleRegisterChange}
												/>
												<input
													type='text'
													name='password'
													placeholder='password'
													value={register.password}
													onChange={handleRegisterChange}
												/>
												<input
													type='text'
													name='password2'
													placeholder='password2'
													value={register.password2}
													onChange={handleRegisterChange}
												/>
												<button type='submit'>Register</button>
											</form>
										</div>
										<LoginForm />
									</div>
								</div>
							</div>
						</Route>
						<Route exact path='/posts' component={AllPost}></Route>
						<PrivateRoute exact path='/posts/my' component={MyPost}></PrivateRoute>
						<PrivateRoute exact path='/posts/create' component={PostCreator}></PrivateRoute>
						<Route exact path='/posts/:id' component={Showcase}></Route>
					</Switch>
				</PostState>
			</AuthState>
		</>
	);
}

export default App;
