import React from 'react';
import { withRouter } from 'react-router-dom';

function Post(props) {
	const { post } = props;
	const handleClick = () => {
		props.history.push(`/posts/${post.id}`);
	};
	return (
		<div className='post' onClick={handleClick}>
			<div className='post-title'>
				<h3>{post.title}</h3>
			</div>
			<div className='post-body'>
				<p>{post.body}</p>
			</div>
		</div>
	);
}

export default withRouter(Post);
