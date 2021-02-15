const GET_POST = 'GET_POST';
const GET_ALL_POSTS = 'GET_ALL_POSTS';
const GET_MY_POSTS = 'GET_MY_POSTS';
const CREATE_POST = 'CREATE_POST';

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default (state, action) => {
	switch (action.type) {
		case GET_ALL_POSTS:
			return { ...state, allPosts: action.payload };
		case GET_MY_POSTS:
			return { ...state, myPosts: action.payload };
		case CREATE_POST:
			return { ...state, myPosts: [...state.myPosts, action.payload] };
		case GET_POST:
			return { ...state, post: action.payload };
		default:
			return state;
	}
};
