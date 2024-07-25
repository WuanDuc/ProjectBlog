import React from 'react';
import { Link } from 'react-router-dom';
import Post from '../../components/Post';

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

function MainPage() {
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
