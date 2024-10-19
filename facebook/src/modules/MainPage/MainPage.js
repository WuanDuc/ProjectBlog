import React from 'react';
import { Link } from 'react-router-dom';
import Post from '../../components/Post';
import { AuthContext } from '../../hooks/AuthHook';
import { useNavigate} from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
const postsData = [
  {
    username: 'Alice',
    avatar: 'https://via.placeholder.com/150',
    content: 'Hello world!',
    media: { type: 'image', url: 'https://via.placeholder.com/600' },
  },
  {
    username: 'Bob',
    avatar: 'https://via.placeholder.com/150',
    content: 'Check out this cool video!',
    media: { type: 'video', url: 'https://www.w3schools.com/html/mov_bbb.mp4' },
  },
  {
    username: 'Charlie',
    avatar: 'https://via.placeholder.com/150',
    content: 'Just a text post, nothing to see here.',
    media: null,
  },
];
/**
 * MainPage component is responsible for rendering the main page of the application.
 * It checks if the user is authenticated and redirects them to the login page if not.
 * If the user is authenticated, it renders a list of posts fetched from the 'postsData' array.
 *
 * @return {JSX.Element|null} The rendered main page component or null if the user is not authenticated.
 */
function MainPage() {
  const { isAuthenticated } = useContext(AuthContext);
  const history = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      history('/login');
    }
  }, [isAuthenticated, history]);

  if (!isAuthenticated) {
    return null;
  }
  return (
    <div>
      <div style={styles.postsContainer}>
        {postsData.map((post, index) => (
          <Post
            key={index}
            username={post.username}
            avatar={post.avatar}
            content={post.content}
            media={post.media}
          />
        ))}
      </div>
    </div>
  );
}

const styles = {
  postsContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '100px',
    zIndex: 0,
  },
};

export default MainPage;
