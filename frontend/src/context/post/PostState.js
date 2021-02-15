import React, { useReducer } from 'react';
import postContext from './postContext';
import postReducer from './postReducer';
import axios from 'axios';

const GET_POST = 'GET_POST';
const GET_ALL_POSTS = 'GET_ALL_POSTS';
const GET_MY_POSTS = 'GET_MY_POSTS';
const CREATE_POST = 'CREATE_POST';

function PostState(props) {
	const initialState = {
		post: {},
		allPosts: [],
		myPosts: [],
	};

	const [state, dispatch] = useReducer(postReducer, initialState);

	const getAllPosts = async () => {
		try {
			const res = await axios.get('/api/posts/');
			dispatch({ type: GET_ALL_POSTS, payload: res.data });
		} catch (error) {
			console.log(error);
		}
	};

	const getMyPosts = async () => {
		try {
			const res = await axios.get('/api/posts/my');
			dispatch({ type: GET_MY_POSTS, payload: res.data });
		} catch (error) {
			console.log(error);
		}
	};
	const getPost = async (id) => {
		try {
			const res = await axios.get(`/api/posts/${id}`);
			dispatch({ type: GET_POST, payload: res.data });
		} catch (error) {
			console.log(error);
		}
	};

	const createPost = async (formData) => {
		try {
			const config = {
				headers: {
					'Content-Type': 'application/json',
				},
			};
			const res = await axios.post(`/api/posts/create`, formData, config);
			dispatch({ type: CREATE_POST, payload: res.data });
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<postContext.Provider
			value={{
				post: state.post,
				allPosts: state.allPosts,
				myPosts: state.myPosts,
				getAllPosts,
				getMyPosts,
				getPost,
				createPost,
			}}>
			{props.children}
		</postContext.Provider>
	);
}
export default PostState;
