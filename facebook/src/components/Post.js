import React, { useState } from 'react';

function Post({ username, avatar, content, media, initialComments }) {
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState(initialComments || []);
  const [newComment, setNewComment] = useState('');

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleComment = () => {
    if (newComment.trim() !== '') {
      setComments([...comments, { username: 'You', avatar, content: newComment }]);
      setNewComment('');
    }
  };

  return (
    <div style={styles.postContainer}>
      <div style={styles.header}>
        <img src={avatar} alt={`${username}'s avatar`} style={styles.avatar} />
        <span style={styles.username}>{username}</span>
      </div>
      <div style={styles.content}>{content}</div>
      {media && (
        <div style={styles.media}>
          {media.type === 'image' ? (
            <img src={media.url} alt="post media" style={styles.mediaContent} />
          ) : (
            <video controls style={styles.mediaContent}>
              <source src={media.url} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </div>
      )}
      <div style={styles.actions}>
        <button onClick={handleLike} style={styles.button}>Like ({likes})</button>
        <button onClick={handleComment} style={styles.button}>Comment</button>
      </div>
      <div style={styles.comments}>
        {comments.map((comment, index) => (
          <div key={index} style={styles.comment}>
            <img src={comment.avatar} alt={`${comment.username}'s avatar`} style={styles.commentAvatar} />
            <span style={styles.commentContent}>
              <strong>{comment.username}:</strong> {comment.content}
            </span>
          </div>
        ))}
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Write a comment..."
          style={styles.commentInput}
        />
      </div>
    </div>
  );
}

const styles = {
  postContainer: {
    border: '1px solid #ccc',
    padding: '10px',
    marginBottom: '15px',
    borderRadius: '8px',
    width: '800px',
    backgroundColor: '#f9f9f9',
    textAlign: 'center',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px',
  },
  avatar: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    marginRight: '10px',
  },
  username: {
    fontWeight: 'bold',
  },
  content: {
    marginBottom: '10px',
    justifyContent: 'left'
  },
  media: {
    marginTop: '10px',
    display: 'flex',
    justifyContent: 'center',
  },
  mediaContent: {
    maxWidth: '100%',
    borderRadius: '8px',
  },
  actions: {
    marginTop: '10px',
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
  },
  button: {
    padding: '5px 10px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    backgroundColor: '#007BFF',
    color: 'white',
  },
  comments: {
    marginTop: '15px',
  },
  comment: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px',
  },
  commentAvatar: {
    width: '30px',
    height: '30px',
    borderRadius: '50%',
    marginRight: '10px',
  },
  commentContent: {
    textAlign: 'left',
  },
  commentInput: {
    width: '100%',
    padding: '5px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
};

export default Post;
