import React, { useEffect, useContext, useState } from 'react';

import PostContext from './context/post/postContext';
import Post from './Post';
function AllPost() {
	const postContext = useContext(PostContext);
	const { getAllPosts, allPosts } = postContext;
	useEffect(() => {
		getAllPosts();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return (
		<>
			<div className='post-container'>
				{allPosts &&
					allPosts.map((post, i) => {
						return <Post key={i} post={post} />;
					})}
			</div>
		</>
	);
}

export default AllPost;
