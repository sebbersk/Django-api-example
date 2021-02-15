import React, { useState, useEffect, useContext } from 'react';
import AuthContext from './context/auth/authContext';
import PostContext from './context/post/postContext';

function PostCreator(props) {
	const authContext = useContext(AuthContext);
	const postContext = useContext(PostContext);
	useEffect(() => {
		authContext.loadUser();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	const [inputs, setInputs] = useState({
		title: '',
		body: '',
	});
	const handleSubmit = (e) => {
		e.preventDefault();
		postContext.createPost(inputs);
		props.history.push('/posts/my');
	};
	const handleChange = (e) => {
		setInputs((state) => ({ ...state, [e.target.name]: e.target.value }));
	};
	return (
		<>
			<div className='container'>
				<div className='create-form'>
					<form onSubmit={handleSubmit}>
						<input type='text' name='title' onChange={handleChange} value={inputs.title} />
						<textarea
							name='body'
							id=''
							cols='30'
							rows='10'
							onChange={handleChange}
							value={inputs.body}></textarea>
						<button type='submit'>Create Post</button>
					</form>
				</div>
			</div>
		</>
	);
}

export default PostCreator;
