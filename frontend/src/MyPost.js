import React, { useEffect, useContext, useState } from 'react';
import PostContext from './context/post/postContext';
import AuthContext from './context/auth/authContext';

import Post from './Post';

function MyPost() {
	const postContext = useContext(PostContext);
	const authContext = useContext(AuthContext);
	const { getMyPosts, myPosts } = postContext;
	useEffect(() => {
		authContext.loadUser();
		getMyPosts();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return (
		<>
			<div className='post-container'>
				{myPosts &&
					myPosts.map((post, i) => {
						return <Post key={i} post={post} />;
					})}
			</div>
		</>
	);
}

export default MyPost;
