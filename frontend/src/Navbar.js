import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from './context/auth/authContext';
function Navbar() {
	const authContext = useContext(AuthContext);
	return (
		<>
			<nav>
				<ul>
					<li>
						<Link to='/posts'>Posts</Link>
					</li>
					{authContext.user && authContext.isAuthenticated ? (
						<>
							<li>
								<Link to='/posts/my'>My Posts</Link>
							</li>
							<li>
								<Link to='/posts/create'>Create Post</Link>
							</li>
						</>
					) : null}
				</ul>
			</nav>
		</>
	);
}

export default Navbar;
