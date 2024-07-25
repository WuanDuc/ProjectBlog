import React from 'react';
import Post from '../../components/Post';
import ChatWindow from '../../components/ChatWindow';
import { useState, useEffect } from 'react';
import { useChat } from '../../hooks/ChatHook';

function ProfilePage() {
    const currentUserID = 'user';

    const profileData = {
      userID: 'user123', // Profile owner's ID
      coverPhoto: 'https://via.placeholder.com/1200x300',
      profilePhoto: 'https://via.placeholder.com/150',
      username: 'John Doe',
      friendsCount: 150,
      about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      photos: [
        'https://via.placeholder.com/100',
        'https://via.placeholder.com/100',
        'https://via.placeholder.com/100',
      ],
      posts: [
        {
          username: 'John Doe',
          avatar: 'https://via.placeholder.com/150',
          content: 'Just had a great day!',
          media: { type: 'image', url: 'https://via.placeholder.com/600' },
          initialComments: [
            {
              username: 'Jane Smith',
              avatar: 'https://via.placeholder.com/50',
              content: 'Nice!',
            },
          ],
        },
        {
          username: 'John Doe',
          avatar: 'https://via.placeholder.com/150',
          content: 'Check out this video!',
          media: { type: 'video', url: 'https://www.w3schools.com/html/mov_bbb.mp4' },
          initialComments: [],
        },
      ],
    };
    const { handleOpenChat } = useChat();
    // Check if the profile page is for the current user
    const isMyProfile = profileData.userID === currentUserID;
  
    return (
      <div style={styles.profileContainer}>
        <div style={styles.coverPhotoContainer}>
          <img src={profileData.coverPhoto} alt="Cover" style={styles.coverPhoto} />
          <img src={profileData.profilePhoto} alt="Profile" style={styles.profilePhoto} />
        </div>
        <div style={styles.userInfo}>
          <h2>{profileData.username}</h2>
          <p>{profileData.about}</p>
          <p>Friends: {profileData.friendsCount}</p>
          <div style={styles.actionButtons}>
            {isMyProfile ? (
              <button style={styles.button}>Edit Profile</button>
            ) : (
              <>
                <button style={styles.button}>Add Friend</button>
                <button onClick={handleOpenChat} style={styles.button}>Send Message</button>
              </>
            )}
          </div>
        </div>
        <div style={styles.photosSection}>
          <h3>Photos</h3>
          <div style={styles.photos}>
            {profileData.photos.map((photo, index) => (
              <img key={index} src={photo} alt={`photo-${index}`} style={styles.photo} />
            ))}
          </div>
        </div>
        <div style={styles.postsSection}>
          <h3>Posts</h3>
          <div style={styles.postContainer}>
            {profileData.posts.map((post, index) => (
              <Post
                key={index}
                username={post.username}
                avatar={post.avatar}
                content={post.content}
                media={post.media}
                initialComments={post.initialComments}
              />
            ))}
          </div>
        </div>
        
      </div>
  );
}

const styles = {
    postsSection: {
        textAlign: 'left',
        },
    postContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        alignItems: 'center',
        },
  profileContainer: {
    width: '80%',
    margin: '0 auto',
    textAlign: 'center',
  },
  coverPhotoContainer: {
    position: 'relative',
    marginBottom: '20px',
  },
  coverPhoto: {
    width: '100%',
    height: '300px',
    objectFit: 'cover',
  },
  profilePhoto: {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    border: '4px solid white',
    position: 'absolute',
    bottom: '-75px',
    left: '20px',
  },
  userInfo: {
    marginTop: '75px',
    padding: '10px',
  },
  photosSection: {
    textAlign: 'left',
    margin: '20px 0',
  },
  photos: {
    display: 'flex',
    gap: '10px',
    justifyContent: 'center',
  },
  photo: {
    width: '100px',
    height: '100px',
    objectFit: 'cover',
    borderRadius: '5px',
  },

};

export default ProfilePage;
