import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import PostContext from './context/post/postContext';
function Showcase() {
	const postContext = useContext(PostContext);
	const id = useParams().id;
	console.log(id);
	const { getPost, post } = postContext;
	useEffect(() => {
		getPost(id);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return (
		<div className='post'>
			<div className='post-title'>
				<h3>{post.title}</h3>
			</div>
			<div className='post-body'>
				<p>{post.body}</p>
			</div>
			<div className='post-author'>
				<strong>By: </strong>
				{post.author}
			</div>
		</div>
	);
}

export default Showcase;
